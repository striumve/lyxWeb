//public functions

// var languageFlag;
var deviceFlag;
var body = document.querySelector('body');

//全屏
document.querySelector(".full").onclick = function () {
    if (body.requestFullScreen) { // 正常浏览器 
        body.requestFullScreen();
    } else if (body.webkitRequestFullScreen) { // webkit 内核
        body.webkitRequestFullScreen();
    } else if (body.mozRequestFullScreen) { // moz
        body.mozRequestFullScreen();
    } else if (body.msRequestFullscreen) { // ms 微软  这里面有个坑 别掉进去了
        body.msRequestFullscreen();
    } else { // 欧朋
        body.oRequestFullScreen();
    }
}

//控制台互动
if (languageFlag === 1) {
    console.log('%c%s',
        'color: skyblue; font-weight:700', '\n\n\
    .-------------------------------------------------      \n\
    |   _          _          _      _           _          \n\
    |  | ||        \\ \\\\      / //    \\ \\\\       / //  \n\
    |  | ||         \\ \\\\    / //      \\ \\\\     / //   \n\
    |  | ||          \\ \\\\__/ //        \\ \\\\   / //    \n\
    |  | ||           \\_   _//          \\_\\\\_/ //       \n\
    |  | ||             | ||            / // \\ \\\\        \n\
    |  | ||             | ||           / //   \\ \\\\       \n\
    |  \\ \\\\______..     | ||          / //     \\ \\\\   \n\
    |   \\________||     \\_//         /_//       \\_\\\\   \n\
    *------------------------------------------------\n');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', '一切皆有可能。');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', '长风破浪会有时，直挂云帆济沧海。');
    console.error("错误：您正在呼吸");
    console.error("错误：您睁着眼睛");
    console.error("错误：您没有睡着");
    console.info("在下方输入“怎么办()”以查看可能的解决方案。\n注：应使用英文状态下的括号。直接复制也可以。");
} else if (languageFlag === 2) {
    console.log('%c%s',
        'color: skyblue; font-weight:700', '\n\
    .-------------------------------------------------      \n\
    |   _          _          _      _           _          \n\
    |  | ||        \\ \\\\      / //    \\ \\\\       / //  \n\
    |  | ||         \\ \\\\    / //      \\ \\\\     / //   \n\
    |  | ||          \\ \\\\__/ //        \\ \\\\   / //    \n\
    |  | ||           \\_   _//          \\_\\\\_/ //       \n\
    |  | ||             | ||            / // \\ \\\\        \n\
    |  | ||             | ||           / //   \\ \\\\       \n\
    |  \\ \\\\______..     | ||          / //     \\ \\\\   \n\
    |   \\________||     \\_//         /_//       \\_\\\\   \n\
    |-------------------------------------------------');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', 'Everything is possible.');
    console.error("error: You are breathing");
    console.error("error: Your eyes are open");
    console.error("error: You are not asleep");
    console.info("You can turn to the Chinese page to look for possible solution.");
}

function 怎么办() {
    console.log('-我怎么知道。\n\n人工智障并不知道怎么办。\n输入“滚()”以召唤人工智能。');
}

function 滚() {
    console.log('正在召唤人工智能……\n');
    setTimeout(function () {
        console.log('-走开，我在睡觉。等我睡醒了再说。\n\n');
        console.log('人工智能正在睡觉。\n请等他睡醒（大约需要114514小时），\n或者输入密码以叫醒他。格式：起床啦(密码)。');
    })
}

function 起床啦(pw) {
    if (pw != 114514) {
        console.log('密码错误。\n请按格式重新输入。');
    } else {
        console.log('！！！你居然知道密码\n\n-啊我醒了。我要吃饭。\n\n他要吃晚饭了。请等他吃完。');
        eat();
    }
}

function eat() {
    var eatNum = Math.floor(Math.random() * 3);
    var count = 1;
    console.log('他开始吃饭了。');
    var eating = setInterval(function () {
        eatNum = Math.floor(Math.random() * 3);
        if (eatNum === 0) {
            console.log('他吃了一口饭。(%d/100)', count);
        } else if (eatNum === 1) {
            console.log('他喝了一口汤。(%d/100)', count);
        } else {
            console.log('他吃了一口菜。(%d/100)', count);
        }
        count++;
        if (count > 100) {
            clearInterval(eating);
            setTimeout(function () {
                console.log('他吃完了。\n\n-没想到你居然这么有耐心！\n-那么，解决方法就是——\n（请稍等，他正在思考）');
                setTimeout(function () {
                    console.log('-不需要解决！');
                    setTimeout(function () {
                        console.log('\n嘿嘿\n\n祝你天天开心呀\n\n\\(≧▽≦*)o\n');
                    }, 1500)
                }, 8000);
            }, 2000)
        }
    }, 2000);
}

//信息框
var logo = document.querySelector('.logo');
var info = document.querySelector('.info');
var infoOff = document.querySelector('.infoOff');

