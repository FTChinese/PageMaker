 /*exported expand */
var itemDict = {};
var currentId;
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

function expand(ele) {
    var id = ele.parentNode.id;
    if (ele.classList.contains('on')) {
        var currenEle = document.getElementById(id).parentNode;
        currenEle.querySelector('.detail').innerHTML = '';
        currentId = undefined;
    } else {
        var item = itemDict[id];
        var lead = item.clongleadbody;
        var body = item.cbody;
        var html = '<div class="lead">' + lead + '</div><div class="body">' + body + '</div>';
        ele.parentNode.querySelector('.detail').innerHTML = html;
        currentId = id;
    }
    ele.classList.toggle('on');
}



document.querySelector('.create-quiz').onclick = function() {
    try {
        var selObj = window.getSelection();
        var text = selObj.toString().replace(/\n|\r/g, '');
        if (!text || text === '') {return;}
        var item = itemDict[currentId];
        var headline = item.cheadline;
        var link = `/${item.type}/${item.id}`;
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
        document.querySelector('.result').value += oneSnippet;
    } catch(err) {
        alert('Please select the right text first! ');
    }
};

document.querySelector('.finish').onclick = function(){
    var textarea = document.querySelector('.result');
    textarea.select();
    document.execCommand('copy');
    if (window.opener) {
        window.close();
    }
};

loadContent();