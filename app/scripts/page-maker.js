/* jshint devel:true */
(function () {
    'use strict';
    //var actionType = 'create';
    var actionType = 'edit';
    var pageId = '';
    var domId = 'content-left-inner';
    var toolkits = {
        'section': {
            'block': ['title', 'name', 'side', 'sideAlign', 'description'],
            'include': ['from', 'side', 'sideAlign'],
            'page': ['id', 'blocks', 'maxItems'],
            'header': ['showNavigation'],
            'banner': ['position', 'image', 'highImpactImage', 'url', 'fit'],
            'footer': [],
            'pagination': ['maxPageNumber'],
            'creative': ['title', 'fileName', 'click', 'impression_1', 'impression_2', 'impression_3', 'iphone', 'android', 'ipad', 'audienceCohort', 'dates', 'priority', 'weight', 'showSoundButton', 'landscapeFileName', 'backupImage', 'backgroundColor', 'durationInSeconds', 'closeButton', 'ccode', 'note'],
            'sponsorship': ['title', 'assignee', 'description', 'tag', 'link', 'channel', 'storyKeyWords', 'adChannelId', 'zone', 'cntopic', 'dates', 'placeholder', 'status', 'imageHighlightBox', 'imageTicker', 'imageRibbon', 'storyMPU1', 'storyMPU2', 'storyMPU3', 'storyBanner', 'story590Banner', 'addToNavSpecialReports', 'hideAd', 'WeeklyOutput', 'TotalOutput', 'NumberOfArchive', 'emails', 'sectionPageTrack', 'paidPostKey', 'paidPostTrack', 'note'],
            'manualTagPage': ['title', 'tag', 'zone', 'link', 'description', 'subType', 'preferLead', 'topnav', 'subnav', 'thirdnav', 'note'],
            'InternalPromo': ['title', 'link', 'dates', 'placeholder', 'status', 'imageHighlightBox', 'PromoId', 'note'],
            'MainMessage': ['title', 'content', 'buttonTitle', 'buttonUrl', 'ccode', 'discountCode'],
            'subscriptionLead': ['title', 'lead',  'subscriptionBoxTarget'],
            'subscriptionBox': ['title', 'ccode', 'subscriptionBoxTarget'],
            'SubscriptionQa': ['title', 'subscriptionBoxTarget'],
            'promoBox': ['Name', 'status', 'note', 'TargetAudience', 'promoTarget', 'SubscriberSource', 'Duration', 'DaysToExpiration', 'ProductPlatform', 'RenewalStatus', 'dates'],
            'RemoteConfigParameter': ['Name', 'status', 'note'],
            'EventInfoFlow': ['Name', 'status', 'note', 'TargetAudience', 'subscription', 'dates', 'Action', 'title', 'lead', 'image', 'click', 'tag', 'tagLink', 'position'],
            'newAd':['devices','pattern','position','container'],
            'timeline': ['title', 'name', 'timelineStyle', 'description'],
            'apiBlock': ['title', 'link', 'description', 'allowTop', 'apiNumber', 'itemNumber'],
            'DiscountSchedule': ['PageTitle', 'PageDescription', 'PageImage', 'StandardPrice', 'PremiumPrice', 'MonthlyPrice', 'StartDate', 'EndDate'],
            'LifeCycleManager': ['name', 'TargetAudience', 'SubscriberType', 'RenewalStatus', 'PaymentMethods', 'DaysToExpiration', 'ProductPlatform', 'EngagementLevel', 'InactiveDays', 'PromoBox', 'title', 'promoTarget', 'status', 'imagePC', 'imageMobile', 'click', 'ccode', 'dates', 'weight', 'backgroundColor', 'buttonColor', 'buttonFontColor', 'Email', 'EmailTitle', 'EmailUrl', 'Notification', 'DelegateToFirebase', 'NotificationTitle', 'NotificationAction', 'NotificationId', 'note'],
            'Poster': ['name', 'PosterLayout', 'PosterTheme', 'PosterBGImage', 'PosterMainImage', 'PosterCaption', 'LogoType', 'HideLogo', 'ClientLogo', 'ClientLogo2', 'ClientLogo3', 'EventDate', 'EventDatePrefix', 'TitleWidth', 'FirstTitle', 'FirstTitleFont', 'SecondTitle', 'SecondTitleFont', 'SecondTitleMore', 'SecondTitleMoreFont', 'SubTitle', 'SubTitleFont', 'SubTitleBG', 'CallForActionType', 'QRUrl', 'QRTitle', 'note'],
            'Tags': ['ImportantTags', 'ReservedTags']
        },
        'list': {
            'list': ['name', 'title', 'url', 'language', 'description', 'style', 'float', 'showTag', 'showTimeStamp', 'preferLead', 'sponsorAdId', 'sponsorLogoUrl', 'sponsorLink', 'sponsorNote', 'feedStart', 'feedItems', 'feedTag', 'feedType', 'feedImage', 'moreLink'],
            'listWithText': ['name', 'title', 'url', 'text', 'wideImage', 'mobileImage', 'titleForMore', 'imageStyle'],
            'listWithCode': ['codeFileName'],
            'subscriptionPromotion': ['name', 'title', 'description', 'url', 'ccode', 'buttonTitle', 'subscriptionType', 'successNote', 'itemNumber', 'feedbackForSuccess', 'feedbackForFailure'],
            'SideMPU': ['name', 'image', 'url'],
            'adCreative': ['title', 'fileName', 'click', 'impression_1', 'impression_2', 'impression_3', 'iphone', 'android', 'ipad', 'dates', 'priority', 'weight', 'showSoundButton', 'backgroundColor', 'durationInSeconds', 'closeButton'],
            'SideWithItems':['name', 'title', 'url', 'sideOption', 'feedItems', 'feedTag', 'feedType'],
            'SideRanking': ['name', 'title', 'url', 'feedItems', 'feedTag', 'feedType'],
            'SideInclude': ['name', 'title', 'url', 'fromSide'],
            'SideIframe': ['name', 'title', 'url', 'width', 'height'],
            'SideNewAd':['devices','pattern','position','container'],
            'timelineEvent': ['title', 'url', 'description', 'image'],
            'Headshot': ['Name', 'Title', 'Image', 'BackgroundImage', 'Mask'],
            'PromoBoxAction': ['Name', 'status', 'weight', 'note', 'Action', 'title', 'imagePC', 'imageMobile', 'click', 'ccode', 'backgroundColor', 'buttonColor', 'buttonFontColor', 'ShowCountdown', 'CountdownColor'],
            'RemoteConfigBool': ['Name', 'status', 'Conditions', 'subscriptionType', 'SubscriberSource', 'Duration', 'ProductPlatform', 'PurchaseType', 'dates', 'Settings', 'BoolValue'],
            'RemoteConfigText': ['Name', 'status', 'Conditions', 'subscriptionType', 'SubscriberSource', 'Duration', 'ProductPlatform', 'PurchaseType', 'dates', 'Settings', 'TextValue'],
            'RemoteConfigDomains': ['Name', 'status', 'Conditions', 'subscriptionType', 'SubscriberSource', 'Duration', 'ProductPlatform', 'PurchaseType', 'dates', 'Settings', 'SimplifiedDomain', 'TraditionalDomain'],
            'SideInfo': ['InfoType', 'title', 'link', 'HeadImage', 'Detail'],
            'EventApplication': ['EventId', 'title', 'subscriptionType', 'description', 'HideFormInfo', 'SuccessNote', 'Tickets']
        }
    };
    var allSectionAndLists = [];
    for (var group in toolkits) {
        if (toolkits.hasOwnProperty(group)) {
            for (var item in toolkits[group]) {
                if (toolkits[group].hasOwnProperty(item)) {
                    allSectionAndLists.push(item);
                }
            }
        }
    }
    var dataRules = {
        'lists': 'array',
        'items': 'item',
        'type': 'readonly',
        'theme': ['default', 'luxury', 'myFT', 'technology', 'education', 'lifestyle', 'ebook', 'specialreport'],
        //'type': ['block', 'banner', 'header', 'footer'],
        'side': ['none', 'HomeRightRail','TagRightRail', 'MostPopular', 'HotVideos', 'MarketsData', 'videos', 'MostCommented', 'Narrow'],
        'sideAlign': ['right', 'left'],
        'float': ['none', 'left', 'right', 'oneline', 'SideBySide', 'myFT', 'IconTitle', 'Card', 'eBook', 'VideoWall', 'Headshot', 'ScoreBoard', 'EqualSizeForNonFirstItems', 'ItemsWithSameImage', 'SplitList'],
        'showTag': ['no', 'yes'],
        'showTimeStamp': ['no', 'new stories', 'all'],
        'showSoundButton': ['no', 'yes'],
        'iphone': ['no', 'yes'],
        'android': ['no', 'yes'],
        'ipad': ['no', 'yes'],
        'subscription': ['standard', 'premium'],
        'from': ['', 'MarketsData', 'SpecialReports', 'Columns', 'Channels', 'Events', 'MyTopics', 'Discover', 'Marketing', 'findpassword', 'house-ad-subscription-promo-box'],
        'codeFileName': ['', 'subscription-vip-redeem'],
        'fromSide': ['PartnerActivity'],
        'sideOption': ['BigImageAndLead', 'headlineOnly', 'leadOnly', 'imageAndText', 'imageAndLead', 'textOverImage', 'barcode', 'originalImage','headShot'],
        'preferLead': ['longlead', 'shortlead', 'none'],
        'feedType': ['all','story','video','interactive','photo','job', 'myFT', 'myFTNew', 'fav', 'ftc_columns', 'ft_columns', 'hot', 'premium', 'audiovideo'],
        'feedItems': 'number',
        'feedStart': 'number',
        'text': 'textarea',
        'guideline': 'textarea',
        'feedImage': ['optional','necessary','hide'],
        'language': ['', 'en', 'ce'],
        'fit': ['', 'standard', 'highimpact', 'legacy'],
        'sponsorMobile': ['no', 'yes'],
        'inSponsor': ['no', 'yes'],
        'hideDownloadButton': ['no', 'yes'],
        'durationInSeconds': ['default','6','15','30','60','90'],
        'weight': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
        'Tickets': ['1','2','3','4','5'],
        'priority': ['', 'sponsorship', 'standard', 'house'],
        'closeButton': ['none','LeftTop','RightTop','LeftBottom','RightBottom'],
        'timelineStyle': ['default', 'even'],
        'subscriptionType': ['','standard','premium'],
        'itemNumber': 'number',
        'promoTarget': ['noneSubscriber', 'standard', 'premium'],
        'status': ['on', 'off'],
        'subscriptionBoxTarget': ['all', 'allCampaigns', 'oneCampaign'],
        'showNavigation': ['yes', 'no'],
        'maxPageNumber': 'number',
        'fileName': 'adimage',
        'landscapeFileName': 'adimage',
        'backupImage': 'adimage',
        'HeadImage': 'image',
        'imagePC': 'image',
        'imageMobile': 'image',
        'imageHighlightBox': 'image',
        'imageTicker': 'image',
        'imageRibbon': 'image',
        'image': 'image',
        'dates': 'dates',
        'apiNumber': 'number',
        'allowTop': ['no', 'yes'],
        'impression_1': 'impression',
        'impression_2': 'impression',
        'impression_3': 'impression',
        'hideAd': ['no', 'yes'],
        'storyMPU1': ['show', 'hide'],
        'storyMPU2': ['show', 'hide'],
        'storyMPU3': ['show', 'hide'],
        'storyBanner': ['show', 'hide'],
        'story590Banner': ['show', 'hide'],
        'addToNavSpecialReports': ['yes', 'no'],
        'channel': ['auto', 'manual'],
        'assignee': ['sales', 'ad ops', 'designer'],
        'WeeklyOutput': 'number',
        'TotalOutput': 'number',
        'NumberOfArchive': 'number',
        'zone': 'zone',
        'audienceCohort': ['all', 'free', 'standard', 'premium'],
        'subType': ['', 'radio', 'speedreading'],
        'StartDate': 'StartDate',
        'EndDate': 'EndDate',
        'sectionPageTrack': 'textarea', 
        'paidPostTrack': 'textarea',
        'blocks': 'number',
        'maxItems': 'number',
        'content': 'textarea',
        'discountCode': ['ft_discount', 'ft_renewal', ''],
        'Email': 'group',
        'Notification': 'group',
        'PromoBox': 'group',
        'TargetAudience': 'group',
        'Conditions': 'group',
        'Settings': 'group',
        'Action': 'group',
        'SubscriberType': {type: 'multiselect', options: ['Standard Annual', 'Standard Monthly', 'Premium']},
        'RenewalStatus': ['All', 'On', 'Off', ''],
        'PaymentMethods': {type: 'multiselect', options: ['AppleInApp', 'WeChat', 'AliPay']},
        'DaysToExpiration': {type: 'select', default: '', options: ['-90', '-60', '-30', '-14', '-7', '-3', '-1', '', '1', '3', '7', '14', '30', '60', '90']},
        'ProductPlatform': {type: 'multiselect', options: ['WebSite', 'iOSApp', 'AndroidApp']},
        'PosterLayout': ['center', 'center-2', 'right', 'right-2', 'bottom'],
        'PosterTheme': ['dark-blue', 'blue', 'light-blue', 'pink', 'gray', 'red', 'gold', 'black'],
        'PosterBGImage': 'image',
        'PosterMainImage': 'image',
        'PosterCaption': 'textarea',
        'ClientLogo': 'image',
        'ClientLogo2': 'image',
        'ClientLogo3': 'image',
        'TitleWidth': {type: 'select', default: '360', options: ['300', '310', '320', '330', '340', '350', '360', '370', '380', '390', '400', '410', '420']},
        'FirstTitleFont': {type: 'select', default: '34', options: ['20','21','22','23','24','25','26','27','28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42']},
        'SecondTitleFont': {type: 'select', default: '34', options: ['20','21','22','23','24','25','26','27','28', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42']},
        'SecondTitleMoreFont': {type: 'select', default: '28', options: ['20','21','22','23','24','25','26','27','28', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42']},
        'SubTitleFont': {type: 'select', default: '20', options: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28']},
        'FirstTitle': 'textarea',
        'SecondTitle': 'textarea',
        'SecondTitleMoreq': 'textarea',
        'SubTitle': 'textarea',
        'showrighttype': {type: 'multiselect', options: allSectionAndLists},
        'EngagementLevel': {type: 'multiselect', options: ['Low', 'Middle', 'High']},
        'DelegateToFirebase': ['no', 'yes'],
        'CallForActionType': ['QR', 'Button'],
        'SubscriberSource': ['2C', '2B', 'All'],
        'Duration': ['', 'yearly', 'monthly'],
        'ShowCountdown': ['no', 'yes'],
        'HideLogo': ['no', 'yes'],
        'Detail': 'textarea',
        'position': {type: 'select', default: '7', options: ['3', '4', '5', '6', '7', '8']},
        'InfoType': ['author', 'page'],
        'LogoType': ['', 'FTC'],
        'BoolValue': ['yes', 'no'],
        'PurchaseType': ['All', 'Apple', 'FTC'],
        'placeholder': ['no', 'yes']
    };

    var dataRulesTitle = {
        'theme': 'Luxury是指乐尚街的配色风格，主要特点是Title和分割线为金色',
        'side': '采用事先写好的模版',
        'name': '仅供编辑内部沟通，不会被读者看见，尽量采用英文的name',
        'title': 'list的title会被读者看见，请使用中文',
        'url': '可以填写标签，或者url，程序会自动识别并产生正确的链接',
        'sideAlign': ' 这个Block的侧边栏放在右边还是左边',
        'float': '如果某个list有文章没有配图，可以采用float到左边的方式来展示这个List，同时其余的list自动float到右边；如果想要某个list，如cover占据全部宽度，则设定其为oneline；如果想要像myFT那样一行一条内容，则选择myFT；想要强制设定这个List所有内容都采用同样的展现形式，则选择Card',
        'showTag': '程序会抓取tag字段中第一个tag做为primary tag来显示',
        'showTimeStamp': 'new stories代表只在文章发布的一个小时内显示时间，all代表在所有情况下都显示时间',
        'from': '选取事先写好的模版',
        'sideOption': 'headlineOnly表示只显示标题；leadOnly表示只显示lead，这个功能可以用来展示联系方式一类的文字信息；imageAndText显示方式类似微信公众号的图文信息，第一条出大图',
        'preferLead': '优先显示的lead类型',
        'feedType': '自动抓取的内容类型，如果选择all则四种类型都抓取，最新的先显示',
        'feedImage': 'Optional代表不要求抓出来的内容必须有配图，Necessary则要求内容必须有配图',
        'feedItems': '自动抓取内容的条数上限，如果这个list中有手动拖入的内容，则不显示自动抓取的内容',
        'feedStart': '自动抓取内容的条数开始的Index，从0开始数',
        'feedTag': '自动抓取内容依据的标签，如果抓取条件复杂，也可以请技术帮助你输入mysql的查询语句',
        'language': '中文、英文或者中英文对照，只适用于story',
        'dates': '输入生效的日期，格式为YYYYMMDD，半角逗号分隔',
        'weight': '创意的权重，这个用来控制投放量',
        'priority': '创意的优先级，正常的投放请一律使用标准，如果有客户突然要包量，就使用赞助，House Ad一律设为House Ad。这样只有在找不到售出的广告的情况下，才会出House Ad',
        'imagePC': '289x48',
        'imageMobile': '172x48',
        'wideImage': '3x1 wide image for PC',
        'mobileImage': '16 x 9 mobile image for phone',
        'ccode': 'campaign code',
        'text': 'Just paste large blocks of text here and it will break automatically',
        'itemNumber': 'When subscriber reserve gifts or tickets, how many items do we allow them to have in one batch',
        'titleForMore': 'Under construction. If you need this feature now, let me know. ',
        'imageStyle': 'Under construction. If you need this feature now, let me know. ',
        'subscriptionBoxTarget': 'all means the box appears regardless of the ccode parameter; allCampaigns means the box displays if the url has a ccode parameter; oneCampgin means the box displays only if the ccode in parameter matches the ccode that is input in the field. ',
        'maxPageNumber': 'The maximum page number based on your estimation. ',
        'guideline': '在这里写操作指南，供别的使用者查看',
        'audiencePixelTag': '1x1的图片地址，主要用于电子邮件监控流量和广告库存',
        'storyKeyWords': '文章中的标签，topic等等',
        'zone': 'Identifies the ad unit in the associated ad tag. Codes can be up to 100 characters and are not case-sensitive. Only letters, numbers, underscores, hyphens, periods, asterisks, forward slashes, backslashes, exclamations, left angle brackets, colons, and parentheses are allowed.',
        'emails': '需要协同工作的人的邮件，逗号分隔',
        'PageTitle': '订阅页顶部标题',
        'PageDescription': '订阅页顶部描述文字',
        'PageImage': '订阅页顶部配图链接',
        'blocks': '0指所有的block',
        'maxItems': '0指展示所有的item',
        'DaysToExpiration': '正数是快要到期的订户，负数是已经过期的订户',
        'SubscriberSource': '订户是B端还是C端的。大多数情况下，针对C端订户的PromoBox不想让B端订户看到',
        'Duration': '订户最新购买的订阅的周期，如果订户购买了多个订阅，以最新的那个订阅为准',
        'ProductPlatform': '不同的产品平台--网站、iOS应用和Android应用--的用户习惯和支持的功能是非常不一样的',
        'RenewalStatus': '目前只有苹果内购支持自动续订，对于苹果平台来说，All代表所有情况，On代表苹果内购自动续订打开，Off代表苹果内购自动续订关闭，空代表非苹果内购的订户',
        'placeholder': '用在赞助管理中，如果日期为空，而这个值为yes，则显示在首页'
    };

    // MARK: - Differentiate subscription information
    var isPremiumStories = false;
    // MARK: - Regex for validating common input mistakes such as lack of https
    var regSecureUrl = {
        description: '网址应该采用https! ',
        regStrInclude: /^https:/,
        loadImage: true
    };
    var regSecureUrlForImpression = {
        description: '监控地址应该采用https! ',
        regStrInclude: /^https:/,
        loadImpression: true
    };
    var regSecureUrlForDomain = {
        description: '域名应该采用https! 并以/结尾',
        regStrInclude: /^https:.+\/$/,
        loadImpression: false
    };
    var datesFormat = {
        description: '日期格式为YYYYMMDD，半角逗号分隔',
        regStrInclude: /^[0-9]{8}$|^[0-9]{8},[0-9,]*[0-9]{8}$/
    };
    var hexColor = {
        description: '色号格式应为#FFF1E0',
        regStrInclude: /^#[0-9a-zA-Z]{6}$/
    };
    var clickRedirect = {
        description: '点击必须以http开头，并且不能从https跳转到http',
        regStrInclude: /^http/,
        regStrExclude: /^https.+http:/
    };
    var fourDigits = {
        description: '必须是四位数字',
        regStrInclude: /^[0-9]{4}$/
    };
    var checkPrice = {
        description: '必须是整数价格',
        regStrInclude: /^[1-9][0-9]{1,3}$/
    };
    var validator = {
        'impression_1': regSecureUrlForImpression,
        'impression_2': regSecureUrlForImpression,
        'impression_3': regSecureUrlForImpression,
        'fileName': regSecureUrl,
        'backupImage': regSecureUrl,
        'landscapeFileName': regSecureUrl,
        'SimplifiedDomain': regSecureUrlForDomain,
        'TraditionalDomain': regSecureUrlForDomain,
        'dates': datesFormat,
        'backgroundColor': hexColor,
        'buttonColor': hexColor,
        'buttonFontColor': hexColor,
        'click': clickRedirect,
        'adChannelId': fourDigits,
        'StandardPrice': checkPrice,
        'PremiumPrice': checkPrice,
        'MonthlyPrice': checkPrice
    };
    var devices = [
        {'name': 'PC or Mac', 'width': '', 'height': ''},
        {'name': 'iPhone 5', 'width': 320, 'height': 580},
        {'name': 'iPhone 6', 'width': 375, 'height': 627},
        {'name': 'iPhone 6 Plus', 'width': 414, 'height': 736},
        {'name': 'iPad LandScape', 'width': 1024, 'height': 748},
        {'name': 'iPad Portrait', 'width': 768, 'height': 1024},
        {'name': 'Huawei Mate 8', 'width': 540, 'height': 960},
        {'name': 'Google Nexus 7', 'width': 600, 'height': 960},
        {'name': 'Email', 'width': '', 'height': '', 'view': 'email'},
        {'name': 'Email New', 'width': '', 'height': '', 'view': 'email', 'host': 'https://cn.ft.com'},
        {'name': 'Poster', 'width': '', 'height': '', 'view': 'poster'}
    ];
    var thisday = new Date();
    var thenow = thisday.getHours() * 10000 + thisday.getMinutes() * 100 + thisday.getSeconds();
    var todaydate = thisday.getFullYear() + '-' + (thisday.getMonth() + 1) + '-' + thisday.getDate();
    var pagemakerAPIRoot = '/falcon.php/pagemaker/';
    var storyAPIRoot = '/falcon.php/homepage/getstoryapi/';
    var gApiUrls = {
        //'home': 'api/page/home.json',
        'home': pagemakerAPIRoot + 'get/'+ getURLParameter('page') +'/' + todaydate + '?' + thenow,
        'homePOST': pagemakerAPIRoot + 'post/'+ getURLParameter('page') +'/' + todaydate,
        'blank': 'api/page/blank.json?2',
        'stories': storyAPIRoot + todaydate + '?' + thenow
    };
    var gApiUrlsLocal = {
        'home': 'api/page/home.json',
        'homePOST': 'api',
        //'blank': 'api/page/promoBox.json',
        'blank': 'api/page/blank.json',
        //'blank': 'api/page/sponsorshipmanagement.json',
        //'blank': 'api/page/creative.json',
        //'blank': 'api/page/lifecycle.json',
        //'blank': 'api/page/posters.json',
        //'blank': 'api/page/home.json',
        'stories': 'api/page/stories.json'
    };

    //drag and drop
    var dragSrcEl = null;
    var dragIndex;
    var dragOverIndex;
    var customPageJSON;

    // get parameter value from url

    /* jshint ignore:start */
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
    /* jshint ignore:end */

    //将Unix时间戳转换为中文日期和星期
    function unixtochinese(thetime, datetype) {
        var todaystamp, dayArray, dayChar, thehour, theminute, ampm, currentDate, currentDateStamp, itemDateStamp;
        if (thetime === 'hide') {
            return '';
        }
        currentDate = new Date();
        currentDateStamp = currentDate.getFullYear() * 10000 + (currentDate.getMonth() + 1) * 100 + currentDate.getDate();
        thisday = new Date(thetime * 1000);
        itemDateStamp = thisday.getFullYear() * 10000 + (thisday.getMonth() + 1) * 100 + thisday.getDate();
        todaystamp = thisday.getFullYear() + '年' + (thisday.getMonth() + 1) + '月' + thisday.getDate() + '日 星期';
        dayArray = '日一二三四五六';
        dayChar = dayArray[thisday.getDay()];
        todaystamp += dayChar;
        thehour = thisday.getHours();
        thehour = ('0' + thehour).slice(-2);
        theminute = thisday.getMinutes();
        theminute = ('0' + theminute).slice(-2);
        ampm = (thehour < 12) ? 'AM' : 'PM';
        if (datetype === 1) {
            todaystamp = ' ' + thehour + ':' + theminute + ' ' + ampm;
        } else if (datetype === 2) {
            //console.log (currentDateStamp);
            //console.log (todaystamp);
            if (currentDateStamp === itemDateStamp) {
                todaystamp = thehour + ':' + theminute;
            } else {
                todaystamp = (thisday.getMonth() + 1) + '/' + thisday.getDate() + ' ' + thehour + ':' + theminute;
            }
        } else if (datetype === 3) {
            if (/^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}$/gi.test(thetime)) {
                //console.log (thetime);
                todaystamp = thetime.replace(/^[0-9]{4}\-([0-9]{1,2}\-[0-9]{1,2})$/g, '$1');
                todaystamp = todaystamp.replace(/^0/g, '').replace(/\-0/g, '/').replace('-', '/');
            } else {
                todaystamp = (thisday.getMonth() + 1) + '/' + thisday.getDate();
            }
        }
        return todaystamp;
    }

    function renderAPI(obj) {
        //id, headline, timeStamp, timeStampType, longlead, shortlead, image, type, tag, customLink, showSponsorImage, relativestory, showRelativeStoryItems
        var premiumStoriesColor = '';
        var editLink = '';
        var previewLink = '';
        var dataHTML = '';
        var oTimeStamp = obj.timeStamp || Math.round(new Date().getTime()/1000);
        var relativestoryHTML = '';
        var hasImageClass = '';
        var imageBG = '';
        var sponsorImage = '';
        var sponsorImageDisplay = '';
        if (obj.showSponsorImage === 'yes') {
            sponsorImageDisplay = ' checked';
        }
        sponsorImage = '<div title="如果是有赞助的特别报道，优先采用专题的图片，而不是文章的图片"><input title="use sponsor image" name="preferSponsorImage" class="o-input-checkbox" value="yes" type="checkbox"' + sponsorImageDisplay + '>Prefer Sponsor Cover 1</div>';
        if (typeof obj.showRelativeStoryItems !== 'undefined') {
            obj.showRelativeStoryItems = '<div class="item-info-item"><div class="item-info-title">Show Related Items: </div><input type="number" title="How Many Related Content Would You Like to Show in This Page? " name="showRelativeStoryItems" class="o-input-text" value="' + obj.showRelativeStoryItems + '"></div>';
        } else {
            obj.showRelativeStoryItems = '';
        }
        if (obj.type === 'story') {
            editLink = 'https://backyard.ftchinese.com/falcon.php/story/edit/' + obj.id;
            previewLink = 'http://www7.ftchinese.com/story/' + obj.id;
        } else if (obj.type === 'interactive') {
            editLink = 'https://backyard.ftchinese.com/falcon.php/ia/edit/' + obj.id;
            previewLink = 'http://www7.ftchinese.com/interactive/' + obj.id;
        } else if (obj.type === 'photo') {
            editLink = 'https://backyard.ftchinese.com/falcon.php/pics/edit_photonews/' + obj.id;
            previewLink = 'http://www7.ftchinese.com/photonews/' + obj.id;
        } else if (obj.type === 'video') {
            editLink = 'https://backyard.ftchinese.com/create_videostory.php?id=' + obj.id;
            previewLink = 'http://www7.ftchinese.com/video/' + obj.id;
        } else if (obj.type === 'premium') {
            editLink = 'https://backyard.ftchinese.com/falcon.php/story/edit/' + obj.id;
            previewLink = 'http://www7.ftchinese.com/story/' + obj.id;
        } else if (/\/m\/corp\/preview.html\?pageid=(.*)$/.test(obj.customLink)) {
            editLink = obj.customLink.replace(/^.*\/m\/corp\/preview.html\?pageid=(.*)$/g,'https://backyard.ftchinese.com/pagemaker/page-maker.html?page=$1');
            previewLink = obj.customLink;
        }else if(/\/channel\/editorchoice-issue.html\?issue=(.*)$/.test(obj.customLink)){
            editLink = obj.customLink.replace(/^.*\/channel\/editorchoice-issue.html\?issue=(.*)$/g,'https://backyard.ftchinese.com/pagemaker/page-maker.html?page=$1');
            previewLink = obj.customLink;
        }
        if (obj.timeStamp !== '') {
            obj.timeStamp = unixtochinese(obj.timeStamp, obj.timeStampType);
        } else {
            obj.timeStamp = '<div class="new-item"></div>';
        }
        if (obj.type === 'premium' || (/英语电台|速读/.test(obj.tag) && obj.type === 'interactive')) {
            isPremiumStories = true;
        } else {
            isPremiumStories = false;
        }
        if (isPremiumStories === true){
            premiumStoriesColor = ' premium-stories-color';
        }
        if (obj.image !== '') {
            hasImageClass = ' has-image';
            imageBG = obj.image.replace('/upload/', '/');
            //imageBG = image.replace('i.ftimg.net', 'i.ftmailbox.com').replace('/upload/', '/');
            imageBG = encodeURIComponent(imageBG);
            imageBG = 'https://www.ft.com/__origami/service/image/v2/images/raw/' + imageBG + '?source=ftchinese&width=80&fit=scale-down';
            imageBG = ' style="background-image: url(' + imageBG + ')"';
        }
        var chineseAudioUrl = obj.caudio || '';
        var englishAudioUrl = obj.eaudio || '';

        if (typeof obj.relativestory === 'object') {
            $.each(obj.relativestory, function (key, value) {
                var cheadline = value.cheadline || value.headline || '';
                var id = value.id || '';
                var type = value.type || 'story';
                if (type === '0') {
                    type = 'story';
                } else if (type === '1') {
                    type = 'video';
                }
                //console.log (cheadline);
                relativestoryHTML += '<div class="relative-item" draggable=true><div class="remove-relative"></div><div class="relative-title">' + cheadline + '</div><div class="relative-info"><input title="headline" name="headline" class="r-input-text" value="' + cheadline + '"></div><input type="hidden" readonly name="id" class="r-input-text" value="' + id + '"><input type="hidden" readonly name="type" class="r-input-text" value="' + type + '"></div>';
            });
            relativestoryHTML = '<div class="item-info-title relative-container-title">Related Content: </div><div class="relative-container">' + relativestoryHTML + '</div>';
        }
        //console.log (relativestoryHTML);
        //relativestoryHTML = '';

        dataHTML = '<div draggable=true data-type="' + obj.type + '" class="item ' + obj.type + hasImageClass + premiumStoriesColor+'"' + imageBG + ' data-id="' + obj.id + '"><div class="remove-item"></div><div class="timestamp">' + obj.timeStamp + '</div><div class="item-title">' + obj.headline + '</div><div class="item-info"><div class="item-links"><a href="http://www7.ftchinese.com/' + obj.type + '/' + obj.id + '" target=_blank>Preview</a><a href="' + editLink + '" target=_blank>Edit</a></div>'+sponsorImage+'<div class="item-info-item"><input title="headline" placeholder="headline" name="headline" class="o-input-text" value="' + obj.headline + '"></div><div class="item-info-item"><input title="image" placeholder="image" name="image" class="o-input-text" value="' + obj.image + '"></div><div class="item-info-item"><div class="item-info-title">Long Lead: </div><textarea title="image" placeholder="Long Lead" name="longlead" class="o-input-text">' + obj.longlead + '</textarea></div><div class="item-info-item"><div class="item-info-title">Short Lead: </div><textarea title="short lead" placeholder="short lead" name="shortlead" class="o-input-text">' + obj.shortlead + '</textarea></div><div class="item-info-item"><input title="tag" placeholder="tag" name="tag" class="o-input-text" value="' + obj.tag + '"></div><div class="item-info-item"><input title="custom link" placeholder="custom link" name="customLink" class="o-input-text" value="' + obj.customLink + '"></div><div class="item-info-item"><input title="Chinese Audio Url" placeholder="Chinese Audio Url" name="caudio" class="o-input-text" value="' + chineseAudioUrl + '"></div><div class="item-info-item"><input title="English Audio Url" placeholder="English Audio Url" name="eaudio" class="o-input-text" value="' + englishAudioUrl + '"></div>' + obj.showRelativeStoryItems + '<div class="item-info-item"><input name="timeStamp" type="hidden" class="o-input-text" value="' + oTimeStamp + '" readonly><input type="hidden" name="type" class="o-input-text" value="' + obj.type + '" readonly><input type="hidden" name="id" class="o-input-text" value="' + obj.id + '" readonly></div>' + relativestoryHTML + '</div></div>';
        return dataHTML;
    }


    function renderItem(data) {
        var id = data.id;
        var headline = data.headline;
        var longlead = data.longlead || '';
        var shortlead = data.shortlead || '';
        var image = data.image || '';
        var type = data.type || '';
        var timeStamp = data.timeStamp || '';
        var timeStampType = 2;
        var tag = data.tag || '';
        var relatives = data.relatives || [];
        var showRelativeStoryItems = data.showRelativeStoryItems || 0;
        var customLink = data.customLink || '';
        var caudio = data.caudio || '';
        var eaudio = data.eaudio || '';
        var showSponsorImage = data.preferSponsorImage || 'no';
        if (type !== 'story') {
            timeStampType = 3;
        }
        return renderAPI(
            {
                id: id,
                headline: headline,
                timeStamp: timeStamp,
                timeStampType: timeStampType,
                longlead: longlead,
                shortlead: shortlead,
                image: image,
                type: type,
                tag: tag,
                customLink: customLink,
                caudio: caudio,
                eaudio: eaudio,
                showSponsorImage: showSponsorImage,
                relativestory: relatives,
                showRelativeStoryItems: showRelativeStoryItems
            }
        );
    }




    function renderMeta(data) {
        // MARK: When we change the data property, we want the new properties to be reflected. 
        function upgradeData(data) {
            var dataType = data.type;
            if (dataType) {
                var newData = {type: dataType};
                //var newData = data;
                var toolKitData = toolkits.section[dataType] || toolkits.list[dataType];
                if (toolKitData) {
                    // MARK: Loop through toolKitData to make sure the order is correct
                    $.each(toolKitData, function (key, value) {
                        newData[value] = data[value] || '';
                    });
                    // MARK: Add all existing key value pairs to make sure no data are lost
                    $.each(data, function (key, value) {
                        newData[key] = value;
                    });
                    return newData;
                }
                //console.log ('not a defined type! ');
                return data;
            }
            //console.log ('no type');
            return data;                
        }
        var metaHTML = '';
        var dataHTML = '';
        const newData = upgradeData(data);
        // console.log ('data is: ');
        // console.log (data);
        // console.log ('new data: ')
        // console.log (newData);
        //const newData = data;
        $.each(newData, function (key, value) {
            var arrayMeta = '';
            var descriptionOriginal = dataRulesTitle[key] || '';
            var description = '';
            var descriptionMore = '';
            if (descriptionOriginal !== '') {
                description = ' title="' + descriptionOriginal + '"';
                //descriptionMore = '<tr class="meta-item-description"><td colspan=2>' + descriptionOriginal + '</td></tr>'
                descriptionMore = '';
            }
            //console.log ('key: ' + key);

            if (dataRules[key] === 'array' || dataRules[key] === 'item') {
                $.each(value, function (k, v) {
                    var title = v.Name || v.title || v.name || v.type || 'List';
                    var itemLength = 0;
                    if (v.items !== undefined && v.items.length > 0) {
                        itemLength = ' <span>(' + v.items.length + ')</span>';
                    } else {
                        itemLength = '';
                    }
                    //console.log (v.items.length);
                    if (dataRules[key] === 'array') {
                        arrayMeta = renderMeta(v);
                        dataHTML += '<div class="' + key + '-item"><div class="remove-' + key + '"></div><div class="clone-' + key + '"></div><div class="' + key + '-header" draggable=true>' + title + itemLength + '</div>' + arrayMeta + '</div>';
                    } else {
                        arrayMeta = renderItem(v);
                        dataHTML += arrayMeta;
                    }
                });
            } else if (dataRules[key] === 'group') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text group-title" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text" value="' + value + '" readonly></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'readonly') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text" value="' + value + '" readonly></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'adimage') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text ad-image impression-value" value="' + value + '"></td><td><button class="action-link" target="_blank">Upload</button><button class="impression-track" target="_blank" data-source="ftc-chart" data-event-action="Show">Track</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'image') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text content-image" value="' + value + '"></td><td><button class="image-link" target="_blank">Upload</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'dates') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text date-value" value="' + value + '"></td><td><button class="date-picker" target="_blank">Calendar</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'StartDate' || dataRules[key] === 'EndDate') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text date-value" value="' + value + '" readonly></td><td><button class="date-picker" target="_blank">Calendar</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'impression') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text impression-value" value="' + value + '"></td><td><button class="impression-track" target="_blank" data-source="ftc-chart">History</button><button class="impression-track" target="_blank" data-source="ga-real-time">Real Time</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'zone') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text zone-value" value="' + value + '"></td><td><button class="zone-link" target="_blank" data-action="edit">Edit</button><button class="zone-link" target="_blank" data-action="preview">Preview</button></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'number') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="number" class="o-input-text" value=' + (value || 0) + '></td></tr>' + descriptionMore;
            } else if (dataRules[key] === 'textarea') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-textarea" value="' + key + '" readonly'+description+'></td><td><textarea data-key="' + key + '" class="o-textarea">' + value + '</textarea></td></tr>' + descriptionMore;
            } else if (typeof dataRules[key] === 'string') {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '"'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text" value="' + value + '"></td></tr>' + descriptionMore;
            } else if (typeof dataRules[key] === 'object') {
                var options = '';
                if (dataRules[key].type === 'select') {
                    $.each(dataRules[key].options, function (k2, v2) {
                        var selected = '';
                        //console.log (v2 + ', ' + value + ', ' + data[key]);
                        if (value === '') {
                            if (v2 === dataRules[key].default) {
                                selected = ' selected';
                            }
                        } else if (v2 === value) {
                            selected = ' selected';
                        }
                        options += '<option value="' + v2 + '"' + selected + '>' + v2 + '</option>';
                    });
                    metaHTML += '<tr class="meta-item"><td class="first-row"><input class="o-input-text" value="' + key + '" type="text" readonly'+description+'></td><td><select data-key="' + key + '" class="o-input-text">' + options + '</select></td></tr>' + descriptionMore;
                } else if (dataRules[key].type === 'multiselect') {
                    const options = dataRules[key].options.join(',');
                    metaHTML += '<tr class="meta-item"><td class="first-row"><input type="text" class="o-input-text" value="' + key + '" readonly'+description+'></td><td><input data-key="' + key + '" type="text" class="o-input-text date-value multi-select" value="' + value + '" data-options="' + options + '"></td></tr>' + descriptionMore;
                } else {
                    $.each(dataRules[key], function (k1, v1) {
                        var selected = '';
                        if (v1 === value) {
                            selected = ' selected';
                        }
                        options += '<option value="' + v1 + '"' + selected + '>' + v1 + '</option>';
                    });
                    metaHTML += '<tr class="meta-item"><td class="first-row"><input class="o-input-text" value="' + key + '" type="text" readonly'+description+'></td><td><select data-key="' + key + '" class="o-input-text">' + options + '</select></td></tr>' + descriptionMore;
                }
             } else {
                metaHTML += '<tr class="meta-item"><td class="first-row"><input class="o-input-text" value="' + key + '" type="text" readonly'+description+'></td><td><input type="text" data-key="' + key + '" class="o-input-text" value="' + value + '"></td></tr>' + descriptionMore;
            }
        });
        dataHTML = '<div class="lists-container">' + dataHTML + '</div>';
        metaHTML = '<table class="meta-table">' + metaHTML + '</table>';
        return metaHTML + dataHTML;
    }

    function renderJson(jsonData) {
        function getActiveClass(value, todaydate) {
            var shouldCheckActiveStatus = ('creative,promoBox,sponsorship'.indexOf(value.type)>=0);
            if (!shouldCheckActiveStatus) {return '';}

            if ('creative'.indexOf(value.type)>=0) {
                if (!value.dates) {return '';}
            } else if (value.type === 'promoBox') {
                if (value.status !== 'on') {return '';}
                if (!value.dates || value.dates === '') {return ' is-active';}
            } else if ('sponsorship'.indexOf(value.type)>=0) {
                if (value.status !== 'on') {return '';}
                if (value.dates === '' && value.placeholder === 'yes') {return ' is-active';}
            }
            const dates = value.dates.split(',');
            var oneDay;
            for (oneDay of dates) {
                const oneDayNumber = parseInt(oneDay);
                if (oneDayNumber >= todaydate) {
                    return ' is-active';
                }
            }
            return '';
        }
        if (jsonData.meta.hideAd === undefined) {
            jsonData.meta.hideAd = 'no';
        }
        if (jsonData.meta.audiencePixelTag === undefined) {
            jsonData.meta.audiencePixelTag = '';
        }
        if (jsonData.meta.topnav === undefined) {
            jsonData.meta.topnav = '';
        }
        if (jsonData.meta.subnav === undefined) {
            jsonData.meta.subnav = '';
        }
        if (jsonData.meta.thirdnav === undefined) {
            jsonData.meta.thirdnav = '';
        }
        // MARK: add meta properties that are necessary
        if (jsonData.meta.guideline === undefined) {
            jsonData.meta.guideline = '';
        }
        if (jsonData.meta.showrighttype === undefined) {
            jsonData.meta.showrighttype = '';
        }
        const thisday = new Date();
        const todaydate = thisday.getFullYear() * 10000 + (thisday.getMonth() + 1) * 100 + thisday.getDate();
        //render meta data into HTML Dom
        var metaHTML = '';
        metaHTML = renderMeta(jsonData.meta);
        //render sections into HTML Dom
        var sectionsHTML = '';
        var hasItem = false;
        $.each(jsonData.sections, function (key, value) {
            var sectionMeta = renderMeta(value);
            var title = value.Name || value.title || value.name || value.from || value.type || 'Section';
            var sectionType = value.type || '';
            var sectionLength;
            if (value.lists !== undefined && value.lists.length > 0) {
                sectionLength = ' <span>(' + value.lists.length + ')</span>';
                $.each(value.lists, function (listKey, list) {
                    if (list.items && list.items.length > 0) {
                        hasItem = true;
                    }
                });
            } else {
                sectionLength = '';
            }
            const activeClass = getActiveClass(value, todaydate);
            sectionType = (sectionType !== '') ? 'type-' + sectionType : '';
            sectionsHTML += '<div class="section-container ' + sectionType + '"><div class="section-inner"><div class="mail-section"></div><div class="remove-section"></div><div class="clone-section"></div><div class="section-header' + activeClass + '" draggable=true>' + title + sectionLength + '</div>' + sectionMeta + '</div></div>';
        });
        sectionsHTML = '<div class="sections">' + sectionsHTML + '</div>';
        $('#' + domId).html(metaHTML + sectionsHTML);
        var guidelineEle = document.querySelector('.content-left-guideline');
        if (guidelineEle) {
            var guidelineHTML = jsonData.meta.guideline.replace(/[\r\n]+/g, '<br>');
            guidelineEle.innerHTML = guidelineHTML;
        }
        //MARK: If there's no item in the json data, show the layout view
        if (hasItem === false) {
            $('html').removeClass('show-all').removeClass('show-sections').removeClass('show-items').removeClass('show-json');
            $('html').addClass('show-sections');
        }
    }

    function wrapItemHTML(htmlCode, groupTitle) {
        if (htmlCode !== '') {
            return '<div class="group-container"><div class="group-header" draggable=true>' + groupTitle + '</div><div class="group-inner">' + htmlCode + '</div></div>';
        }
        return '';
    }

    function tidyup() {
        $('.animated').removeClass('animated');
    }

    function loadStories() {
        $.ajax({
            type: 'get',
            url: gApiUrls.stories,
            dataType: 'json',
            success: function (data) {
                var storiesInner = '';
                var coverHTML = '';
                var newsHTML = '';
                var commentsHTML = '';
                var otherHTML = '';
                var videosInner = '';
                var interactivesInner = '';
                var photosInner = '';
                var premiumInner = '';
                $.each(data, function (entryIndex, entry) {
                    var timeStamp = '';
                    var timeStampType = 2;
                    var headline = '';
                    var id = '';
                    var ftid = '';
                    var longlead = '';
                    var shortlead = '';
                    var image = '';
                    var type = '';
                    var priority = 0;
                    var tag = '';
                    var topic = '';
                    var area = '';
                    var industry = '';
                    var relativestory = [];
                    var showRelativeStoryItems = 0;
                    var customLink = '';
                    var showSponsorImage = 'no';
                    var caudio = '';
                    var eaudio = '';
                    if (entry.id) {
                        //console.log (entry.last_publish_time);
                        timeStamp = entry.fileupdatetime || '';
                        if (entry.publish_status === 'draft') {
                            timeStamp = '';
                        }
                        timeStampType = 2;
                        id = entry.id;
                        ftid = entry.ftid || '';
                        // MARK: - Use FT's Experimental Amy Service. As the API is no longer valid, need to verify it after inserting. 
                        if (ftid !== '') {
                            eaudio = 'https://s3-us-west-2.amazonaws.com/ftlabs-audio-rss-bucket.prod/' + ftid + '.mp3';
                        }
                        headline = entry.cheadline;
                        longlead = entry.clongleadbody || '';
                        shortlead = entry.cshortleadbody || '';
                        tag = entry.tag || 'FT中文网';
                        topic = entry.topic || '';
                        area = entry.area || '';
                        industry = entry.industry || '';
                        topic = (topic === '') ? '' : ',' + topic;
                        area = (topic === '') ? '' : ',' + area;
                        industry = (topic === '') ? '' : ',' + industry;
                        tag += topic + area + industry;
                        tag = tag.replace(/,+/g,',').replace(/,$/, '');
                        //shortlead = JSON.stringify(entry);
                        image = entry.story_pic.cover || entry.story_pic.other || entry.story_pic.Other || entry.story_pic.smallbutton || entry.story_pic.bigbutton || '';
                        type = 'story';
                        priority = entry.priority;
                        relativestory = entry.relativestory || [];
                        customLink = entry.customLink || '';
                        //shortlead = JSON.stringify(relativestory);
                        var obj = {
                            id: id,
                            ftid: ftid,
                            headline: headline,
                            timeStamp: timeStamp,
                            timeStampType: timeStampType,
                            longlead: longlead,
                            shortlead: shortlead,
                            image: image,
                            type: type,
                            tag: tag,
                            customLink: customLink,
                            caudio: caudio,
                            eaudio: eaudio,
                            showSponsorImage: showSponsorImage,
                            relativestory: relativestory,
                            showRelativeStoryItems: showRelativeStoryItems
                        };

                        if ($('.content-left-inner .item[data-id=' + id + '][data-type=' + type + ']').length === 0) {
                            if (priority > 0 && priority <= 9) {
                                coverHTML += renderAPI(obj);
                            } else if (priority >= 20 && priority <= 49) {
                                newsHTML += renderAPI(obj);
                            } else if ((priority >= 49 && priority <= 69) || (priority >= 10 && priority <= 19)) {
                                commentsHTML += renderAPI(obj);
                            } else {
                                otherHTML += renderAPI(obj);
                            }
                        } else {
                            //console.log (headline + ' already exists');
                        }
                    } else if (entryIndex === 'video') {
                        $.each(entry, function (videoIndex, video) {
                            id = video.id;
                            timeStamp = video.pubdate || '';
                            timeStampType = 3;
                            headline = video.cheadline;
                            longlead = video.clongleadbody || '';
                            shortlead = video.cshortleadbody || '';
                            tag = video.tag || '';
                            tag = '视频,' + tag;
                            image = video.story_pic.other || video.story_pic.smallbutton || video.story_pic.cover || video.story_pic.bigbutton || '';
                            type = 'video';
                            if ($('.content-left-inner .item[data-id=' + id + '][data-type=' + type + ']').length === 0) {
                                videosInner += renderAPI({
                                                    id: id,
                                                    headline: headline,
                                                    timeStamp: timeStamp,
                                                    timeStampType: timeStampType,
                                                    longlead: longlead,
                                                    shortlead: shortlead,
                                                    image: image,
                                                    type: type,
                                                    tag: tag,
                                                    customLink: customLink,
                                                    showSponsorImage: showSponsorImage
                                                });
                            }
                        });
                    } else if (entryIndex === 'interactive') {
                        $.each(entry, function (interactiveIndex, interactive) {
                            var mainTag = '';
                            var interactiveItem;
                            id = interactive.id;
                            timeStamp = interactive.pubdate || '';
                            timeStampType = 3;
                            headline = interactive.cheadline;
                            longlead = interactive.clongleadbody || '';
                            shortlead = interactive.cshortleadbody || '';
                            tag = interactive.tag || '';
                            if (tag.indexOf('速读') >= 0) {
                                mainTag = '速读';
                            } else if (/一周新闻|QuizPlus|速读|SurveyPlus/i.test(tag)) {
                                mainTag = 'FT商学院';
                            }
                            if (mainTag !== '') {
                                tag = mainTag + ',' + tag.replace(mainTag, '');
                                tag = tag.replace(/[,,]+/g, ',');
                            }
                            if (longlead.indexOf('|') > 0 && shortlead !== '') {
                                longlead = shortlead;
                            }
                            image = interactive.story_pic.other || interactive.story_pic.smallbutton || interactive.story_pic.cover || interactive.story_pic.bigbutton || '';
                            type = 'interactive';
                            if ($('.content-left-inner .item[data-id=' + id + '][data-type=' + type + ']').length === 0) {
                                interactiveItem = renderAPI({
                                                        id: id,
                                                        headline: headline,
                                                        timeStamp: timeStamp,
                                                        timeStampType: timeStampType,
                                                        longlead: longlead,
                                                        shortlead: shortlead,
                                                        image: image,
                                                        type: type,
                                                        tag: tag,
                                                        customLink: customLink,
                                                        showSponsorImage: showSponsorImage
                                                    });
                                interactivesInner += interactiveItem;
                                if (/英语电台|速读/.test(tag)) {
                                    premiumInner += interactiveItem;
                                }
                            }
                        });
                    } else if (entryIndex === 'photonews') {
                        $.each(entry, function (photoIndex, photo) {
                            id = photo.photonewsid;
                            timeStamp = photo.add_times || '';
                            timeStampType = 3;
                            headline = photo.cn_title;
                            longlead = photo.leadbody || '';
                            shortlead = photo.shortlead || '';
                            tag = photo.tags || '';
                            tag = '图辑,' + tag;
                            //shortlead = JSON.stringify(photo);
                            image = photo.illustration || photo.cover || photo.thumb_url || '';
                            if (image !== '') {
                                image = 'http://i.ftimg.net/' + image;
                            }
                            type = 'photo';
                            if ($('.content-left-inner .item[data-id=' + id + '][data-type=' + type + ']').length === 0) {
                                photosInner += renderAPI({
                                                    id: id,
                                                    headline: headline,
                                                    timeStamp: timeStamp,
                                                    timeStampType: timeStampType,
                                                    longlead: longlead,
                                                    shortlead: shortlead,
                                                    image: image,
                                                    type: type,
                                                    tag: tag,
                                                    customLink: customLink,
                                                    showSponsorImage: showSponsorImage
                                                });
                            }
                        });
                    } else if (entryIndex === 'premium') {
                        $.each(entry, function (premiumIndex, premium) {
                            timeStamp = premium.fileupdatetime || '';
                            if (premium.publish_status === 'draft') {
                                timeStamp = '';
                            }
                            timeStampType = 2;
                            id = premium.id;
                            ftid = premium.ftid || '';
                            if (ftid !== '') {
                                eaudio = 'https://s3-us-west-2.amazonaws.com/ftlabs-audio-rss-bucket.prod/' + ftid + '.mp3';
                            }
                            headline = premium.cheadline;
                            longlead = premium.clongleadbody || '';
                            shortlead = premium.cshortleadbody || '';
                            tag = premium.tag || 'FT中文网';
                            topic = premium.topic || '';
                            area = premium.area || '';
                            industry = premium.industry || '';
                            topic = (topic === '') ? '' : ',' + topic;
                            area = (topic === '') ? '' : ',' + area;
                            industry = (topic === '') ? '' : ',' + industry;
                            tag += topic + area + industry;
                            tag = tag.replace(/,+/g,',').replace(/,$/, '');
                            image = premium.story_pic.cover || premium.story_pic.other || premium.story_pic.Other || premium.story_pic.smallbutton || premium.story_pic.bigbutton || '';
                            type = 'premium';
                            priority = premium.priority;
                            relativestory = premium.relativestory || [];
                            customLink = premium.customLink || '';
                            var obj = {
                                id: id,
                                ftid: ftid,
                                headline: headline,
                                timeStamp: timeStamp,
                                timeStampType: timeStampType,
                                longlead: longlead,
                                shortlead: shortlead,
                                image: image,
                                type: type,
                                tag: tag,
                                customLink: customLink,
                                caudio: caudio,
                                eaudio: eaudio,
                                showSponsorImage: showSponsorImage,
                                relativestory: relativestory,
                                showRelativeStoryItems: showRelativeStoryItems
                            };
                            if ($('.content-left-inner .item[data-id=' + id + '][data-type=' + type + ']').length === 0) {
                                premiumInner += renderAPI(obj);
                            }
                        });
                    }
                });
                coverHTML = wrapItemHTML(coverHTML, 'Cover');
                newsHTML = wrapItemHTML(newsHTML, 'News');
                commentsHTML = wrapItemHTML(commentsHTML, 'Comments');
                otherHTML = wrapItemHTML(otherHTML, 'Other Stories');
                storiesInner = coverHTML + newsHTML + commentsHTML + otherHTML;
                videosInner = wrapItemHTML(videosInner, 'Videos');
                interactivesInner = wrapItemHTML(interactivesInner, 'Interactive Features');
                photosInner = wrapItemHTML(photosInner, 'Photo Slides');
                premiumInner = wrapItemHTML(premiumInner, 'Premium Content');
                $('#stories-inner').html(premiumInner + storiesInner + videosInner + interactivesInner + photosInner);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('errorThrown - [' + errorThrown + ']');
                // if(XMLHttpRequest.status===200){
                //     alert('请登录backyard！');
                //     document.location.href='/falcon.php/cmsusers/login?from=pagemaker';
                // }
            }
        });
    }

    function loadTools(data) {
        var sections = '';
        var lists = '';
        var showrighttype = data.meta.showrighttype || '';
        $.each(toolkits.section, function (key, value) { // jshint ignore:line
            if (showrighttype === '' || showrighttype === 'All' || showrighttype.indexOf(key)>=0) {
                sections += '<div class="toolkit toolkit-section toolkit-' + key + '" draggable=true>' + key + '</div>';
            }
        });
        $.each(toolkits.list, function (key, value) { // jshint ignore:line
            if (showrighttype === '' || showrighttype === 'All' || showrighttype.indexOf(key)>=0) {
                lists += '<div class="toolkit toolkit-list toolkit-' + key + '" draggable=true>' + key + '</div>';
            }
        });

        var thisday = new Date();
        var todaydate = thisday.getFullYear() * 10000 + (thisday.getMonth() + 1) * 100 + thisday.getDate();

        lists += renderAPI({
            id: '',
            headline: '编辑精选' + todaydate,
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: 'http://i.ftimg.net/picture/4/000074984_piclink.jpg',
            type: '',
            tag: '',
            customLink: 'http://www.ftchinese.com/channel/editorchoice-issue.html?issue=EditorChoice-' + todaydate,
            // customLink: 'http://www.ftchinese.com/m/corp/preview.html?pageid=EditorChoice-' + todaydate,
            showSponsorImage: 'no'
        });
        for (var kkk = 0; kkk < 2; kkk++) {
            lists += renderAPI({
                id: '',
                headline: '直播：' + kkk,
                timeStamp: '',
                timeStampType: '',
                longlead: '',
                shortlead: '',
                image: '',
                type: 'third-party-iframe',
                tag: '',
                customLink: '',
                showSponsorImage: 'no'
            });
        }
        for (var i = 0; i < 12; i++) {
            lists += renderAPI({
                id: '',
                headline: 'EmptyItem' + i,
                timeStamp: '',
                timeStampType: '',
                longlead: '',
                shortlead: '',
                image: '',
                type: '',
                tag: '',
                customLink: '',
                showSponsorImage: 'no'
            });
        }
        for (var j = 0; j < 12; j++) {
            lists += renderAPI({
                id: '',
                headline: 'WidgetFile' + j,
                timeStamp: '',
                timeStampType: '',
                longlead: '',
                shortlead: '',
                image: '',
                type: 'widget',
                tag: '',
                customLink: '',
                showSponsorImage: 'no'
            });
        }

        lists += renderAPI({
            id: '',
            headline: 'uselection2016.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-sources.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-labour.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-markets.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-gdp.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-housing.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-rates.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });
        lists += renderAPI({
            id: '',
            headline: 'numbers-china-trade.html',
            timeStamp: '',
            timeStampType: '',
            longlead: '',
            shortlead: '',
            image: '',
            type: 'widget',
            tag: '',
            customLink: '',
            showSponsorImage: 'no'
        });



        //lists = '<div class="toolkit toolkit-list" draggable=true>list</div>';
        $('#tool-sec-inner').html(sections);
        $('#tool-list-inner').html(lists);
    }

    function jsonToDom(jsonUrl) {
        //console.log (jsonUrl);
        $.ajax({
            type: 'get',
            url: jsonUrl,
            dataType: 'json',
            success: function (data) {
                renderJson(data);
                loadStories();
                loadTools(data);
                $('#source-json').val(JSON.stringify(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('errorThrown1 - [' + errorThrown + ']');
                if(XMLHttpRequest.status===200 && XMLHttpRequest.readyState===4){
                    alert('请登录backyard！');
                    document.location.href='/falcon.php/cmsusers/login?from=pagemaker'+page();
                }
            }
        });
    }
    function page() {
        var a=window.location.search;
        return '&'+a.substring(1);
    }
    function renderHTML(ele) {
        var J = {
            'meta': {},
            'sections': []
        };
        var mainMeta = ele.find('>.meta-table .meta-item');
        var sections = ele.find('>.sections>.section-container');
        var fileUpdateTime;
        var fileUpdateTimeString = '';
        // render page meta data into JSON
        $.each(mainMeta, function () {
            var key = $(this).find('.o-input-text, .o-textarea').eq(0).val();
            var value = $(this).find('.o-input-text, .o-textarea').eq(1).val();
            J.meta[key] = value;
            if (key === 'fileTime') {
                // use the time stamp of the current operation
                fileUpdateTime = new Date();
                fileUpdateTimeString = fileUpdateTime.getFullYear() * 100000000 + (fileUpdateTime.getMonth() + 1) * 1000000 + fileUpdateTime.getDate()*10000 + fileUpdateTime.getHours() * 100 + fileUpdateTime.getMinutes();
                J.meta[key] = fileUpdateTimeString;
            } else {
                J.meta[key] = value;
            }
        });
        // render section data
        $.each(sections, function (sectionIndex) {
            var lists = $(this).find('>.section-inner>.lists-container>.lists-item');
            J.sections.push({});
            $.each($(this).find('.section-inner>.meta-table .meta-item'), function () {
                var key = $(this).find('.o-input-text, .o-textarea').eq(0).val();
                var value = $(this).find('.o-input-text, .o-textarea').eq(1).val();
                //console.log (key);
                J.sections[sectionIndex][key] = value;
            });
            if (lists.length > 0) {
                J.sections[sectionIndex].lists = [];
                $.each(lists, function (listIndex) {
                    //console.log (sectionIndex + ': ' + listIndex);
                    var items = $(this).find('.item');
                    J.sections[sectionIndex].lists.push({});

                    $.each($(this).find('>.meta-table .meta-item'), function () {

//                      J.sections[sectionIndex].lists[listIndex].push({});
                        var key = $(this).find('.o-input-text, .o-textarea').eq(0).val();
                        var value = $(this).find('.o-input-text, .o-textarea').eq(1).val();
                        J.sections[sectionIndex].lists[listIndex][key] = value;
                    });


                    if (items.length > 0) {
                        //console.log (items.length);
                        J.sections[sectionIndex].lists[listIndex].items = [];
                        $.each(items, function (itemIndex) {
                            J.sections[sectionIndex].lists[listIndex].items.push({});
                            $.each($(this).find('.o-input-text, .o-input-checkbox'), function () {

                                var key = $(this).attr('name');
                                var value;
                                if ($(this).hasClass('o-input-checkbox') === true) {
                                    value = ($(this).is(':checked')) ? 'yes' : 'no';
                                } else {
                                    value = $(this).val();
                                }
                                //console.log ($(this).html());
                                J.sections[sectionIndex].lists[listIndex].items[itemIndex][key] = value;
                            });

                            var relatives = $(this).find('.relative-item');
                            if (relatives.length > 0) {
                                //console.log(relatives.length + ' related items');
                                J.sections[sectionIndex].lists[listIndex].items[itemIndex].relatives = [];
                                $.each(relatives, function (relativeIndex) {
                                    J.sections[sectionIndex].lists[listIndex].items[itemIndex].relatives.push({});
                                    $.each($(this).find('.r-input-text'), function () {

                                        var key = $(this).attr('name');
                                        var value = $(this).val();
                                        //console.log ($(this).html());
                                        J.sections[sectionIndex].lists[listIndex].items[itemIndex].relatives[relativeIndex][key] = value;
                                    });
                                });
                            }

                        });

                    }

                });
            }
        });
        return JSON.stringify(J);
    }

    function updateSectionTitle(ele) {
        var obj = ele.parentsUntil($('.sections'), '.section-inner>.meta-table');
        var objContainer = ele.parentsUntil($('.sections'), '.section-container');
        //console.log (obj);
        var title = obj.find('[data-key=Name]').val() || obj.find('[data-key=title]').val() || obj.find('[data-key=name]').val() || obj.find('[data-key=from]').val() || obj.find('[data-key=type]').val() || 'New List';
        var listsLength;
        //console.log (objContainer.html());
        if (objContainer.find('.lists-item') && objContainer.find('.lists-item').length > 0) {
            listsLength = ' <span>(' + objContainer.find('.lists-item').length + ')</span>';
        } else {
            listsLength = '';
        }
        //console.log (title);
        objContainer.find('.section-header').html(title + listsLength);
    }

    function updateListTitle(ele) {
        var obj = ele.parentsUntil($('.lists-container'), '.lists-item>.meta-table');
        var objContainer = ele.parentsUntil($('.lists-container'), '.lists-item');
        //console.log (obj);
        var title = obj.find('[data-key=Name]').val() || obj.find('[data-key=title]').val() || obj.find('[data-key=name]').val() || obj.find('[data-key=type]').val() || 'New List';
        //console.log (title);
        var listsLength;
        if (objContainer.find('.item') && objContainer.find('.item').length > 0) {
            listsLength = ' <span>(' + objContainer.find('.item').length + ')</span>';
        } else {
            listsLength = '';
        }
        objContainer.find('.lists-header').html(title + listsLength);
    }


    function validateDataFormat(ele) {
        var value = ele.val();
        var valueType = ele.attr('data-key');
        if (validator[valueType] !== undefined) {
            var validateRegexInclude = validator[valueType].regStrInclude || /.*/;
            //var validateDescription = validator[valueType].description;
            var validateRegexExclude = validator[valueType].regStrExclude || /mission impossible do not do this/;
            var validateUrlForImage = validator[valueType].loadImage;
            var valideteUrlForImpression = validator[valueType].loadImpression;
            if (value !== '') {
                if (validateRegexInclude.test(value) && !validateRegexExclude.test(value)) {
                    // MARK: Continue to validate if the validator requires to load url to validate the url is actually accessible!
                    if (validateUrlForImage === true) {
                        //console.log ('should download the url for checking! ');
                        var containerEle = ele.parent().parent().find('td').last();
                        var images = containerEle.find('img.validate-image');
                        var image;
                        if (images.length === 0) {
                            image = $('<img class="validate-image">');
                            image.appendTo(containerEle);
                        } else {
                            image = images.eq(0);
                        }
                        image.attr('src', value);
                        image.error(function(){
                            ele.addClass('warning');
                        });
                    }
                    // TODO: There's no reliable way to check if an impression is really good because of redirect. Do this after we figure that out.
                    if (valideteUrlForImpression === true) {

                    }
                    ele.removeClass('warning');
                    return;
                }
                ele.addClass('warning');
            }
        }
    }

    // MARK: - Check if all items in the jquery object is correct. 
    function verifyAllItems(ele) {
        // MARK: - Check if all audios are playable
        ele.find('.o-input-text[name=caudio], .o-input-text[name=eaudio]').each(function(){
            var audioUrl = $(this).val();
            var audioInput = $(this);
            console.log ('checking: ' + audioUrl);
            if (audioUrl && audioUrl !== '') {
                var audio = document.createElement('AUDIO');
                audio.preload = 'metadata';
                audio.src = audioUrl;
                audio.addEventListener('loadedmetadata', function(){
                    audioInput.addClass('verified');
                }, false);
                audio.addEventListener('error', function(){
                    audioInput.val('');
                    audioInput.addClass('warning');
                }, false);
            }
        });
    }

    function updateAllTitles() {
        $('.section-container').each(function () {
            var obj = $(this).find('.section-inner>.meta-table .o-input-text');
            if (obj.length > 0) {
                updateSectionTitle(obj.eq(0));
            }
        });

        $('.lists-item').each(function () {
            var obj = $(this).find('>.meta-table .o-input-text');
            if (obj.length > 0) {
                updateListTitle(obj.eq(0));
            }
        });
    }

    function searchAPI() {
        var k = $('#keywords-input').val();
        k=k.replace(/\//g,'-');
        thisday = new Date();
        thenow = thisday.getHours() * 10000 + thisday.getMinutes() * 100 + thisday.getSeconds();
        if (/[0-9]{4}\-[0-9]+\-[0-9]+/.test(k)) {
            gApiUrls.stories = storyAPIRoot + k + '?' + thenow;
        } else if (/^[0-9]+$/.test(k)) {
            //https://backyard.ftchinese.com/falcon.php/homepage/getstorybyday/7/dfadfa
            gApiUrls.stories = '/falcon.php/homepage/getstorybyday/' + k + '/'+ thenow;
        } else {
            gApiUrls.stories = '/falcon.php/homepage/gettagstoryapi?tag=' + k + '&' + thenow;
            //alert (gApiUrls.stories);
            //http://backyard.ftchinese.com/falcon.php/homepage/gettagstoryapi?tag=%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E
        }

        $('#stories-inner').empty();
        loadStories();
    }


// MARK: - Date Picker Start
    var allDateNumbers = [];
    var datesInput;
    var otherDateNumbers = {};

    function launchDatePicker(ele) {
        datesInput = ele.parentElement.parentElement.querySelector('.date-value');
        if (datesInput) {
            var currentDatesString = datesInput.value;
            var currentDatesArray = currentDatesString.split(',');
            currentDatesArray = currentDatesArray.map(x => new Date(x.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3')));
            currentDatesArray = currentDatesArray.filter(function(x) {
              return isNaN(x) === false;
            });
            currentDatesArray = currentDatesArray.sort(function(a, b){return a - b;});
            allDateNumbers = currentDatesArray.map(x => x.getFullYear()*10000 + (x.getMonth() + 1) * 100 + x.getDate());
            otherDateNumbers = getOtherDateNumbers(ele);
            var calendarContainer = document.createElement('DIV');
            calendarContainer.innerHTML = getCalendarHTML(new Date(), currentDatesArray);
            calendarContainer.className = 'calendar-container';
            document.body.appendChild(calendarContainer);
        } else {
            alert ('Can not find the dates input. You can ask Tech team about this. ');
        }
    }

    function getOtherDateNumbers(ele) {
        var otherDates = {};
        try {
            const containerEle = ele.parentElement.parentElement.parentElement;
            const title = containerEle.querySelector('[data-key=title]').value;
            const iphone = (containerEle.querySelector('[data-key=iphone]').value === 'yes');
            const ipad = (containerEle.querySelector('[data-key=ipad]').value === 'yes');
            const android = (containerEle.querySelector('[data-key=android]').value === 'yes');
            var allCreatives = document.querySelectorAll('.type-creative');
            var creative;
            for (creative of allCreatives) {
                const currentTitle = creative.querySelector('[data-key=title]').value;
                const iphoneC = (creative.querySelector('[data-key=iphone]').value === 'yes');
                const ipadC = (creative.querySelector('[data-key=ipad]').value === 'yes');
                const androidC = (creative.querySelector('[data-key=android]').value === 'yes');
                const priorityEle = creative.querySelector('[data-key=priority]');
                var priority;
                if (priorityEle) {
                    priority = priorityEle.value;
                } else {
                    priority = 'standard';
                }
                const isDeviceOverlapped = ((iphone && iphoneC) || (ipad && ipadC) || (android && androidC));
                const isOtherCreative = (title !== currentTitle);
                const isHouseAd = (priority === 'house');
                if (isOtherCreative && isDeviceOverlapped && !isHouseAd) {
                    const currentDates = creative.querySelector('[data-key=dates]');
                    if (currentDates) {
                        const currentDatesNumbers = currentDates.value.split(',');
                        var dateNumber;
                        for (dateNumber of currentDatesNumbers) {
                            if (dateNumber === '') {continue;}
                            if (otherDates['day-' + dateNumber]) {
                                otherDates['day-' + dateNumber].push(currentTitle);
                            } else {
                                otherDates['day-' + dateNumber] = [currentTitle];
                            }
                        }
                    }
                }
            }
        } catch(ignore) {
            console.log (ignore);
            return otherDates;
        }
        return otherDates;
    }

    function convertDate(x) {
        const dateNumber = x.getFullYear()*10000 + (x.getMonth() + 1) * 100 + x.getDate();
        const dateString = dateNumber.toString().replace(/^([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3');
        return dateString;
    }

    function launchImpressionTrack(ele) {
        var impressionEle = ele.parentElement.parentElement.querySelector('.impression-value');
        console.log ('yes 0');
        if (!impressionEle) {return;}
        var impressionValue = impressionEle.value;
        var dateEle = impressionEle.parentElement.parentElement.parentElement.querySelector('.date-value');
        var titleEle = impressionEle.parentElement.parentElement.parentElement.querySelector('[data-key=title]');
        console.log ('yes 1');
        if (!dateEle) {return;}
        console.log ('yes 2');
        var currentDatesString = dateEle.value;
        var currentDatesArray = currentDatesString.split(',');
        currentDatesArray = currentDatesArray.map(x => new Date(x.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3')));
        currentDatesArray = currentDatesArray.filter(function(x) {
          return isNaN(x) === false;
        });
        currentDatesArray = currentDatesArray.sort(function(a, b){return a - b;});
        var dateLength = currentDatesArray.length;
        if (dateLength <= 0) {return;}
        const startDate = currentDatesArray[0];
        const endDate = currentDatesArray[dateLength-1];
        const startDateString = convertDate(startDate);
        const endDateString = convertDate(endDate);
        const baseUrl = '/chartist/event.html?v=1';
        const realtimeBaseUrl = 'https://analytics.google.com/analytics/web/?authuser=1#/realtime/rt-event/a1608715w103966157p108134561/filter.list=40==iPhone%252520Launch%252520Ad;42=={el};&metric.type=5/';
        const titleParameter = (titleEle) ? '&title=' + encodeURIComponent(titleEle.value) : '';
        const dataSource = ele.getAttribute('data-source');
        const eventAction = ele.getAttribute('data-event-action');
        if (!dataSource) {return;}
        var finalUrl;
        if (dataSource === 'ftc-chart') {
            const eventActionParameter = (eventAction !== null) ? '&ea=' + eventAction : '';
            finalUrl = baseUrl + '&startDate=' + startDateString + '&endDate=' + endDateString + '&el=' + encodeURIComponent(impressionValue) + '&ec=Launch Ad&viewId=108134561' + eventActionParameter + titleParameter;
        } else if (dataSource === 'ga-real-time') {
            // MARK: - replace special characters based on Google Analytics' format
            const impressionForRealTime = impressionValue
                .replace(/:/g, '%25253A')
                .replace(/\//g, '~2F')
                .replace(/\?/g, '%25253F')
                .replace(/&/g, '%252526')
                .replace(/=/g, '%25253D');
            finalUrl = realtimeBaseUrl.replace('{el}', impressionForRealTime);
        } else {
            return;
        }
        window.open(finalUrl);
    }

    function getCalendarHTML(dateValue) {
        var html = '';
        const monthNumber = dateValue.getMonth() + 1;
        const yearNumber = dateValue.getFullYear();
        const yearMonthNumber = yearNumber * 100 + monthNumber;
        const yearMonth = yearMonthNumber.toString().replace(/([0-9]{4})/g, '$1-');
        html += '<div class="o-calendar-header" data-date="' + yearMonth + '"><div class="prev"><</div><div class="title">' + yearMonth + '</div><div class="next">></div></div>';
        html += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
        const todayDate = new Date();
        const todayNumber = todayDate.getFullYear() * 10000 + (todayDate.getMonth() + 1) * 100 + todayDate.getDate();
        var oneMonthHTML = '';
        for (var i=1; i<=31; i++) {
            const currentDateNumber = yearMonthNumber * 100 + i;
            const currentDateValue = new Date(currentDateNumber.toString().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3'));
            if (isNaN(currentDateValue) === false && dateValue.getMonth() === currentDateValue.getMonth()) {
                const dayNumber = currentDateValue.getDay();
                var cellClasses = [];
                if (allDateNumbers.includes(currentDateNumber)) {
                    cellClasses.push('picked');
                }
                if (currentDateNumber < todayNumber) {
                    cellClasses.push('old');
                }
                var otherAdvertisers = '';
                const otherDatesArray = otherDateNumbers['day-' + currentDateNumber.toString()];
                if (otherDatesArray && otherDatesArray.length > 0) {
                    otherAdvertisers = otherDatesArray.join('\n');
                    cellClasses.push('has-other');
                }
                const cellTitleAttribute = (otherAdvertisers === '') ? '' : ' title="' + otherAdvertisers + '"';
                const cellClassString = cellClasses.join(' ');
                const cellClass = (cellClassString !== '') ? ' class="' + cellClassString + '"' : '';
                const cellValue = '<td data-date="' + currentDateNumber + '"' + cellClass + cellTitleAttribute + '>' + i + '</td>';
                const cellPrefix = (i === 1 || dayNumber === 0) ? '<tr>' + '<td></td>'.repeat(dayNumber) : '';
                const cellSuffix = (dayNumber === 6) ? '</tr>' : '';
                oneMonthHTML += cellPrefix + cellValue + cellSuffix;
            }
        }
        oneMonthHTML += (/<\/tr>$/.test(oneMonthHTML)) ? '': '</tr>';
        html += '<tbody>' + oneMonthHTML + '</tbody>';
        html = '<table class="o-calendar-table">' + html + '</table>';
        html += '<div class="o-calendar-action"><button class="o-calendar-apply button-left">Apply</button><button class="o-calendar-cancel button-right">Cancel</button></div>';
        html = '<div class="o-calendar-overlay"></div><div class="o-calendar-inner">' + html + '</div>';
        return html;
    }

    $('body').on('click', '.o-calendar-header .prev, .o-calendar-header .next', function () {
        const currentMonth = parseInt(this.parentElement.getAttribute('data-date').replace('-', ''), 10);
        const direction = (this.className.indexOf('next') >= 0) ? 1 : -1;
        const yearNumber = parseInt(currentMonth/100, 10);
        const monthNumber = currentMonth % 100;
        var newMonthNumber = monthNumber + direction;
        var newYearNumber = yearNumber;
        if (newMonthNumber <= 0) {
            newYearNumber = newYearNumber - 1;
            newMonthNumber = 12;
        } else if (newMonthNumber >= 13) {
            newYearNumber = newYearNumber + 1;
            newMonthNumber = 1;
        }
        var newDate = new Date(newYearNumber + '-' + newMonthNumber + '-' + '1');
        document.querySelector('.o-calendar-inner').innerHTML = getCalendarHTML(newDate);
    });

    $('body').on('click', '.o-calendar-table tbody td', function () {
        const currentDateString = this.getAttribute('data-date');
        if (!currentDateString && currentDateString === '') {
            return;
        }
        const currentDateNumber = parseInt(currentDateString);
        const currentDateValue = new Date(currentDateString.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3'));
        if (isNaN(currentDateValue)) {
            return;
        }
        if (allDateNumbers.includes(currentDateNumber)) {
            this.classList.remove('picked');
            allDateNumbers = allDateNumbers.filter(x => x !== currentDateNumber);
        } else {
            this.classList.add('picked');
            allDateNumbers.push(currentDateNumber);
        }
    });

    $('body').on('click', '.o-calendar-apply', function () {
        const allDatesString = allDateNumbers.sort(function(a, b){return a - b;}).join(',');
        if (datesInput) {
            datesInput.value = allDatesString;
            document.querySelector('.calendar-container, .multi-select-container').remove();
        } else {
            alert ('Can not find the datesInput. Please cancel and try again! ');
        }
    });

    $('body').on('click', '.o-calendar-cancel, .o-calendar-overlay', function () {
        document.querySelector('.calendar-container, .multi-select-container').remove();
    });
// MARK: - Date Picker End





// MARK:- Multiselect Start
    var multiSelectInput;
    function launchMultiSelect(ele) {
        var container = document.createElement('DIV');
        container.innerHTML = getMultiSelectHTML(ele);
        container.className = 'multi-select-container';
        multiSelectInput = ele;
        document.body.appendChild(container);
    }


    function getMultiSelectHTML(ele) {
        var html = '';
        var options = ele.getAttribute('data-options').split(',');
        var values = ele.value.split(',');
        var optionsHTML = '';
        for (var option of options) {
            const checked = (values.indexOf(option) >= 0) ? ' checked' : '';
            optionsHTML += '<div class="multi-select-option"><label><input type="checkbox" value="'+ option +'"' + checked +'> ' + option + '</label></div>';
        }
        optionsHTML = '<div>' + optionsHTML + '</div>';
        html += optionsHTML;
        html += '<div class="multi-select-action"><button class="multi-select-apply button-left">Apply</button><button class="o-calendar-cancel button-right">Cancel</button></div>';
        html = '<div class="o-calendar-overlay"></div><div class="multi-select-inner">' + html + '</div>';
        return html;
    }


    $('body').on('click', '.multi-select-apply', function () {
        var eles = this.closest('.multi-select-container').querySelectorAll('input[type="checkbox"]');
        var finalInputs = [];
        if (eles) {
            for (var ele of eles) {
                if (ele.checked) {
                    finalInputs.push(ele.value);
                }
            }
            if (multiSelectInput) {
                multiSelectInput.value = finalInputs;
            }
        }
        document.querySelector('.multi-select-container').remove();
    });


// MARK:- Multiselect End


    $('body').on('dragstart', '.item, .relative-item, .section-header, .lists-header, .toolkit, .group-header', function (e) {
        try {
            e.originalEvent.dataTransfer.setData('text/plain', 'anything');
        } catch (ignore) {

        }
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        if ($(this).is('.item, .toolkit, .relative-item')) {
            //$(this).css('opacity','0.4');
            $(this).addClass('fade');
        } else if ($(this).hasClass('group-header')) {
            $(this).parent().addClass('fade');
        } else if ($(this).hasClass('section-header')) {
            $('.sections .section-container').each(function (index) {
                $(this).attr('data-order', index);
            });
            $(this).parentsUntil($('.sections'), '.section-container').addClass('fade');
            dragIndex = $(this).parentsUntil($('.sections'), '.section-container').attr('data-order');
            dragIndex = parseInt(dragIndex, 10);
        } else if ($(this).hasClass('lists-header')) {
            $('.lists-item').each(function (index) {
                $(this).attr('data-order', index);
            });
            $(this).parent().addClass('fade');
            dragIndex = $(this).parent().attr('data-order');
            dragIndex = parseInt(dragIndex, 10);
        }
        dragSrcEl = $(this);
    });

    $('body').on('dragend', '.item, .relative-item, .section-header, .lists-header, .toolkit, .group-header', function (e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        if ($(this).is('.item, .relative-item, .toolkit')) {
            $('.item, .toolkit').removeClass('fade');
        } else if ($(this).hasClass('group-header')) {
            $(this).parent().removeClass('fade');
        } else if ($(this).hasClass('section-header')) {
            $(this).parentsUntil($('.sections'), '.section-container').removeClass('fade');
        } else if ($(this).hasClass('lists-header')) {
            $(this).parent().removeClass('fade');
        }
        // remove visual feedbacks
        $('.over').removeClass('over');
        $('.over-drag-down').removeClass('over-drag-down');
        $('.over-drag-up').removeClass('over-drag-up');
        $('.fade').removeClass('fade');
    });

    $('body').on('dragenter', '.item, .relative-item, .relative-container-title, .lists-item>.meta-table, .lists-item>.lists-header, .section-container, .lists-item, .section-inner>.meta-table, .section-header, .content-left-inner', function () {
        //console.log (dragSrcEl);

        if (dragSrcEl.is('.item, .group-header') && $(this).is('.item, .lists-item>.meta-table, .lists-item>.lists-header')) {
            $(this).addClass('over');
        } else if (dragSrcEl.hasClass('relative-item') && $(this).is('.relative-item, .relative-container-title')) {
            $(this).addClass('over');
        } else if (dragSrcEl.hasClass('section-header') && $(this).hasClass('section-container')) {
            dragOverIndex = $(this).attr('data-order');
            dragOverIndex = parseInt(dragOverIndex, 10);
            if (dragIndex < dragOverIndex) {
                $(this).addClass('over-drag-down');
            } else if (dragIndex > dragOverIndex) {
                $(this).addClass('over-drag-up');
            }
        } else if (dragSrcEl.hasClass('toolkit-section')) {
            if ($(this).hasClass('section-container')) {
                $(this).addClass('over-drag-down');
            } else if ($(this).hasClass('content-left-inner') && $('.section-container').length === 0) {
                $(this).addClass('over');
            }
        } else if (dragSrcEl.hasClass('lists-header') && $(this).is('.lists-item, .section-inner>.meta-table, .section-header')) {
            if ($(this).hasClass('lists-item')) {
                dragOverIndex = $(this).attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $(this).addClass('over-drag-down');
                } else if (dragIndex > dragOverIndex) {
                    $(this).addClass('over-drag-up');
                }
            } else {
                $(this).addClass('over');
            }
        } else if (dragSrcEl.hasClass('toolkit-list') && $(this).is('.lists-item, .section-inner>.meta-table, .section-header')) {
            if ($(this).hasClass('lists-item')) {
                $(this).addClass('over-drag-down');
            } else {
                $(this).addClass('over');
            }
        }
    });

    $('body').on('dragover', '.item, .relative-item, .relative-container-title, .lists-item>.meta-table, .lists-item>.lists-header, .section-container, .lists-item, .section-inner>.meta-table, .section-header, .content-left-inner', function (e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        //console.log (this.classList);
        if (dragSrcEl.is('.item, .group-header') && $(this).is('.item, .lists-item>.meta-table, .lists-item>.lists-header')) {
            $(this).addClass('over');
        } else if (dragSrcEl.hasClass('relative-item') && $(this).is('.relative-item, .relative-container-title')) {
            $(this).addClass('over');
        } else if (dragSrcEl.hasClass('section-header') && $(this).hasClass('section-container')) {
            dragOverIndex = $(this).attr('data-order');
            dragOverIndex = parseInt(dragOverIndex, 10);
            if (dragIndex < dragOverIndex) {
                $(this).addClass('over-drag-down');
            } else if (dragIndex > dragOverIndex) {
                $(this).addClass('over-drag-up');
            }
        } else if (dragSrcEl.hasClass('toolkit-section')) {
            if ($(this).hasClass('section-container')) {
                $(this).addClass('over-drag-down');
            } else if ($(this).hasClass('content-left-inner') && $('.section-container').length === 0) {
                $(this).addClass('over');
            }
        } else if (dragSrcEl.hasClass('lists-header') && $(this).is('.lists-item, .section-inner>.meta-table, .section-header')) {
            if ($(this).hasClass('lists-item')) {
                dragOverIndex = $(this).attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $(this).addClass('over-drag-down');
                } else if (dragIndex > dragOverIndex) {
                    $(this).addClass('over-drag-up');
                }
            } else {
                $(this).addClass('over');
            }
        } else if (dragSrcEl.hasClass('toolkit-list') && $(this).is('.lists-item, .section-inner>.meta-table, .section-header')) {
            if ($(this).hasClass('lists-item')) {
                $(this).addClass('over-drag-down');
            } else {
                $(this).addClass('over');
            }
        }
    });

    $('body').on('dragleave', '.item, .relative-item, .relative-container-title, .lists-item>.meta-table, .lists-item>.lists-header, .section-container, .lists-item, .section-inner>.meta-table, .section-header, .content-left-inner', function (e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        $(this).removeClass('over').removeClass('over-drag-up').removeClass('over-drag-down');
    });

    $('body').on('drop', '.item, .relative-item, .relative-container-title, .lists-item>.meta-table, .lists-item>.lists-header, .section-container, .lists-item, .section-inner>.meta-table, .section-header, .content-left-inner', function (e) {
        var newSection = '';
        var newList = '';
        var newSectionObject;
        var sectionType;
        var sectionJSON;
        var listType;
        var newListJSON;
        var newListObject;
        var groupItems;
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl.hasClass('item')) {
            // console.log ("dragging an item: ");
            // console.log (dragSrcEl);
            if ($(this).hasClass('item') === true && dragSrcEl !== this) {
                dragSrcEl.insertAfter($(this)).addClass('animated zoomIn');
                verifyAllItems(dragSrcEl);
            } else if ($(this).is('.lists-item>.meta-table, .lists-item>.lists-header')) {
                $(this).parent().find('.lists-container').eq(0).prepend(dragSrcEl);
                dragSrcEl.addClass('animated zoomIn');
                verifyAllItems(dragSrcEl);
            } /*else if ($(this).is('.type-block .section-header, .type-block .section-inner>meta-table')) {
             listsContainer = $(this).parentsUntil($('.section-container'), '.section-inner').find('.lists-item .lists-container');
             if (listsContainer.length>0) {
             listsContainer.eq(0).prepend(dragSrcEl);
             dragSrcEl.addClass('animated zoomIn');
             } else {
             alert ('Trying to drop an item to a block without list? You need to create at least one list first. Just drag a list here. ');
             }
             } */else if ($(this).is('.section-header, .section-inner>meta-table')) {
                //console.log (this.classList);
            }
        } else if (dragSrcEl.hasClass('relative-item')) {
            if ($(this).hasClass('relative-item') === true && dragSrcEl !== this) {
                dragSrcEl.insertAfter($(this)).addClass('animated zoomIn');
            } else if ($(this).hasClass('relative-container-title')) {
                $(this).parent().find('.relative-container').eq(0).prepend(dragSrcEl);
                dragSrcEl.addClass('animated zoomIn');
            } /*else if ($(this).is('.type-block .section-header, .type-block .section-inner>meta-table')) {
             listsContainer = $(this).parentsUntil($('.section-container'), '.section-inner').find('.lists-item .lists-container');
             if (listsContainer.length>0) {
             listsContainer.eq(0).prepend(dragSrcEl);
             dragSrcEl.addClass('animated zoomIn');
             } else {
             alert ('Trying to drop an item to a block without list? You need to create at least one list first. Just drag a list here. ');
             }
             } */else if ($(this).is('.section-header, .section-inner>meta-table')) {
                //console.log (this.classList);
            }
        } else if (dragSrcEl.hasClass('group-header')) {
            groupItems = dragSrcEl.parent().find('.item');
            if ($(this).hasClass('item') === true) {
                groupItems.insertAfter($(this)).addClass('animated zoomIn');
                verifyAllItems(groupItems);
            } else if ($(this).is('.lists-item>.meta-table, .lists-item>.lists-header')) {
                $(this).parent().find('.lists-container').eq(0).prepend(groupItems);
                groupItems.addClass('animated zoomIn');
                verifyAllItems(groupItems);
            } /*else if ($(this).is('.type-block .section-header, .type-block .section-inner>meta-table')) {
             listsContainer = $(this).parentsUntil($('.section-container'), '.section-inner').find('.lists-item .lists-container');
             if (listsContainer.length>0) {
             listsContainer.eq(0).prepend(dragSrcEl);
             dragSrcEl.addClass('animated zoomIn');
             } else {
             alert ('Trying to drop an item to a block without list? You need to create at least one list first. Just drag a list here. ');
             }
             } */else if ($(this).is('.section-header, .section-inner>meta-table')) {
                //console.log (this.classList);
            }
        } else if (dragSrcEl.hasClass('section-header')) {
            // drop a section. The drop point could be the container or its inner elements
            if ($(this).hasClass('section-container')) {
                dragOverIndex = $(this).attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $('.section-container').eq(dragIndex).insertAfter($(this)).addClass('animated zoomIn');
                } else if (dragIndex > dragOverIndex) {
                    $('.section-container').eq(dragIndex).insertBefore($(this)).addClass('animated zoomIn');
                }
            } else if ($(this).is('.section-container .item, .lists-item>.meta-table, .lists-item>.lists-header, .section-header, .lists-item')) {
                dragOverIndex = $(this).parentsUntil($('.sections'), '.section-container').attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $('.section-container').eq(dragIndex).insertAfter($('.section-container').eq(dragOverIndex)).addClass('animated zoomIn');
                } else if (dragIndex > dragOverIndex) {
                    $('.section-container').eq(dragIndex).insertBefore($('.section-container').eq(dragOverIndex)).addClass('animated zoomIn');
                }
            } else {
                console.log('drag section header: other situation');
                console.log(this.classList);
            }
        } else if (dragSrcEl.hasClass('toolkit-section')) {
            sectionType = dragSrcEl.html();
            sectionJSON = {
                'type': sectionType
            };
            if (sectionType === 'block') {
                sectionJSON.lists = [
                    {
                        'name': 'New List',
                        'title': '',
                        'url': '',
                        'description': '',
                        'language': '',
                        'float': 'none',
                        'showTag': 'no',
                        'showTimeStamp': 'no',
                        'preferLead': 'longlead',
                        'sponsorAdId': '',
                        'sponsorLogoUrl': '',
                        'sponsorLink': '',
                        'sponsorNote': '',
                        'feedStart': '',
                        'feedItems': '',
                        'feedTag': '',
                        'feedType': '',
                        'feedImage': 'optional',
                        'moreLink': ''
                    }
                ];
            }
            $.each(toolkits.section[sectionType], function (key, value) {
                sectionJSON[value] = '';
            });
            newSection = '<div class="section-container type-' + sectionType + '"><div class="section-inner"><div class="mail-section"></div><div class="remove-section"></div><div class="clone-section"></div><div class="section-header" draggable="true">' + sectionType + '</div>' + renderMeta(sectionJSON) + '</div></div>';
            newSectionObject = $($.parseHTML(newSection));
            // drop a new section. The drop point could be the container or its inner elements
            if ($(this).hasClass('section-container')) {
                $(this).after(newSectionObject);
                newSectionObject.addClass('animated zoomIn');
            } else if ($(this).is('.section-container .item, .section-container .meta-table, .lists-item>.lists-header, .section-header, .lists-item')) {
                $(this).parentsUntil($('.sections'), '.section-container').after(newSectionObject);
                newSectionObject.addClass('animated zoomIn');
            } else if ($(this).hasClass('content-left-inner') && $('.section-container').length === 0) {
                $(this).find('.sections').append(newSectionObject);
                newSectionObject.addClass('animated zoomIn');
            } else {
                console.log('create new section: other situation');
                console.log(this.classList);
            }
        } else if (dragSrcEl.hasClass('lists-header')) {
            // drop a list. The drop point could be a container or any inner elements
            if ($(this).is('.item')) {
                // drop to an item
                dragOverIndex = $(this).parentsUntil($('.sections'), '.lists-item').attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $('.lists-item').eq(dragIndex).insertAfter($('.lists-item').eq(dragOverIndex)).addClass('animated zoomIn');
                } else if (dragIndex > dragOverIndex) {
                    $('.lists-item').eq(dragIndex).insertBefore($('.lists-item').eq(dragOverIndex)).addClass('animated zoomIn');
                }
            } else if ($(this).is('.lists-item>.meta-table, .lists-item>.lists-header')) {
                // drop to list header or list meta table
                dragOverIndex = $(this).parent().attr('data-order');
                dragOverIndex = parseInt(dragOverIndex, 10);
                if (dragIndex < dragOverIndex) {
                    $('.lists-item').eq(dragIndex).insertAfter($('.lists-item').eq(dragOverIndex)).addClass('animated zoomIn');
                } else if (dragIndex > dragOverIndex) {
                    $('.lists-item').eq(dragIndex).insertBefore($('.lists-item').eq(dragOverIndex)).addClass('animated zoomIn');
                }
            } else if ($(this).is('.section-inner>.meta-table, .section-inner>.section-header')) {
                console.log ('drag has class of lists-header');
                console.log ($(this).parentsUntil($('.sections'), '.section-container'));
                if ($(this).parentsUntil($('.sections'), '.section-container').is('.type-block, .type-timeline, .type-Poster, .type-promoBox, .type-manualTagPage, .type-RemoteConfigParameter')) {
                    $(this).parent().find('.lists-container').eq(0).prepend($('.lists-item').eq(dragIndex));
                    $('.lists-item').eq(dragIndex).addClass('animated zoomIn');
                } else {
                    alert('A list can only be dropped to a block, timtline, Poster or promoBox section! ');
                }
            } else {
                console.log('drag list header: other situation...');
                console.log(this.classList);
            }
        } else if (dragSrcEl.hasClass('toolkit-list')) {
            // drop a list. The drop point could be a container or any inner elements
            listType = dragSrcEl.html();
            newListJSON = {};
            $.each(toolkits.list[listType], function (key, value) {
                newListJSON[value] = '';
                //newListJSON.name = '';
                newListJSON.type = listType;
            });
            newList = '<div class="lists-item"><div class="remove-lists"></div><div class="clone-lists"></div><div class="lists-header" draggable="true">New List</div>' + renderMeta(newListJSON) + '</div>';
            newListObject = $($.parseHTML(newList));
            if ($(this).is('.item, .lists-item>.meta-table, .lists-item>.lists-header')) {
                // drop to an item
                $(this).parentsUntil($('.sections'), '.lists-item').after(newListObject);
                newListObject.addClass('animated zoomIn');
            } else if ($(this).is('.section-inner>.meta-table, .section-inner>.section-header')) {
                console.log($(this).parentsUntil($('.sections'), '.section-container'));
                if ($(this).parentsUntil($('.sections'), '.section-container').is('.type-block, .type-timeline, .type-Poster, .type-promoBox, .type-manualTagPage, .type-RemoteConfigParameter')) {
                    $(this).parent().find('.lists-container').eq(0).prepend(newListObject);
                    newListObject.addClass('animated zoomIn');
                } else {
                    alert('A list can only be dropped to a block, timtline, Poster or promoBox section! ');
                }
            } else {
                console.log('drag list header: other situation...');
                console.log(this.classList);
            }
        }

        //after a drop, update all the section titles and list titles
        updateAllTitles();

        dragSrcEl = null;
        return false;
    });

    $('body').on('click', '.tab', function () {
        $('html').removeClass('show-all').removeClass('show-sections').removeClass('show-items').removeClass('show-json');
        if ($(this).hasClass('all')) {
            $('html').addClass('show-all');
        } else if ($(this).hasClass('sections')) {
            $('html').addClass('show-sections');
        } else if ($(this).hasClass('items')) {
            $('html').addClass('show-items');
        } else if ($(this).hasClass('json')) {
            $('#source-json').val(renderHTML($('#content-left-inner')));
            $('html').addClass('show-json');
        }
 //       console.log(document.getElementById("content-left-inner").innerHTML);
    });
    $('body').on('click', '#button-save', function () {
        if (confirm('是否“保存”当前操作结果？\n\n注意：保存操作不会更新页面。')) {
            $.ajax({
                type: 'POST',
                url: gApiUrls.homePOST,
                data: {action: 'save', publish_type: getURLParameter('page'), publish_html: renderHTML($('#content-left-inner'))},
                dataType: 'text',
                success: function (msg) {
                    if (msg === 'save') {
                        alert('页面保存成功，请确认后提交！');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log('url - [' + gApiUrls.homePOST + ']');
                    console.log('XMLHttpRequest - [' + XMLHttpRequest + ']');
                    console.log('textStatus - [' + textStatus + ']');
                    console.log('errorThrown - [' + errorThrown + ']');
                }
            });
        }
    });

    $('body').on('click', '#button-submit', function () {
        if (confirm('是否“提交”当前操作结果？\n\n注意：提交操作会更新页面。')) {
            $.ajax({
                type: 'POST',
                url: gApiUrls.homePOST,
                data: {action: 'submit', publish_type: getURLParameter('page'), publish_html: renderHTML($('#content-left-inner'))},
                dataType: 'text',
                success: function (msg) {
                    if (msg === 'submit') {
                        alert ('页面提交成功！');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log('url - [' + gApiUrls.homePOST + ']');
                    console.log('XMLHttpRequest - [' + XMLHttpRequest + ']');
                    console.log('textStatus - [' + textStatus + ']');
                    console.log('errorThrown - [' + errorThrown + ']');
                }
            });
        }
    });


    $('body').on('click', '#button-preview-main', function () {
        //console.log ('open');
        var devicesHTML = '';
        $.each(devices, function (key, value) {
            var viewValue = value.view || '';
            var hostValue = value.host || 'http://www7.ftchinese.com';
            devicesHTML += '<div class="preview-on-device" data-width="' + value.width + '" data-height="' + value.height + '" data-view="' + viewValue + '" data-host="' + hostValue + '">' + value.name + '</div>';
        });
        var previewHTML = '<div id="preview-shadow" class="o-overlay-shadow animated fadeIn"></div><div id="preview-box" class="rightanswer show o-overlay__arrow-top animated fadeInRight"><div class="preview-header">Simulate on the following devices: </div><div class="explain-body"><div class="explain-answer">' + devicesHTML + '</div></div>';
        $('#preview-overlay').html(previewHTML);
        tidyup();
    });


    $('body').on('click', '#button-submit-json', function () {
        const jsonString = document.getElementById('source-json').value;
        console.log (jsonString);
        if (confirm('这是高级操作！\n\n保存后页面中原来的数据会被下面的JSON代码替代。您确定要这样做吗？')) {
            $.ajax({
                type: 'POST',
                url: gApiUrls.homePOST,
                data: {action: 'save', publish_type: getURLParameter('page'), publish_html: jsonString},
                dataType: 'text',
                success: function (msg) {
                    if (msg === 'submit') {
                        alert ('JSON代码提交成功！');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log('url - [' + gApiUrls.homePOST + ']');
                    console.log('XMLHttpRequest - [' + XMLHttpRequest + ']');
                    console.log('textStatus - [' + textStatus + ']');
                    console.log('errorThrown - [' + errorThrown + ']');
                }
            });
        }
    });

    $('body').on('click', '#preview-shadow', function () {
        $('#preview-overlay').empty();
    });

    $('body').on('click', '.action-link', function () {
        window.gPendingInput = this.parentElement.parentElement.querySelector('.o-input-text.ad-image');
        window.imageUploader = window.open('/ads_admin/index.php?into=apple', '_blank', '');
    });

    $('body').on('click', '.image-link', function () {
        window.gPendingInput = this.parentElement.parentElement.querySelector('.o-input-text.content-image');
        window.imageUploader = window.open('/create_picture.php?nw=1', '_blank', '');
    });

    $('body').on('click', '.zone-link', function () {
        var action = this.getAttribute('data-action');
        var zone = this.parentElement.parentElement.querySelector('.o-input-text.zone-value');
        var channelEle = this.parentElement.parentElement.parentElement.querySelector('[data-key=channel]');
        var channelType = 'auto';
        if (channelEle && channelEle.value && channelEle.value !== '') {
            channelType = channelEle.value;
        } else {
            channelType = 'unknown';
        }
        var link;
        if (zone && zone.value !== '' && channelType !== 'auto') {
            if (action === 'edit') {
                link = '/pagemaker/page-maker.html?page=' + zone.value;
            } else {
                link = 'http://www7.ftchinese.com/m/corp/preview.html?pageid=' + zone.value;
            }
        } else {
            if (action === 'edit') {
                if (channelType === 'auto') {
                    alert ('Channel should be set as manual before you can edit! ');
                } else {
                    alert ('Zone is empty! You are not able to edit the page! ');
                }
                return;
            } else {
                var linkEle = this.parentElement.parentElement.parentElement.querySelector('[data-key=link]');
                var tagEle = this.parentElement.parentElement.parentElement.querySelector('[data-key=tag]');
                var titleEle = this.parentElement.parentElement.parentElement.querySelector('[data-key=title]');
                if (linkEle && linkEle.value && linkEle.value !== '') {
                    link = linkEle.value;
                } else if (tagEle && tagEle.value && tagEle.value !== '') {
                    link = 'http://www7.ftchinese.com/tag/' + tagEle.value;
                } else if (titleEle && titleEle.value && titleEle.value !== '') {
                    link = 'http://www7.ftchinese.com/tag/' + titleEle.value;
                } else {
                    alert ('You have not put in link, tag, title, or zone yet! ');
                    return;
                }
            }
        }
        window.open(link, '_blank', '');
    });

    $('body').on('click', '.preview-on-device', function () {
        var hostValue = $(this).attr('data-host');
        var url = hostValue + '/m/corp/preview.html?pageid=' + getURLParameter('page');
        var w = $(this).attr('data-width') || $(window).width();
        var h = $(this).attr('data-height') || $(window).height();
        var viewValue = $(this).attr('data-view') || '';
        if (viewValue !== '') {
            url += '&view=' + viewValue;
        }
        window.open(url, 'newwindow', 'height=' + h + ',width=' + w + ',top=0,left=0,toolbar=no,menubar=no,resizable=no,scrollbars=yes,location=no, status=no');
    });

    $('body').on('click', '.item .item-title, .relative-item .relative-title, .lists-header', function () {
        if ($(this).parent().hasClass('expanded')) {
            $(this).parent().removeClass('expanded');
            $(this).parent().attr('draggable', true);
        } else {
            $(this).parent().addClass('expanded');
            $(this).parent().removeAttr('draggable');
        }
    });


    $('body').on('click', '.section-header', function () {
        var sectionContainer = $(this).parentsUntil($('.sections'), '.section-container');
        if (sectionContainer.hasClass('expanded')) {
            sectionContainer.removeClass('expanded');
        } else {
            sectionContainer.addClass('expanded');
        }
    });

    $('body').on('click', '.remove-item, .remove-relative, .remove-lists', function () {
        $(this).parent().slideUp(500, function () {
            $(this).remove();
            updateAllTitles();
        });
    });

    $('body').on('click', '.remove-section', function () {
        $(this).parentsUntil($('.sections'), '.section-container').slideUp(500, function () {
            $(this).remove();
            updateAllTitles();
        });
    });

    $('body').on('click', '.clone-section', function () {
        $(this).parentsUntil($('.sections'), '.section-container').slideDown(500, function () {
            console.log ($(this));
            $(this).clone().insertBefore($(this));
        });
    });

    $('body').on('click', '.clone-lists', function () {
        $(this).parentsUntil($('.lists-container'), '.lists-item').slideDown(500, function () {
            console.log ($(this));
            $(this).clone().insertBefore($(this));
        });
    });

    $('body').on('click', '.mail-section', function () {
        var sectionEle = $(this).parentsUntil($('.sections'), '.section-container');
        var subject = sectionEle.find('[data-key=title]').val();
        var sectionType = sectionEle.find('[data-key=type]').val();
        subject = sectionType + ': ' + subject;
        var body = window.location.href;
        sectionEle.find('[data-key]').each(function(){
            body += '\r\n%0D%0A' + $(this).attr('data-key') + ': ' + $(this).val();
        });
        var emails = sectionEle.find('[data-key=emails]').val() || '';
        emails = emails.replace(/[, ]+/g, ',');
        //console.log (emails);
        window.open('mailto:' + emails + '?subject=' + subject + '&body=' + body);
    });

    $('body').on('click', '#refresh-button', function () {
        searchAPI();
    });

    $('body').on('click', '.date-picker', function () {
        launchDatePicker(this);
    });

    $('body').on('click', '.multi-select', function () {
        launchMultiSelect(this);
    });

    $('body').on('click', '.impression-track', function () {
        launchImpressionTrack(this);
    });

    $('body').on('keyup', '#keywords-input', function(e){
        if(e.keyCode === 13) {
            searchAPI();
        }
    });

    // change section meta property
    $('body').on('change', '.section-inner>.meta-table .o-input-text', function () {
        updateSectionTitle($(this));
        validateDataFormat($(this));
    });

    // change list meta
    $('body').on('change', '.lists-item>.meta-table .o-input-text', function () {
        updateListTitle($(this));
        validateDataFormat($(this));
    });

    // change related story title
    $('body').on('change', '.item-info .o-input-text', function () {
        var obj = $(this).parentsUntil($('.lists-item .lists-container'), '.item');
        //console.log (obj);
        var title = obj.find('[name=headline]').val() || '';
        //console.log (title);
        obj.find('.item-title').html(title);
    });

    // change item title
    $('body').on('change', '.relative-info .o-input-text', function () {
        var obj = $(this).parentsUntil($('.relative-container'), '.relative-item');
        //console.log (obj);
        var title = obj.find('[name=headline]').val() || '';
        //console.log (title);
        obj.find('.relative-title').html(title);
    });

    // loading actions

    customPageJSON = getURLParameter('page');
    pageId = getURLParameter('id');
    if (customPageJSON !== null && customPageJSON !== '') {
        actionType = 'edit';
    } else if (customPageJSON !== null && customPageJSON !== '') {
        gApiUrlsLocal.home = 'api/page/' + customPageJSON + '.json';
        actionType = 'edit';
    } else {
        actionType = 'create';
    }

    if (window.location.hostname === 'localhost' || window.location.hostname.indexOf('192.168') === 0 || window.location.hostname.indexOf('10.113') === 0 || window.location.hostname.indexOf('127.0') === 0) {
        gApiUrls = gApiUrlsLocal;
    }

    $('#keywords-input').val(todaydate);

    if (actionType === 'edit') {
        jsonToDom(gApiUrls.home);
    } else if (actionType === 'create') {
        jsonToDom(gApiUrls.blank);
        $('.tab.all').click();
    }

    window.onbeforeunload = function() {
        $.ajax({
            type: 'get',
            url: '/falcon.php/homepage/unlock',
            async: false
        });
    };

})();