function infoOutFrame() {
    if (themeFlag === 1) {
        info.style.animation = 'infoOut ease .3s both';
        setTimeout(function () {
            info.style.display = 'none';
        }, 150)
        infoFlag = 0;
    } else if (themeFlag === 2) {
        info.style.animation = 'infoOutNight ease .3s both';
        setTimeout(function () {
            info.style.display = 'none';
        }, 150)
        infoFlag = 0;
    }
}
infoOff.addEventListener("click", function () {
    infoOutFrame();
})
if (deviceFlag === 1) {
    logo.addEventListener("mouseover", function () {
        info.style.display = 'block';
        if (themeFlag === 1) {
            info.style.animation = 'infoCome ease .3s both';
        } else if (themeFlag === 2) {
            info.style.animation = 'infoComeNight ease .3s both';
        }
        infoFlag = 1;
    })
} else if (deviceFlag === 2) {
    logo.addEventListener("click", function () {
        info.style.display = 'block';
        if (themeFlag === 1) {
            info.style.animation = 'infoCome ease .3s both';
        } else if (themeFlag === 2) {
            info.style.animation = 'infoComeNight ease .3s both';
        }
        infoFlag = 1;
    })
}

//收起与展开nav栏
var nav = document.querySelector('.nav');
var navBtn = document.querySelector('.navBtn');
var sentenceA = document.querySelector('.sen');
var sentenceB = document.querySelector('.senChange');
var navFlag = 0;
navBtn.addEventListener("click", function () {
    if (navFlag === 0) {
        nav.style.animation = 'navUpFrame linear .2s both';
        navBtn.style.animation = 'navBtnDown linear .2s both';
        sentenceA.style.animation = 'senOut linear .2s both';
        sentenceB.style.animation = 'senOut2 linear .2s both';
        navFlag = 1;
    } else if (navFlag === 1) {
        nav.style.animation = 'navDownFrame linear .2s both';
        navBtn.style.animation = 'navBtnUp linear .2s both';
        sentenceA.style.animation = 'senCome linear .2s both';
        sentenceB.style.animation = 'senCome2 linear .2s both';
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
var hitokotoDiv = document.querySelector('.hitokoto');

var flagA = 0;
var flagB = 0;
var flagC = 0;
var infoFlag = 0;

function pageOut(name, btn) {
    main.style.animation = 'pageOut-main ease .5s both';
    name.style.animation = 'pageOut ease .5s both';
    hitokotoDiv.style.animation = 'hitokotoCome ease .5s both';
    btn.style.fontWeight = '100';
    sentenceA.style.animation = 'senCome linear .2s both';
    sentenceB.style.animation = 'senCome2 linear .2s both';
    if (name === webPage) {
        flagA = 0;
    }
    if (name === toolPage) {
        flagB = 0;
    }
    if (name === setPage) {
        flagC = 0;
    }
}

function pageCome(name, btn) {
    main.style.animation = 'pageCome-main ease .5s both';
    name.style.animation = 'pageCome ease .5s both';
    hitokotoDiv.style.animation = 'hitokotoOut ease .5s both';
    btn.style.fontWeight = '700';
    sentenceA.style.animation = 'senOut linear .2s both';
    sentenceB.style.animation = 'senOut2 linear .2s both';
    if (name === webPage) {
        flagA = 1;
    }
    if (name === toolPage) {
        flagB = 1;
    }
    if (name === setPage) {
        flagC = 1;
    }
}

webBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagB === 1) {
        pageOut(toolPage, toolBtn);
    }
    if (flagC === 1) {
        pageOut(setPage, setBtn);
    }

    if (flagA === 0) {
        pageCome(webPage, webBtn);
    } else if (flagA === 1) {
        pageOut(webPage, webBtn);
    }
})

toolBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage, webBtn);
    }
    if (flagC === 1) {
        pageOut(setPage, setBtn);
    }

    if (flagB === 0) {
        pageCome(toolPage, toolBtn);
    } else if (flagB === 1) {
        pageOut(toolPage, toolBtn);
    }
})

setBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage, webBtn);
    }
    if (flagB === 1) {
        pageOut(toolPage, toolBtn);
    }

    if (flagC === 0) {
        pageCome(setPage, setBtn);
    } else if (flagC === 1) {
        pageOut(setPage, setBtn);
    }
})

//浏览器界面
if (deviceFlag === 1) {
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    if (vw <= 800 || vh <= 500 || vw / vh >= 2.5 || vw / vh <= 0.5) {
        alert('请调整浏览器界面，不要过宽、过高、过于窄小，\n以获取最佳浏览体验。');
    }

}

//消息
var msg1 = document.querySelector('.msg1');
var msg1Title = document.querySelector('.msg1-title');
var msg1Btn = document.querySelector('.msg1-btn');
var msg1Detail = document.querySelector('.msg1-detail');
var msg2 = document.querySelector('.msg2');
var msg2Title = document.querySelector('.msg2-title');
var msg2Btn = document.querySelector('.msg2-btn');
var msg2Detail = document.querySelector('.msg2-detail');
var msg1Flag = 0;
var msg2Flag = 0;
var dates = new Date();
var month = dates.getMonth() + 1;
var tomorrow = dates.getDate() + 1;
var year = dates.getFullYear();
if (languageFlag === 1) {
    var msg1Date = document.querySelector('.msg1-detail-date');
    var msg2Date = document.querySelector('.msg2-detail-date');
    msg1Date.innerHTML = '请你在家长的陪伴下于' + year + '年' + month + '月' + tomorrow + '日下午12:00前到达中央广播电视台参与节目录制。';
    msg2Date.innerHTML = '请您于' + year + '年' + month + '月' + tomorrow + '日上午7:00至祁门门路与怀宁路交口向西100米 男生女生向前冲观众入口处检录并参加节目录制。';
} else if (languageFlag === 2) {
    var msg2Date = document.querySelector('.msg2-detail-date');
    msg2Date.innerHTML = 'Please arrive at Room 114514 of the Oxford University Trinity College at 7:30 am on ' + tomorrow + '/' + month + '/' + year + '.';
}

