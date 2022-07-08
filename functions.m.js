//public functions of mobile pages

var FLAG = 2;

//收起与展开nav栏
var nav = document.querySelector('.nav');
var navBtn = document.querySelector('.navBtn');
var navFlag = 0;
navBtn.addEventListener("click", function () {
    if (navFlag === 0) {
        nav.style.animation = 'navUpFrame linear .2s forwards';
        navBtn.style.animation = 'navBtnDown linear .2s forwards';
        navFlag = 1;
    } else if (navFlag === 1) {
        nav.style.animation = 'navDownFrame linear .2s forwards';
        navBtn.style.animation = 'navBtnUp linear .2s forwards';
        navFlag = 0;
    }
})

//nav栏按钮点击后弹出对应界面
var webBtn = document.querySelector('.web');
var toolBtn = document.querySelector('.tool');
var setBtn = document.querySelector('.set');
var webPage = document.querySelector('.webPage');
var toolPage = document.querySelector('.toolPage');
var setPage = document.querySelector('.setPage');
var main = document.querySelector('.main');

var flagA = 0;
var flagB = 0;
var flagC = 0;

webBtn.addEventListener("click", function () {
    if (flagB === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        toolPage.style.animation = 'pageOut ease .5s forwards';
        flagB = 0;
    }
    if (flagC === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        setPage.style.animation = 'pageOut ease .5s forwards';
        flagC = 0;
    }

    if (flagA === 0) {
        main.style.animation = 'pageCome-main ease .5s forwards';
        webPage.style.animation = 'pageCome ease .5s forwards';
        flagA = 1;
    } else if (flagA === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        webPage.style.animation = 'pageOut ease .5s forwards';
        flagA = 0;
    }
})

toolBtn.addEventListener("click", function () {
    if (flagA === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        webPage.style.animation = 'pageOut ease .5s forwards';
        flagA = 0;
    }
    if (flagC === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        setPage.style.animation = 'pageOut ease .5s forwards';
        flagC = 0;
    }

    if (flagB === 0) {
        main.style.animation = 'pageCome-main ease .5s forwards';
        toolPage.style.animation = 'pageCome ease .5s forwards';
        flagB = 1;
    } else if (flagB === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        toolPage.style.animation = 'pageOut ease .5s forwards';
        flagB = 0;
    }
})

setBtn.addEventListener("click", function () {
    if (flagA === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        webPage.style.animation = 'pageOut ease .5s forwards';
        flagA = 0;
    }
    if (flagB === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        toolPage.style.animation = 'pageOut ease .5s forwards';
        flagB = 0;
    }

    if (flagC === 0) {
        main.style.animation = 'pageCome-main ease .5s forwards';
        setPage.style.animation = 'pageCome ease .5s forwards';
        flagC = 1;
    } else if (flagC === 1) {
        main.style.animation = 'pageOut-main ease .5s forwards';
        setPage.style.animation = 'pageOut ease .5s forwards';
        flagC = 0;
    }
})

//信息框
var logo = document.querySelector('.logo');
var info = document.querySelector('.info');
logo.addEventListener("mouseover", function() {
    // info.style.display = 'block';
    info.style.animation = 'infoCome ease .3s forwards';
})
info.addEventListener("mouseout", function() {
    // info.style.display = 'block';
    info.style.animation = 'infoOut ease .3s forwards';
})

//设置
var set1Opt = document.querySelector('.set1-option');
var set1Check = document.querySelector('.set1-check');
set1Check.addEventListener("click", function () {
    var set1 = document.querySelector('.set1-select').value;
    if (set1 === '1') {
        window.location = "index.m.html";
    } else if (set1 === '2') {
        window.location = "index.m.en.html";
    }
})

var set1Opt = document.querySelector('.set2-option');
var set1Check = document.querySelector('.set2-check');
var bgm = document.querySelector('.bgm');
set1Check.addEventListener("click", function () {
    var set2 = document.querySelector('.set2-select').value;
    if (set2 === '1') {
        bgm.play();
    } else if (set2 === '2') {
        bgm.pause();
    }
})

//工具
var tool1 = document.querySelector('.tool1');
var tool1Change = document.querySelector('.tool1-change');
tool1.addEventListener("click", function () {
    var sweep = setTimeout(function () {
        if (languageFlag === 1) {alert('缓存已清除');}
        else if (languageFlag === 2) {alert('The cache has been cleared.')}
        tool1Change.innerHTML = '0.0000 MB';
    }, 1234);
})