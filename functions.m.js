//public functions of mobile pages

var FLAG = 1;

//信息框
var logo = document.querySelector('.logo');
var info = document.querySelector('.info');
var infoOff = document.querySelector('.infoOff');
function infoOutFrame() {
    info.style.animation = 'infoOut ease .3s forwards';
    var infoSleep = setTimeout(function () {
        info.style.display = 'none';
    }, 150)
    infoFlag = 0;
}
infoOff.addEventListener("click", function() {
    infoOutFrame();
})
logo.addEventListener("click", function () {
    info.style.display = 'block';
    info.style.animation = 'infoCome ease .3s forwards';
    infoFlag = 1;
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
    } else if (set1 === '3') {
        window.location = "403.html";
    }
})