function showMsg() {
    var msgNum = Math.floor(Math.random() * 2);
    if (msgNum === 0) {
        msg1.style.display = 'block';
    } else if (msgNum === 1) {
        msg2.style.display = 'block';
    }
}
msg1Btn.addEventListener("click", function () {
    if (msg1Flag === 0) {
        if (deviceFlag === 1) {
            msg1.style.width = '30vw';
        } else if (deviceFlag === 2) {
            msg1.style.width = '60vw';
        }
        msg1.style.height = '40vh';
        msg1.style.overflow = 'auto';
        msg1Title.style.display = 'none';
        msg1Detail.style.display = 'block';
        if (languageFlag === 1) {
            msg1Btn.innerHTML = '关闭';
        } else if (languageFlag === 2) {
            msg1Btn.innerHTML = 'close';
        }
        msg1Flag = 1;
    } else if (msg1Flag === 1) {
        msg1.style.display = 'none';
    }
})
msg2Btn.addEventListener("click", function () {
    if (msg2Flag === 0) {
        if (deviceFlag === 1) {
            msg2.style.width = '30vw';
        } else if (deviceFlag === 2) {
            msg2.style.width = '60vw';
        }
        msg2.style.height = '40vh';
        msg2.style.overflow = 'auto';
        msg2Title.style.display = 'none';
        msg2Detail.style.display = 'block';
        if (languageFlag === 1) {
            msg2Btn.innerHTML = '关闭';
        } else if (languageFlag === 2) {
            msg2Btn.innerHTML = 'close';
        }
        msg2Flag = 1;
    } else if (msg2Flag === 1) {
        msg2.style.display = 'none';
    }
})

//拼图验证码

var shouldMove = false;
var captcha2 = document.querySelector('.captcha2');
var captcha2All = document.querySelector('.captcha2-scene');
var captcha2Handle = document.querySelector('.handle');
var captcha2Button = document.querySelector('.handle-span');
var captcha2Close = document.querySelector('.captcha2-btn');



if (deviceFlag === 1) {
    captcha2Button.addEventListener('mousedown', (e) => {
        shouldMove = true;
    })
    window.addEventListener('mousemove', (e) => {
        if (shouldMove) {
            var offsetLeft = captcha2Handle.getBoundingClientRect().left;
            var buttonWidth = captcha2Button.getBoundingClientRect().width;
            captcha2.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`);
        }
    })
    window.addEventListener('mouseup', (e) => {
        if (shouldMove) {
            var finalOffset = e.clientX - captcha2Handle.getBoundingClientRect().left;
            captcha2.style.setProperty('--moved', '0px');
            shouldMove = false;
            if (languageFlag === 1) {
                alert("图片未拼合，请重试");
            } else {
                alert("The image isn\'t matched. \nPlease try again.")
            }
        }
    })
} else if (deviceFlag === 2) {
    captcha2Button.addEventListener('touchstart', (e) => {
        shouldMove = true;
    })
    window.addEventListener('touchmove', (e) => {
        var vw = document.documentElement.clientWidth;
        if (shouldMove) {
            var offsetLeft = e.changedTouches[0].clientX;
            var buttonWidth = vw * (0.3 - 0.07); //30vw：大图片（.captcha2）距离左端长度；7vw：handle左移长度
            // console.log(offsetLeft);
            // captcha2Handle.getBoundingClientRect().left;
            // captcha2.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`);
            captcha2.style.setProperty('--moved', `${offsetLeft - buttonWidth + 3}px`); //3px：handle的border宽
        }
    })
    window.addEventListener('touchend', (e) => {
        if (shouldMove) {
            var finalOffset = e.clientX - captcha2Handle.getBoundingClientRect().left;
            captcha2.style.setProperty('--moved', '0px');
            shouldMove = false;
            if (languageFlag === 1) {
                alert("图片未拼合，请重试");
            } else {
                alert("The image isn\'t matched. \nPlease try again.")
            }
        }
    })
}

captcha2Close.addEventListener("click", function () {
    captcha2All.style.display = 'none';
})

//一言
if (languageFlag === 1) {
    var hitokoto = document.querySelector('.sentence');
    var from = document.querySelector('.resource');
    var hitokoto_jump = document.querySelector('.hitokoto-jump');
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
            hitokoto_jump.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            hitokoto.innerText = data.hitokoto
            from.innerText = '——' + data.from
        })
        .catch(console.error)
} else if (languageFlag === 2) {
    var hitokoto_and_weather = document.querySelector('.hitokoto');
    hitokoto_and_weather.style.display = 'none';
}

