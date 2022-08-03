//显示时间(日期) 及 分时问候功能
var welcome = document.querySelector('#welcome-1');
var showPoem = document.querySelector("#poem");
var date = document.querySelector("#date-1");

//显示当前时间(日期)
function getNowDate() {
    var getdate = new Date();
    var year = getdate.getFullYear();
    var month = getdate.getMonth() + 1;
    var date = getdate.getDate();
    var day = getdate.getDay();
    var chiday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var outday = chiday[day];
    var output = year + '年' + month + '月' + date + '日' + ' ' + outday;
    console.log('今天是' + output);
    return output;
}
//分时问候.左边
function welcomeByTime() {
    var getdate = new Date();
    var hour = getdate.getHours();
    var sayHi;
    if (hour <= 4 || hour >= 19) {
        sayHi = '晚上好！';
    }
    if (hour >= 5 && hour <= 11) {
        sayHi = '上午好！';
    }
    if (hour >= 12 && hour <= 13) {
        sayHi = '中午好！';
    }
    if (hour >= 14 && hour <= 16) {
        sayHi = '下午好！';
    }
    if (hour >= 17 && hour <= 18) {
        sayHi = '傍晚好！';
    }
    return sayHi;
}
//分时问候.右边（诗句）
function poemByTime() {
    var getdate = new Date();
    var hour = getdate.getHours();
    var poem;
    if (hour <= 4 || hour >= 19) {
        poem = '露从今夜白，月是故乡明。';
        showPoem.href = 'https://so.gushiwen.cn/shiwenv_ad6f7cfa10c2.aspx';
    }
    if (hour >= 5 && hour <= 7) {
        poem = '清晨入古寺,初日照高林。';
        showPoem.href = 'https://so.gushiwen.cn/shiwenv_e2890c61279c.aspx';
    }
    if (hour >= 8 && hour <= 11) {
        poem = '一年之计在于春，一日之计在于晨。';
        showPoem.href = 'https://so.gushiwen.cn/mingju/juv_0b9bcd3d3a7b.aspx';
    }
    if (hour >= 12 && hour <= 13) {
        poem = '云淡风轻过午天，傍花随柳过前川。';
        showPoem.href = 'https://so.gushiwen.cn/shiwenv_45fe7c553da8.aspx';
    }
    if (hour >= 14 && hour <= 16) {
        poem = '午后郊园静，晴来景物新。';
        showPoem.href = 'https://so.gushiwen.cn/shiwenv_ee3fe413887f.aspx';
    }
    if (hour >= 17 && hour <= 18) {
        poem = '朱雀桥边野草花，乌衣巷口夕阳斜。';
        showPoem.href = 'https://so.gushiwen.cn/shiwenv_8b671db8c10d.aspx';
    }
    return poem;
}
welcome.innerHTML = welcomeByTime();
showPoem.innerHTML = poemByTime();
date.innerHTML = getNowDate();


// 音乐播放器
// 以下那堆……俗称……shit山 代码
var play1 = document.getElementById("play1");
var play2 = document.getElementById("play2");
var play3 = document.getElementById("play3");
var play4 = document.getElementById("play4");
var play5 = document.getElementById("play5");
var play6 = document.getElementById("play6");
var play7 = document.getElementById("play7");
var play8 = document.getElementById("play8");
var play9 = document.getElementById("play9");
var play10 = document.getElementById("play10");
var pause1 = document.getElementById("pause1");
var pause2 = document.getElementById("pause2");
var pause3 = document.getElementById("pause3");
var pause4 = document.getElementById("pause4");
var pause5 = document.getElementById("pause5");
var pause6 = document.getElementById("pause6");
var pause7 = document.getElementById("pause7");
var pause8 = document.getElementById("pause8");
var pause9 = document.getElementById("pause9");
var pause10 = document.getElementById("pause10");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
var player5 = document.getElementById("player5");
var player6 = document.getElementById("player6");
var player7 = document.getElementById("player7");
var player8 = document.getElementById("player8");
var player9 = document.getElementById("player9");
var player10 = document.getElementById("player10");

player2.play();
//自动播放

