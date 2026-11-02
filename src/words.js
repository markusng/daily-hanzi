// Each month: n = nouns, v = verbs, o = other words (first field is the word class).
// Noun/verb line: simplified | traditional | pinyin | Jyutping | English | optional spoken-Cantonese alternative
// Other line: class | simplified | traditional | pinyin | Jyutping | English | optional spoken-Cantonese alternative
const MONTHS = [
 { en:"January", zh:"一月", theme:"Time & beginnings", tsc:"时间", ttc:"時間",
 n:`
新年|新年|xīnnián|san1 nin4|New Year
时间|時間|shíjiān|si4 gaan3|time
日历|日曆|rìlì|jat6 lik6|calendar
星期|星期|xīngqī|sing1 kei4|week
月份|月份|yuèfèn|jyut6 fan6|month
年纪|年紀|niánjì|nin4 gei2|age
早上|早上|zǎoshang|zou2 soeng6|morning|朝早 ziu1 zou2
晚上|晚上|wǎnshang|maan5 soeng6|evening, night|夜晚 je6 maan5
钟头|鐘頭|zhōngtóu|zung1 tau4|hour
手表|手錶|shǒubiǎo|sau2 biu1|wristwatch
闹钟|鬧鐘|nàozhōng|naau6 zung1|alarm clock
计划|計劃|jìhuà|gai3 waak6|plan
目标|目標|mùbiāo|muk6 biu1|goal
习惯|習慣|xíguàn|zaap6 gwaan3|habit
节日|節日|jiérì|zit3 jat6|festival, holiday
冬天|冬天|dōngtiān|dung1 tin1|winter
雪|雪|xuě|syut3|snow
未来|未來|wèilái|mei6 loi4|the future
过去|過去|guòqù|gwo3 heoi3|the past
周末|週末|zhōumò|zau1 mut6|weekend
生日|生日|shēngrì|saang1 jat6|birthday
机会|機會|jīhuì|gei1 wui6|opportunity
愿望|願望|yuànwàng|jyun6 mong6|wish
日记|日記|rìjì|jat6 gei3|diary
秒|秒|miǎo|miu5|second (of time)
分钟|分鐘|fēnzhōng|fan1 zung1|minute
季节|季節|jìjié|gwai3 zit3|season
世纪|世紀|shìjì|sai3 gei2|century
历史|歷史|lìshǐ|lik6 si2|history
开头|開頭|kāitóu|hoi1 tau4|the beginning
结局|結局|jiéjú|git3 guk6|the ending`,
 v:`
开始|開始|kāishǐ|hoi1 ci2|to begin
结束|結束|jiéshù|git3 cuk1|to end
等|等|děng|dang2|to wait
准备|準備|zhǔnbèi|zeon2 bei6|to prepare
记得|記得|jìde|gei3 dak1|to remember
忘记|忘記|wàngjì|mong4 gei3|to forget|唔記得 m4 gei3 dak1
起床|起床|qǐchuáng|hei2 cong4|to get up|起身 hei2 san1
希望|希望|xīwàng|hei1 mong6|to hope
决定|決定|juédìng|kyut3 ding6|to decide
改变|改變|gǎibiàn|goi2 bin3|to change
继续|繼續|jìxù|gai3 zuk6|to continue
迟到|遲到|chídào|ci4 dou3|to be late
安排|安排|ānpái|on1 paai4|to arrange
完成|完成|wánchéng|jyun4 sing4|to complete
庆祝|慶祝|qìngzhù|hing3 zuk1|to celebrate
坚持|堅持|jiānchí|gin1 ci4|to persist
放弃|放棄|fàngqì|fong3 hei3|to give up
尝试|嘗試|chángshì|soeng4 si3|to try
选择|選擇|xuǎnzé|syun2 zaak6|to choose|揀 gaan2
进步|進步|jìnbù|zeon3 bou6|to improve
打算|打算|dǎsuan|daa2 syun3|to intend
期待|期待|qīdài|kei4 doi6|to look forward to
到达|到達|dàodá|dou3 daat6|to arrive
出发|出發|chūfā|ceot1 faat3|to set off
停|停|tíng|ting4|to stop
醒|醒|xǐng|sing2|to wake up
计算|計算|jìsuàn|gai3 syun3|to calculate
浪费|浪費|làngfèi|long6 fai3|to waste
节省|節省|jiéshěng|zit3 saang2|to save (time, money)
回顾|回顧|huígù|wui4 gu3|to look back on
祝|祝|zhù|zuk1|to wish (someone well)`,
 o:`
adj|新|新|xīn|san1|new
adv|已经|已經|yǐjīng|ji5 ging1|already
adv|刚刚|剛剛|gānggāng|gong1 gong1|just (a moment ago)|啱啱 ngaam1 ngaam1
adv|首先|首先|shǒuxiān|sau2 sin1|first of all
adv|曾经|曾經|céngjīng|cang4 ging1|once, at one time
adv|随时|隨時|suíshí|ceoi4 si4|at any time
adj|早|早|zǎo|zou2|early
adj|晚|晚|wǎn|maan5|late|夜 je6
adv|马上|馬上|mǎshàng|maa5 soeng6|immediately|即刻 zik1 hak1
adv|常常|常常|chángcháng|soeng4 soeng4|often|成日 seng4 jat6
adv|有时候|有時候|yǒushíhou|jau5 si4 hau6|sometimes|有時 jau5 si4
adv|从来|從來|cónglái|cung4 loi4|always (until now); never (with 不)
adv|终于|終於|zhōngyú|zung1 jyu1|finally
adv|后来|後來|hòulái|hau6 loi4|later on, afterwards
adv|早就|早就|zǎojiù|zou2 zau6|long ago already
adv|渐渐|漸漸|jiànjiàn|zim6 zim6|gradually
adj|冷|冷|lěng|laang5|cold|凍 dung3
adv|再|再|zài|zoi3|again (in future)
adv|又|又|yòu|jau6|again (already happened)
conj|然后|然後|ránhòu|jin4 hau6|then, after that|跟住 gan1 zyu6
pron|每|每|měi|mui5|every, each
adj|慢|慢|màn|maan6|slow
adj|快|快|kuài|faai3|fast
adv|一直|一直|yīzhí|jat1 zik6|all along, continuously
adv|正在|正在|zhèngzài|zing3 zoi6|in the middle of (doing)
adv|才|才|cái|coi4|only then, not until|先 sin1
adv|就|就|jiù|zau6|right away; then
conj|因为|因為|yīnwèi|jan1 wai6|because
conj|所以|所以|suǒyǐ|so2 ji5|so, therefore
adj|准时|準時|zhǔnshí|zeon2 si4|punctual
adj|最后|最後|zuìhòu|zeoi3 hau6|last, final`},

 { en:"February", zh:"二月", theme:"Family & Spring Festival", tsc:"家庭", ttc:"家庭",
 n:`
家庭|家庭|jiātíng|gaa1 ting4|family
父亲|父親|fùqīn|fu6 can1|father|老豆 lou5 dau6
母亲|母親|mǔqīn|mou5 can1|mother|阿媽 aa3 maa1
哥哥|哥哥|gēge|go4 go1|older brother
姐姐|姐姐|jiějie|ze4 ze1|older sister|家姐 gaa1 ze1
春节|春節|Chūnjié|ceon1 zit3|Spring Festival, Lunar New Year
红包|紅包|hóngbāo|hung4 baau1|red envelope|利是 lai6 si6
鞭炮|鞭炮|biānpào|bin1 paau3|firecrackers
饺子|餃子|jiǎozi|gaau2 zi2|dumplings
弟弟|弟弟|dìdi|dai4 dai2|younger brother|細佬 sai3 lou2
妹妹|妹妹|mèimei|mui4 mui2|younger sister|細妹 sai3 mui2
爷爷|爺爺|yéye|je4 je4|grandfather (father’s side)
奶奶|奶奶|nǎinai|naai5 naai5|grandmother (father’s side)|嫲嫲 maa4 maa4
爱情|愛情|àiqíng|oi3 cing4|romantic love
孩子|孩子|háizi|haai4 zi2|child|細路 sai3 lou6
亲戚|親戚|qīnqi|can1 cik1|relatives
丈夫|丈夫|zhàngfu|zoeng6 fu1|husband|老公 lou5 gung1
妻子|妻子|qīzi|cai1 zi2|wife|老婆 lou5 po4
灯笼|燈籠|dēnglong|dang1 lung4|lantern
元宵|元宵|Yuánxiāo|jyun4 siu1|Lantern Festival
朋友|朋友|péngyou|pang4 jau5|friend
邻居|鄰居|línjū|leon4 geoi1|neighbour
礼物|禮物|lǐwù|lai5 mat6|gift
婚礼|婚禮|hūnlǐ|fan1 lai5|wedding
婴儿|嬰兒|yīng'ér|jing1 ji4|baby
名字|名字|míngzi|meng2 zi6|name|名 meng2
祖先|祖先|zǔxiān|zou2 sin1|ancestors
春联|春聯|chūnlián|ceon1 lyun4|New Year couplets|揮春 fai1 ceon1`,
 v:`
爱|愛|ài|oi3|to love
照顾|照顧|zhàogù|ziu3 gu3|to look after
关心|關心|guānxīn|gwaan1 sam1|to care about
帮助|幫助|bāngzhù|bong1 zo6|to help|幫手 bong1 sau2
团圆|團圓|tuányuán|tyun4 jyun4|to reunite (as a family)
拜年|拜年|bàinián|baai3 nin4|to pay a New Year visit
恭喜|恭喜|gōngxǐ|gung1 hei2|to congratulate
送|送|sòng|sung3|to give (as a gift)
收|收|shōu|sau1|to receive
包|包|bāo|baau1|to wrap
拜访|拜訪|bàifǎng|baai3 fong2|to visit (someone)
打扫|打掃|dǎsǎo|daa2 sou3|to clean up
贴|貼|tiē|tip3|to stick, paste up
结婚|結婚|jiéhūn|git3 fan1|to marry
认识|認識|rènshi|jing6 sik1|to know (a person)
介绍|介紹|jièshào|gaai3 siu6|to introduce
陪|陪|péi|pui4|to keep someone company
想念|想念|xiǎngniàn|soeng2 nim6|to miss (someone)|掛住 gwaa3 zyu6
感谢|感謝|gǎnxiè|gam2 ze6|to thank|多謝 do1 ze6
猜|猜|cāi|caai1|to guess
聊天|聊天|liáotiān|liu4 tin1|to chat|傾偈 king1 gai2
拥抱|擁抱|yōngbào|jung2 pou5|to hug|攬 laam2
生|生|shēng|saang1|to give birth
长大|長大|zhǎngdà|zoeng2 daai6|to grow up
养|養|yǎng|joeng5|to raise (a child, a pet)
叫|叫|jiào|giu3|to call (by name)
分享|分享|fēnxiǎng|fan1 hoeng2|to share
祭拜|祭拜|jìbài|zai3 baai3|to pay respects (to ancestors)`,
 o:`
pron|我们|我們|wǒmen|ngo5 mun4|we, us|我哋 ngo5 dei6
pron|你|你|nǐ|nei5|you
pron|他|他|tā|taa1|he, him|佢 keoi5
pron|她|她|tā|taa1|she, her|佢 keoi5
pron|大家|大家|dàjiā|daai6 gaa1|everyone
phrase|新年快乐|新年快樂|xīnnián kuàilè|san1 nin4 faai3 lok6|Happy New Year
phrase|恭喜发财|恭喜發財|gōngxǐ fācái|gung1 hei2 faat3 coi4|wishing you prosperity
adj|热闹|熱鬧|rènao|jit6 naau6|lively, bustling
adj|红|紅|hóng|hung4|red
adj|亲爱|親愛|qīn'ài|can1 oi3|dear, beloved
adj|小|小|xiǎo|siu2|small, young|細 sai3
adj|大|大|dà|daai6|big; older
adj|老|老|lǎo|lou5|old
adj|年轻|年輕|niánqīng|nin4 hing1|young|後生 hau6 saang1
adv|一起|一起|yīqǐ|jat1 hei2|together|一齊 jat1 cai4
adj|可爱|可愛|kě'ài|ho2 oi3|cute, lovely
adj|幸福|幸福|xìngfú|hang6 fuk1|happy, blessed
pron|自己|自己|zìjǐ|zi6 gei2|oneself
pron|谁|誰|shéi|seoi4|who|邊個 bin1 go3
adj|圆|圓|yuán|jyun4|round
conj|和|和|hé|wo4|and|同 tung4
adj|亲切|親切|qīnqiè|can1 cit3|warm, cordial
adv|真|真|zhēn|zan1|really, truly
adj|吉利|吉利|jílì|gat1 lei6|lucky, auspicious
mw|个|個|gè|go3|(general measure word)
mw|位|位|wèi|wai2|(polite measure word for people)
adj|孝顺|孝順|xiàoshùn|haau3 seon6|devoted to one’s parents
adv|互相|互相|hùxiāng|wu6 soeng1|mutually, each other`},

 { en:"March", zh:"三月", theme:"Nature", tsc:"自然", ttc:"自然",
 n:`
春天|春天|chūntiān|ceon1 tin1|spring
花|花|huā|faa1|flower
树|樹|shù|syu6|tree
草|草|cǎo|cou2|grass
山|山|shān|saan1|mountain, hill
河|河|hé|ho4|river
海|海|hǎi|hoi2|sea
森林|森林|sēnlín|sam1 lam4|forest
动物|動物|dòngwù|dung6 mat6|animal
鸟|鳥|niǎo|niu5|bird|雀仔 zoek3 zai2
蝴蝶|蝴蝶|húdié|wu4 dip6|butterfly
龙|龍|lóng|lung4|dragon
马|馬|mǎ|maa5|horse
鱼|魚|yú|jyu4|fish
猫|貓|māo|maau1|cat
狗|狗|gǒu|gau2|dog
羊|羊|yáng|joeng4|goat, sheep (2027 is the Year of the Goat)
风景|風景|fēngjǐng|fung1 ging2|scenery
阳光|陽光|yángguāng|joeng4 gwong1|sunlight
种子|種子|zhǒngzi|zung2 zi2|seed
春分|春分|Chūnfēn|ceon1 fan1|spring equinox
叶子|葉子|yèzi|jip6 zi2|leaf
环境|環境|huánjìng|waan4 ging2|environment
空气|空氣|kōngqì|hung1 hei3|air
地球|地球|dìqiú|dei6 kau4|the Earth
天空|天空|tiānkōng|tin1 hung1|sky
星星|星星|xīngxing|sing1 sing1|star
月亮|月亮|yuèliang|jyut6 loeng6|the moon
石头|石頭|shítou|sek6 tau4|stone, rock
湖|湖|hú|wu4|lake
自然|自然|zìrán|zi6 jin4|nature`,
 v:`
开|開|kāi|hoi1|to bloom; to open
种|種|zhòng|zung3|to plant
长|長|zhǎng|zoeng2|to grow
浇水|澆水|jiāoshuǐ|giu1 seoi2|to water (plants)|淋水 lam4 seoi2
爬山|爬山|páshān|paa4 saan1|to climb a mountain|行山 haang4 saan1
流|流|liú|lau4|to flow
飞|飛|fēi|fei1|to fly
游|游|yóu|jau4|to swim (of fish)
跳|跳|tiào|tiu3|to jump
孵|孵|fū|fu1|to hatch
散步|散步|sànbù|saan3 bou6|to take a walk
保护|保護|bǎohù|bou2 wu6|to protect
骑|騎|qí|ke4|to ride (a horse, a bike)
钓鱼|釣魚|diàoyú|diu3 jyu2|to fish
喂|餵|wèi|wai3|to feed
抓|抓|zhuā|zaa1|to catch, grab|捉 zuk1
看|看|kàn|hon3|to look, see|睇 tai2
听|聽|tīng|teng1|to listen
闻|聞|wén|man4|to smell
发芽|發芽|fāyá|faat3 ngaa4|to sprout
观察|觀察|guānchá|gun1 caat3|to observe
落|落|luò|lok6|to fall (of leaves)
污染|污染|wūrǎn|wu1 jim5|to pollute
吹|吹|chuī|ceoi1|to blow
照|照|zhào|ziu3|to shine on
闪|閃|shǎn|sim2|to sparkle, flash
升|升|shēng|sing1|to rise
摘|摘|zhāi|zaak6|to pick (flowers, fruit)
爬|爬|pá|paa4|to crawl, climb
发现|發現|fāxiàn|faat3 jin6|to discover
呼吸|呼吸|hūxī|fu1 kap1|to breathe`,
 o:`
adj|美丽|美麗|měilì|mei5 lai6|beautiful|靚 leng3
adj|绿|綠|lǜ|luk6|green
adj|高|高|gāo|gou1|tall, high
adj|低|低|dī|dai1|low
adj|深|深|shēn|sam1|deep
adj|浅|淺|qiǎn|cin2|shallow
adj|安静|安靜|ānjìng|on1 zing6|quiet
adj|新鲜|新鮮|xīnxiān|san1 sin1|fresh
adj|野|野|yě|je5|wild
adj|蓝|藍|lán|laam4|blue
adj|白|白|bái|baak6|white
adj|黄|黃|huáng|wong4|yellow
adj|黑|黑|hēi|hak1|black
mw|只|隻|zhī|zek3|(measure word for animals)
mw|条|條|tiáo|tiu4|(measure word for fish, rivers)
mw|棵|棵|kē|fo1|(measure word for trees)
mw|朵|朵|duǒ|do2|(measure word for flowers, clouds)
adj|远|遠|yuǎn|jyun5|far
adj|近|近|jìn|kan5|near
adj|干燥|乾燥|gānzào|gon1 cou3|dry
adj|温和|溫和|wēnhé|wan1 wo4|mild, gentle
adj|茂盛|茂盛|màoshèng|mau6 sing6|lush
adj|可怕|可怕|kěpà|ho2 paa3|frightening
adj|清|清|qīng|cing1|clear (water)
adj|亮|亮|liàng|loeng6|bright|光 gwong1
adj|暗|暗|àn|am3|dark
adv|到处|到處|dàochù|dou3 cyu3|everywhere|周圍 zau1 wai4
prep|在|在|zài|zoi6|at, in|喺 hai2
prep|从|從|cóng|cung4|from
adj|轻|輕|qīng|hing1|light (in weight)
adj|重|重|zhòng|cung5|heavy`},

 { en:"April", zh:"四月", theme:"Food & eating", tsc:"饮食", ttc:"飲食",
 n:`
米饭|米飯|mǐfàn|mai5 faan6|cooked rice|白飯 baak6 faan6
面条|麵條|miàntiáo|min6 tiu4|noodles
茶|茶|chá|caa4|tea
鸡蛋|雞蛋|jīdàn|gai1 daan2|egg
清明|清明|Qīngmíng|cing1 ming4|Qingming, Tomb-Sweeping Day
水果|水果|shuǐguǒ|seoi2 gwo2|fruit
苹果|蘋果|píngguǒ|ping4 gwo2|apple
蔬菜|蔬菜|shūcài|so1 coi3|vegetables
牛肉|牛肉|niúròu|ngau4 juk6|beef
猪肉|豬肉|zhūròu|zyu1 juk6|pork
点心|點心|diǎnxin|dim2 sam1|dim sum; snack
饮料|飲料|yǐnliào|jam2 liu6|beverage, drink
咖啡|咖啡|kāfēi|gaa3 fe1|coffee
早餐|早餐|zǎocān|zou2 caan1|breakfast
午餐|午餐|wǔcān|ng5 caan1|lunch
晚饭|晚飯|wǎnfàn|maan5 faan6|dinner
饭店|飯店|fàndiàn|faan6 dim3|restaurant|酒樓 zau2 lau4
菜单|菜單|càidān|coi3 daan1|menu
筷子|筷子|kuàizi|faai3 zi2|chopsticks
汤|湯|tāng|tong1|soup
面包|麵包|miànbāo|min6 baau1|bread
厨房|廚房|chúfáng|cyu4 fong2|kitchen
酱油|醬油|jiàngyóu|zoeng3 jau4|soy sauce|豉油 si6 jau4
盐|鹽|yán|jim4|salt
糖|糖|táng|tong4|sugar; sweets
碗|碗|wǎn|wun2|bowl
鸡|雞|jī|gai1|chicken
虾|蝦|xiā|haa1|shrimp, prawn
味道|味道|wèidao|mei6 dou6|taste, flavour
水|水|shuǐ|seoi2|water`,
 v:`
吃|吃|chī|hek3|to eat|食 sik6
喝|喝|hē|hot3|to drink|飲 jam2
煮|煮|zhǔ|zyu2|to boil, cook
炒|炒|chǎo|caau2|to stir-fry
扫墓|掃墓|sǎomù|sou3 mou6|to sweep a family grave|拜山 baai3 saan1
切|切|qiē|cit3|to cut, slice
洗|洗|xǐ|sai2|to wash
尝|嘗|cháng|soeng4|to taste
点菜|點菜|diǎncài|dim2 coi3|to order food|叫嘢食 giu3 je5 sik6
饿|餓|è|ngo6|to be hungry|肚餓 tou5 ngo6
饱|飽|bǎo|baau2|to be full (after eating)
渴|渴|kě|hot3|to be thirsty|口渴 hau2 hot3
做饭|做飯|zuòfàn|zou6 faan6|to cook a meal|煮飯 zyu2 faan6
请客|請客|qǐngkè|ceng2 haak3|to treat (pay for others)
买单|買單|mǎidān|maai5 daan1|to pay the bill|埋單 maai4 daan1
倒|倒|dào|dou3|to pour
烤|烤|kǎo|haau1|to roast, bake|焗 guk6
加|加|jiā|gaa1|to add
放|放|fàng|fong3|to put
拿|拿|ná|naa4|to take, hold|攞 lo2
订|訂|dìng|deng6|to book, reserve
等位|等位|děngwèi|dang2 wai2|to wait for a table
打包|打包|dǎbāo|daa2 baau1|to take leftovers away
减肥|減肥|jiǎnféi|gaam2 fei4|to lose weight
蒸|蒸|zhēng|zing1|to steam
搅拌|攪拌|jiǎobàn|gaau2 bun6|to stir, mix
招待|招待|zhāodài|ziu1 doi6|to entertain (guests)
分|分|fēn|fan1|to divide, share out
吞|吞|tūn|tan1|to swallow
咬|咬|yǎo|ngaau5|to bite`,
 o:`
adj|好吃|好吃|hǎochī|hou2 hek3|delicious|好食 hou2 sik6
adj|甜|甜|tián|tim4|sweet
adj|辣|辣|là|laat6|spicy hot
adj|咸|鹹|xián|haam4|salty
adj|酸|酸|suān|syun1|sour
adj|苦|苦|kǔ|fu2|bitter
adj|香|香|xiāng|hoeng1|fragrant
adj|热|熱|rè|jit6|hot
adj|凉|涼|liáng|loeng4|cool, cold|凍 dung3
adj|好喝|好喝|hǎohē|hou2 hot3|tasty (of a drink)|好飲 hou2 jam2
adj|油腻|油膩|yóunì|jau4 nei6|greasy
adj|清淡|清淡|qīngdàn|cing1 daam6|light, mild (food)
mw|杯|杯|bēi|bui1|a cup of
mw|盘|盤|pán|pun4|a plate of|碟 dip6
mw|瓶|瓶|píng|ping4|a bottle of|樽 zeon1
mw|块|塊|kuài|faai3|a piece of|嚿 gau6
quant|一点|一點|yīdiǎn|jat1 dim2|a little|少少 siu2 siu2
adj|多|多|duō|do1|many, much
adj|少|少|shǎo|siu2|few, little
adv|太|太|tài|taai3|too (much)
adv|很|很|hěn|han2|very|好 hou2
adv|非常|非常|fēicháng|fei1 soeng4|extremely
adj|熟|熟|shú|suk6|cooked; ripe
adj|软|軟|ruǎn|jyun5|soft
adj|脆|脆|cuì|ceoi3|crispy
adj|素|素|sù|sou3|vegetarian
prep|用|用|yòng|jung6|with, using
adv|还|還|hái|waan4|still; also|仲 zung6
adv|也|也|yě|jaa5|also, too|都 dou1
adj|正宗|正宗|zhèngzōng|zing3 zung1|authentic`},

 { en:"May", zh:"五月", theme:"Body & health", tsc:"身体", ttc:"身體",
 n:`
劳动节|勞動節|Láodòngjié|lou4 dung6 zit3|Labour Day
身体|身體|shēntǐ|san1 tai2|body
头发|頭髮|tóufa|tau4 faat3|hair (on the head)
眼睛|眼睛|yǎnjing|ngaan5 zing1|eye
耳朵|耳朵|ěrduo|ji5 do2|ear|耳仔 ji5 zai2
鼻子|鼻子|bízi|bei6 zi2|nose|鼻哥 bei6 go1
嘴巴|嘴巴|zuǐba|zeoi2 baa1|mouth
手|手|shǒu|sau2|hand
脚|腳|jiǎo|goek3|foot
心|心|xīn|sam1|heart
头|頭|tóu|tau4|head
医生|醫生|yīshēng|ji1 sang1|doctor
医院|醫院|yīyuàn|ji1 jyun2|hospital
药|藥|yào|joek6|medicine
感冒|感冒|gǎnmào|gam2 mou6|a cold
肚子|肚子|dùzi|tou5 zi2|belly|肚 tou5
牙齿|牙齒|yáchǐ|ngaa4 ci2|teeth
运动|運動|yùndòng|wan6 dung6|sport, exercise
体重|體重|tǐzhòng|tai2 cung5|body weight
精神|精神|jīngshen|zing1 san4|energy, vigour
力气|力氣|lìqi|lik6 hei3|physical strength
护士|護士|hùshi|wu6 si6|nurse
脸|臉|liǎn|lim5|face|塊面 faai3 min6
肩膀|肩膀|jiānbǎng|gin1 bong2|shoulder|膊頭 bok3 tau4
腿|腿|tuǐ|teoi2|leg
血|血|xuè|hyut3|blood
骨头|骨頭|gǔtou|gwat1 tau4|bone
皮肤|皮膚|pífū|pei4 fu1|skin
病|病|bìng|beng6|illness
健康|健康|jiànkāng|gin6 hong1|health
声音|聲音|shēngyīn|sing1 jam1|voice, sound`,
 v:`
劳动|勞動|láodòng|lou4 dung6|to labour, work
跑步|跑步|pǎobù|paau2 bou6|to run, jog
游泳|游泳|yóuyǒng|jau4 wing6|to swim
睡觉|睡覺|shuìjiào|seoi6 gaau3|to sleep|瞓覺 fan3 gaau3
休息|休息|xiūxi|jau1 sik1|to rest|唞 tau2
生病|生病|shēngbìng|saang1 beng6|to fall ill|病咗 beng6 zo2
发烧|發燒|fāshāo|faat3 siu1|to have a fever
咳嗽|咳嗽|késou|kat1 sau3|to cough
洗澡|洗澡|xǐzǎo|sai2 zou2|to bathe, shower|沖涼 cung1 loeng4
刷牙|刷牙|shuāyá|caat3 ngaa4|to brush one’s teeth
微笑|微笑|wēixiào|mei4 siu3|to smile
哭|哭|kū|huk1|to cry|喊 haam3
笑|笑|xiào|siu3|to laugh
走路|走路|zǒulù|zau2 lou6|to walk|行路 haang4 lou6
站|站|zhàn|zaam6|to stand|企 kei5
坐|坐|zuò|co5|to sit
躺|躺|tǎng|tong2|to lie down|瞓 fan3
看病|看病|kànbìng|hon3 beng6|to see a doctor|睇醫生 tai2 ji1 sang1
打针|打針|dǎzhēn|daa2 zam1|to have an injection
受伤|受傷|shòushāng|sau6 soeng1|to get hurt
锻炼|鍛煉|duànliàn|dyun3 lin6|to work out
流汗|流汗|liúhàn|lau4 hon6|to sweat
打喷嚏|打噴嚏|dǎ pēntì|daa2 pan3 tai3|to sneeze|乞嗤 hat1 ci1
摸|摸|mō|mo2|to touch, feel
拍|拍|pāi|paak3|to pat, clap
举|舉|jǔ|geoi2|to lift, raise
疼|疼|téng|tang4|to ache|痛 tung3
治疗|治療|zhìliáo|zi6 liu4|to treat (medically)
恢复|恢復|huīfù|fui1 fuk6|to recover
保持|保持|bǎochí|bou2 ci4|to maintain
吸烟|吸煙|xīyān|kap1 jin1|to smoke|食煙 sik6 jin1`,
 o:`
adj|累|累|lèi|leoi6|tired|攰 gui6
adj|强壮|強壯|qiángzhuàng|koeng4 zong3|strong, sturdy
adj|舒服|舒服|shūfu|syu1 fuk6|comfortable
adj|难受|難受|nánshòu|naan4 sau6|unwell, uncomfortable|辛苦 san1 fu2
adj|胖|胖|pàng|bun6|fat|肥 fei4
adj|瘦|瘦|shòu|sau3|thin
adj|矮|矮|ǎi|ai2|short (in height)
adj|漂亮|漂亮|piàoliang|piu3 loeng6|pretty|靚 leng3
adj|帅|帥|shuài|seoi3|handsome|靚仔 leng3 zai2
adj|疲倦|疲倦|píjuàn|pei4 gyun6|weary
adj|严重|嚴重|yánzhòng|jim4 zung6|serious, severe
adj|轻微|輕微|qīngwēi|hing1 mei4|slight, mild
adj|灵活|靈活|línghuó|ling4 wut6|nimble, flexible
adv|好好|好好|hǎohǎo|hou2 hou2|properly, well
adv|慢慢|慢慢|mànmàn|maan6 maan6|slowly
adj|痒|癢|yǎng|joeng5|itchy|痕 han4
adj|硬|硬|yìng|ngaang6|hard, stiff
adj|清醒|清醒|qīngxǐng|cing1 sing2|awake, clear-headed
adj|有力|有力|yǒulì|jau5 lik6|powerful
adj|虚弱|虛弱|xūruò|heoi1 joek6|weak, frail
adv|必须|必須|bìxū|bit1 seoi1|must
adv|尽量|盡量|jǐnliàng|zeon6 loeng6|as far as possible
adv|赶快|趕快|gǎnkuài|gon2 faai3|quickly, hurry|快啲 faai3 di1
adv|几乎|幾乎|jīhū|gei1 fu4|almost
adj|正常|正常|zhèngcháng|zing3 soeng4|normal
adv|别|別|bié|bit6|don’t|唔好 m4 hou2
adv|不|不|bù|bat1|not|唔 m4
adv|没|沒|méi|mut6|have not|冇 mou5
adv|稍微|稍微|shāowēi|saau2 mei4|slightly
loc|左|左|zuǒ|zo2|left
loc|右|右|yòu|jau6|right`},

 { en:"June", zh:"六月", theme:"Weather & summer", tsc:"天气", ttc:"天氣",
 n:`
天气|天氣|tiānqì|tin1 hei3|weather
夏天|夏天|xiàtiān|haa6 tin1|summer
太阳|太陽|tàiyáng|taai3 joeng4|the sun|熱頭 jit6 tau4
雨|雨|yǔ|jyu5|rain
雨伞|雨傘|yǔsǎn|jyu5 saan3|umbrella|遮 ze1
风|風|fēng|fung1|wind
台风|颱風|táifēng|toi4 fung1|typhoon
雷|雷|léi|leoi4|thunder
端午节|端午節|Duānwǔjié|dyun1 ng5 zit3|Dragon Boat Festival|五月節 ng5 jyut6 zit3
粽子|粽子|zòngzi|zung3 zi2|sticky-rice dumpling
龙舟|龍舟|lóngzhōu|lung4 zau1|dragon boat
云|雲|yún|wan4|cloud
彩虹|彩虹|cǎihóng|coi2 hung4|rainbow
温度|溫度|wēndù|wan1 dou6|temperature
湿度|濕度|shīdù|sap1 dou6|humidity
晴天|晴天|qíngtiān|cing4 tin1|sunny day
空调|空調|kōngtiáo|hung1 tiu4|air conditioning|冷氣 laang5 hei3
冰淇淋|冰淇淋|bīngqílín|bing1 kei4 lam4|ice cream|雪糕 syut3 gou1
海滩|海灘|hǎitān|hoi2 taan1|beach
西瓜|西瓜|xīguā|sai1 gwaa1|watermelon
夏至|夏至|Xiàzhì|haa6 zi3|summer solstice
扇子|扇子|shànzi|sin3 zi2|hand fan|扇 sin3
预报|預報|yùbào|jyu6 bou3|forecast
暑假|暑假|shǔjià|syu2 gaa3|summer holiday
闪电|閃電|shǎndiàn|sim2 din6|lightning
雾|霧|wù|mou6|fog
帽子|帽子|màozi|mou6 zi2|hat|帽 mou2
太阳镜|太陽鏡|tàiyángjìng|taai3 joeng4 geng3|sunglasses|太陽眼鏡 taai3 joeng4 ngaan5 geng2
蚊子|蚊子|wénzi|man1 zi2|mosquito|蚊 man1
汗|汗|hàn|hon6|sweat`,
 v:`
下雨|下雨|xiàyǔ|haa6 jyu5|to rain|落雨 lok6 jyu5
刮风|颳風|guāfēng|gwaat3 fung1|to be windy
打雷|打雷|dǎléi|daa2 leoi4|to thunder|行雷 haang4 leoi4
晒|曬|shài|saai3|to bask in the sun; to dry in the sun
下雪|下雪|xiàxuě|haa6 syut3|to snow|落雪 lok6 syut3
带|帶|dài|daai3|to bring, carry
打开|打開|dǎkāi|daa2 hoi1|to open; to switch on|開 hoi1
关|關|guān|gwaan1|to close; to switch off|閂 saan1
划|划|huá|waa4|to row, paddle|扒 paa4
赛|賽|sài|coi3|to race, compete
变|變|biàn|bin3|to change, become
躲|躲|duǒ|do2|to hide, shelter|匿 nei1
淋湿|淋濕|línshī|lam4 sap1|to get soaked
降温|降溫|jiàngwēn|gong3 wan1|to cool down
放晴|放晴|fàngqíng|fong3 cing4|to clear up (after rain)
冲浪|衝浪|chōnglàng|cung1 long6|to surf
防晒|防曬|fángshài|fong4 saai3|to protect from the sun
融化|融化|rónghuà|jung4 faa3|to melt|溶 jung4
预测|預測|yùcè|jyu6 cak1|to predict
扇|扇|shān|sin3|to fan
打伞|打傘|dǎsǎn|daa2 saan3|to hold up an umbrella|擔遮 daam1 ze1
避暑|避暑|bìshǔ|bei6 syu2|to escape the summer heat
放假|放假|fàngjià|fong3 gaa3|to have a holiday
戴|戴|dài|daai3|to wear (a hat, glasses)
穿|穿|chuān|cyun1|to wear (clothes)|著 zoek3
脱|脫|tuō|tyut3|to take off (clothes)|除 ceoi4
晾|晾|liàng|long6|to hang out to dry
停电|停電|tíngdiàn|ting4 din6|to have a power cut
打|打|dǎ|daa2|to hit, strike
消暑|消暑|xiāoshǔ|siu1 syu2|to beat the heat`,
 o:`
adj|炎热|炎熱|yánrè|jim4 jit6|scorching hot
adj|凉快|涼快|liángkuai|loeng4 faai3|pleasantly cool|涼爽 loeng4 song2
adj|阴|陰|yīn|jam1|overcast
adj|晴|晴|qíng|cing4|sunny, clear
adj|闷热|悶熱|mēnrè|mun6 jit6|muggy|翳焗 ai3 guk6
adj|潮湿|潮濕|cháoshī|ciu4 sap1|humid, damp
adj|湿|濕|shī|sap1|wet
adj|干|乾|gān|gon1|dry
adj|强|強|qiáng|koeng4|strong
adj|舒适|舒適|shūshì|syu1 sik1|pleasant, cosy
adj|晴朗|晴朗|qínglǎng|cing4 long5|fine, cloudless
adj|暖|暖|nuǎn|nyun5|warm
adj|爽|爽|shuǎng|song2|refreshing
adj|刺眼|刺眼|cìyǎn|ci3 ngaan5|dazzling
adv|突然|突然|tūrán|dat6 jin4|suddenly|突然之間 dat6 jin4 zi1 gaan1
adv|可能|可能|kěnéng|ho2 nang4|maybe
adv|大概|大概|dàgài|daai6 koi3|probably
adv|越来越|越來越|yuèláiyuè|jyut6 loi4 jyut6|more and more
adv|特别|特別|tèbié|dak6 bit6|especially
adv|差不多|差不多|chàbuduō|caa1 bat1 do1|almost, about
adv|一定|一定|yīdìng|jat1 ding6|certainly
conj|如果|如果|rúguǒ|jyu4 gwo2|if
conj|但是|但是|dànshì|daan6 si6|but|不過 bat1 gwo3
conj|虽然|雖然|suīrán|seoi1 jin4|although
conj|或者|或者|huòzhě|waak6 ze2|or
adv|整天|整天|zhěngtiān|zing2 tin1|all day long
mw|场|場|chǎng|coeng4|(measure word for rain, games)
mw|阵|陣|zhèn|zan6|a spell of, a gust of
mw|度|度|dù|dou6|degree (of temperature)
adj|透明|透明|tòumíng|tau3 ming4|transparent`},

 { en:"July", zh:"七月", theme:"Travel & places", tsc:"旅行", ttc:"旅行",
 n:`
飞机|飛機|fēijī|fei1 gei1|aeroplane
机场|機場|jīchǎng|gei1 coeng4|airport
火车|火車|huǒchē|fo2 ce1|train
地铁|地鐵|dìtiě|dei6 tit3|metro, subway, MTR
巴士|巴士|bāshì|baa1 si2|bus
出租车|出租車|chūzūchē|ceot1 zou1 ce1|taxi|的士 dik1 si2
护照|護照|hùzhào|wu6 ziu3|passport
行李|行李|xíngli|hang4 lei5|luggage
酒店|酒店|jiǔdiàn|zau2 dim3|hotel
地图|地圖|dìtú|dei6 tou4|map
方向|方向|fāngxiàng|fong1 hoeng3|direction
门票|門票|ménpiào|mun4 piu3|admission ticket
照片|照片|zhàopiàn|ziu3 pin2|photograph|相 soeng2
国家|國家|guójiā|gwok3 gaa1|country
城市|城市|chéngshì|sing4 si5|city
香港|香港|Xiānggǎng|hoeng1 gong2|Hong Kong
广东|廣東|Guǎngdōng|gwong2 dung1|Guangdong (Canton)
北京|北京|Běijīng|bak1 ging1|Beijing
台湾|台灣|Táiwān|toi4 waan1|Taiwan
船|船|chuán|syun4|boat, ship
码头|碼頭|mǎtou|maa5 tau4|pier, wharf
车站|車站|chēzhàn|ce1 zaam6|station, stop
签证|簽證|qiānzhèng|cim1 zing3|visa
游客|遊客|yóukè|jau4 haak3|tourist
导游|導遊|dǎoyóu|dou6 jau4|tour guide
风俗|風俗|fēngsú|fung1 zuk6|local customs
澳门|澳門|Àomén|ou3 mun4|Macau
上海|上海|Shànghǎi|soeng6 hoi2|Shanghai
世界|世界|shìjiè|sai3 gaai3|the world
路|路|lù|lou6|road, way
家|家|jiā|gaa1|home|屋企 uk1 kei2`,
 v:`
旅行|旅行|lǚxíng|leoi5 hang4|to travel
乘坐|乘坐|chéngzuò|sing4 zo6|to ride (transport)|搭 daap3
开车|開車|kāichē|hoi1 ce1|to drive|揸車 zaa1 ce1
走|走|zǒu|zau2|to walk; to leave|行 haang4
去|去|qù|heoi3|to go
来|來|lái|loi4|to come|嚟 lai4
回家|回家|huíjiā|wui4 gaa1|to go home|返屋企 faan1 uk1 kei2
迷路|迷路|mílù|mai4 lou6|to get lost|蕩失路 dong6 sat1 lou6
拍照|拍照|pāizhào|paak3 ziu3|to take a photo|影相 jing2 soeng2
参观|參觀|cānguān|caam1 gun1|to visit (a place)
问路|問路|wènlù|man6 lou6|to ask the way
转|轉|zhuǎn|zyun2|to turn
过|過|guò|gwo3|to cross, pass
换|換|huàn|wun6|to change, exchange
上车|上車|shàngchē|soeng5 ce1|to get on (a vehicle)
下车|下車|xiàchē|haa6 ce1|to get off (a vehicle)|落車 lok6 ce1
住|住|zhù|zyu6|to stay, live
收拾|收拾|shōushi|sau1 sap6|to pack up, tidy
出国|出國|chūguó|ceot1 gwok3|to go abroad
降落|降落|jiàngluò|gong3 lok6|to land
起飞|起飛|qǐfēi|hei2 fei1|to take off (of a plane)
排队|排隊|páiduì|paai4 deoi2|to queue
离开|離開|líkāi|lei4 hoi1|to leave
回来|回來|huílái|wui4 loi4|to come back|返嚟 faan1 lai4
游览|遊覽|yóulǎn|jau4 laam5|to go sightseeing
找|找|zhǎo|zaau2|to look for|搵 wan2
带路|帶路|dàilù|daai3 lou6|to lead the way
经过|經過|jīngguò|ging1 gwo3|to pass by, go through
推荐|推薦|tuījiàn|teoi1 zin3|to recommend
退房|退房|tuìfáng|teoi3 fong2|to check out (of a hotel)
入住|入住|rùzhù|jap6 zyu6|to check in (to a hotel)`,
 o:`
adj|方便|方便|fāngbiàn|fong1 bin6|convenient
loc|东|東|dōng|dung1|east
loc|南|南|nán|naam4|south
loc|西|西|xī|sai1|west
loc|北|北|běi|bak1|north
loc|上面|上面|shàngmian|soeng6 min6|above, on top|上便 soeng6 bin6
loc|下面|下面|xiàmian|haa6 min6|below, underneath|下便 haa6 bin6
loc|前面|前面|qiánmian|cin4 min6|in front|前便 cin4 bin6
loc|后面|後面|hòumian|hau6 min6|behind|後便 hau6 bin6
loc|里面|裏面|lǐmian|leoi5 min6|inside|入面 jap6 min6
loc|外面|外面|wàimian|ngoi6 min6|outside|出面 ceot1 min6
loc|旁边|旁邊|pángbiān|pong4 bin1|beside|隔籬 gaak3 lei4
pron|这里|這裏|zhèlǐ|ze5 leoi5|here|呢度 ni1 dou6
pron|那里|那裏|nàlǐ|naa5 leoi5|there|嗰度 go2 dou6
pron|哪里|哪裏|nǎlǐ|naa5 leoi5|where|邊度 bin1 dou6
adj|拥挤|擁擠|yōngjǐ|jung2 zai1|crowded|逼 bik1
adj|有名|有名|yǒumíng|jau5 meng2|famous
adj|国际|國際|guójì|gwok3 zai3|international
adj|陌生|陌生|mòshēng|mak6 saang1|unfamiliar
adj|熟悉|熟悉|shúxī|suk6 sik1|familiar
prep|往|往|wǎng|wong5|towards
prep|离|離|lí|lei4|(distance) from
adv|顺便|順便|shùnbiàn|seon6 bin6|while you’re at it
phrase|一路顺风|一路順風|yīlù shùnfēng|jat1 lou6 seon6 fung1|have a good trip
adj|直|直|zhí|zik6|straight
adj|安全|安全|ānquán|on1 cyun4|safe
adj|危险|危險|wēixiǎn|ngai4 him2|dangerous
mw|张|張|zhāng|zoeng1|(measure word for tickets, paper)
mw|辆|輛|liàng|loeng6|(measure word for vehicles)|架 gaa3
mw|趟|趟|tàng|tong3|(measure word for trips)|轉 zyun3
adj|难忘|難忘|nánwàng|naan4 mong4|unforgettable`},

 { en:"August", zh:"八月", theme:"Learning", tsc:"学习", ttc:"學習",
 n:`
学校|學校|xuéxiào|hok6 haau6|school
老师|老師|lǎoshī|lou5 si1|teacher
学生|學生|xuésheng|hok6 saang1|student
汉字|漢字|Hànzì|hon3 zi6|Chinese character
语言|語言|yǔyán|jyu5 jin4|language
普通话|普通話|Pǔtōnghuà|pou2 tung1 waa2|Mandarin (Putonghua)
广东话|廣東話|Guǎngdōnghuà|gwong2 dung1 waa2|Cantonese
书|書|shū|syu1|book
考试|考試|kǎoshì|haau2 si5|examination
问题|問題|wèntí|man6 tai4|question, problem
答案|答案|dá'àn|daap3 on3|answer
词典|詞典|cídiǎn|ci4 din2|dictionary
笔|筆|bǐ|bat1|pen, brush
纸|紙|zhǐ|zi2|paper
图书馆|圖書館|túshūguǎn|tou4 syu1 gun2|library
知识|知識|zhīshi|zi1 sik1|knowledge
声调|聲調|shēngdiào|sing1 diu6|tone (of a syllable)
意思|意思|yìsi|ji3 si1|meaning
数学|數學|shùxué|sou3 hok6|mathematics
科学|科學|kēxué|fo1 hok6|science
电脑|電腦|diànnǎo|din6 nou5|computer
作业|作業|zuòyè|zok3 jip6|homework|功課 gung1 fo3
课|課|kè|fo3|lesson, class|堂 tong4
教室|教室|jiàoshì|gaau3 sat1|classroom|課室 fo3 sat1
句子|句子|jùzi|geoi3 zi2|sentence
生词|生詞|shēngcí|saang1 ci4|new word
成绩|成績|chéngjì|sing4 zik1|grades, results
大学|大學|dàxué|daai6 hok6|university
黑板|黑板|hēibǎn|hak1 baan2|blackboard
书包|書包|shūbāo|syu1 baau1|school bag
拼音|拼音|pīnyīn|ping3 jam1|pinyin (romanisation)`,
 v:`
学习|學習|xuéxí|hok6 zaap6|to study, learn
教|教|jiāo|gaau3|to teach
读|讀|dú|duk6|to read aloud; to study
写|寫|xiě|se2|to write
说|說|shuō|syut3|to speak, say|講 gong2
问|問|wèn|man6|to ask
回答|回答|huídá|wui4 daap3|to answer
练习|練習|liànxí|lin6 zaap6|to practise
复习|複習|fùxí|fuk1 zaap6|to revise, review
预习|預習|yùxí|jyu6 zaap6|to prepare a lesson
明白|明白|míngbai|ming4 baak6|to understand
懂|懂|dǒng|dung2|to understand|識 sik1
翻译|翻譯|fānyì|faan1 jik6|to translate
背|背|bèi|bui6|to learn by heart
考|考|kǎo|haau2|to sit an exam
上课|上課|shàngkè|soeng5 fo3|to attend class|上堂 soeng5 tong4
下课|下課|xiàkè|haa6 fo3|to finish class|落堂 lok6 tong4
解释|解釋|jiěshì|gaai2 sik1|to explain
讨论|討論|tǎolùn|tou2 leon6|to discuss
思考|思考|sīkǎo|si1 haau2|to think deeply
想|想|xiǎng|soeng2|to think; to want
知道|知道|zhīdào|zi1 dou3|to know (a fact)
会|會|huì|wui5|to know how to|識 sik1
检查|檢查|jiǎnchá|gim2 caa4|to check
改|改|gǎi|goi2|to correct
抄|抄|chāo|caau1|to copy
毕业|畢業|bìyè|bat1 jip6|to graduate
研究|研究|yánjiū|jin4 gau3|to research
发音|發音|fāyīn|faat3 jam1|to pronounce
听写|聽寫|tīngxiě|teng1 se2|to take dictation
认字|認字|rènzì|jing6 zi6|to recognise characters`,
 o:`
adj|聪明|聰明|cōngming|cung1 ming4|clever, smart
adj|认真|認真|rènzhēn|jing6 zan1|conscientious
adj|容易|容易|róngyì|jung4 ji6|easy
adj|难|難|nán|naan4|difficult
adj|简单|簡單|jiǎndān|gaan2 daan1|simple
adj|复杂|複雜|fùzá|fuk1 zaap6|complicated
adj|对|對|duì|deoi3|correct
adj|错|錯|cuò|co3|wrong
adj|清楚|清楚|qīngchu|cing1 co2|clear
adj|重要|重要|zhòngyào|zung6 jiu3|important
adj|有用|有用|yǒuyòng|jau5 jung6|useful
adj|流利|流利|liúlì|lau4 lei6|fluent
adj|标准|標準|biāozhǔn|biu1 zeon2|standard
adv|一共|一共|yīgòng|jat1 gung6|altogether
adv|比较|比較|bǐjiào|bei2 gaau3|relatively, fairly
adv|最|最|zuì|zeoi3|most
adv|更|更|gèng|gang3|even more
adv|只|只|zhǐ|zi2|only|淨係 zing6 hai6
adv|都|都|dōu|dou1|all; both
prep|跟|跟|gēn|gan1|with|同 tung4
prep|关于|關於|guānyú|gwaan1 jyu1|about, concerning
prep|除了|除了|chúle|ceoi4 liu5|except; besides
conj|而且|而且|érqiě|ji4 ce2|moreover
conj|不但|不但|bùdàn|bat1 daan6|not only
adj|基本|基本|jīběn|gei1 bun2|basic
adj|详细|詳細|xiángxì|coeng4 sai3|detailed
num|一|一|yī|jat1|one
num|二|二|èr|ji6|two|兩 loeng5 (when counting things)
num|三|三|sān|saam1|three
num|十|十|shí|sap6|ten
num|百|百|bǎi|baak3|hundred`},

 { en:"September", zh:"九月", theme:"Work & money", tsc:"工作", ttc:"工作",
 n:`
工作|工作|gōngzuò|gung1 zok3|work, job|工 gung1
公司|公司|gōngsī|gung1 si1|company
办公室|辦公室|bàngōngshì|baan6 gung1 sat1|office
同事|同事|tóngshì|tung4 si6|colleague
老板|老闆|lǎobǎn|lou5 baan2|boss
会议|會議|huìyì|wui6 ji5|meeting
电话|電話|diànhuà|din6 waa2|telephone
手机|手機|shǒujī|sau2 gei1|mobile phone
钱|錢|qián|cin4|money|錢 cin2 (everyday tone)
银行|銀行|yínháng|ngan4 hong4|bank
价钱|價錢|jiàqian|gaa3 cin4|price
工资|工資|gōngzī|gung1 zi1|wages|人工 jan4 gung1
合同|合同|hétong|hap6 tung4|contract
月饼|月餅|yuèbing|jyut6 beng2|mooncake
中秋节|中秋節|Zhōngqiūjié|zung1 cau1 zit3|Mid-Autumn Festival
经济|經濟|jīngjì|ging1 zai3|economy
市场|市場|shìchǎng|si5 coeng4|market
商店|商店|shāngdiàn|soeng1 dim3|shop|舖頭 pou3 tau2
职业|職業|zhíyè|zik1 jip6|occupation, profession
经验|經驗|jīngyàn|ging1 jim6|experience
能力|能力|nénglì|nang4 lik6|ability
责任|責任|zérèn|zaak3 jam6|responsibility
客人|客人|kèrén|haak3 jan4|customer, guest
信用卡|信用卡|xìnyòngkǎ|seon3 jung6 kaat1|credit card
现金|現金|xiànjīn|jin6 gam1|cash
名片|名片|míngpiàn|ming4 pin2|business card|卡片 kaat1 pin2
电子邮件|電子郵件|diànzǐ yóujiàn|din6 zi2 jau4 gin6|email|電郵 din6 jau4
文件|文件|wénjiàn|man4 gin2|document
项目|項目|xiàngmù|hong6 muk6|project
收入|收入|shōurù|sau1 jap6|income`,
 v:`
上班|上班|shàngbān|soeng5 baan1|to go to work|返工 faan1 gung1
下班|下班|xiàbān|haa6 baan1|to finish work|放工 fong3 gung1
买|買|mǎi|maai5|to buy
卖|賣|mài|maai6|to sell
付|付|fù|fu6|to pay|俾錢 bei2 cin2
赚钱|賺錢|zhuànqián|zaan6 cin2|to earn money|搵錢 wan2 cin2
花|花|huā|faa1|to spend
存|存|cún|cyun4|to deposit, save
借|借|jiè|ze3|to borrow; to lend
打电话|打電話|dǎ diànhuà|daa2 din6 waa2|to make a phone call
开会|開會|kāihuì|hoi1 wui2|to have a meeting
合作|合作|hézuò|hap6 zok3|to cooperate
发展|發展|fāzhǎn|faat3 zin2|to develop
成功|成功|chénggōng|sing4 gung1|to succeed
赏月|賞月|shǎngyuè|soeng2 jyut6|to admire the full moon
失败|失敗|shībài|sat1 baai6|to fail
努力|努力|nǔlì|nou5 lik6|to make an effort
购物|購物|gòuwù|kau3 mat6|to shop|行街 haang4 gaai1
申请|申請|shēnqǐng|san1 cing2|to apply
管理|管理|guǎnlǐ|gun2 lei5|to manage
负责|負責|fùzé|fu6 zaak3|to be in charge of
加班|加班|jiābān|gaa1 baan1|to work overtime
辞职|辭職|cízhí|ci4 zik1|to resign|辭工 ci4 gung1
退休|退休|tuìxiū|teoi3 jau1|to retire
讲价|講價|jiǎngjià|gong2 gaa3|to bargain
打折|打折|dǎzhé|daa2 zit3|to give a discount
签|簽|qiān|cim1|to sign
发|發|fā|faat3|to send out; to issue
收到|收到|shōudào|sau1 dou3|to receive
忙|忙|máng|mong4|to be busy`,
 o:`
adj|辛苦|辛苦|xīnkǔ|san1 fu2|hard, toilsome
adj|便宜|便宜|piányi|pin4 ji4|cheap|平 peng4
adj|贵|貴|guì|gwai3|expensive
adj|有钱|有錢|yǒuqián|jau5 cin4|rich
adj|穷|窮|qióng|kung4|poor
adj|专业|專業|zhuānyè|zyun1 jip6|professional
adj|成熟|成熟|chéngshú|sing4 suk6|mature
adj|圆满|圓滿|yuánmǎn|jyun4 mun5|complete, satisfactory
adj|准确|準確|zhǔnquè|zeon2 kok3|accurate
adj|正式|正式|zhèngshì|zing3 sik1|formal
adj|空|空|kòng|hung1|free (not busy)|得閒 dak1 haan4
adj|及时|及時|jíshí|kap6 si4|timely
adj|免费|免費|miǎnfèi|min5 fai3|free of charge
adj|主要|主要|zhǔyào|zyu2 jiu3|main
adj|明亮|明亮|míngliàng|ming4 loeng6|bright (like the full moon)
adv|尽快|盡快|jǐnkuài|zeon6 faai3|as soon as possible
adv|本来|本來|běnlái|bun2 loi4|originally
adv|其实|其實|qíshí|kei4 sat6|actually
adv|当然|當然|dāngrán|dong1 jin4|of course
adv|果然|果然|guǒrán|gwo2 jin4|as expected
conj|可是|可是|kěshì|ho2 si6|but
conj|只要|只要|zhǐyào|zi2 jiu3|as long as
conj|除非|除非|chúfēi|ceoi4 fei1|unless
num|千|千|qiān|cin1|thousand
num|万|萬|wàn|maan6|ten thousand
mw|元|元|yuán|jyun4|yuan (unit of money)|蚊 man1
mw|份|份|fèn|fan6|(measure word for jobs, documents)
mw|间|間|jiān|gaan1|(measure word for companies, rooms)
adj|高效|高效|gāoxiào|gou1 haau6|efficient
adj|公平|公平|gōngpíng|gung1 ping4|fair`},

 { en:"October", zh:"十月", theme:"Feelings & character", tsc:"感情", ttc:"感情",
 n:`
国庆节|國慶節|Guóqìngjié|gwok3 hing3 zit3|National Day
感情|感情|gǎnqíng|gam2 cing4|feelings, emotion
心情|心情|xīnqíng|sam1 cing4|mood
梦|夢|mèng|mung6|dream
眼泪|眼淚|yǎnlèi|ngaan5 leoi6|tears|眼水 ngaan5 seoi2
笑容|笑容|xiàoróng|siu3 jung4|smile
脾气|脾氣|píqi|pei4 hei3|temper
性格|性格|xìnggé|sing3 gaak3|personality
耐心|耐心|nàixīn|noi6 sam1|patience
勇气|勇氣|yǒngqì|jung5 hei3|courage
压力|壓力|yālì|aat3 lik6|stress, pressure
友谊|友誼|yǒuyì|jau5 ji4|friendship
秘密|秘密|mìmì|bei3 mat6|secret
信心|信心|xìnxīn|seon3 sam1|confidence
关系|關係|guānxi|gwaan1 hai6|relationship
记忆|記憶|jìyì|gei3 jik1|memory
态度|態度|tàidu|taai3 dou6|attitude
情况|情況|qíngkuàng|cing4 fong3|situation
原因|原因|yuányīn|jyun4 jan1|reason, cause
感觉|感覺|gǎnjué|gam2 gok3|feeling, sense
爱好|愛好|àihào|oi3 hou3|hobby
惊喜|驚喜|jīngxǐ|ging1 hei2|pleasant surprise
缺点|缺點|quēdiǎn|kyut3 dim2|shortcoming
优点|優點|yōudiǎn|jau1 dim2|strong point
想法|想法|xiǎngfǎ|soeng2 faat3|idea, way of thinking
意见|意見|yìjiàn|ji3 gin3|opinion
秋天|秋天|qiūtiān|cau1 tin1|autumn
灵魂|靈魂|línghún|ling4 wan4|soul
心事|心事|xīnshì|sam1 si6|something on one’s mind
南瓜|南瓜|nánguā|naam4 gwaa1|pumpkin
鬼|鬼|guǐ|gwai2|ghost`,
 v:`
喜欢|喜歡|xǐhuan|hei2 fun1|to like|鍾意 zung1 ji3
讨厌|討厭|tǎoyàn|tou2 jim3|to dislike|憎 zang1
担心|擔心|dānxīn|daam1 sam1|to worry
放心|放心|fàngxīn|fong3 sam1|to feel at ease
害怕|害怕|hàipà|hoi6 paa3|to be afraid|驚 geng1
生气|生氣|shēngqì|saang1 hei3|to get angry|嬲 nau1
感动|感動|gǎndòng|gam2 dung6|to move, touch (emotionally)
相信|相信|xiāngxìn|soeng1 seon3|to believe
原谅|原諒|yuánliàng|jyun4 loeng6|to forgive
同意|同意|tóngyì|tung4 ji3|to agree
反对|反對|fǎnduì|faan2 deoi3|to oppose
道歉|道歉|dàoqiàn|dou6 hip3|to apologise
安慰|安慰|ānwèi|on1 wai3|to comfort
鼓励|鼓勵|gǔlì|gu2 lai6|to encourage
羡慕|羨慕|xiànmù|sin6 mou6|to envy, admire
后悔|後悔|hòuhuǐ|hau6 fui3|to regret
抱怨|抱怨|bàoyuàn|pou5 jyun3|to complain
尊重|尊重|zūnzhòng|zyun1 zung6|to respect
理解|理解|lǐjiě|lei5 gaai2|to understand (someone)
怀念|懷念|huáiniàn|waai4 nim6|to cherish the memory of
信任|信任|xìnrèn|seon3 jam6|to trust
吵架|吵架|chǎojià|caau2 gaa3|to quarrel|嗌交 aai3 gaau1
欣赏|欣賞|xīnshǎng|jan1 soeng2|to appreciate
失望|失望|shīwàng|sat1 mong6|to be disappointed
满足|滿足|mǎnzú|mun5 zuk1|to satisfy
激动|激動|jīdòng|gik1 dung6|to be excited, stirred
骂|罵|mà|maa6|to scold|鬧 naau6
忍|忍|rěn|jan2|to endure, put up with
怀疑|懷疑|huáiyí|waai4 ji4|to doubt
放松|放鬆|fàngsōng|fong3 sung1|to relax
吓|嚇|xià|haak3|to scare`,
 o:`
adj|快乐|快樂|kuàilè|faai3 lok6|happy, joyful
adj|高兴|高興|gāoxìng|gou1 hing3|glad, pleased|開心 hoi1 sam1
adj|难过|難過|nánguò|naan4 gwo3|sad, upset|唔開心 m4 hoi1 sam1
adj|紧张|緊張|jǐnzhāng|gan2 zoeng1|nervous, tense
adj|轻松|輕鬆|qīngsōng|hing1 sung1|relaxed
adj|寂寞|寂寞|jìmò|zik6 mok6|lonely
adj|惊讶|驚訝|jīngyà|ging1 ngaa6|surprised
adj|勇敢|勇敢|yǒnggǎn|jung5 gam2|brave
adj|善良|善良|shànliáng|sin6 loeng4|kind-hearted
adj|诚实|誠實|chéngshí|sing4 sat6|honest
adj|骄傲|驕傲|jiāo'ào|giu1 ngou6|proud
adj|害羞|害羞|hàixiū|hoi6 sau1|shy|怕醜 paa3 cau2
adj|无聊|無聊|wúliáo|mou4 liu4|bored; boring|悶 mun6
adj|有趣|有趣|yǒuqù|jau5 ceoi3|interesting, fun
adj|满意|滿意|mǎnyì|mun5 ji3|satisfied
adj|孤独|孤獨|gūdú|gu1 duk6|solitary, alone
adj|温柔|溫柔|wēnróu|wan1 jau4|gentle, tender
adj|友好|友好|yǒuhǎo|jau5 hou2|friendly
adj|懒|懶|lǎn|laan5|lazy
adj|乐观|樂觀|lèguān|lok6 gun1|optimistic
adj|悲观|悲觀|bēiguān|bei1 gun1|pessimistic
adj|着急|著急|zháojí|zoek6 gap1|anxious, in a hurry|心急 sam1 gap1
adj|痛苦|痛苦|tòngkǔ|tung3 fu2|painful, agonising
adj|感激|感激|gǎnjī|gam2 gik1|grateful
adj|平静|平靜|píngjìng|ping4 zing6|calm
adj|热情|熱情|rèqíng|jit6 cing4|warm, enthusiastic
adj|冷淡|冷淡|lěngdàn|laang5 daam6|cold, indifferent
adj|奇怪|奇怪|qíguài|kei4 gwaai3|strange
interj|哎呀|哎呀|āiyā|aai1 jaa3|oh dear!
interj|哇|哇|wā|waa3|wow!
adj|神秘|神秘|shénmì|san4 bei3|mysterious`},

 { en:"November", zh:"十一月", theme:"Home & city", tsc:"生活", ttc:"生活",
 n:`
房子|房子|fángzi|fong4 zi2|house|屋 uk1
房间|房間|fángjiān|fong4 gaan1|room
客厅|客廳|kètīng|haak3 teng1|living room
卧室|臥室|wòshì|ngo6 sat1|bedroom|睡房 seoi6 fong2
窗户|窗戶|chuānghu|coeng1 wu6|window|窗 coeng1
桌子|桌子|zhuōzi|coek3 zi2|table, desk|枱 toi2
椅子|椅子|yǐzi|ji2 zi2|chair|櫈 dang3
床|床|chuáng|cong4|bed
电视|電視|diànshì|din6 si6|television
冰箱|冰箱|bīngxiāng|bing1 soeng1|refrigerator|雪櫃 syut3 gwai6
钥匙|鑰匙|yàoshi|joek6 si4|key|鎖匙 so2 si4
衣服|衣服|yīfu|ji1 fuk6|clothes|衫 saam1
鞋子|鞋子|xiézi|haai4 zi2|shoes|鞋 haai4
街道|街道|jiēdào|gaai1 dou6|street
马路|馬路|mǎlù|maa5 lou6|road
大楼|大樓|dàlóu|daai6 lau4|tall building
电梯|電梯|diàntī|din6 tai1|lift, elevator
公园|公園|gōngyuán|gung1 jyun2|park
超市|超市|chāoshì|ciu1 si5|supermarket
邮局|郵局|yóujú|jau4 guk2|post office
警察|警察|jǐngchá|ging2 caat3|police
交通|交通|jiāotōng|gaau1 tung1|traffic, transport
红绿灯|紅綠燈|hónglǜdēng|hung4 luk6 dang1|traffic lights
门|門|mén|mun4|door
灯|燈|dēng|dang1|lamp, light
地址|地址|dìzhǐ|dei6 zi2|address
生活|生活|shēnghuó|sang1 wut6|daily life
洗衣机|洗衣機|xǐyījī|sai2 ji1 gei1|washing machine
垃圾|垃圾|lājī|laap6 saap3|rubbish
浴室|浴室|yùshì|juk6 sat1|bathroom|廁所 ci3 so2 (toilet)`,
 v:`
搬家|搬家|bānjiā|bun1 gaa1|to move house|搬屋 bun1 uk1
整理|整理|zhěnglǐ|zing2 lei5|to tidy up|執 zap1
扔|扔|rēng|jing1|to throw away|掉 deu6
开门|開門|kāimén|hoi1 mun4|to open the door
关门|關門|guānmén|gwaan1 mun4|to close the door|閂門 saan1 mun4
锁|鎖|suǒ|so2|to lock
修|修|xiū|sau1|to repair|整 zing2
租|租|zū|zou1|to rent
装修|裝修|zhuāngxiū|zong1 sau1|to renovate
布置|佈置|bùzhì|bou3 zi3|to arrange, decorate (a room)
挂|掛|guà|gwaa3|to hang up
敲门|敲門|qiāomén|haau1 mun4|to knock on the door|拍門 paak3 mun4
送货|送貨|sònghuò|sung3 fo3|to deliver goods
邀请|邀請|yāoqǐng|jiu1 cing2|to invite
逛|逛|guàng|gwaang6|to stroll around|行 haang4
堵车|堵車|dǔchē|dou2 ce1|to be stuck in traffic|塞車 sak1 ce1
寄|寄|jì|gei3|to post, mail
停车|停車|tíngchē|ting4 ce1|to park
遇到|遇到|yùdào|jyu6 dou3|to run into
报警|報警|bàojǐng|bou3 ging2|to call the police
使用|使用|shǐyòng|si2 jung6|to use
开灯|開燈|kāidēng|hoi1 dang1|to switch on the light
关灯|關燈|guāndēng|gwaan1 dang1|to switch off the light|熄燈 sik1 dang1
叠|疊|dié|dip6|to fold
拖地|拖地|tuōdì|to1 dei6|to mop the floor
回收|回收|huíshōu|wui4 sau1|to recycle
欢迎|歡迎|huānyíng|fun1 jing4|to welcome
装|裝|zhuāng|zong1|to install; to fill
打扮|打扮|dǎban|daa2 baan6|to dress up
适应|適應|shìyìng|sik1 jing3|to adapt to`,
 o:`
adj|干净|乾淨|gānjìng|gon1 zeng6|clean
adj|脏|髒|zāng|zong1|dirty|污糟 wu1 zou1
adj|乱|亂|luàn|lyun6|messy
adj|整齐|整齊|zhěngqí|zing2 cai4|tidy
adj|宽|寬|kuān|fun1|wide|闊 fut3
adj|窄|窄|zhǎi|zaak3|narrow
adj|旧|舊|jiù|gau6|old (of things)
adj|宽敞|寬敞|kuānchang|fun1 cong2|spacious
adj|吵|吵|chǎo|caau2|noisy|嘈 cou4
adj|繁华|繁華|fánhuá|faan4 waa4|bustling, prosperous
adj|附近|附近|fùjìn|fu6 gan6|nearby
adj|现代|現代|xiàndài|jin6 doi6|modern
adj|破|破|pò|po3|broken, torn|爛 laan6
adj|坏|壞|huài|waai6|broken; bad
adj|满|滿|mǎn|mun5|full
adj|暖和|暖和|nuǎnhuo|nyun5 wo4|nice and warm
pron|这|這|zhè|ze5|this|呢 ni1
pron|那|那|nà|naa5|that|嗰 go2
pron|什么|什麼|shénme|sam6 mo1|what|乜嘢 mat1 je5
pron|怎么|怎麼|zěnme|zam2 mo1|how|點樣 dim2 joeng2
pron|为什么|為什麼|wèishénme|wai6 sam6 mo1|why|點解 dim2 gaai2
pron|几|幾|jǐ|gei2|how many
pron|多少|多少|duōshao|do1 siu2|how much, how many|幾多 gei2 do1
mw|层|層|céng|cang4|floor, storey|樓 lau2
mw|套|套|tào|tou3|a set of; (measure word for flats)
mw|把|把|bǎ|baa2|(measure word for keys, umbrellas)
mw|件|件|jiàn|gin6|(measure word for clothes, matters)
mw|双|雙|shuāng|soeng1|a pair of
adj|私人|私人|sīrén|si1 jan4|private
adv|经常|經常|jīngcháng|ging1 soeng4|frequently`},

 { en:"December", zh:"十二月", theme:"Culture & celebration", tsc:"文化", ttc:"文化",
 n:`
音乐|音樂|yīnyuè|jam1 ngok6|music
歌|歌|gē|go1|song
电影|電影|diànyǐng|din6 jing2|film, movie|戲 hei3
画|畫|huà|waa2|painting, picture
书法|書法|shūfǎ|syu1 faat3|calligraphy
故事|故事|gùshi|gu3 si6|story
诗|詩|shī|si1|poem, poetry
文化|文化|wénhuà|man4 faa3|culture
艺术|藝術|yìshù|ngai6 seot6|art
游戏|遊戲|yóuxì|jau4 hei3|game
传统|傳統|chuántǒng|cyun4 tung2|tradition
聚会|聚會|jùhuì|zeoi6 wui6|gathering, party
祝福|祝福|zhùfú|zuk1 fuk1|blessing, good wishes
礼貌|禮貌|lǐmào|lai5 maau6|manners, politeness
围巾|圍巾|wéijīn|wai4 gan1|scarf|頸巾 geng2 gan1
手套|手套|shǒutào|sau2 tou3|gloves
回忆|回憶|huíyì|wui4 jik1|recollection
经历|經歷|jīnglì|ging1 lik6|experience (lived through)
节目|節目|jiémù|zit3 muk6|programme, show
博物馆|博物館|bówùguǎn|bok3 mat6 gun2|museum
粤剧|粵劇|yuèjù|jyut6 kek6|Cantonese opera
冬至|冬至|Dōngzhì|dung1 zi3|Winter Solstice Festival
汤圆|湯圓|tāngyuán|tong1 jyun2|sweet glutinous rice balls
平安夜|平安夜|Píng'ānyè|ping4 on1 je6|Christmas Eve
圣诞节|聖誕節|Shèngdànjié|sing3 daan3 zit3|Christmas
乐器|樂器|yuèqì|ngok6 hei3|musical instrument
舞台|舞台|wǔtái|mou5 toi4|stage
梦想|夢想|mèngxiǎng|mung6 soeng2|dream, aspiration
观众|觀眾|guānzhòng|gun1 zung3|audience
烟花|煙花|yānhuā|jin1 faa1|fireworks
跨年夜|跨年夜|kuàniányè|kwaa1 nin4 je6|New Year’s Eve`,
 v:`
唱歌|唱歌|chànggē|coeng3 go1|to sing
跳舞|跳舞|tiàowǔ|tiu3 mou5|to dance
画画|畫畫|huàhuà|waak6 waa2|to draw, paint
弹|彈|tán|taan4|to play (piano, guitar)
演|演|yǎn|jin2|to act, play (a role)
表演|表演|biǎoyǎn|biu2 jin2|to perform
鼓掌|鼓掌|gǔzhǎng|gu2 zoeng2|to applaud
讲|講|jiǎng|gong2|to tell (a story)
玩|玩|wán|waan2|to play, have fun
参加|參加|cānjiā|caam1 gaa1|to take part
纪念|紀念|jìniàn|gei2 nim6|to commemorate
装饰|裝飾|zhuāngshì|zong1 sik1|to decorate
写信|寫信|xiěxìn|se2 seon3|to write a letter
送礼|送禮|sònglǐ|sung3 lai5|to give presents
打牌|打牌|dǎpái|daa2 paai4|to play cards
下棋|下棋|xiàqí|haa6 kei4|to play chess|捉棋 zuk1 kei2
收藏|收藏|shōucáng|sau1 cong4|to collect
创作|創作|chuàngzuò|cong3 zok3|to create (art)
录|錄|lù|luk6|to record
举行|舉行|jǔxíng|geoi2 hang4|to hold (an event)
团聚|團聚|tuánjù|tyun4 zeoi6|to gather together
吃汤圆|吃湯圓|chī tāngyuán|hek3 tong1 jyun2|to eat sweet rice balls|食湯圓 sik6 tong1 jyun2
许愿|許願|xǔyuàn|heoi2 jyun6|to make a wish
祝贺|祝賀|zhùhè|zuk1 ho6|to congratulate
交换|交換|jiāohuàn|gaau1 wun6|to exchange
休假|休假|xiūjià|jau1 gaa3|to take time off
感恩|感恩|gǎn'ēn|gam2 jan1|to give thanks
总结|總結|zǒngjié|zung2 git3|to sum up
告别|告別|gàobié|gou3 bit6|to bid farewell
倒数|倒數|dàoshǔ|dou3 sou2|to count down
跨年|跨年|kuànián|kwaa1 nin4|to see in the New Year`,
 o:`
adj|优美|優美|yōuměi|jau1 mei5|graceful
adj|精彩|精彩|jīngcǎi|zing1 coi2|splendid, brilliant
adj|好看|好看|hǎokàn|hou2 hon3|good to look at|好睇 hou2 tai2
adj|好听|好聽|hǎotīng|hou2 teng1|pleasant to hear
adj|古老|古老|gǔlǎo|gu2 lou5|ancient
adj|有意思|有意思|yǒu yìsi|jau5 ji3 si1|meaningful, interesting
adj|特殊|特殊|tèshū|dak6 syu4|special
adj|难得|難得|nándé|naan4 dak1|rare, hard to come by
adj|隆重|隆重|lóngzhòng|lung4 zung6|grand, ceremonious
phrase|没关系|沒關係|méi guānxi|mut6 gwaan1 hai6|it doesn’t matter|冇所謂 mou5 so2 wai6
adj|欢乐|歡樂|huānlè|fun1 lok6|joyous
adj|温馨|溫馨|wēnxīn|wan1 hing1|warm and cosy
adj|浪漫|浪漫|làngmàn|long6 maan6|romantic
adj|完美|完美|wánměi|jyun4 mei5|perfect
adj|珍贵|珍貴|zhēnguì|zan1 gwai3|precious
adj|寒冷|寒冷|hánlěng|hon4 laang5|frigid
adv|永远|永遠|yǒngyuǎn|wing5 jyun5|forever
conj|还是|還是|háishi|waan4 si6|or (in questions)
adv|总是|總是|zǒngshì|zung2 si6|always
adv|千万|千萬|qiānwàn|cin1 maan6|by all means; be sure to
interj|喂|喂|wéi|wai2|hello? (on the phone)
phrase|谢谢|謝謝|xièxie|ze6 ze6|thank you|多謝 do1 ze6 · 唔該 m4 goi1 (for a service)
phrase|对不起|對不起|duìbuqǐ|deoi3 bat1 hei2|sorry|唔好意思 m4 hou2 ji3 si1
adj|平安|平安|píng'ān|ping4 on1|safe and sound
phrase|圣诞快乐|聖誕快樂|Shèngdàn kuàilè|sing3 daan3 faai3 lok6|Merry Christmas
phrase|不客气|不客氣|bù kèqi|bat1 haak3 hei3|you’re welcome|唔使客氣 m4 sai2 haak3 hei3
phrase|你好|你好|nǐ hǎo|nei5 hou2|hello
particle|吗|嗎|ma|maa3|(turns a sentence into a yes/no question)
particle|了|了|le|liu5|(marks a completed action)|咗 zo2
phrase|再见|再見|zàijiàn|zoi3 gin3|goodbye|拜拜 baai1 baai3
phrase|年年有余|年年有餘|niánnián yǒu yú|nin4 nin4 jau5 jyu4|may you have plenty every year`}
];