//天气
var weather_location_text = document.querySelector('.weather-location').value;
var weather_location_input = document.querySelector('.weather-location');
var weather_check = document.querySelector('.weather-check');
var weather_get = document.querySelector('.weather-get');
var weather_city = document.querySelector('.weather-city');
if (languageFlag === 1) {
    if (localStorage.weather != undefined) {
        weather_location_text = localStorage.weather;
        weather_location_input.value = localStorage.weather;
    }
    getWeather();
    weather_check.addEventListener("click", function () {
        weather_location_text = document.querySelector('.weather-location').value;
        getWeather();
        localStorage.setItem("weather", weather_location_text);
    });

    weather_get.addEventListener("click", function () {
        getLocation();
        // getWeather();
    })

    function getWeather() {
        fetch('https://geoapi.qweather.com/v2/city/lookup?&location=' + weather_location_text + '&key=f187e32108ce415bb12408e9a4d33e81')
            .then(response => response.json())
            .then(data => {
                if (data.code === '400') {
                    alert('获取数据失败\n400：错误的请求参数\n请联系我：QQ:1041095264');
                } else if (data.code === '401') {
                    alert('获取数据失败\n401：错误的key/数字签名/key类型\n请联系我：QQ:1041095264');
                } else if (data.code === '402') {
                    alert('获取数据失败\n402：请求次数过多，请于第二天重试\n我使用的是免费订阅\n若想要提供支持，请联系我：QQ:1041095264');
                } else if (data.code === '403') {
                    alert('获取数据失败\n403：无访问权限');
                } else if (data.code === '404') {
                    alert('获取数据失败\n404：查询的数据或地区不存在');
                } else if (data.code === '429') {
                    alert('获取数据失败\n429：请求过于频繁，请一分钟后重试');
                } else if (data.code === '500') {
                    alert('获取数据失败\n500：无响应或超时');
                } else if (data.code === '204') {
                    alert('获取数据失败\n204：该地区暂无数据');
                }
                weather_city.innerHTML = data.location[0].adm2 + data.location[0].name;
                fetch('https://devapi.qweather.com/v7/weather/3d?location=' + data.location[0].id + '&key=f187e32108ce415bb12408e9a4d33e81')
                    .then(response => response.json())
                    .then(data => {
                        var weather_tempMax = document.querySelector('.weather-tempMax');
                        var weather_tempMin = document.querySelector('.weather-tempMin');
                        var weather_textDay = document.querySelector('.weather-textDay');
                        var weather_textNight = document.querySelector('.weather-textNight');
                        var weather_precip = document.querySelector('.weather-precip');
                        var weather_sunrise = document.querySelector('.weather-sunrise');
                        var weather_sunset = document.querySelector('.weather-sunset');
                        var weather_moonrise = document.querySelector('.weather-moonrise');
                        var weather_moonset = document.querySelector('.weather-moonset');
                        var weather_moonPhase = document.querySelector('.weather-moonPhase');
                        var weather_windDirDay = document.querySelector('.weather-windDirDay');
                        var weather_windScaleDay = document.querySelector('.weather-windScaleDay');
                        var weather_windDirNight = document.querySelector('.weather-windDirNight');
                        var weather_windScaleNight = document.querySelector('.weather-windScaleNight');
                        var weather_vis = document.querySelector('.weather-vis');
                        var weather_humidity = document.querySelector('.weather-humidity');
                        weather_tempMax.innerText = data.daily[0].tempMax + '°C';
                        weather_tempMin.innerText = data.daily[0].tempMin + '°C';
                        weather_textDay.innerText = data.daily[0].textDay;
                        weather_textNight.innerText = data.daily[0].textNight;
                        weather_precip.innerText = data.daily[0].precip + 'mm';
                        weather_sunrise.innerText = data.daily[0].sunrise;
                        weather_sunset.innerText = data.daily[0].sunset;
                        weather_moonrise.innerText = data.daily[0].moonrise;
                        weather_moonset.innerText = data.daily[0].moonset;
                        weather_moonPhase.innerText = data.daily[0].moonPhase;
                        weather_windDirDay.innerText = data.daily[0].windDirDay;
                        weather_windScaleDay.innerText = data.daily[0].windScaleDay + '级';
                        weather_windDirNight.innerText = data.daily[0].windDirNight;
                        weather_windScaleNight.innerText = data.daily[0].windScaleNight + '级';
                        weather_vis.innerText = data.daily[0].vis + 'km';
                        weather_humidity.innerText = data.daily[0].humidity + '%';
                    })
                    .catch(console.error)
            })
            .catch(console.error)
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("浏览器不支持地理定位。");
        }
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息不可用");
                break;
            case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
        }
    }

    function showPosition(position) {
        var lag = position.coords.longitude; //经度
        lag = lag.toFixed(2);
        var lat = position.coords.latitude; //纬度
        lat = lat.toFixed(2);
        weather_location_input.value = lag + ',' + lat;
        // alert(lat +','+lag);
    }
}

//工具
//tool1：清除缓存
var tool1 = document.querySelector('.tool1');
var tool1Change = document.querySelector('.tool1-change');
tool1.addEventListener("click", function () {
    localStorage.clear();
    body.style.cursor = 'wait';
    setTimeout(function () {
        body.style.cursor = 'default';
        if (languageFlag === 1) {
            alert('缓存已清除');
        } else if (languageFlag === 2) {
            alert('The cache has been cleared.')
        }
        tool1Change.innerHTML = '0.0000 MB';
    }, 1234);
})

// var tool2In = document.querySelector('.tool2-input');
// var tool2Out = document.querySelector('.tool2-output');
// var tool2Check = document.querySelector('.tool2-check');
// var tool2Middle = '$$ ' + tool2In.value + ' $$';
// tool2Check.addEventListener("click", function () {
//     
//     tool2Out.innerHTML = tool2Middle;
// });

//tool3: 意见反馈
var tool3 = document.querySelector('.tool3-check');
tool3.addEventListener("click", function () {
    if (languageFlag === 1) {
        alert("发送失败。");
    } else if (languageFlag === 2) {
        alert("Falied.");
    }
})

//tool4：注册账号
var tool4 = document.querySelector('.tool4-check');
tool4.addEventListener("click", function () {
    captcha2All.style.display = 'block';
    // if (languageFlag === 1) {
    //     alert("您还没有注册。\n您需要先注册账号后才能注册账号。");
    // } else if (languageFlag === 2) {
    //     alert("You have not registered. \nYou need to register an account before you can register an account.");
    // }
})