play1.onclick = function () {
    //start play
    play1.style.display = 'none';
    pause1.style.display = 'block';
    player1.play();
}
pause1.onclick = function () {
    //pause
    play1.style.display = 'block';
    pause1.style.display = 'none';
    player1.pause();
}
play2.onclick = function () {
    play2.style.display = 'none';
    pause2.style.display = 'block';
    player2.play();
}
pause2.onclick = function () {
    play2.style.display = 'block';
    pause2.style.display = 'none';
    player2.pause();
}
play3.onclick = function () {
    play3.style.display = 'none';
    pause3.style.display = 'block';
    player3.play();
}
pause3.onclick = function () {
    play3.style.display = 'block';
    pause3.style.display = 'none';
    player3.pause();
}
play4.onclick = function () {
    play4.style.display = 'none';
    pause4.style.display = 'block';
    player4.play();
}
pause4.onclick = function () {
    play4.style.display = 'block';
    pause4.style.display = 'none';
    player4.pause();
}
play5.onclick = function () {
    play5.style.display = 'none';
    pause5.style.display = 'block';
    player5.play();
}
pause5.onclick = function () {
    play5.style.display = 'block';
    pause5.style.display = 'none';
    player5.pause();
}
play6.onclick = function () {
    play6.style.display = 'none';
    pause6.style.display = 'block';
    player6.play();
}
pause6.onclick = function () {
    play6.style.display = 'block';
    pause6.style.display = 'none';
    player6.pause();
}
play7.onclick = function () {
    play7.style.display = 'none';
    pause7.style.display = 'block';
    player7.play();
}
pause7.onclick = function () {
    play7.style.display = 'block';
    pause7.style.display = 'none';
    player7.pause();
}
play8.onclick = function () {
    play8.style.display = 'none';
    pause8.style.display = 'block';
    player8.play();
}
pause8.onclick = function () {
    play8.style.display = 'block';
    pause8.style.display = 'none';
    player8.pause();
}
play9.onclick = function () {
    play9.style.display = 'none';
    pause9.style.display = 'block';
    player9.play();
}
pause9.onclick = function () {
    play9.style.display = 'block';
    pause9.style.display = 'none';
    player9.pause();
}
play10.onclick = function () {
    play10.style.display = 'none';
    pause10.style.display = 'block';
    player10.play();
}
pause10.onclick = function () {
    play10.style.display = 'block';
    pause10.style.display = 'none';
    player10.pause();
}

