var FLAG = 2;
//收起与展开nav栏
var up = document.querySelector('.navUp');
var nav = document.querySelector('.nav');
var down = document.querySelector('.navDown');
up.addEventListener("click", function () {
    nav.style.animation = 'navUpFrame linear .2s forwards';
    down.style.display = 'block';
    down.addEventListener("click", function () {
        nav.style.animation = 'navDownFrame linear .2s forwards';
        down.style.display = 'none';
    })
})

//nav栏按钮点击后弹出对应界面
var webBtn = document.querySelector('.web');
var toolBtn = document.querySelector('.tool');
var setBtn = document.querySelector('.set');
var webPage = document.querySelector('.webPage');
var toolPage = document.querySelector('.toolPage');
var setPage = document.querySelector('.setPage');

var flagA = 0;
var flagB = 0;
var flagC = 0;

webBtn.addEventListener("click", function () {
    if (flagB === 1) {
        toolPage.style.animation = 'pageOut ease .2s forwards';
        flagB = 0;
    }
    if (flagC === 1) {
        setPage.style.animation = 'pageOut ease .2s forwards';
        flagC = 0;
    }

    if (flagA === 0) {
        webPage.style.animation = 'pageCome ease .2s forwards';
        flagA = 1;
    } else if (flagA === 1) {
        webPage.style.animation = 'pageOut ease .2s forwards';
        flagA = 0;
    }
})

toolBtn.addEventListener("click", function () {
    if (flagA === 1) {
        webPage.style.animation = 'pageOut ease .2s forwards';
        flagA = 0;
    }
    if (flagC === 1) {
        setPage.style.animation = 'pageOut ease .2s forwards';
        flagC = 0;
    }

    if (flagB === 0) {
        toolPage.style.animation = 'pageCome ease .2s forwards';
        flagB = 1;
    } else if (flagB === 1) {
        toolPage.style.animation = 'pageOut ease .2s forwards';
        flagB = 0;
    }
})

setBtn.addEventListener("click", function () {
    if (flagA === 1) {
        webPage.style.animation = 'pageOut ease .2s forwards';
        flagA = 0;
    }
    if (flagB === 1) {
        toolPage.style.animation = 'pageOut ease .2s forwards';
        flagB = 0;
    }

    if (flagC === 0) {
        setPage.style.animation = 'pageCome ease .2s forwards';
        flagC = 1;
    } else if (flagC === 1) {
        setPage.style.animation = 'pageOut ease .2s forwards';
        flagC = 0;
    }
})

//按格式获取当前时间(日期)
//未完成
function getNowDate() {
    var getdate = new Date();
    var year = getdate.getFullYear();
    var month = getdate.getMonth() + 1;
    var date = getdate.getDate();
    var day = getdate.getDay();
    var hour = getdate.getHours();
    var minute = getdate.getMinutes();
    var chiday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var chiday_en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var outday = chiday[day];
    var output = year + '年' + month + '月' + date + '日' + ' ' + outday + '<br>' + hour + ':' + minute;
    var outday_en = chiday_en[day];
    var output_en = month + ',' + date + ',' + year + ' ' + outday_en + '<br>' + hour + ':' + minute;
    if (FLAG === 0) {
        console.log('今天是' + output);
        return output;
    } else if (FLAG === 1) {
        console.log('It\'s' + output + 'today.');
        return output_en;
    }
}

//显示时间
var showTime = document.querySelector('.time');
showTime.innerHTML = getNowDate();
var timeTimer = setInterval(function () {
    showTime.innerHTML = getNowDate();
}, 10000);

//设置
var set1 = document.querySelector('.set1');
var change1_set1 = document.querySelector('#set1-chooser');
set1.addEventListener("click", function () {
    if (FLAG === 0) {
        window.location = "index.en.html";
        change1_set1.style.width = '7vh';
        change1_set1.style.left = 'auto';
        change1_set1.style.right = '0vh';
    } else if (FLAG === 1) {
        window.location = "index.html";
        change1_set1.style.width = '8vh';
        change1_set1.style.right = 'auto';
        change1_set1.style.left = '0vh';
    }
})