//tool5：生僻字读音查询
var tool5 = document.querySelector('.tool5-check');
var tool5Change = document.querySelector('.tool5-output')
tool5.addEventListener("click", function () {
    if (languageFlag === 1) {
        tool5Change.innerHTML = '生shēng&emsp;僻pì&emsp;字zì'
    } else if (languageFlag === 2) {
        tool5Change.innerHTML = 'rare/reə/ word/wɜ:d/';
    }
})

//tool6：错误反馈
var tool6 = document.querySelector('.tool6-check');
tool6.addEventListener("click", function () {
    if (languageFlag === 1) {
        alert('什么？？？居然出错了？不可能的。肯定是你的问题。');
    } else if (languageFlag === 2) {
        alert('What??? Something went wrong? No way. It must be your problem.');
    }
})

//tool7：求直线解析式
var tool7Out = document.querySelector('.tool7-output');
var tool7Check = document.querySelector('.tool7-check');
var tool7OutK = document.querySelector('.tool7-out-y');
var tool7OutB = document.querySelector('.tool7-out-k');
var t7a;
var t7b;
var t7c;
var t7d;
var t7e;
var t7f;
var t7g;
var t7h;
var t7kFzOut;
var t7kFmOut;
var t7hFzOut;
var t7hFmOut;
var t7kFz; //k的分子
var t7kFm; //k的分母
var t7hFz; // y=kx+b 中的b已被占用，用h代替
var t7hFm;
var t7hFzLast, t7hFmLast, t7kFzLast, t7kFmLast;
tool7();
tool7Check.addEventListener("click", function () {
    // alert("1");
    tool7();
})

//约分
function yf1(m, n) {
    // 返回约分m/n后得到的分子m
    var m;
    var n;
    var a = m;
    var b = n;
    (a >= b) ? (a = m, b = n) : (a = n, b = m);
    if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
            if (m % i == 0 && n % i == 0) {
                m = m / i;
                n = n / i;
            }
        }
    }
    return m;
}

function yf2(m, n) {
    // 返回约分m/n后得到的分母n
    var m;
    var n;
    var a = m;
    var b = n;
    (a >= b) ? (a = m, b = n) : (a = n, b = m);
    if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
            if (m % i == 0 && n % i == 0) {
                m = m / i;
                n = n / i;
            }
        }
    }
    return n;
}

