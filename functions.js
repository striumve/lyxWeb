//public functions

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
var infoFlag = 0;

function pageOut(name) {
    main.style.animation = 'pageOut-main ease .5s forwards';
    name.style.animation = 'pageOut ease .5s forwards';
    if (name === webPage) {flagA = 0}
    if (name === toolPage) {flagB = 0}
    if (name === setPage) {flagC = 0}
}

function pageCome(name) {
    main.style.animation = 'pageCome-main ease .5s forwards';
    name.style.animation = 'pageCome ease .5s forwards';
    if (name === webPage) {flagA = 1}
    if (name === toolPage) {flagB = 1}
    if (name === setPage) {flagC = 1}
}

webBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagB === 1) {
        pageOut(toolPage);
    }
    if (flagC === 1) {
        pageOut(setPage);
    }

    if (flagA === 0) {
        pageCome(webPage);
    } else if (flagA === 1) {
        pageOut(webPage);
    }
})

toolBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage);
    }
    if (flagC === 1) {
        pageOut(setPage);
    }

    if (flagB === 0) {
        pageCome(toolPage);
    } else if (flagB === 1) {
        pageOut(toolPage);
    }
})

setBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage);
    }
    if (flagB === 1) {
        pageOut(toolPage);
    }

    if (flagC === 0) {
        pageCome(setPage);
    } else if (flagC === 1) {
        pageOut(setPage);
    }
})

//设置
var set2Opt = document.querySelector('.set2-option');
var set2Check = document.querySelector('.set2-check');
var bgm = document.querySelector('.bgm');
set2Check.addEventListener("click", function () {
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
        if (languageFlag === 1) {
            alert('缓存已清除');
        } else if (languageFlag === 2) {
            alert('The cache has been cleared.')
        }
        tool1Change.innerHTML = '0.0000 MB';
    }, 1234);
})

var tool2In = document.querySelector('.tool2-input');
var tool2Out = document.querySelector('.tool2-output');
var tool2Timer = setInterval(function () {
    // 没啥用
    // tool2Out.innerHTML = '$$ ' + tool2In.value + ' $$';
}, 1000);

var tool3 = document.querySelector('.tool3-check');
tool3.addEventListener("click", function() {
    alert("发送失败。");
})