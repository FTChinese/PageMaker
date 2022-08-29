 /*exported expand, copyAlert */
var itemDict = {};
var currentId;
var isNewsQuiz = false;
function loadContent() {
    var api = '/falcon.php/jsapi/get_info_for_quiz';
    if (window.location.hostname === 'localhost') {
        api = '/api/page/info-for-quiz.json';
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.onload = function() {
        if (xhr.status !== 200) {return;}
        var items = JSON.parse(xhr.responseText);
        render(items);
    };
    xhr.send();
}

function render(items) {
    var html = '';
    for (var i=0; i<items.length; i++) {
        var id = items[i].id;
        itemDict[id] = items[i];
        html += '<div class="item-container" id="' + id + '" ><div class="headline" onclick="expand(this)">' + items[i].cheadline + '</div><div class="detail"></div></div>'; 
    }
    document.querySelector('.content').innerHTML = html;
}

function renderOneItem() {
    var headline = window.opener.document.getElementById('cheadline').value;
    var body = window.opener.document.getElementById('cbody').value;
    const isStory = window.opener && window.opener.location.href.indexOf('story') >= 0;
    if (isStory === false) {
        body = `<p>${body.split('\n').map(x=>`<p>${x}</p>`).join('')}</p>`;
    }
    document.querySelector('.content').innerHTML = '<div class="item-container"><div class="headline">' + headline + '</div><div class="detail">' + body +'</div></div>'; 
}

function start() {
    isNewsQuiz = !(window.opener && ((window.opener.document.getElementById('tag') && window.opener.document.getElementById('tag').value.indexOf('双语阅读') >= 0) || window.opener.location.href.indexOf('story') >= 0));
    if (isNewsQuiz) {
        loadContent();
    } else {
        renderOneItem();
    }
}

function expand(ele) {
    var id = ele.parentNode.id;
    if (ele.classList.contains('on')) {
        var currenEle = document.getElementById(id);
        currenEle.querySelector('.detail').innerHTML = '';
        currentId = undefined;
    } else {
        var item = itemDict[id];
        var lead = item.clongleadbody;
        var body = item.cbody;
        if (item.type === 'interactive') {
            body = `<p>${body.split('\n').map(x=>`<p>${x}</p>`).join('')}</p>`;
        }
        var html = '<div class="lead">' + lead + '</div><div class="body">' + body + '</div>';
        ele.parentNode.querySelector('.detail').innerHTML = html;
        currentId = id;
    }
    ele.classList.toggle('on');
}

function copyAlert(error) {
    alert('在复制的时候浏览器报错了，请手动复制！\n错误信息可以截屏给开发者：' + error.toString());
}

function getNewsQuiz(text) {
    var item = itemDict[currentId];
    var headline = item.cheadline;
    var tag = item.tag || '';
    var subtype = '';
    if (/双语阅读/.test(tag)) {
        subtype = 'bilingual';
    } else if (/英语电台/.test(tag)) {
        subtype = 'radio';
    } else if (/速读/.test(tag)) {
        subtype = 'speedreading';
    } else if (/教程/.test(tag)) {
        subtype = 'mbagym';
    }
    subtype = subtype === '' ? '' : `?subtype=${subtype}`;
    var link = `/${item.type}/${item.id}${subtype}`;
    var image = '';
    if (item.story_pic) {
        var src = item.story_pic.smallbutton || item.story_pic.cover || item.story_pic.bigbutton || '';
        src = src.replace(/\/upload\//g, '/').replace(/\/unsafe\/picture/g, '/unsafe/450x0/picture');
        if (src !== '') {
            image = `<div><img src="${src}"></div>`;
        }
    }
    var oneSnippet = `<span>
<div class="pagetitle">单选题</div>
<div class="pageintro is-text-only" id="id-0">${text}？</div>
<div>
<div class="rightanswer">
<div>${text}</div>
${image}
<div class="is-translated">相关内容：<a href="${link}" target="_blank">${headline}</a></div>
</div>
<ul class="quizlist">
<li onclick="quizcheck(this)" value="1"></li>
<li onclick="quizcheck(this)" value="0"></li>
<li onclick="quizcheck(this)" value="0"></li>
</ul>
</div>
</span>


`;
    return oneSnippet;
}

function getInStoryQuiz(text) {
    const oneSnippet = `<span>
<div class="pageintro">${text}？</div>
<div><div class="rightanswer">${text}</div>
<ul class="quizlist">
<li onclick="quizcheck(this)" value="1"></li>
<li onclick="quizcheck(this)" value="0"></li>
<li onclick="quizcheck(this)" value="0"></li>
</ul>
</div>
</span>


`;
    return oneSnippet;
}

document.querySelector('.create-quiz').onclick = function() {
    try {
        var selObj = window.getSelection();
        var text = selObj.toString().replace(/\n|\r/g, '');
        if (!text || text === '') {return;}
        const oneSnippet = isNewsQuiz ? getNewsQuiz(text) : getInStoryQuiz(text);
        document.querySelector('.result').value += oneSnippet;
    } catch(err) {
        console.log(err);
        alert('Please select the right text first! ');
    }
};


document.querySelector('.finish').onclick = function(){
    var textarea = document.querySelector('.result');
    if (isNewsQuiz === false) {
        textarea.value = `<div class="card-container"><div class="subtitle">快问快答</div><div class="speedread-questions">${textarea.value}</div></div>`.replace(/[\n\r]+/g, '');
    }
    textarea.select();
    // document.execCommand('copy');
    // if (window.opener) {
    //     window.close();
    // }

    /* jshint ignore:start */
    if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            if (window.opener) {
                window.close();
            } else {
                alert('复制成功！');
            }
        })
        .catch((error) => { copyAlert(error); });
    } else {
        copyAlert('navigator.clipboard不支持。可能是因为网址的https的问题，或者浏览器不支持。请手动复制。');
    }
    /* jshint ignore:end */
};



start();