//音频进度条及时间显示
var audio1 = setInterval(function () {
    var nowTime = document.getElementById("player1").currentTime;
    var range = document.getElementById("timeline1");
    var show = document.getElementById("nowTime1");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio2 = setInterval(function () {
    var nowTime = document.getElementById("player2").currentTime;
    var range = document.getElementById("timeline2");
    var show = document.getElementById("nowTime2");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
    // console.log(nowTime);
}, 1000);
var audio3 = setInterval(function () {
    var nowTime = document.getElementById("player3").currentTime;
    var range = document.getElementById("timeline3");
    var show = document.getElementById("nowTime3");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio4 = setInterval(function () {
    var nowTime = document.getElementById("player4").currentTime;
    var range = document.getElementById("timeline4");
    var show = document.getElementById("nowTime4");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio5 = setInterval(function () {
    var nowTime = document.getElementById("player5").currentTime;
    var range = document.getElementById("timeline5");
    var show = document.getElementById("nowTime5");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio6 = setInterval(function () {
    var nowTime = document.getElementById("player6").currentTime;
    var range = document.getElementById("timeline6");
    var show = document.getElementById("nowTime6");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio7 = setInterval(function () {
    var nowTime = document.getElementById("player7").currentTime;
    var range = document.getElementById("timeline7");
    var show = document.getElementById("nowTime7");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio8 = setInterval(function () {
    var nowTime = document.getElementById("player8").currentTime;
    var range = document.getElementById("timeline8");
    var show = document.getElementById("nowTime8");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio9 = setInterval(function () {
    var nowTime = document.getElementById("player9").currentTime;
    var range = document.getElementById("timeline9");
    var show = document.getElementById("nowTime9");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);
var audio10 = setInterval(function () {
    var nowTime = document.getElementById("player10").currentTime;
    var range = document.getElementById("timeline10");
    var show = document.getElementById("nowTime10");
    range.value = nowTime;

    var minute = Math.floor(nowTime / 60);
    var second = Math.floor(nowTime - minute * 60);
    if (second >= 60) {
        second = 0;
    }
    show.innerHTML = minute + ':' + second;
}, 1000);

//音量控制
var volH1 = document.getElementById('volH1');
var volH2 = document.getElementById('volH2');
var volH3 = document.getElementById('volH3');
var volH4 = document.getElementById('volH4');
var volH5 = document.getElementById('volH5');
var volH6 = document.getElementById('volH6');
var volH7 = document.getElementById('volH7');
var volH8 = document.getElementById('volH8');
var volH9 = document.getElementById('volH9');
var volH10 = document.getElementById('volH10');
var volL1 = document.getElementById('volL1');
var volL2 = document.getElementById('volL2');
var volL3 = document.getElementById('volL3');
var volL4 = document.getElementById('volL4');
var volL5 = document.getElementById('volL5');
var volL6 = document.getElementById('volL6');
var volL7 = document.getElementById('volL7');
var volL8 = document.getElementById('volL8');
var volL9 = document.getElementById('volL9');
var volL10 = document.getElementById('volL10');
var bar1 = document.getElementById('vol1');
var bar2 = document.getElementById('vol2');
var bar3 = document.getElementById('vol3');
var bar4 = document.getElementById('vol4');
var bar5 = document.getElementById('vol5');
var bar6 = document.getElementById('vol6');
var bar7 = document.getElementById('vol7');
var bar8 = document.getElementById('vol8');
var bar9 = document.getElementById('vol9');
var bar10 = document.getElementById('vol10');

player1.volume = 0.5;
player2.volume = 0.5;
player3.volume = 0.5;
player4.volume = 0.5;
player5.volume = 0.5;
player6.volume = 0.5;
player7.volume = 0.5;
player8.volume = 0.5;
player9.volume = 0.5;
player10.volume = 0.5;

bar1.style.width = player1.volume * 100 + 'px';
bar2.style.width = player2.volume * 100 + 'px';
bar3.style.width = player3.volume * 100 + 'px';
bar4.style.width = player4.volume * 100 + 'px';
bar5.style.width = player5.volume * 100 + 'px';
bar6.style.width = player6.volume * 100 + 'px';
bar7.style.width = player7.volume * 100 + 'px';
bar8.style.width = player8.volume * 100 + 'px';
bar9.style.width = player9.volume * 100 + 'px';
bar10.style.width = player10.volume * 100 + 'px';

volH1.onclick = function () {
    player1.volume += 0.1;
    bar1.style.width = player1.volume * 100 + 'px';
}
volL1.onclick = function () {
    player1.volume -= 0.1;
    bar1.style.width = player1.volume * 100 + 'px';
}
volH2.onclick = function () {
    player2.volume += 0.1;
    bar2.style.width = player2.volume * 100 + 'px';
}
volL2.onclick = function () {
    player2.volume -= 0.1;
    bar2.style.width = player2.volume * 100 + 'px';
}
volH3.onclick = function () {
    player3.volume += 0.1;
    bar3.style.width = player3.volume * 100 + 'px';
}
volL3.onclick = function () {
    player3.volume -= 0.1;
    bar3.style.width = player3.volume * 100 + 'px';
}
volH4.onclick = function () {
    player4.volume += 0.1;
    bar4.style.width = player4.volume * 100 + 'px';
}
volL4.onclick = function () {
    player4.volume -= 0.1;
    bar4.style.width = player4.volume * 100 + 'px';
}
volH5.onclick = function () {
    player5.volume += 0.1;
    bar5.style.width = player5.volume * 100 + 'px';
}
volL5.onclick = function () {
    player5.volume -= 0.1;
    bar5.style.width = player5.volume * 100 + 'px';
}
volH6.onclick = function () {
    player6.volume += 0.1;
    bar6.style.width = player6.volume * 100 + 'px';
}
volL6.onclick = function () {
    player6.volume -= 0.1;
    bar6.style.width = player6.volume * 100 + 'px';
}
volH7.onclick = function () {
    player7.volume += 0.1;
    bar7.style.width = player7.volume * 100 + 'px';
}
volL7.onclick = function () {
    player7.volume -= 0.1;
    bar7.style.width = player7.volume * 100 + 'px';
}
volH8.onclick = function () {
    player8.volume += 0.1;
    bar8.style.width = player8.volume * 100 + 'px';
}
volL8.onclick = function () {
    player8.volume -= 0.1;
    bar8.style.width = player8.volume * 100 + 'px';
}
volH9.onclick = function () {
    player9.volume += 0.1;
    bar9.style.width = player9.volume * 100 + 'px';
}
volL9.onclick = function () {
    player9.volume -= 0.1;
    bar9.style.width = player9.volume * 100 + 'px';
}
volH10.onclick = function () {
    player10.volume += 0.1;
    bar10.style.width = player10.volume * 100 + 'px';
}
volL10.onclick = function () {
    player10.volume -= 0.1;
    bar10.style.width = player10.volume * 100 + 'px';
}