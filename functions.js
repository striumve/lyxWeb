//public functions

// var languageFlag;
var deviceFlag;

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
    if (modeFlag === 1) {
        info.style.animation = 'infoOut ease .3s forwards';
        var infoSleep = setTimeout(function () {
            info.style.display = 'none';
        }, 150)
        infoFlag = 0;
    } else if (modeFlag === 2) {
        info.style.animation = 'infoOutNight ease .3s forwards';
        var infoSleep = setTimeout(function () {
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
        if (modeFlag === 1) {
            info.style.animation = 'infoCome ease .3s forwards';
        } else if (modeFlag === 2) {
            info.style.animation = 'infoComeNight ease .3s forwards';
        }
        infoFlag = 1;
    })
} else if (deviceFlag === 2) {
    logo.addEventListener("click", function () {
        info.style.display = 'block';
        if (modeFlag === 1) {
            info.style.animation = 'infoCome ease .3s forwards';
        } else if (modeFlag === 2) {
            info.style.animation = 'infoComeNight ease .3s forwards';
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
        nav.style.animation = 'navUpFrame linear .2s forwards';
        navBtn.style.animation = 'navBtnDown linear .2s forwards';
        sentenceA.style.animation = 'senOut linear .2s forwards';
        sentenceB.style.animation = 'senOut2 linear .2s forwards';
        navFlag = 1;
    } else if (navFlag === 1) {
        nav.style.animation = 'navDownFrame linear .2s forwards';
        navBtn.style.animation = 'navBtnUp linear .2s forwards';
        sentenceA.style.animation = 'senCome linear .2s forwards';
        sentenceB.style.animation = 'senCome2 linear .2s forwards';
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

function pageOut(name, btn) {
    main.style.animation = 'pageOut-main ease .5s forwards';
    name.style.animation = 'pageOut ease .5s forwards';
    btn.style.fontWeight = '100';
    sentenceA.style.animation = 'senCome linear .2s forwards';
    sentenceB.style.animation = 'senCome2 linear .2s forwards';
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
    main.style.animation = 'pageCome-main ease .5s forwards';
    name.style.animation = 'pageCome ease .5s forwards';
    btn.style.fontWeight = '700';
    sentenceA.style.animation = 'senOut linear .2s forwards';
    sentenceB.style.animation = 'senOut2 linear .2s forwards';
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

//右下角句子
var sen = document.querySelector('.sen');
var senChn = document.querySelector('.senChange');
if (languageFlag === 1) {
    sentence();
}
senChn.addEventListener("click", function () {
    if (languageFlag === 1) {
        // senChn.style.animation = 'sentenceChange ease .3s forward';
        sentence();
    }
})

function sentence() {
    var senNum = Math.floor(Math.random() * 52);
    switch (senNum) {
        case 0:
            sen.innerHTML = '钥匙圈是非常实用的小工具，它可以让你，一次把所有钥匙都丢光。';
            break;
        case 1:
            sen.innerHTML = '世界上有很多出人意料的事，比如，你以为我会举个例子。';
            break;
        case 2:
            sen.innerHTML = '会呼吸的女孩子真的很加分。';
            break;
        case 3:
            sen.innerHTML = '俗话说得好：俗话说得好。';
            break;
        case 4:
            sen.innerHTML = '我前脚刚走，后脚就跟上了。';
            break;
        case 5:
            sen.innerHTML = '天气炎热，想玩水的朋友可以来我家洗碗。';
            break;
        case 6:
            sen.innerHTML = '如果你不丑的话，那肯定很帅吧。';
            break;
        case 7:
            sen.innerHTML = '把裤子放进冰箱，做一个冷裤的人。';
            break;
        case 8:
            sen.innerHTML = '为什么轮椅都是手摇，没有用脚蹬的呢？';
            break;
        case 9:
            sen.innerHTML = '白天：再熬夜我就是狗&emsp;<br>晚上：小狗应该也熬夜吧';
            break;
        case 10:
            sen.innerHTML = '人都是贪心的，<br>就像我一开始只想知道你叫什么，<br>后来还想知道你怎么叫。';
            break;
        case 11:
            sen.innerHTML = '好想关心你，可你老是不生病。';
            break;
        case 12:
            sen.innerHTML = '今天又拒绝了两个人，<br>看着她们失望的背影，我只能默默说声抱歉，<br>毕竟你们的楼盘和健身卡我真的买不起。';
            break;
        case 13:
            sen.innerHTML = '最近看牙医，医生问我怎么牙齿磨损这么严重，我说这些年都是咬着牙过来的。';
            break;
        case 14:
            sen.innerHTML = '一直很尊重金钱，没偷，没抢，没有。';
            break;
        case 15:
            sen.innerHTML = '今天想通了一个道理：有些道理就是想不通的。';
            break;
        case 16:
            sen.innerHTML = '忙碌了两个小时的王师傅决定吃康师傅。';
            break;
        case 17:
            sen.innerHTML = '别哭，注水的猪肉没人要。';
            break;
        case 18:
            sen.innerHTML = '早起真的可以做很多事，比如睡个回笼觉。';
            break;
        case 19:
            sen.innerHTML = '小明发高烧后找女神聊天，被女神的冷漠治好了。';
            break;
        case 20:
            sen.innerHTML = '我想告诉大家什么叫半途而';
            break;
        case 21:
            sen.innerHTML = '很担心自己以后老了怎么办，那些广场舞看起来好难啊。';
            break;
        case 22:
            sen.innerHTML = '老师说打雷下雨时不能在树下躲雨，于是小明爬到了树上。';
            break;
        case 23:
            sen.innerHTML = '骗我感情可以，但你不能骗我钱。';
            break;
        case 24:
            sen.innerHTML = '师傅你是做什么工作的？';
            break;
        case 25:
            sen.innerHTML = '“很高兴认识你”<br>“你高兴得太早了”';
            break;
        case 26:
            sen.innerHTML = '没有什么好送你的，就送你上路吧。';
            break;
        case 27:
            sen.innerHTML = '买西瓜的时候不可以拍拍打打，会惊动住在里面的夏天。';
            break;
        case 28:
            sen.innerHTML = '如果遇见你，要花掉所有运气，<br>那么请你离我远点，我过年要打牌。';
            break;
        case 29:
            sen.innerHTML = '是不是非要我学电焊，才能让你眼前一亮';
            break;
        case 30:
            sen.innerHTML = '懒人日记：算了，懒得写。';
            break;
        case 31:
            sen.innerHTML = '实不相瞒，我是个隐形的富豪，至今还没有找到自己的钱。';
            break;
        case 32:
            sen.innerHTML = '接下来的路你和她好好走，我坐车。';
            break;
        case 33:
            sen.innerHTML = '我对银行无语了，每次取钱都显示余额不足，没钱开什么银行？！';
            break;
        case 34:
            sen.innerHTML = '如果你实在饿了可以打电话给我，我吃点零食嚼给你听。';
            break;
        case 35:
            sen.innerHTML = '不要当着我的面说别人坏话，不然我也想说。';
            break;
        case 36:
            sen.innerHTML = '我的钱虽然不是大风刮来的,但很像大风刮走的。';
            break;
        case 37:
            sen.innerHTML = '有朋自远方来，必先苦其心志，<br>劳其筋骨，饿其体肤，空乏其身，<br>行拂乱其所为，鞭数十，驱之别院，<br>主人曰：不亦乐乎。';
            break;
        case 38:
            sen.innerHTML = '洗澡的时候突然给停水了，还好我灵机一动给花洒讲了个笑话，它直接笑喷。';
            break;
        case 39:
            sen.innerHTML = '吃货的人生就像一列火车，总结起来就是逛吃，逛吃，逛吃。';
            break;
        case 40:
            sen.innerHTML = '最近头上一直发痒，可能是要长脑子了。';
            break;
        case 41:
            sen.innerHTML = '仰天大笑出门去，归来倚仗自叹息。';
            break;
        case 42:
            sen.innerHTML = '垂死病中惊坐起，要留清白在人间。';
            break;
        case 43:
            sen.innerHTML = '老骥伏枥，志在千里。<br>横扫饥饿，做回自己。';
            break;
        case 44:
            sen.innerHTML = '洛阳亲友如相问，轻舟已过万重山。';
            break;
        case 45:
            sen.innerHTML = '老翁逾墙走，虽乘奔御风，不以疾也。';
            break;
        case 46:
            sen.innerHTML = '横眉冷对千夫指，回眸一笑百媚生。';
            break;
        case 47:
            sen.innerHTML = '垂死病中惊坐起，扶摇直上九万里。';
            break;
        case 48:
            sen.innerHTML = '可怜身上衣正单，将登太行雪满山。';
            break;
        case 49:
            sen.innerHTML = '老妪力虽衰，愿为市鞍马，从此替爷征。';
            break;
        case 50:
            sen.innerHTML = '今日听君歌一曲，谪居卧病浔阳城。';
            break;
        case 51:
            sen.innerHTML = '黄鹤一去不复返，飞入寻常百姓家。';
            break;
        default:
            break;
    }
}

//设置
var set1Opt = document.querySelector('.set1-option');
var set1Check = document.querySelector('.set1-check');
set1Check.addEventListener("click", function () {
    var set1 = document.querySelector('.set1-select').value;
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
})

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

var modeFlag = 1;
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

var set3Opt = document.querySelector('.set3-option');
var set3Opt1 = document.querySelector('.set3-option1');
var set3Opt2 = document.querySelector('.set3-option2');
var set3Check = document.querySelector('.set3-check');
var main = document.querySelector('.main');
set3Check.addEventListener("click", function () {
    var set3 = document.querySelector('.set3-select').value;
    if (modeFlag === 1) {
        if (set3 === '1') {
            main.style.background = 'url(background.jpg)';
            main.style.backgroundSize = 'cover';
            main.style.backgroundPosition = '0 0';
            set3Opt1.selected = true;
        } else if (set3 === '2') {
            main.style.background = 'url(background2.jpg)';
            main.style.backgroundSize = 'cover';
            main.style.backgroundPosition = '0 0';
            set3Opt2.selected = true;
        }
    } else if(modeFlag === 2) {
        if (set3 === '1') {
            main.style.background = 'url(background_night.jpg)';
            main.style.backgroundSize = 'cover';
            main.style.backgroundPosition = '0 0';
            set3Opt1.selected = true;
        } else if (set3 === '2') {
            main.style.background = 'url(background_night2.jpg)';
            main.style.backgroundSize = 'cover';
            main.style.backgroundPosition = '0 -200px';
            set3Opt2.selected = true;
        }
    }
})

var set4Opt = document.querySelector('.set4-option');
var set4Check = document.querySelector('.set4-check');
var main = document.querySelector('.main');
set4Check.addEventListener("click", function () {
    var set4 = document.querySelector('.set4-select').value;
    if (set4 === '1') {
        modeFlag = 1;
        main.style.background = 'url(background.jpg)';
        set3Opt1.selected = true;
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
        set3Opt1.innerHTML = '背景1(知乎@世尊逛人间)';
        set3Opt2.innerHTML = '背景2(电影 你的名字。)';
    } else if (set4 === '2') {
        modeFlag = 2;
        main.style.background = 'url(background_night.jpg)';
        set3Opt1.selected = true;
        main.style.backgroundSize = 'cover';
        night1.style.backgroundColor = 'rgba(255, 255, 255, .3)';
        night3.style.color = 'rgba(255, 255, 255, .6)';
        night4.style.color = 'rgba(255, 255, 255, .6)';
        night5.style.color = 'rgba(255, 255, 255, .6)';
        night6.style.color = 'rgba(255, 255, 255, .6)';
        night7.style.color = 'rgba(255, 255, 255, .6)';
        night8.style.color = 'rgba(255, 255, 255, .6)';
        night9.style.color = 'rgba(255, 255, 255, .6)';
        night10.style.color = 'rgba(255, 255, 255, .6)';
        night11.style.color = 'rgba(255, 255, 255, .6)';
        night12.style.color = 'white';
        night13.style.color = 'white';
        night14.style.color = 'white';
        night15.style.color = 'white';
        set3Opt1.innerHTML = '背景1(知乎@马梦李)';
        set3Opt2.innerHTML = '背景2(知乎@爱做饭的程序员)';
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

// var tool2In = document.querySelector('.tool2-input');
// var tool2Out = document.querySelector('.tool2-output');
// var tool2Check = document.querySelector('.tool2-check');
// var tool2Middle = '$$ ' + tool2In.value + ' $$';
// tool2Check.addEventListener("click", function () {
//     
//     tool2Out.innerHTML = tool2Middle;
// });

var tool3 = document.querySelector('.tool3-check');
tool3.addEventListener("click", function () {
    if (languageFlag === 1) {
        alert("发送失败。");
    } else if (languageFlag === 2) {
        alert("Falied.");
    }
})

var tool4 = document.querySelector('.tool4-check');
tool4.addEventListener("click", function () {
    if (languageFlag === 1) {
        alert("您还没有注册。\n您需要先注册账号后才能注册账号。");
    } else if (languageFlag === 2) {
        alert("You have not registered. \nYou need to register an account before you can register an account.");
    }
})

var tool5 = document.querySelector('.tool5-check');
var tool5Change = document.querySelector('.tool5-output')
tool5.addEventListener("click", function () {
    if (languageFlag === 1) {
        tool5Change.innerHTML = '生shēng&emsp;僻pì&emsp;字zì'
    } else if (languageFlag === 2) {
        tool5Change.innerHTML = 'rare/reə/ word/wɜ:d/';
    }
})

var tool6 = document.querySelector('.tool6-check');
tool6.addEventListener("click", function () {
    if (languageFlag === 1) {
        alert('什么？？？居然出错了？不可能的。肯定是你的问题。');
    } else if (languageFlag === 2) {
        alert('What??? Something went wrong? No way. It must be your problem.');
    }
})

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

    //约分
    function yf1(m, n) {
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
    if (t7kFz < 0 && t7kFm < 0) {
        t7kFzLast = yf1((0 - t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (0 - t7kFm));
        tool7OutK.innerHTML = 'y =';
    }
    if (t7hFz < 0 && t7hFm < 0) {
        t7hFzLast = yf1((0 - t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((0 - t7hFz), (0 - t7hFm));
        tool7OutB.innerHTML = 'x +';
    }
    if (t7kFz > 0 && t7kFm > 0) {
        t7kFzLast = yf1((t7kFz), (t7kFm));
        t7kFmLast = yf2((t7kFz), (t7kFm));
        tool7OutK.innerHTML = 'y =';
    }
    if (t7hFz > 0 && t7hFm > 0) {
        t7hFzLast = yf1((t7hFz), (t7hFm));
        t7hFmLast = yf2((t7hFz), (t7hFm));
        tool7OutB.innerHTML = 'x +';
    }
    if (t7kFz > 0 && t7kFm < 0) {
        t7kFzLast = yf1((t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((t7kFz), (0 - t7kFm));
        tool7OutK.innerHTML = 'y = -';
    }
    if (t7kFz < 0 && t7kFm > 0) {
        t7kFzLast = yf1((0 - t7kFz), (t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (t7kFm));
        tool7OutK.innerHTML = 'y = -';
    }
    if (t7hFz > 0 && t7hFm < 0) {
        t7hFzLast = yf1((t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((t7hFz), (0 - t7hFm));
        tool7OutB.innerHTML = 'x -';
    }
    if (t7hFz < 0 && t7hFm > 0) {
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
        tool7Why.style.animation = 'tool7Come ease-in-out .3s forwards';
    } else if (deviceFlag === 2) {
        tool7Why.style.animation = 'tool7ComeM ease-in-out .3s forwards';
    }
})
tool7Close.addEventListener("click", function () {
    if (deviceFlag === 1) {
        tool7Why.style.animation = 'tool7Out ease-in-out .3s forwards';
    } else if (deviceFlag === 2) {
        tool7Why.style.animation = 'tool7OutM ease-in-out .3s forwards';
    }
    setTimeout(function () {
        tool7Why.style.display = 'none';
    }, 300)
})