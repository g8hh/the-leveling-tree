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
    'Better Exponents': '更好的指数',
    'Autoskill Fun': '自动技能乐趣',
    'Better rewards!': '更好的奖励！',
    'Bonus Bonus': '喜上加喜',
    'Boosting loot gain': '提升战利品收益',
    'Double Fun': '双重乐趣',
    'Double LOG': '双对数',
    'Great for quests!': '伟大的任务！',
    'Go further!': '走得更远！',
    'Greater Rewards': '更高的奖励',
    'Is it cheating?': '是作弊吗？',
    'Last Gain!!!': '最后的收获！！！',
    'Logarithmication': '对数运算',
    'Loot buyables are 10% more effective.': '战利品购买的效率提高10％。',
    'Loot effect is also multiplied by the sqrt value of ruby effect': '战利品效果也乘以红宝石效果的sqrt值',
    'More and more treasures': '越来越多的珍宝',
    'More fun of autoskill': '自动技能的更多乐趣',
    'New layer. Kek.': '新层。Kek。',
    'Nice.': '不错。',
    'No Resources': '无资源',
    "skills": "技能",
    "Skilly skills": "熟练技能",
    "Time for the ruby": "红宝石时间到了",
    "treasures": "珍宝",
    "Triple Fun": "三倍乐趣",
    "Triple LOG": "三倍对数",
    'Unlocks second ruby buyable': '解锁第二颗可购买的红宝石',
    'Unlocks new quest challenge?': '解锁新的任务挑战？',
    'Very nice.': '非常好。',
    'Where it was earlier?': '以前在哪里？',
    'Automate Automation Gold': '自动化自动化黄金',
    'Automate Automation XP': '自动化自动化经验',
    'Another exponents!': '另一个指数！',
    'Treasure Fun': '寻宝乐趣',
    'Faster Leveling in Challenge': '挑战中更快的练级',
    'Multiplies level/xp/gold gain by 2 AND it does not depend on your current challenge!': '将等级/ 经验 /黄金增益乘以2，这并不取决于您当前面临的挑战！',
    'Stop Clicking Loot!': '停止点击战利品！',
    'You are close!!!': '你很接近了!!',
    'Gives another +1% of skill/sec': '每秒提供 +1％ 的技能',
    'Is the level bad?': '等级不好吗？',
    'Exp and gold are powered to ^(1 + lvl/88,000).': '经验值和黄金提升到 ^(1 + 等级/88,000)。',
    'Exp, Gold and level gain are powered to 1 / (1 + level^2).': '经验值，金币和等级增益提升 1 / (1 +等级^2)。',
    'Get 1% of skill gain per second.': '每秒获得1％的技能增益。',
    'Get up to 3 triple log completions / once': '一次最多完成3次三重对数',
    '(softcapped)': '(软上限)',
    '(lvl+1)^1.34': '(等级+1)^1.34',
    'Autobuys 10 loot upgrades/tick. Also it\'s effect is powered to 2 now.': '自动购买10个战利品升级/tick。 而且它的效果现在加为2。',
    'You get +100% of your loot, quests and rubies / second': '您每秒获得+ 100％的战利品，任务和红宝石',
    ', Skills can make you level up and complete first two layers faster. Total S. divides loot, quests and ruby exp by 2.32e10. Multiplies XP and gold exponents by 1.10e29. Needs 100 last (8) quest challenge competitions for skill prestige.': '，技能可以让你升级和完成前两层更快。总s将战利品、任务和红宝石经验值除以2.32e10。经验和黄金指数乘以1.10e29。需要100个last(8)任务挑战比赛的技能声望。',
    'All 1,2nd layers buyables cost nothing and autobuys +10 of them.': '所有第1层和2层的可购买物品不计成本，并且自动购买其中的10层。',
    'All buyables are bought up to 1e100 / tick and their effects are powered to ^2': '所有可购买物品的最高买入价为1e100 / tick，其影响力提高到^ 2',
    'All upgrades that cost levels are free now. Also buying up to 1,000 more of second ruby buyable / tick.': '现在所有的升级都是免费的。还可以购买多达1000多个第二个红宝石可购买/ tick。',
    'Autobuy 1,000 to first and 10,000 to second rubies upgrades.': '自动购买1,000到第一和10,000到第二的红宝石升级。',
    'Autobuy 1,000 to first and 100,000 to second rubies upgrades. Also powers skill effects to power ^1.25': '自动购买1000到第一红宝石和100,000到第二红宝石升级。 同时增强技能效果，使能量提高^1.25',
    'Autobuys all prev. layer upgrades now. You don\'t have to bother about them anymore.': '现在自动购买所有前一层升级。 您不必再为它们烦恼了。',
    'Autocomplete quest challenges when you reach the goal.': '达成目标后，自动完成任务就会面临挑战。',
    "Get 1 quest C8 completion per second (even if you're not in challenge": "每秒获得1个C8任务完成量（即使您没有挑战",
    'Removes ability to treasure prestige, but gain 28.43% of treasure value / sec': '移除宝物声望的能力，但是获得28.43%的宝物价值/秒',
    'Is this the end?': '这就是结局？',
    'Good for Gold': '对黄金好',
    'Loot ExtraBoost!': '战利品额外提升!',
    'Loot ZetaBoost!': '战利品泽塔提升！',
    'Ruby exponent is divided by 2. Unlocks next 2 rows of loot upgrades.': '红宝石指数除以2。解锁接下来的2行战利品升级。',
    'Get more loot from XP': '从经验获得更多战利品',
    'Boosts gold gain by ^0.1 of your current xp': '工具你当前经验值的^0.1提升金币增益',
    'XP and gold exponents. Good for quests.': '经验和黄金指数。有利于任务。',
    'You can\'t get any gold or xp in this challenge': '在这个挑战中你不能获得任何金币或经验值',
    ', Treasures help you get more skills. Lol. Increases your max level by 197,260,131. Increases your skill powered gain by 310.93%. Needs 60 really last (9) quest challenge competitions for treasure prestige.': '，珍宝可帮助您获得更多技能。 哈哈。 最大等级提高197,260,131。 使您的技能获得的增益提高310.93％。 需要进行60次真正的最后（9）挑战挑战竞赛才能获得珍宝声望。',
    '^10, triple log reward is powered to ^1.025': '^10, 三重对数奖励为 ^1.025',
    '1e100 / tick and their effects are powered to ^2': '1e100 / tick 以及其效果加到 ^2',
    '25.00 base exponents to gold and xp': '黄金和经验的25.00基本指数',
    '4 Four Faster': '4四更快',
    'another 0.025': '另外0.025',
    'Better Treasures': '更好的珍宝',
    'Fun': '乐趣',
    'Last skill milestone is also based on your skill log10': '最后的技能里程碑也基于您的技能 log10',
    'Level gain is multiplied by log10(level+1)+1 NOT DEPENDED ON CURRENT CHALLENGE': '等级增益乘以log10(等级+1)+1与当前挑战无关',
    'Adds +N% of skill/sec, where N = log[6.18](total treasures + 1)*10': '增加 +N% 技能/秒, 当 N = log[6.18](总珍宝 + 1)*10',
    'C8/sec is multiplied by 9th milestone effect value: 1.4692119257558902e35': 'C8/秒乘以9个里程碑效应值:1.4692119257558902e35',
    'Removes ability to treasure prestige, but gain 10% of treasure value / sec': '移除珍宝声望的能力，但获得珍宝价值的10%/秒',
    "Level": "等级",
    "Loading... (If this takes too long it means there was a serious error!)←": "加载中...（如果花费太长时间，则表示出现了严重错误！）←",
    "Level UP much faster before Lv.50": "在50级之前升级速度要快得多",
    "To Level 70!": "达到70级！",
    "Yeae, you reached 40!": "耶，你已经40级了！",
    "Shift-Click to Toggle Tooltips: ": "按住Shift键单击以切换工具提示：",
    "Goal:": "目标:",
    "Reward": "奖励",
    "ALL": "全部",
    "AUTO": "自动",
    "default": "默认",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "R": "红宝石",
    "Q": "任务",
    "L": "战利品",
    "G": "黄金",
    "XP": "经验",

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
    "\t\t\t\t": "\t\t\t\t",
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
    "No more challenge corruptions (": "不再挑战腐败（",
    "No need to buy buyables (": "无需购买可购买物品（",
    "No need to repeat the challenge (": "无需重复挑战（",
    "Make the last challenge easier!": "使最后的挑战更轻松！",
    "More exp reduction (": "更多经验减少 (",
    "Now for the gold!": "现在的黄金！",
    "Powering your currencies!": "为您的货币供电！",
    "Now really Last Gain!!! (Or not": "现在真的是最后的收获！！！ （或不",
    "Skill Automation? (": "技能自动化？ （",
    "Try to break the softcap": "尝试打破软上限",
    'All XP upgrades costs are powered to ': '所有经验升级成本提升 ',
    'Multiplies xp and gold exponents by ': '经验和黄金指数乘以',
    'Multiplies your xp, gold and level gain by your loot amount powered to ': '将你的经验值、金币和等级增益乘以你的战利品数量 ',
    'Stronk Powers': '强力力量',
    'Unlocks 6 new ruby upgrades and ruby buyable': '解锁6个新的红宝石升级版和可购买的红宝石',
    'Xp and gold base exponent are increased by ': '经验和黄金基础指数增加 ',
    'Xp base exponent is increased by ': '经验基本指数增加了',
    'XP gain is mult. by passive XP buyable effect pow. to ': '经验增益是多重的。由被动经验可购买效果提升到 ',
    "Total treasures: ": "总珍品：",
    "Gold gain is mult. by passive Gold b. eff. pow. to ": "黄金收益是多重的。由被动黄金b. 效果提升至",
    "All gold upgrades costs are powered to ": "所有的黄金升级成本提高 ",
    "Base Level Gain exponent is powered to ": "基本等级收益指数提高 ",
    "Last challenge reward now is powered to ": "现在上一次挑战奖励提高 ",
    'Even better boost (': '更好的提升（',
    "Era of automation (": "自动化时代（",
    "Guess what? (": "你猜怎么着？ （",
    'Let it be faster (': '让它更快（',
    "Lol (": "哈哈 （",
    "loot exponent divided by ": "战利品指数除以",
    "loot, quest & ruby exponents divided by ": "战利品，任务和红宝石指数除以",
    "Max level is increased by ": "最大等级增加 ",
    "Level, Exp and Gold gain are set to formula of ": "等级，经验值和金币获取设置为以下公式 ",
    "EXTReme Buying (": "极端购买 (",
    "Extreme Buying (": "极端购买（",
    "EXTREME BUYING (": "极端购买（",
    "First milestone bonus base is now based on your total skills. Now: ": "现在第一个里程碑奖金基础是基于您的总技能。 现在：",
    "Faster completions (": "完成速度更快（",
    "Yeah. You waited for it (": "是的。 您等待了（",
    "3xLog*3 (": "3xLog*3 (",
    "All buyables are bought up to ": "所有可购买的物品最多购买到",
    "Even faster rubies and better effect (": "更快的红宝石和更好的效果（",
    'Do we need previous layers? (': '我们需要前面的层吗？ （',
    'Double log reward is powered to ': '双倍对数奖励增强到 ',
    "First seven quest challenge completions are maxed from the beginning.": "从头开始最大程度地完成前七个任务挑战。",
    "Gain 1000% of xp and gold gain / sec from the beginning": "从一开始就获得1000％的经验和金币收益",
    "Gain more completions based on your current skills. Up to ": "根据您当前的技能获得更多成就。 高达",
    'Little increase (': '略有增加（',
    "Log2 log3 effects (": "Log2 log3 效果 (",
    "New Layer. Kek. (": "新层. 哈哈. (",
    "No worries about 7 quests (": "不用担心7个任务(",
    "Passive quest 2? (": "被动任务2？ （",
    "Passive quest? (": "被动任务？ （",
    "Previous milestone effect is doubled": "以前的里程碑效果增加了一倍",
    "Small Increase (": "小幅增长（",
    "Small Increase II (": "小幅增长 II（",
    "Treasure exponent is increased by ": "宝物指数增加 ",
    "Treasure exponent is increased by another ": "宝物指数增加了另外的 ",
    "Why should I even prestige? (": "我为什么还要声望？ （",
    "XP multiplier to loot gain is powered to ": "经验乘以战利品收益提升 ",
    "Treasure gain is multiplied by ": "珍宝收益乘以",
    "Triple LOG reward is powered to ": "三重对数奖励提升 ",
    "Multiplies all skill effects by ": "将所有技能效果乘以",
    "Reset all but then better": "重置所有，但随后更好",
    "Multiplies treasure effects by ": "宝物效果乘以",
    "Removes ability to prestige skill, but Autoskill fun is 10 times effective": "消除声望技能的能力，但自动技能的乐趣是有效技能的10倍",
    "Treasure gain is multiplied by log1000(skills + 1)+1": "珍宝收益乘以log1000(技能+1)+1",
    "C8/sec is multiplied by 9th milestone effect value: ": "C8/秒 乘以第 9 个里程碑效果值：",
    "Single-Tab Mode: ": "单选项卡模式：",
    "Complete quests and challenges to get more bonuses! Loot Effect Bonus: ": "完成任务和挑战以获得更多奖励！抢劫效果奖励：",
    "Rubies make you richer! Gold gain and level gain are multiplied by ": "红宝石让你更富有！黄金增益和等级增益乘以 ",
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
    "Keep 4th layer of xp upgrades.": "保持经验升级的第4层。",
    "\n\t\t\t": "\n\t\t\t",
    "(hardcapped": "(硬上限",
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
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\d\.]+)e(\d+)x$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)$/,
    /^e([\d\.,]+)$/,
    /^\^([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^1 \+ floor\(\(skills\/10\)\^2\) \= ([\d\.,]+)$/,
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
    [/^([\d\.]+) level$/, '$1 等级'],
    [/^([\d\.,]+) exp$/, '$1 经验值'],
    [/^([\d\.,]+) rubies$/, '$1 红宝石'],
    [/^([\d\.,]+) experience$/, '$1 经验值'],
    [/^e([\d\.,]+) experience$/, 'e$1 经验值'],
    [/^([\d\.,]+) quests$/, '$1 任务'],
    [/^([\d\.,]+) level$/, '$1 等级'],
    [/^([\d\.,]+) loot$/, '$1 战利品'],
    [/^([\d\.,]+) gold$/, '$1 黄金'],
    [/^([\d\.]+)e([\d\.,]+) quests$/, '$1e$2 任务'],
    [/^([\d\.]+)e([\d\.,]+) rubies$/, '$1e$2 红宝石'],
    [/^([\d\.]+)e([\d\.,]+) level$/, '$1e$2 等级'],
    [/^([\d\.]+)e([\d\.,]+) exp$/, '$1e$2 经验值'],
    [/^([\d\.]+)e([\d\.,]+) experience$/, '$1e$2 经验值'],
    [/^([\d\.]+)e([\d\.,]+) loot$/, '$1e$2 战利品'],
    [/^([\d\.]+)e([\d\.,]+) gold$/, '$1e$2 黄金'],
    [/^You have made a total of  (.+) gold$/, '你总计产生了 $1 黄金'],
    [/^You have (.+) gold$/, '你有 $1 黄金'],
    [/^Base level, xp & gold gain is powered to \^(.+) \(before this layer effect$/, '基础等级，经验和金币获取的效果提高到 \^$1（在此层效果之前'],
    [/^Upgrade 3,1 power goes from (.+)\/(.+) to (.+)\/(.+)$/, '升级3,1的效果从$1\/$2增加到$3\/$4'],
    [/^You have made a total of (.+) gold$/, '你总共赚了 $1 金币'],
    [/^Cost\: (.+) rubies\n(.+)Amount\: (.+)\n(.+)XP and gold base exponents are powered to (.+)$/, '成本\: $1 红宝石\n数量\: $3\n交易和黄金基础指数提升到 $5'],
    [/^Cost\: (.+) rubies\n(.+)Amount\: (.+)\n(.+)Base lvl gain exponent is powered to (.+)$/, '成本\: $1 红宝石\n数量\: $3\n基本等级收益指数提高 $5'],
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
    [/^Cost\: (.+) treasures\n\t\t$/, '成本\: $1 珍宝\n\t\t'],
    [/^(.+) \/ (.+) exp\t\t\n\t\t$/, ' $1 \/ $2 经验值\t\t\n\t\t'],
    [/^Autobuy up to (.+) passive upgrades\/tick$/, '自动购买高达 $1 被动升级\/tick'],
    [/^Get (.+) max rubies$/, '获得 $1 个最大红宝石'],
    [/^Get (.+) quests$/, '获得 $1 个任务'],
    [/^Get (.+) skills$/, '获得 $1 技能'],
    [/^Get (.+) skill$/, '获得 $1 技能'],
    [/^loot will help you level up much faster, your best loot will multiply your Lv & XP gain by (.+). \(You should wait at least until 100 or 1,000 for better effect$/, '战利品将帮助你更快地升级，你最好的战利品将使你的等级和经验值增益乘以 $1。（你应该至少等到100或1000才能获得更好的效果'],
    [/^, Treasures help you get more skills. Lol. Increases your max level by (.+). Increases your skill powered gain by (.+)\%. Needs 60 really last \(9\) quest challenge competitions for treasure prestige.$/, '，宝物助你获得更多技能。 哈哈。 将您的最高等级提高 $1。 将你的技能能量增益提高 $2\%。 需要 60 真最后 \(9\) 任务挑战赛才能获得宝物声望。'],
    [/^, Skills can make you level up and complete first two layers faster. Total S. divides loot, quests and ruby exp by (.+). Multiplies XP and gold exponents by (.+). Needs 100 last \(8\) quest challenge competitions for skill prestige.$/, '，技能可以让你升级并更快地完成前两层。 总 S. 将战利品、任务和红宝石经验除以 $1。 将 XP 和黄金指数乘以 $2。 需要 100 次最后 \(8\) 次任务挑战赛才能获得技能声望。'],
    [/^Exp, Gold and Level gain are set to (.+). Their base exponents are also set to (.+)$/, '经验，黄金和等级增益设置为 $1。 他们的基本指数也设置为 $2'],
    [/^total skills squared:  \+(.+) \(Hardcapped at (.+)\). \+(.+) 2nd ruby buyables\/tick.$/, '总技能平方：\+$1（上限为$2）。 \+$3第二颗红宝石可买\/tick。'],
    [/^You can progress faster. Multiplies xp, gold and level gain by (.+)\^\(total_upgrades\). Now\: x(.+)$/, '您可以更快地进步。 将经验，黄金和等级增益乘以 $1\^（总计升级）。 现在：x$2'],
    [/^You are gaining (.+) skills per second$/, '你每秒获得 $1 技能'],
    [/^Treasure effects are (.+) times more effective but still affected by the softcap$/, '宝藏效果提高了 $1 倍，但仍然受到软上限的影响'],
    [/^\t\t\tGoal\: (.+) level$/, '\t\t\t目标\: $1 级'],
    [/^, loot will help you level up much faster, your best loot will multiply your Lv \& XP gain by (.+). \(You should wait at least until (.+) or (.+) for better effect$/, '，战利品将帮助您更快地升级，最好的战利品将使您的等级和建议增益乘以$1。 （您应该至少等到$2或$3才能获得更好的效果'],
    [/^You have (.+) levels$/, '你有 $1 等级'],
    [/^Level, Exp and Gold gain are powered to \^(.+). This challenge reward doesn\'t work here.$/, '等级、经验和黄金增益为 \^$1。这个挑战奖励在这里不起作用。'],
    [/^\t\t\tGoal\: (.+) exp$/, '\t\t\t目标: $1 经验'],
    [/^You have made a total of (.+) skills$/, '您总共取得了 $1 的技能'],
    [/^Quest bonus exponent to loot multiplied by (.+). XP softcap starts (.+) later. \(At (.+)$/, '任务奖励指数乘以$1。经验软上限在$2之后启动。\(在 $3'],
    [/^You are gaining (.+) treasures per second$/, '您每秒获得 $1 珍宝'],
    [/^Next at (.+) levels$/, '下一个在 $1 级'],
    [/^Next\: (.+) \/ (.+) gold\t\t\n\t\t$/, '下一个\: $1 \/ $2 黄金\t\t\n\t\t'],
    [/^Next\: (.+) \/ (.+) exp\t\t\n\t\t$/, '下一个\: $1 \/ $2 经验\t\t\n\t\t'],
    [/^(.+) \/ (.+) gold\t\t\n\t\t$/, ' $1 \/ $2 黄金\t\t\n\t\t'],
    [/^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+) xp\t\t\n\t\t$/, ' $1e$2 \/ $3e$4 经验\t\t\n\t\t'],
    [/^([\d\.]+)e([\d\.,]+) \/ e([\d\.]+)e([\d\.,]+) exp\t\t\n\t\t$/, ' $1e$2 \/ $3e$4 经验\t\t\n\t\t'],
    [/^e([\d\.,]+)e([\d\.]+) \/ e([\d\.]+)e([\d\.,]+) exp\t\t\n\t\t$/, ' $1e$2 \/ $3e$4 经验\t\t\n\t\t'],
    [/^Req\: (.+) \/ (.+) gold\t\t\n\t\t$/, '要求\: $1 \/ $2 黄金\t\t\n\t\t'],
    [/^Req\: (.+) \/ (.+) exp\t\t\n\t\t$/, '要求\: $1 \/ $2 经验\t\t\n\t\t'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (.+) loot$/, '成本：$1 战利品'],
    [/^Cost: (.+) rubies$/, '成本：$1 红宝石'],
    [/^Cost: (.+) gold$/, '成本：$1 黄金'],
    [/^Cost: (.+) levels$/, '成本：$1 等级'],
    [/^Cost: (.+) experience$/, '成本：$1 经验值'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);