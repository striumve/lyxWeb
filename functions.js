//public functions

//控制台互动
if (languageFlag === 1) {
    console.log('\n\
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
    |-------------------------------------------------      \n\
    | 一切皆有可能。                                         \n\
    *-------------------------------------------------');

    console.error("错误：您正在呼吸");
    console.error("错误：您睁着眼睛");
    console.error("错误：您没有睡着");
    console.info("在下方输入“怎么办()”以查看可能的解决方案。\n注：应使用英文状态下的括号。直接复制也可以。");
} else if (languageFlag === 2) {
    console.log('\n\
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
    |-------------------------------------------------      \n\
    | Everything is possible.                               \n\
    *-------------------------------------------------');
    console.error("error: You are breathing");
    console.error("error: Your eyes are open");
    console.error("error: You are not asleep");
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

var set3Opt = document.querySelector('.set3-option');
var set3Check = document.querySelector('.set3-check');
var main = document.querySelector('.main');
set3Check.addEventListener("click", function () {
    var set3 = document.querySelector('.set3-select').value;
    if (set3 === '1') {
        main.style.background = 'url(background.jpg)';
        main.style.backgrounSize = 'cover';
    } else if (set3 === '2') {
        main.style.background = 'url(background2.jpg)';
        main.style.backgrounSize = 'cover';
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
// tool2Check.addEventListener("click", function () {
//     没用
//     tool2Out.innerHTML = '$$ ' + tool2In.value + ' $$';
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