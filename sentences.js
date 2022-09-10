//右下角句子
var sen = document.querySelector('.sen');
var senChn = document.querySelector('.senChange');
senChn.addEventListener("click", function () {
    if (languageFlag === 1) {
        // senChn.style.animation = 'sentenceChange ease .3s forward';
        if (senMode === 0) {
            //正常
            sentence2();
        } else if (senMode === 1) {
            //不正经
            sentence1();
        }
    } else if (languageFlag === 2) {
        sentence_en();
    }
})

function sentence1() {
    var senNum = Math.floor(Math.random() * 52);
    switch (senNum) {
        case 0:
            sen.innerHTML = '钥匙圈是非常实用的小工具，<br>它可以让你一次把所有钥匙都丢光。';
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

function sentence2() {
    var senNum = Math.floor(Math.random() * 48 + 52);
    switch (senNum) {
        case 52:
            sen.innerHTML = '以勇敢的胸膛面对逆境。<br>——贺拉斯《诗艺》';
            break;
        case 53:
            sen.innerHTML = '勇敢并非没有恐惧，而是克服恐惧，战胜恐惧。<br>——马克·吐温';
            break;
        case 54:
            sen.innerHTML = '临大难而不惧者，圣人之勇也。<br>——《庄子·秋水》';
            break;
        case 55:
            sen.innerHTML = '奋斗需要坚持！<br>——雨果《巴黎圣母院》';
            break;
        case 56:
            sen.innerHTML = '重要的不是成功，而是奋斗。<br>——赫伯特';
            break;
        case 57:
            sen.innerHTML = '你要自力更生，不要太依赖别人。<br>——《熊出没》';
            break;
        case 58:
            sen.innerHTML = '因为遇见你，我才知道，原来我也能有美好的回忆。<br>——宫崎骏《千与千寻》';
            break;
        case 59:
            sen.innerHTML = '云掠石崖啼鸟树，雨添山涧落花泉。<br>——杨万里《晨炊白升山》';
            break;
        case 60:
            sen.innerHTML = '我们是国家的主人，应该处处为国家着想。<br>——雷锋';
            break;
        case 61:
            sen.innerHTML = '创新是一个民族进步的灵魂，是国家兴旺发达的不竭动力。<br>——江泽民';
            break;
        case 62:
            sen.innerHTML = '一般地，我们把形如y=ax²+bx+c（其中a，b，c是常数，a≠0）的函数叫做二次函数。';
            break;
        case 63:
            sen.innerHTML = '掌握新技术，要善于学习，更要善于创新。<br>——邓小平';
            break;
        case 64:
            sen.innerHTML = '使卵石臻于完美的,并非锤的打击,而是水的且歌且舞。<br>——泰戈尔《飞鸟集》';
            break;
        case 65:
            sen.innerHTML = '全是理智的心，恰如一柄全是锋刃的刀。它叫使用它的人手上流血。<br>——泰戈尔《飞鸟集》';
            break;
        case 66:
            sen.innerHTML = '我是一隻旷野的鸟，在你的眼里找到了天空。<br>——泰戈尔《飞鸟集》';
            break;
        case 67:
            sen.innerHTML = '如果你因为错过了太阳而哭泣，那么你也将错过群星了。<br>——泰戈尔《飞鸟集》';
            break;
        case 68:
            sen.innerHTML = '使生如夏花之绚烂，死如秋叶之静美。<br>——泰戈尔《飞鸟集》';
            break;
        case 69:
            sen.innerHTML = '我的存在，对我是一个永久的神奇，这就是生活。<br>——泰戈尔《飞鸟集》';
            break;
        case 70:
            sen.innerHTML = '我们把世界看错了，反说它欺骗我们。<br>——泰戈尔《飞鸟集》';
            break;
        case 71:
            sen.innerHTML = '道路虽然拥挤，却是寂寞的，因为它没有品尝到爱。<br>——泰戈尔《飞鸟集》';
            break;
        case 72:
            sen.innerHTML = '人类的历史是很忍耐地等待着被侮辱者的胜利。<br>——泰戈尔《飞鸟集》';
            break;
        case 73:
            sen.innerHTML = '让我设想，在群星之中，有一颗星是指导着我的生命通过不可知的黑暗的。<br>——泰戈尔《飞鸟集》';
            break;
        case 74:
            sen.innerHTML = '不要从你自己的袋里掏出勋章借给你的朋友，这是侮辱他的。<br>——泰戈尔《飞鸟集》';
            break;
        case 75:
            sen.innerHTML = '当我们是大为谦卑的时候，便是我们最接近伟大的时候。<br>——泰戈尔《飞鸟集》';
            break;
        case 76:
            sen.innerHTML = '接触着，你也许会伤害；远离着，你也许会占有。<br>——泰戈尔《飞鸟集》';
            break;
        case 77:
            sen.innerHTML = '如果你不等待着要说出完全的真理，那么把话说出来是很容易的。<br>——泰戈尔《飞鸟集》';
            break;
        case 78:
            sen.innerHTML = '太阳在西方落下时， 他的早晨的东方已静悄悄的站在他面前。<br>——泰戈尔《飞鸟集》';
            break;
        case 79:
            sen.innerHTML = '奴才总不过是寻人诉苦。只要这样，也只能这样。——鲁迅《野草》-《聪明人和傻子和奴才》';
            break;
        case 80:
            sen.innerHTML = '爱情必须时时更新，生长，创造。<br>——鲁迅《伤逝》';
            break;
        case 81:
            sen.innerHTML = '游戏是儿童最正当的行为，玩具是儿童的天使。<br>——鲁迅《野草》-《风筝》';
            break;
        case 82:
            sen.innerHTML = '以人为鉴，明白非常，是使人能够反省的妙法。<br>——鲁迅';
            break;
        case 83:
            sen.innerHTML = '人类的悲欢并不相通，我只觉得他们吵闹。<br>——鲁迅《而已集》-《小杂感》';
            break;
        case 84:
            sen.innerHTML = '幼稚是会成长，会成熟的。只要不衰老，腐败，就好。<br>——鲁迅';
            break;
        case 85:
            sen.innerHTML = '墨写的谎言，决掩不住血写的事实。<br>——鲁迅';
            break;
        case 86:
            sen.innerHTML = '所以，贪安稳就没有自由，要自由就总要历些危险。<br>——鲁迅《集外集拾遗》';
            break;
        case 87:
            sen.innerHTML = '绝望之为虚妄，正与希望相同！<br>——鲁迅《野草》-《希望》';
            break;
        case 88:
            sen.innerHTML = '无论何时，不管怎样，我决不允许自己有一点灰心丧气。<br>——鲁迅';
            break;
        case 89:
            sen.innerHTML = '生命是以时间为单位的，浪费别人的时间等于谋财害命；<br>浪费自己的时间，等于慢性自杀。<br>——鲁迅';
            break;
        case 90:
            sen.innerHTML = '轻敌，最容易失败。<br>——鲁迅';
            break;
        case 91:
            sen.innerHTML = '倘有陌生的声音叫你的名字，你万不可答应它。<br>——鲁迅《朝花夕拾》-《从百草园到三味书屋》';
            break;
        case 92:
            sen.innerHTML = '世界上本没有路，走的人多了，也就成了路。<br>——鲁迅《故乡》';
            break;
        case 93:
            sen.innerHTML = '我向来不惮以最坏的恶意揣测中国人。<br>——鲁迅';
            break;
        case 94:
            sen.innerHTML = '绝望正与希望相同，大恨恰恰是大爱的起点。<br>——鲁迅';
            break;
        case 95:
            sen.innerHTML = '要极省俭的画出一个人的特点，最好是画他的眼睛。<br>——鲁迅《南腔北调集》';
            break;
        case 96:
            sen.innerHTML = '人最苦的是梦醒了却无路可走。<br>——鲁迅';
            break;
        case 97:
            sen.innerHTML = '时间就像海绵里的水，只要愿挤，总还是有的。<br>——鲁迅';
            break;
        case 98:
            sen.innerHTML = '说到希望，却是不能抹杀的，因为希望是在于将来的。<br>——鲁迅';
            break;
        case 99:
            sen.innerHTML = '爱国者的话是最有价值的。——鲁迅';
            break;
        default:
            break;
    }

}

function sentence_en() {
    var senNum = Math.floor(Math.random() * 40);
    switch (senNum) {
        case 0:
            sen.innerHTML = 'Attitude decides altitude.'
            break;
        case 1:
            sen.innerHTML = 'Quitters never win and winners never quit.'
            break;
        case 2:
            sen.innerHTML = 'You\'re unique, nothing can replace you.'
            break;
        case 3:
            sen.innerHTML = 'Understand yourself in order to better understanding others.'
            break;
        case 4:
            sen.innerHTML = 'The best preparation for tomorrow is doing your best today.'
            break;
        case 5:
            sen.innerHTML = 'Learn and live.'
            break;
        case 6:
            sen.innerHTML = 'Let bygones be bygones.'
            break;
        case 7:
            sen.innerHTML = 'Before was was was, was was is.'
            break;
        case 8:
            sen.innerHTML = 'Life is not all roses.'
            break;
        case 9:
            sen.innerHTML = 'Never say die.'
            break;
        case 10:
            sen.innerHTML = 'Time is money.'
            break;
        case 11:
            sen.innerHTML = 'Life is but a span.'
            break;
        case 12:
            sen.innerHTML = 'Believe in yourself.'
            break;
        case 13:
            sen.innerHTML = 'Knowledge is power.'
            break;
        case 14:
            sen.innerHTML = 'Hang on to your dreams.'
            break;
        case 15:
            sen.innerHTML = 'Work makes the workman.'
            break;
        case 16:
            sen.innerHTML = 'Asking costs nothing.'
            break;
        case 17:
            sen.innerHTML = 'Big mouthfuls ofter choke.'
            break;
        case 18:
            sen.innerHTML = 'Nothing is impossible!'
            break;
        case 19:
            sen.innerHTML = 'Nothing seek, nothing find.'
            break;
        case 20:
            sen.innerHTML = 'Constant dropping wears the stone.'
            break;
        case 21:
            sen.innerHTML = 'Sow nothing, reap nothing.'
            break;
        case 22:
            sen.innerHTML = 'Pain past is pleasure.'
            break;
        case 23:
            sen.innerHTML = 'You think you can, you can.'
            break;
        case 24:
            sen.innerHTML = 'I can because i think i can.'
            break;
        case 25:
            sen.innerHTML = 'Action speak louder than words.'
            break;
        case 26:
            sen.innerHTML = 'Take control of your own desting.'
            break;
        case 27:
            sen.innerHTML = 'Wasting time is robbing oneself.'
            break;
        case 28:
            sen.innerHTML = 'Jack of all trades and master of none.'
            break;
        case 29:
            sen.innerHTML = 'Between two stools one falls to the ground.'
            break;
        case 30:
            sen.innerHTML = 'Gratitude is the sign of noble souls.'
            break;
        case 31:
            sen.innerHTML = 'Storms make trees take deeper roots.'
            break;
        case 32:
            sen.innerHTML = 'A bold attempt is half success.'
            break;
        case 33:
            sen.innerHTML = 'Youth means limitless possibilities.'
            break;
        case 34:
            sen.innerHTML = 'The first step is as good as half over.'
            break;
        case 35:
            sen.innerHTML = 'I know that my future is not just a dream.'
            break;
        case 36:
            sen.innerHTML = 'Do one thing at a time, and do well.'
            break;
        case 37:
            sen.innerHTML = 'Never gonna give you up~'
            break;
        case 38:
            sen.innerHTML = 'Live well, love lots, and laugh often.'
            break;
        case 39:
            sen.innerHTML = 'Whatever is worth doing is worth doing well.任'
            break;
        default:
            break;
    }
}