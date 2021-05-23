/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'Passive XP': '被动经验',
    'Reset for +': '重置获得 +',
    'Total gold boosts exp gain': '黄金总量增加了经验获取',
    'XP gain is also based on your unspent xp': '经验值的获得也取决于您未花费的经验值',
    'Unlocks Gold Layer': '解锁黄金层',
    'XP to level': '经验值到等级',
    'XP to XP': '经验值到经验值',
    'You listened to me': '你听了我的话',
    'You still need XP': '您仍然需要经验值',
    'Not only levels now': '不仅现在的等级',
    'More XP from gold': '从黄金获得更多经验值',
    'More and More XP': '越来越多的经验',
    'Moneys give levels give money': '金钱给予等级，给予金钱',
    'Make sure that you record the time in your stream or else your speedrun won\'t count!': '确保你记录了你的时间流，否则你的速度跑将不算数!',
    'Longer Runs': '长跑',
    'levels': '等级',
    'Level UP until level 100 much faster': '升级到100级要快得多',
    'Loading... (If this takes too long it means there was a serious error!': '加载中……(如果这花了太长时间，就意味着出现了严重的错误!',
    'Level UP much faster before Lv.30': '升级至Lv.30之前，升级速度要快得多',
    'Level to XP': '等级到经验',
    'Level to Level': '等级到等级',
    'Exp Exponent': '经验指数',
    'Currently': '当前',
    'Fast road to 100 from the beginning': '从一开始就快速迈向100',
    'Gold Exponent': '黄金指数',
    'Golden Mine': '金矿',
    'G means Gold': 'G的意思是黄金',
    'Get 1 max ruby': '最多获得1个红宝石',
    'Passive Gold': '被动黄金',
    'Better passives': '更好的被动',
    'gold': '黄金',
    'Even More Gold': '甚至更多的黄金',
    'All passive upgrade effects are cubed': '所有被动升级效果均已立方化',
    'Yeae, you reached 30!': '耶，您达到了30！',
    'XP to XP effect is powered based on your lvl': '经验到经验效果基于您的等级',
    'Unlocks XP buyable upgrade and a new row of gold upgrades': '解锁经验可购买的升级和新的黄金升级行',
    'To Level 40!': '达到40级！',
    'Super Level Boost': '超级等级提升',
    'So close': '如此接近',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    '\t\t\tTime Played: {{ formatTime(player.timePlayed) }}': '\t\t\t已玩时间: {{ formatTime(player.timePlayed) }}',
    '\t\t\tIf you would like to speedrun this, press Play Again and record your attempt, then submit on the Discord Server in the channel #speedrun-submissions.\n\t\t\t': '如果您想加快运行速度，请再次按“播放”并记录您的尝试，然后在Discord服务器上的＃speedrun-submissions频道中提交。',
    '\t\t\tNote by Jacorb: If anyone wishes to make a mod of this game, that is perfectly fine with me, just make sure to name it something different (ex: Prestige Tree NG+) and to let me know on': '\ t \ t \ tJacorb的注意事项：如果有人希望制作此游戏的mod，那对我来说完全没问题，请确保命名不同（例如：Prestige Tree NG +），并让我知道',
    'Meta Level Boost': '元等级提升',
    'Make it easier': '使它更容易',
    'Level gain is also based on your unspent xp, softcap after x100': '等级增益也是基于你未花费的经验值，在x100之后的软上限',
    'Level Boost': '等级提升',
    'Level gain in multiplied by XP gain': '等级增益乘以经验增益',
    'How fast do you level up?': '您的升级速度有多快？',
    'experience': '经验',
    'Extra Level Boost': '额外等级提升',
    'Fast Start': '快速启动',
    'Bonus level gain': '奖励等级收益',
    'Base level exponent is decreased by 10 percent.': '基础等级指数降低了10％。',
    'Adds additional 100% to passive gold and xp gain. Keeps gold layer unlocked.': '为被动黄金和经验增益额外增加100％。 保持黄金层解锁。',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Powered Loot': '动力战利品',
    'Please check the Discord to see if there are new content updates!': '请检查Discord，看看是否有新的内容更新！',
    'Gold -> Exp': '黄金 -> 经验',
    'Gold gain multiplied by max(1, (lvl^2)/10000). Also unlocks new layer.': '金币收益乘以 max(1，(等级^2)/ 10000)。 同时解锁新图层。',
    'Gold was pretty slow': '黄金相当缓慢',
    'Loot MegaBoost!': '战利品超级提升！',
    'Moneys give levels give moneys': '金钱给予等级给予金钱',
    'More Gold!': '更多黄金！',
    'Oh, you are still reading this?': '哦，你还在读这个?',
    'Risky but Effective': '有风险但有效',
    'Slow road to 100': '慢路到100',
    'Stronk Buff': '浅黄色页面',
    'Unlocks first buyable upgrade and a new row of xp upgrades': '解锁第一个可购买的升级和一个新的经验升级行',
    'Unlocks new layer and multiplies gold gain by π': '解锁新图层并将黄金增益乘以π',
    'Upgrade 1,2 effect is powered based on gold': '升级1,2效果基于黄金',
    'You can\'t buy this once': '你一次也买不到',
    'Increases a bit level gain until lvl 100': '增加一点等级增益直到100级',
    'It will be cool in future': '将来会很酷的',
    'What is it?': '这是什么？',
    'Are you ready for 200?': '准备好200了吗?',
    'Loot Era': '战利品时代',
    'It feels better': '感觉好多了',
    'It feels even better': '感觉更好',
    'loot': '战利品',
    'Loot Gain eff. value is multiplied by 1/2th power of level (Mult. to gold -> loot': '战利品收益效率。值乘以乘以等级的1/2 (倍 到黄金 -> 战利品',
    'Loot Loot Loot': '战利品战利品',
    'Inversed Power Decremention': '反向功率衰减',
    'It is really good': '真的很好',
    'It\'s more powerful as it seems': '它看起来更强大',
    'You listened to me very well': '你听我说得很好',
    'Passive upgrades doesn\'t cost anything. Also they are 1.5x times more efficient and are bought automatically.': '被动升级不需要任何费用。此外，它们的效率是原来的1.5倍，而且是自动购买的。',
    'rubies': '红宝石',
    'Ruby buyables cost nothing. Automatically buy 10 of them/tick.': '红宝石可购买的东西不需要任何代价。自动购买其中10个/tick。',
    'Ruby effect is squared. Again.': '红宝石效果是平方的。再次。',
    'Ruby exponent is decreased by 20 percent. Ruby bonus is squared.': '红宝石指数下降了20%。红宝石奖金是平方的。',
    'I think this mult is close to previous now': '我认为这个念头已经接近以前',
    'Start': '开始',
    'Tetration': '迭代幂次',
    'Typical Challenge': '典型挑战',
    'Unlocks 5 last XP upgrades.': '解锁最后5个经验升级',
    'Unlocks next challenge': '解锁下一个挑战',
    'Welcome to the world of quests! First two challenges unlocked!': '欢迎来到探险世界!前两个挑战已解锁!',
    'You can automate buying gold upgrades. Unlocks two next challenges.': '你可以自动购买黄金升级。解锁两个接下来的挑战',
    'Loot effect power is powered to ^2, makes it really powerful. Also, now you can automate buying xp upgrades.': '战利品效果提高^2，这让它变得非常强大。此外，现在您可以自动购买经验升级。',
    'Loot prestiging resets nothing.': '战利品声望没有重置任何东西。',
    'New challenge!': '新挑战！',
    'New challenge. Again.': '新挑战。再次。',
    'New layer?': '新层？',
    'Powering exp, lv and gold production.': '提高经验，等级和黄金产量。',
    'quests': '任务',
    'Autobuy up to 100,000 passive upgrades/tick and unlocks the final challenge here!': '自动购买多达100,000个被动升级/tick，并在这里解锁最终的挑战！',
    'Decrease base level exponent, it will help you level up faster until Lv.3,000.': '降低基本等级指数，它将帮助您更快地升级，直到3,000级。',
    'Decreases ruby and level exponent by 1%. Ruby bonus is multiplied by square of your best rubies. Unlocks new layer.': '将红宝石和等级指数降低1％。 红宝石奖金乘以您最好的红宝石的平方。 解锁新层。',
    'Era of Adventures': '冒险时代',
    'Finish the last challenge 100 times': '完成最后一次挑战100次',
    'Get 1 quest': '完成 1 个任务',
    'Get 50% of loot every second, yeah!': '每秒获得50％的战利品，耶！',
    '\t\t\tReward': '\t\t\t奖励',
    '> Level > Loot': '> 等级 > 战利品',
    'Upgrade 1,2 effect is powered to log10(gold + 10)^0.7': '升级1、2效果增强为 log10(黄金 + 10)^0.7',
    'Finish': '结束',
    'log10(xp + 10': 'log10(经验 + 10',
    'log10(max loot + 100)/2': 'log10(最大战利品 + 100)/2',
    'log10(lv + 10': 'log10(等级 + 10',
    'Woah, a new upgrade here?': '哇，这里有新升级吗?',
    '1 + (level^2)/100': '1 + (等级^2)/100',
    '2^(rubies^(1/10)': '2^(红宝石^(1/10)',
    'my discord': '我的discord',
    'Completed': '已完成',
    'Exit Early': '提早退出',
    'Level, Exp and Gold gain are powered to ^0.4. This challenge reward doesn\'t work here.': '等级，经验值和金币收益提升至^ 0.4。 此挑战奖励在这里不起作用。',
    'No Gold': '无黄金',
    'No XP': '无经验',
    'Now you can get more rubies and faster': '现在您可以获得更多的红宝石，速度更快',
    'You can\'t get any gold in this challenge (xp upgrades can be unlocked': '您无法在此挑战中获得任何金币（经验升级可以解锁',
    'You can\'t get any xp in this challenge (gold upgrades can be unlocked': '您无法在此挑战中获得任何经验（黄金升级可以解锁',
    "Rubies are stronger now!": "红宝石现在更强大！",
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Main Prestige Tree server': '主声望树服务器',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Your best loot is ": "你最好的战利品是 ",
    "Gold gain is powered by ": "黄金增益是 ",
    "Base Lvl. Exponent: ": "基础等级指数：",
    "Dev Speed: ": "开发速度: ",
    "Faster Levels ": "更快的等级",
    "Faster levels ": "更快的等级",
    "Faster XP ": "更快的经验 ",
    "Gold gain is multiplied by (lv": "黄金收益乘以（等级",
    "Level gain is multiplied by your level + ": "等级增益乘以你的等级+",
    "Level UP much too faster before Lv.": "在升级到该等级之前，升级速度太快了，等级为",
    "Loot base requirement is divided by ": "战利品基本需求除以",
    "Multiplies gold gain by ": "黄金收益乘以",
    "Multiplies level gain by ": "等级收益乘以",
    "Multiplies XP gain by ": "经验增益乘以",
    "XP gain is multiplied by ": "经验收益乘以",
    "Gold and Level gain is multiplied by ": "金币和等级收益乘以 ",
    "Gold gain is multiplied by ": "黄金收益乘以",
    "Multiplies Gold by ": "黄金乘以 ",
    "Multiplies gold gain ": "黄金收益乘以",
    "Multiplies XP, gold and lv gain by value of your level + ": "经验值，黄金和等级增益乘以你的等级 +",
    "Passive upgrades effects are multiplied by ": "被动升级效果成倍增加了 ",
    "XP to XP effect is powered to (level / ": "经验到经验的效果为(等级/",
    "Base level gain is powered to ": "基本等级增益被提升至",
    "Loot gain base is powered by ": "战利品收益基础提升为 ",
    "level gain is powered by ": "等级收益提升为 ",
    "Unlocks two buyable upgrades and loot gain base & xp gain is powered by ": "解锁两个可购买的升级，并获得战利品基础和经验的收益提升为 ",
    "XP gain is powered by ": "经验增益提升为",
    "Level, Exp and Gold gain are tetrated to ": "等级、经验和黄金增益四等分为",
    "Loot, XP, Gold and Level gain is powered to ": "战利品，经验值，黄金和等级收益提高",
    "Quest exponent is divided by ": "任务指数除以 ",
    "Base Level Exponent reduced by ": "基础等级指数降低",
    ", Complete quests and challenges to get more bonuses! Loot Effect Bonus: ": "，完成任务和挑战可获得更多奖励！ 战利品效果加成：",
    ", Rubies make you richer! Gold gain and level gain are multiplied by ": "，红宝石让您变得更加富有！ 黄金收益和等级收益乘以",
    "Loot Base Exponent ": "战利品基础指数 ",
    "Ruby effect is powered to ": "红宝石效果提高到 ",
    "Rubies base requirement divided by ": "红宝石基本要求除以 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "(It goes much harder after lv 3,000": "（3,000级之后变得更难了",
    " base lv gain / sec": " 基础等级收益/秒",
    "Multiplies xp, gold, level and loot gain eff. value by 1,000": "将经验，黄金，等级和战利品增益效果相乘。 值为1,000",
    " again": "再次",
    " again.": " 再次.",
    " to exp/levels/gold gain": "达到经验/等级/黄金收益",
    " completions": " 完成",
    " (softcapped": " (软上限",
    " (softcapped)": " (软上限)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    'SHOWN': '显示',
    "Default": "默认",
    "Aqua": "水色",
    'ALWAYS': '一直',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '已开',
    'OFF': '已关',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\^([\d\.]+)$/,
    /^\^([\d\.]+)x$/,
    /^([\d\.]+)x$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)e(\d+)x$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^Base level, xp & gold gain is powered to \^(.+) \(before this layer effect$/, '基础等级，经验和金币获取的效果提高到 \^$1（在此层效果之前'],
    [/^Upgrade 3,1 power goes from (.+)\/(.+) to (.+)\/(.+)$/, '升级3,1的效果从$1\/$2增加到$3\/$4'],
    [/^You have made a total of (.+) gold$/, '你总共赚了 $1 金币'],
    [/^Cost\: (.+) loot\n(.+)Amount\: (.+)\n(.+) Gold Gain mult is powered to \^(.+)$/, '成本：$1战利品\n数量：$3\n黄金增益多重增强 ^$5'],
    [/^Cost\: (.+) loot\n(.+)Amount\: (.+)\n(.+) XP Gain mult is powered to \^(.+)$/, '成本：$1战利品\n数量：$3\n经验增益多重增强 ^$5'],
    [/^Cost\: (.+) xp\n(.+)Amount\: (.+)\n(.+)Generate (.+)\% gold per second, lol it\'s kinda obvious$/, '成本：$1经验\n数量：$3\n每秒产生 $4\％ 黄金, 哈哈，这是很明显的'],
    [/^Cost\: (.+) xp\n(.+)Amount\: (.+)\n(.+)Generate x(.+) gold per second, lol it\'s kinda obvious$/, '成本：$1经验\n数量：$3\n每秒产生 x$4 黄金, 哈哈，这是很明显的'],
    [/^Cost\: (.+) gold\n(.+)Amount\: (.+)\n(.+)Generate (.+)\% XP per second$/, '成本：$1黄金\n数量：$3\n每秒产生$4\％经验值'],
    [/^Cost\: (.+) gold\n(.+)Amount\: (.+)\n(.+)Generate x(.+) XP per second$/, '成本：$1黄金\n数量：$3\n每秒产生 x$4 经验值'],
    [/^Cost\: (.+) loot\n\t\t$/, '成本\: $1 战利品\n\t\t'],
    [/^Cost\: (.+) rubies\n\t\t$/, '成本\: $1 红宝石\n\t\t'],
    [/^Cost\: (.+) experience\n\t\t$/, '成本\: $1 经验\n\t\t'],
    [/^Cost\: (.+) gold\n\t\t$/, '成本\: $1 黄金\n\t\t'],
    [/^Cost\: (.+) gold\n\t\t$/, '成本\: $1 黄金\n\t\t'],
    [/^Cost\: (.+) levels\n\t\t$/, '成本\: $1 级\n\t\t'],
    [/^Autobuy up to (.+) passive upgrades\/tick$/, '自动购买高达 $1 被动升级\/tick'],
    [/^Get (.+) max rubies$/, '获得 $1 个最大红宝石'],
    [/^Get (.+) quests$/, '完成 $1 个任务'],
    [/^\t\t\tGoal\: (.+) level$/, '\t\t\t目标\: $1 级'],
    [/^, loot will help you level up much faster, your best loot will multiply your Lv \& XP gain by (.+). \(You should wait at least until (.+) or (.+) for better effect$/, '，战利品将帮助您更快地升级，最好的战利品将使您的等级和建议增益乘以$1。 （您应该至少等到$2或$3才能获得更好的效果'],
    [/^You have (.+) levels$/, '你有 $1 等级'],
    [/^Level, Exp and Gold gain are powered to \^(.+). This challenge reward doesn\'t work here.$/, '等级、经验和黄金增益为 \^$1。这个挑战奖励在这里不起作用。'],
    [/^\t\t\tGoal\: (.+) exp$/, '\t\t\t目标: $1 经验'],
    [/^Quest bonus exponent to loot multiplied by (.+). XP softcap starts (.+) later. \(At (.+)$/, '任务奖励指数乘以$1。经验软上限在$2之后启动。\(在 $3'],
    [/^Next at (.+) levels$/, '下一个在 $1 级'],
    [/^Next\: (.+) \/ (.+) gold\t\t\n\t\t$/, '下一个\: $1 \/ $2 黄金\t\t\n\t\t'],
    [/^Next\: (.+) \/ (.+) exp\t\t\n\t\t$/, '下一个\: $1 \/ $2 经验\t\t\n\t\t'],
    [/^([\d\.]+)e(\d+) \/ ([\d\.]+)e(\d+) gold\t\t\n\t\t$/, ' $1e$2 \/ $3e$4 黄金\t\t\n\t\t'],
    [/^Req\: (.+) \/ (.+) gold\t\t\n\t\t$/, '要求\: $1 \/ $2 黄金\t\t\n\t\t'],
    [/^Req\: (.+) \/ (.+) exp\t\t\n\t\t$/, '要求\: $1 \/ $2 经验\t\t\n\t\t'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);