function tool7() {
    t7a = parseInt(document.querySelector('.tool7-a').value);
    t7b = parseInt(document.querySelector('.tool7-b').value);
    t7c = parseInt(document.querySelector('.tool7-c').value);
    t7d = parseInt(document.querySelector('.tool7-d').value);
    t7e = parseInt(document.querySelector('.tool7-e').value);
    t7f = parseInt(document.querySelector('.tool7-f').value);
    t7g = parseInt(document.querySelector('.tool7-g').value);
    t7h = parseInt(document.querySelector('.tool7-h').value);
    t7kFzOut = document.querySelector('.tool7-out-k-fz');
    t7kFmOut = document.querySelector('.tool7-out-k-fm');
    t7hFzOut = document.querySelector('.tool7-out-h-fz');
    t7hFmOut = document.querySelector('.tool7-out-h-fm');
    t7kFz = (t7b * t7f) * ((t7c * t7h) - (t7d * t7g));
    t7kFm = (t7d * t7h) * ((t7a * t7f) - (t7b * t7e));
    t7hFz = ((t7b * t7c * t7d * t7h) * ((t7a * t7f) - (t7b * t7e))) - ((t7a * t7b * t7d * t7f) * ((t7c * t7h) - (t7d * t7g)));
    t7hFm = (t7b * t7d * t7d * t7h) * ((t7a * t7f) - (t7b * t7e));
    // alert(t7kFz + '/' + t7kFm + ' k' + ' + ' + t7hFz + '/' + t7hFm);

    if (t7kFz <= 0 && t7kFm <= 0) {
        t7kFzLast = yf1((0 - t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (0 - t7kFm));
        tool7OutK.innerHTML = 'y =';
    }
    if (t7hFz <= 0 && t7hFm < 0) {
        t7hFzLast = yf1((0 - t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((0 - t7hFz), (0 - t7hFm));
        tool7OutB.innerHTML = 'x +';
    }
    if (t7kFz >= 0 && t7kFm >= 0) {
        t7kFzLast = yf1((t7kFz), (t7kFm));
        t7kFmLast = yf2((t7kFz), (t7kFm));
        tool7OutK.innerHTML = 'y =';
    }
    if (t7hFz >= 0 && t7hFm >= 0) {
        t7hFzLast = yf1((t7hFz), (t7hFm));
        t7hFmLast = yf2((t7hFz), (t7hFm));
        tool7OutB.innerHTML = 'x +';
    }
    if (t7kFz >= 0 && t7kFm <= 0) {
        t7kFzLast = yf1((t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((t7kFz), (0 - t7kFm));
        tool7OutK.innerHTML = 'y = -';
    }
    if (t7kFz <= 0 && t7kFm >= 0) {
        t7kFzLast = yf1((0 - t7kFz), (t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (t7kFm));
        tool7OutK.innerHTML = 'y = -';
    }
    if (t7hFz >= 0 && t7hFm <= 0) {
        t7hFzLast = yf1((t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((t7hFz), (0 - t7hFm));
        tool7OutB.innerHTML = 'x -';
    }
    if (t7hFz <= 0 && t7hFm >= 0) {
        t7hFzLast = yf1((0 - t7hFz), (t7hFm));
        t7hFmLast = yf2((0 - t7hFz), (t7hFm));
        tool7OutB.innerHTML = 'x -';
    }

    t7kFzOut.innerHTML = t7kFzLast;
    t7kFmOut.innerHTML = t7kFmLast;
    t7hFzOut.innerHTML = t7hFzLast;
    t7hFmOut.innerHTML = t7hFmLast;
};

var tool7Why = document.querySelector('.tool7-why');
var tool7Open = document.querySelector('.tool7-why-title');
var tool7Close = document.querySelector('.tool7-why-close');
tool7Open.addEventListener("click", function () {
    tool7Why.style.display = 'block';
    if (deviceFlag === 1) {
        tool7Why.style.animation = 'tool7Come ease-in-out .3s both';
    } else if (deviceFlag === 2) {
        tool7Why.style.animation = 'tool7ComeM ease-in-out .3s both';
    }
})
tool7Close.addEventListener("click", function () {
    if (deviceFlag === 1) {
        tool7Why.style.animation = 'tool7Out ease-in-out .3s both';
    } else if (deviceFlag === 2) {
        tool7Why.style.animation = 'tool7OutM ease-in-out .3s both';
    }
    setTimeout(function () {
        tool7Why.style.display = 'none';
    }, 300)
})

//tool8：登录
var tool8;
var tool8Url;
var tool8Check = document.querySelector('.tool8-check');
var logo = document.querySelector('.logo');
var infoLogo = document.querySelector('.info-headimg');
var infoNum = document.querySelector('.info-qqnum');
var infoName = document.querySelector('.info-qqname');
var captchaCode = '';
var inputCaptcha = document.querySelector('.inputCaptcha').value;
var qqName = '';
var qqPhotoUrl = '';
newCaptcha();
if (localStorage.signin != undefined) {
    getQQName(localStorage.signin);
    getQQPhoto(localStorage.signin);
    logo.style.background = 'url(' + qqPhotoUrl + ')';
    logo.style.backgroundSize = 'cover';
    infoLogo.style.background = 'url(' + qqPhotoUrl + ')';
    infoLogo.style.backgroundSize = 'cover';
    infoNum.innerHTML = localStorage.signin;
    document.querySelector('.tool8-right').value = localStorage.signin;
}
tool8Check.addEventListener("click", function () {
    inputCaptcha = document.querySelector('.inputCaptcha').value;
    if (inputCaptcha === captchaCode) {
        isTool8NaN = document.querySelector('.tool8-right').value;
        tool8 = parseInt(isTool8NaN);
        if (isTool8NaN === '') {
            if (languageFlag === 1) {
                alert('您已退出登录');
            } else if (languageFlag === 2) {
                alert('You have logged out');
            }
            if (languageFlag === 1) {
                infoName.innerHTML = '未登录';
            } else if (languageFlag === 2) {
                infoName.innerHTML = 'Not signed in';
            }
            tool8Url = 'logo.jpg';
            infoNum.innerHTML = '';
            localStorage.removeItem("signin");
        } else {
            getQQName(tool8);
            getQQPhoto(tool8);
            tool8Url = 'https://api.qqsuu.cn/api/qt?qq=' + tool8;
            logo.style.background = 'url(' + qqPhotoUrl + ')';
            logo.style.backgroundSize = 'cover';
            infoLogo.style.background = 'url(' + qqPhotoUrl + ')';
            infoLogo.style.backgroundSize = 'cover';
            infoNum.innerHTML = tool8;
            if (languageFlag === 1) {
                alert("登录成功");
            } else if (languageFlag === 2) {
                alert("Successfully sign in")
            }
            localStorage.setItem("signin", tool8);
            setTimeout(function () {
                showMsg();
            }, 1234);
        }
    } else {
        if (languageFlag === 1) {
            alert('验证码错误');
        } else if (languageFlag === 2) {
            alert("The captcha is incorrect.");
        }
        newCaptcha();
    }
})

function getQQName(num) {
    $.ajax({
        // url: "https://api.qqsuu.cn/api/dm-qq.info?qq=" + num,
        url: "https://api.uomg.com/api/qq.info?qq=" + num,
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result["data"].name, result["data"].avatar);
            qqName = result.name;
            infoName.innerHTML = qqName;
        },
        error: function () {
            alert("QQ昵称获取失败");
        }
    });
}

function getQQPhoto(num) {
    qqPhotoUrl = "https://q3.qlogo.cn/headimg_dl?dst_uin=" + num + "&spec=100";
    /*
    $.ajax({
        // url: "https://api.qqsuu.cn/api/dm-qq.info?qq=" + num,
        // url: "https://tenapi.cn/bilibili/?uid=" + num,
        // url: "https://tenapi.cn/wether/?city=北京",
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result["data"].name, result["data"].avatar);
            qqPhotoUrl = result["data"].imgurl;
            // alert(result["data"].imgurl)
        },
        error: function () {
            // alert("QQ头像获取失败");
        }
    });
    */


}

document.querySelector('.captcha').addEventListener("click", function () {
    newCaptcha();
    // alert(captchaCode);
})

function newCaptcha() {
    let captcha2 = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 6, //线条数量
        dotR: 2, //点的半径
        dotNum: 25, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 30, //字体大小
        fontFamily: ['consolas'], //字体类型
        fontStyle: 'fill', //字体绘制方法，有fill和stroke
        content: 'abcdefghijklmnopqrstuvwxyz0123456789', //验证码内容
        length: 6 //验证码长度
    }); // 传值
    captcha2.draw(document.querySelector('.captcha'), r => {
        captchaCode = r;
        // console.log(captchaCode);
    });
}

//设置
//set1：语言
var set1Opt = document.querySelector('.set1-option');
var set1Check = document.querySelector('.set1-check');
var set1 = document.querySelector('.set1-select').value;

function set1Change() {
    set1 = document.querySelector('.set1-select').value;
    if (deviceFlag === 1) {
        if (set1 === '1') {
            window.location = "index.html";
        } else if (set1 === '2') {
            window.location = "index.en.html";
        } else if (set1 === '3') {
            window.location = '403.html';
        }
    } else if (deviceFlag === 2) {
        if (set1 === '1') {
            window.location = "index.m.html";
        } else if (set1 === '2') {
            window.location = "index.m.en.html";
        } else if (set1 === '3') {
            window.location = "403.html";
        }
    }

}
set1Check.addEventListener("click", function () {
    set1Change();
})

//set2：音乐
var set2Opt = document.querySelector('.set2-option');
var set2Opt1 = document.querySelector('.set2-option1');
var set2Opt2 = document.querySelector('.set2-option2');
var set2Check = document.querySelector('.set2-check');
var bgm = document.querySelector('.bgm');
var set2 = document.querySelector('.set2-select').value;
if (localStorage.set2 != undefined) {
    if (localStorage.set2 === '1') {
        bgm.play();
        set2Opt1.selected = true;
    } else if (localStorage.set2 === '2') {
        bgm.pause();
        set2Opt2.selected = true;
    }
}
set2Check.addEventListener("click", function () {
    set2 = document.querySelector('.set2-select').value;
    if (set2 === '1') {
        bgm.play();
        set2Opt1.selected = true;
    } else if (set2 === '2') {
        bgm.pause();
        set2Opt2.selected = true;
    }
    localStorage.setItem("set2", set2);

})

//set3：模式
var themeFlag = 1;
var night1 = document.querySelector('.nav');
var night2 = document.querySelector('.info');
var night3 = document.querySelector('.senChange');
var night4 = document.querySelector('.pageTitle1');
var night5 = document.querySelector('.navNight1');
var night6 = document.querySelector('.navNight2');
var night7 = document.querySelector('.navNight3');
var night8 = document.querySelector('.navNight4');
var night9 = document.querySelector('.navBtn');
var night10 = document.querySelector('.pageTitle2');
var night11 = document.querySelector('.pageTitle3');
var night12 = document.querySelector('.infoNight1');
var night13 = document.querySelector('.infoNight2');
var night14 = document.querySelector('.infoNight3');
var night15 = document.querySelector('.infoNight4');
var night16 = document.querySelector('.infoNight5');

var set3Opt = document.querySelector('.set3-option');
var set3Opt1 = document.querySelector('.set3-option1');
var set3Opt2 = document.querySelector('.set3-option2');
var set3Check = document.querySelector('.set3-check');
var main = document.querySelector('.main');
var set3 = document.querySelector('.set3-select').value;

if (localStorage.set3 != undefined) {
    if (localStorage.set4 != undefined) {
        if (localStorage.set4 === '1') {
            themeFlag = 1;
            day();
            set4Opt1.selected = true;
            if (localStorage.set3 === '1') {
                main.style.background = 'url(background.jpg)';
                main.style.backgroundSize = 'cover';
                set3Opt1.selected = true;
            } else if (localStorage.set3 === '2') {
                main.style.background = 'url(background2.jpg)';
                main.style.backgroundSize = 'cover';
                set3Opt2.selected = true;
            }
        } else if (localStorage.set4 === '2') {
            themeFlag = 2;
            night();
            // set4Opt2.selected = true;
            if (localStorage.set3 === '1') {
                main.style.background = 'url(background_night.jpg)';
                main.style.backgroundSize = 'cover';
                set3Opt1.selected = true;
            } else if (localStorage.set3 === '2') {
                main.style.background = 'url(background_night2.jpg)';
                main.style.backgroundSize = 'cover';
                set3Opt2.selected = true;
            }
        }
    }
}

set3Check.addEventListener("click", function () {
    set3 = document.querySelector('.set3-select').value;
    if (themeFlag === 1) {
        if (set3 === '1') {
            main.style.background = 'url(background.jpg)';
            main.style.backgroundSize = 'cover';
            set3Opt1.selected = true;
        } else if (set3 === '2') {
            main.style.background = 'url(background2.jpg)';
            main.style.backgroundSize = 'cover';
            set3Opt2.selected = true;
        }
    } else if (themeFlag === 2) {
        if (set3 === '1') {
            main.style.background = 'url(background_night.jpg)';
            main.style.backgroundSize = 'cover';
            set3Opt1.selected = true;
        } else if (set3 === '2') {
            main.style.background = 'url(background_night2.jpg)';
            main.style.backgroundSize = 'cover';
            set3Opt2.selected = true;
        }
    }
    localStorage.setItem("set3", set3);
})

//set4：背景图片
// var set4Opt = document.querySelector('.set4-option');
var set4Opt1 = document.querySelector('.set4-option1');
var set4Opt2 = document.querySelector('.set4-option2');
var set4Check = document.querySelector('.set4-check');
var main = document.querySelector('.main');
// var load = document.querySelector('.load');
var set4 = document.querySelector('.set4-select').value;

function day() {
    if (localStorage.set3 === '1') {
        main.style.background = 'url(background.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt1.selected = true;
    } else if (localStorage.set3 === '2') {
        main.style.background = 'url(background2.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt2.selected = true;
    } else {
        main.style.background = 'url(background.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt1.selected = true;
    }
    // load.style.color = 'rgb(100, 100, 100)';
    main.style.backgroundSize = 'cover';
    night1.style.backgroundColor = 'rgba(255, 255, 255, .5)';
    night3.style.color = 'black';
    night4.style.color = 'black';
    night5.style.color = 'rgba(40, 75, 225, 0.6)';
    night6.style.color = 'rgba(40, 75, 225, 0.6)';
    night7.style.color = 'rgba(40, 75, 225, 0.6';
    night8.style.color = 'rgba(40, 75, 225, 0.6)';
    night9.style.color = 'rgba(40, 75, 225, 0.6)';
    night10.style.color = 'black';
    night11.style.color = 'black';
    night12.style.color = 'black';
    night13.style.color = 'black';
    night14.style.color = 'black';
    night15.style.color = 'black';
    night16.style.color = 'black';
    msg1.style.backgroundColor = 'white';
    msg2.style.backgroundColor = 'white';
    msg1.style.color = 'black';
    msg2.style.color = 'black';
    if (languageFlag === 1) {
        set3Opt1.innerHTML = '背景1(知乎@世尊逛人间)';
        set3Opt2.innerHTML = '背景2(电影 你的名字。)';
    } else if (languageFlag === 2) {
        set3Opt1.innerHTML = 'background1(Zhihu@世尊逛人间)';
        set3Opt2.innerHTML = 'background2(film: Your Name.)';
    }
}

function night() {
    if (localStorage.set3 === '1') {
        main.style.background = 'url(background_night.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt1.selected = true;
    } else if (localStorage.set3 === '2') {
        main.style.background = 'url(background_night2.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt2.selected = true;
    } else {
        main.style.background = 'url(background_night.jpg)';
        main.style.backgroundSize = 'cover';
        set3Opt1.selected = true;
    }
    // load.style.color = 'rgb(200, 200, 200)';
    main.style.backgroundSize = 'cover';
    night1.style.backgroundColor = 'rgba(255, 255, 255, .3)';
    night3.style.color = 'rgba(255, 255, 255, .7)';
    night4.style.color = 'rgba(255, 255, 255, .7)';
    night5.style.color = 'rgba(255, 255, 255, .7)';
    night6.style.color = 'rgba(255, 255, 255, .7)';
    night7.style.color = 'rgba(255, 255, 255, .7)';
    night8.style.color = 'rgba(255, 255, 255, .7)';
    night9.style.color = 'rgba(255, 255, 255, .7)';
    night10.style.color = 'rgba(255, 255, 255, .7)';
    night11.style.color = 'rgba(255, 255, 255, .7)';
    night12.style.color = 'rgba(255, 255, 255, .7)';
    night13.style.color = 'rgba(255, 255, 255, .7)';
    night14.style.color = 'rgba(255, 255, 255, .7)';
    night15.style.color = 'rgba(255, 255, 255, .7)';
    night16.style.color = 'rgba(255, 255, 255, .7)';
    msg1.style.backgroundColor = 'rgb(50, 50, 50)';
    msg2.style.backgroundColor = 'rgb(50, 50, 50)';
    msg1.style.color = 'white';
    msg2.style.color = 'white';
    if (languageFlag === 1) {
        set3Opt1.innerHTML = '背景1(知乎@马梦李)';
        set3Opt2.innerHTML = '背景2(知乎@爱做饭的程序员)';
    } else if (languageFlag === 2) {
        set3Opt1.innerHTML = 'background1(Zhihu@马梦李)';
        set3Opt2.innerHTML = 'background2(Zhihu@爱做饭的程序员)';
    }
    // set4Opt2.selected = true;
}
if (localStorage.set4 != undefined) {
    if (set4 === '1') {
        themeFlag = 1;
        day();
        set4Opt1.selected = true;
    } else if (set4 === '2') {
        themeFlag = 2;
        night();
        set4Opt2.selected = true;
    }
}
set4Check.addEventListener("click", function () {
    set4 = document.querySelector('.set4-select').value;
    if (set4 === '1') {
        themeFlag = 1;
        day();
        set4Opt1.selected = true;
    } else if (set4 === '2') {
        themeFlag = 2;
        night();
        set4Opt2.selected = true;
    }
    localStorage.setItem("set4", set4);
})

if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    night();
    set4Opt2.selected = true;
}

//set5：文案内容
if (languageFlag === 1) {
    var set5Opt = document.querySelector('.set5-option');
    var set5Opt1 = document.querySelector('.set5-option1');
    var set5Opt2 = document.querySelector('.set5-option2');
    var set5Check = document.querySelector('.set5-check');
    var set5 = document.querySelector('.set5-select').value;
    var senMode = 0;
    if (localStorage.set5 != undefined) {
        if (localStorage.set5 === '1') {
            senMode = 0;
            set5Opt1.selected = true;
        } else if (localStorage.set5 === '2') {
            senMode = 1;
            set5Opt2.selected = true;
        }
    }
    set5Check.addEventListener("click", function () {
        set5 = document.querySelector('.set5-select').value;
        if (set5 === '1') {
            senMode = 0;
            localStorage.setItem("set5", set5);
        } else if (set5 === '2') {
            senMode = 1;
            localStorage.setItem("set5", set5);
        }
    })
}