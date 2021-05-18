class Language {

    e = () => {
        const lang = localStorage.getItem("language");
        if (lang === "zh_CN") {
            return this.zh_CN;
        } else if (lang === "en_US") {
            return this.en_US;
        } else if (lang === "be_BY") {
            return this.be_BY;
        } else if (lang === "ja_JP") {
            return this.ja_JP;
        } else if (lang === "ko_KR") {
            return this.ko_KR;
        } else {
            let localUtc = new Date().getTimezoneOffset() / 60;
            if (localUtc === -8) {
                return this.zh_CN;
            } else {
                return this.en_US;
            }
        }
    }

    en_US = {
        text: "Language",
        warn: "Venture capital, cautious participation.",
        copySucc: "Copy success",
        copy: "Copy",
        Button: {
            Ok: "Ok",
            Cancel: "Cancel"
        },
        fund: {
            title: "Guarantee funds [Start]",
            poolAmount: "Pool of funds",
            fundAmount: "Guarantee fund",
            total: "Total",
            close: "Lucky codes"
        },
        account: {
            title: "Account",
            change: "Change",
            balance: "Balance",
            invest: "Invest",
            withdraw: "Withdraw",
            reinvest: "Reinvest",
            amount: "Amount",
            trigger: "Trigger Income",
            staticReward: "Daily Fixed Income",
            dynamicReward: "Daily Referral Income",
            canWithdraw: "Collect Amount",
            value: "Fixed Income Limit",
            returnValue: " Total Fixed Income ",
            totalAynamicReward: " Total Referral Income",
            rule: "Contract Rule",

            modal: {
                title: "Invest",
                code: "Invitation code",
                value: "Value",
                cancel: "Cancel",
                submit: "Submit"
            },
            records: {
                id: "ID",
                title: "Records",
                time: "Remaining days",
                amount: "Amount",
                profit: "Profit",
                total: "Total",
                state: "Can Withdraw",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Recommend info",
                invitationCode: "Invitation code",
                inviteNumber: "Number of invitations",
                achievement: "Achievement",

                level: "Level",
                count: "Count",
                profit: "Share profit",
                achieveDetail: "Achievement",
                state: "Can Gain",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBS Foundation Contract Rules

UBS Foundation DAPP aims to create a decentralized foundation operation and management platform for the UBS series of ecology. Through the three core functions of "weight + governance + dividends", capable and powerful UBS loyal users can participate. As long as they get the weight, they can obtain the qualifications of the UBS foundation. The directors of the UBS Foundation enjoy the highest governance and dividend rights over the UBS series of ecology, and will also become the core force for operating the UBS series of ecology.

The Defi types of the UBS series ecology currently under planning and development include: DEX, Lending, Assets...

Main function introduction
1.【weight】
1.1 The weight is divided into SERO weight and UBSC weight. The two sub-weights each account for 50% of the comprehensive weight ratio. The resulting ratio is the weight ratio of the account. The weight ratio is used to participate in "governance" and "dividends". The only indicator.
1.2 SERO weight currency amount: SERO weight is the address of the investment into the UBS ecological contract. All investments, reinvestments, and withdrawals are connected to the original UBS ecological contract. It is only through the current foundation DAPP to log in, that is, the front-end login is different from the original UBS. The foundation front-end program will automatically calculate the accumulated investment currency to determine the qualification and level of the foundation director of the account.
1.3 Enter the SERO weighting interface through the current DAPP, and when the actual investment and reinvestment amount is ≥200,000 SERO (which can be called the weighted currency amount), the contract will automatically activate the foundation general director qualification of the account.
1.4 SERO weight ratio: the weighted currency amount of the current account / the total weighted currency amount of all accounts with director qualifications = the SERO weight ratio of the current account
1.5 The directors of the foundation are divided into three levels according to the amount of weighted currency, and different levels correspond to different rights and interests (weight acceleration). Ordinary directors, that is, 200,000 SERO ≤ weighted currency volume <1 million SERO, and the weight acceleration is 0%; silver directors, that is, 1 million SERO ≤ weighted currency volume <3 million SERO, and the weight acceleration is 5%; gold medal directors, that is weighted currency The amount is ≥ 3 million SERO, and the weight is accelerated to 10%.
1.6 After activating the UBS Foundation director qualification, if the weighted currency is less than 200,000 SERO for the first time, the contract will automatically cancel the UBS Foundation director qualification of the account, and there will be at most one chance to activate the foundation director qualification of the account again. If the weighted currency of the account falls below 200,000 SERO for the second time, the account will be automatically cancelled the foundation director qualification and will permanently lose the authority to become a director qualification again.
1.7 For the first account to activate the qualifications of foundation directors, the invitation sharing code must be the origin invitation code, namely ZFX5W3MTNWZHH. The accounts of other directors must also be linked under this account (inter-generational allowed). If the account is linked from the invitation sharing code of another account, even if the amount of investment currency is ≥200,000 SERO, it will not be eligible for directorship.
1.8 UBSC weight: will be defined after UBSC is officially released

2.【Governance】
2.1 The market operation promotion plan for the UBS series ecology, as well as the current UBS Foundation DAPP usage and function modification suggestions, can all be initiated in the "governance" function.
2.2 After the proposal is initiated, all foundation directors will vote on the proposal (agree/oppose), and the voting ratio is calculated based on the weight ratio. When the voting "agree" ratio exceeds 50%, the proposal will be implemented. When the vote "against" the proportion exceeds 50%, the proposal will be automatically invalidated.
2.3 After the proposal is passed, there are two ways to implement it. The first is the content that can be read and executed automatically by the current contract, and the contract will run automatically. For example, the amount of xx coins in the dividend pool is transferred to the xx address, such as delisting a certain director account, and the contract can realize automatic execution logic. The second is the content that cannot be read by the current contract and is automatically executed. For example, if you want to modify some functions of the current foundation DAPP, such as constructive and forward-looking suggestions for the UBS series of ecological DAPPs, you can use the in the proposal content edit box "Send to Developer" sends the content to the developer, who will execute it manually.

3.【Dividends】
3.1 Developers will automatically inject 2% of the daily technical service fees from UBS into the UBS Foundation dividend pool, and some UBSCs that will be pre-mined will be automatically injected into the UBS dividend pool according to the contract after going online. These will all Become a "dividend fund" of the UBS Foundation
3.2 The distribution of the dividend fund will be linear in time, part of it will be automatically allocated to the account of the foundation directors, and part of it will be automatically used for the repurchase and destruction of UBSC. The specific rules will be announced after the full version is online.

All the contract rules mentioned above are draft versions and have not yet been fully implemented. The realization of all technical functions can only be completed with SERO 2.0 technology. The above rules may also be changed moderately during the development of the full version. Please refer to the contract rules after the full version is online. Here, I wish more people become directors of the UBS Foundation! Let us create a myth with UBS!
`,
        rule1: 'Default referral code:ZFX5W3MTNWZHH'
    };


    zh_CN = {
        text: "语言",
        warn: "风险投资 谨慎参与",
        copySucc: "复制成功",
        copy: "复制",
        Button: {
            Ok: "确定",
            Cancel: "取消"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "我的账户",
            change: "切换",
            balance: "账户余额",
            invest: "投资",
            withdraw: "提现",
            reinvest: "复投",
            trigger: "点击签到",
            staticReward: "当天静态收益",
            dynamicReward: "当天分享收益",
            canWithdraw: "收款归集",
            value: "静态收益额度",
            returnValue: "累计静态收益",
            totalAynamicReward: "累计分享收益",
            rule: "合约规则",
            modal: {
                title: "投资",
                code: "分享码",
                value: "金额",
                cancel: "取消",
                submit: "提交"
            },
            recommend: {
                title: "我的业绩",
                invitationCode: "分享码",
                inviteNumber: "直推人数",
                achievement: "直推有效业绩",

                level: "层级",
                count: "人数",
                profit: "分享收益",
                achieveDetail: "有效业绩",
                state: "状态",
                stateValues: ["可拿", "不可拿"]
            }
        },
        rule: `
UBS基金会合约规则

UBS基金会DAPP，旨在为UBS系列生态打造去中心化的基金会运营管理平台。通过“权重+治理+分红”三大核心功能，让有能力、有实力的UBS忠实用户都可以参与，只要获得权重，就可以获得UBS基金会的理事资格。UBS基金会理事享有对UBS系列生态的最高治理权和分红权，也将成为运营UBS系列生态的核心力量。
目前已在策划开发中的UBS系列生态的Defi类型包括：DEX、借贷、收益聚合等...

主要功能介绍
一 【权重】
1.1 权重分为SERO权重及UBSC权重，两个分项权重各占综合权重比例的50%，得出来的比例即为该账户的权重比例，权重比例是用来参与“治理”及“分红”的唯一指标。
1.2 SERO权重币量：SERO权重即是投资进入UBS生态合约地址，所有投资、复投、提现，都是接入原UBS生态合约。只是通过当前基金会DAPP进入，即与原UBS不同的前端登入，基金会前端的程序将自动计算累积投资币量，从而判定该账户的基金会理事资格与等级。
1.3 通过当前DAPP进入SERO权重界面，实际投资及复投币量≥20万SERO时（可称为权重币量），合约将自动激活该账户的基金会普通理事资格。
1.4 SERO权重比例：当前账户的权重币量/所有具备理事资格账户的总权重币量=当前账户的SERO权重比例
1.5 基金会理事按权重币量分为三个等级，不同等级对应不同的权益（权重加速）。铜牌理事，即 20万SERO≤权重币量＜100万SERO，权重加速为0%；银牌理事，即100万SERO≤权重币量＜300万SERO，权重加速为5%；金牌理事，即权重币量≥300万SERO，权重加速为10%。
1.6 激活UBS基金会理事资格后，如果权重币量第一次低于20万SERO，合约将自动取消该账户的UBS基金会理事资格，最多有一次机会可以再次激活该账户的基金会理事资格。如果该账户的权重币量第二次低于20万SERO，该账户将被自动注销基金会理事资格，且将永久失去再次成为理事资格的权限。
1.7 第一个激活基金会理事资格的账户，邀请分享码必须为原点邀请码，即ZFX5W3MTNWZHH。其它理事的账户也必须链接在这个账户的下面（允许隔代）。若从其它账户的邀请分享码链接的账户，即使投资币量≥20万SERO，也无法获得理事资格。
1.8 UBSC权重：将在UBSC正式发布后定义

二 【治理】
2.1 关于UBS系列生态的市场运营推广方案，以及当前的UBS基金会DAPP的使用及功能修改建议，都可以在“治理”功能中进行发起提案。
2.2 发起提案后，由所有基金会理事对提案进行投票表决（同意/反对），投票比例以权重比例进行计算。当投票“同意”比例超过50%，该提案将被执行。当投票“反对”比例超过50%，该提案将自动作废。
2.3 提案通过后，执行的方式有两种。第一种是当前合约可以读取且自动执行的内容，合约将自动运行。比如转出分红池中xx币量到xx地址，比如除名某理事账户等功能，合约可以实现自动执行逻辑。第二种是当前合约无法读取且自动执行的内容，比如希望修改当前基金会DAPP的某些功能，比如对UBS系列生态DAPP有建设性前瞻性的建议，都可以通过提案内容编辑框中的“发送给开发者”把内容发送给开发者，开发者将人工执行。

三 【分红】
3.1 开发者将从UBS每天获得的2%技术服务费自动注入到UBS基金会分红池中，还有即将被预挖的部分UBSC将在上线后按照合约自动注入到UBS分红池中，这些都将成为UBS基金会的“分红基金”
3.2 分红基金的分发，将会按时间线性，部分自动分配给基金会理事账户，部分自动用于UBSC的回购销毁等。具体细则，待完整版上线后公布。

上述的所有合约规则皆为拟定版本，目前尚未完全实现，所有技术功能的实现需要配合SERO 2.0技术才可以完成。在完整版的开发过程中也可能会对上述规则有适度的改变，请以完整版上线后的合约规则为准。在此，预祝更多人成为UBS基金会理事！让我们与UBS一起创造神话！
`,
        rule1: '默认推荐码：ZFX5W3MTNWZHH'
    };


    ja_JP = {
        text: "言語",
        warn: "ベンチャーキャピタル",
        copySucc: "コピー成功",
        copy: "コピー",
        Button: {
            Ok: "確認する",
            Cancel: "キャンセルする"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "マイアカウント",
            change: "スイッチ",
            balance: "口座残高",
            invest: "投資する",
            withdraw: "撤退",
            reinvest: "再投資",
            amount: "私の収入",
            trigger: "トリガー収入",
            staticReward: "毎日の固定収入",
            dynamicReward: "毎日の紹介収入",
            canWithdraw: "金額を集める",
            value: "固定収入限界",
            returnValue: "累積固定収入",
            totalAynamicReward: " 累積紹介収入",
            rule: "契約ルール",

            modal: {
                title: "投資",
                code: "招待コード",
                value: "量",
                cancel: "キャンセル",
                submit: "提出すること"
            },
            records: {
                id: "ID",
                title: "私の投資",
                time: "有効期限",
                amount: "元本金額",
                profit: "利益",
                state: "状態",
                total: "Total",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "私のパフォーマンス",
                invitationCode: "招待コード",
                inviteNumber: "招待数",
                achievement: "直販",

                level: "レベル",
                count: "ピープル",
                achieveDetail: "私の業績",
                state: "状態",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBS財団の契約ルール

UBS基金DAPPは、UBSシリーズのエコロジーのための分散型の基盤運用および管理プラットフォームを作成することを目的としています。 「ウェイト+ガバナンス+配当」の3つのコア機能を通じて、有能で強力なUBSの忠実なユーザーが参加できます。ウェイトを取得する限り、UBS財団の資格を取得できます。 UBS財団の理事は、UBSシリーズのエコロジーに対して最高のガバナンスと配当の権利を享受しており、UBSシリーズのエコロジーを運営するための中心的な力にもなります。

現在計画および開発中のUBSシリーズエコロジーのDefiタイプには、DEX、貸付、収入集計、デリバティブなどがあります。

主な機能紹介
1 【重量】
1.1ウェイトはSEROウェイトとUBSCウェイトに分けられます。2つのサブウェイトはそれぞれ総合ウェイト比率の50％を占めます。結果として得られる比率はアカウントのウェイト比率です。ウェイト比率は「ガバナンス」に参加するために使用されます。と「配当」。唯一の指標。
1.2 SEROウェイト通貨額：SEROウェイトは、UBSエコロジー契約への投資の住所です。すべての投資、再投資、および引き出しは、元のUBSエコロジー契約に関連しています。ログインするのは現在の基金DAPPを介してのみです。つまり、フロントエンドのログインは元のUBSとは異なり、基金のフロントエンドプログラムは累積投資通貨を自動的に計算して、アカウントの基金会の資格とレベルを決定します。 。
1.3現在のDAPPを介してSERO加重インターフェースに入り、実際の投資および再投資額が≥200,000SERO（加重通貨額と呼ぶことができます）の場合、契約はアカウントの財団事務局長資格を自動的にアクティブにします。
1.4 SERO加重比率：経常収支の加重通貨額/取締役資格を持つすべての口座の加重通貨額の合計=経常収支のSERO加重比率
1.5財団の理事は、加重通貨の額に応じて3つのレベルに分けられ、異なるレベルは異なる権利と利益に対応します（加重加速）。普通の取締役、つまり200,000SERO≤加重通貨量<100万SERO、および加重加速は0％;銀取締役、つまり100万SERO≤加重通貨量<300万SERO、および加重加速は5％ ;加重通貨である金メダルディレクター金額が300万SERO以上の場合、加重加速は10％です。
1.6 UBS財団理事資格を有効にした後、加重通貨が初めて200,000 SERO未満の場合、契約はアカウントのUBS財団理事資格を自動的にキャンセルし、財団理事を有効にする機会は最大で1回です。アカウントの資格を再度取得します。アカウントの加重通貨が2回目に200,000SEROを下回った場合、アカウントは自動的に財団ディレクターの資格を取り消され、再びディレクターの資格になる権限を永久に失います。
1.7財団理事の資格を有効にする最初のアカウントの場合、招待共有コードは元の招待コード、つまりZFX5W3MTNWZHHである必要があります。他の取締役のアカウントもこのアカウントでリンクする必要があります（世代間で許可されています）。アカウントが他のアカウントの招待共有コードからリンクされている場合、投資通貨の金額が200,000 SERO以上であっても、取締役の資格はありません。
1.8 UBSCの重み：UBSCが正式にリリースされた後に定義されます

2つの【ガバナンス】
2.1 UBSシリーズエコロジーの市場操作促進計画、および現在のUBS基金DAPPの使用法と機能変更の提案は、すべて「ガバナンス」機能で開始できます。
2.2提案が開始された後、すべての財団理事が提案に投票し（賛成/反対）、投票率は重み比に基づいて計算されます。議決権の「賛成」率が50％を超えた場合、提案を実施します。 「反対」の投票率が50％を超えると、提案は自動的に無効になります。
2.3提案が可決された後、それを実装する方法は2つあります。 1つ目は、現在のコントラクトで自動的に読み取って実行できるコンテンツであり、コントラクトは自動的に実行されます。たとえば、配当プール内のxxコインの金額は、特定の取締役アカウントの上場廃止など、xxアドレスに転送され、契約は自動実行ロジックを実現できます。 2つ目は、現在の契約では読み取れず、自動的に実行されるコンテンツです。たとえば、UBSシリーズのエコロジカルDAPPの建設的で前向きな提案など、現在の基金DAPPの一部の機能を変更する場合は、プロポーザルコンテンツ編集ボックスの「開発者に送信」を使用すると、コンテンツが開発者に送信され、開発者が手動で実行します。

3つの【配当】
3.1開発者は、UBSからの毎日の技術サービス料金の2％をUBS基金の配当プールに自動的に注入し、事前にマイニングされる一部のUBSCは、オンラインになった後、契約に従ってUBSの配当プールに自動的に注入されます。すべてUBS財団の「配当基金」になります
3.2配当基金の分配は時間的に直線的であり、その一部は自動的に財団理事の口座に割り当てられ、一部はUBSCの買戻しと破棄に自動的に使用されます。特定のルールは、フルバージョンがオンラインになった後に発表されます。

上記の契約ルールはすべてドラフト版であり、まだ完全には実装されていません。すべての技術機能の実現は、SERO2.0テクノロジーでのみ完了できます。上記のルールは、フルバージョンの開発中に適度に変更される場合もあります。フルバージョンがオンラインになったら、契約ルールを参照してください。ここで、もっと多くの人がUBS財団の理事になってほしいです！ UBSで神話を作ろう！
`,
        rule1: 'デフォルトの紹介コード：ZFX5W3MTNWZHH'
    };


    be_BY = {
        text: "язык",
        warn: "Венчурный капитал",
        copySucc: "Копирование успешно",
        copy: "копия",
        Button: {
            Ok: "Подтверждение",
            Cancel: "отменен"
        },
        fund: {
            title: "Защитный фонд [Инициирование]",
            poolAmount: "Фонд пула",
            fundAmount: "Фонд защиты",
            total: "Общая сумма",
            close: "Список победителей"
        },

        account: {
            title: "Мой аккаунт",
            change: "менять",
            balance: "Остаток средств",
            invest: "Вкладывать деньги",
            withdraw: "Снять со счета",
            reinvest: "Реинвестировать",
            amount: "Мой доход",
            trigger: " Доход триггера ",
            staticReward: " Ежедневный фиксированный доход ",
            dynamicReward: " Реферальный ежедневный доход ",
            canWithdraw: " Собрать сумму ",
            value: " Фиксированный лимит дохода ",
            returnValue: " Общий фиксированный доход ",
            totalAynamicReward: " Общий доход рефералов ",
            rule: "Правило договора",
            game: {
                title: "Фонд защиты [Старт]",
                poolAmount: "Пул Фонд",
                fundAmount: "Фонд защиты",
                all: "Общая сумма"
            },
            modal: {
                title: "инвестиции",
                code: "Код приглашения",
                value: "Сумма",
                cancel: "Отмена",
                submit: "покоряться"
            },
            records: {
                id: "ID",
                title: "мои инвестиции",
                time: "Дата окончания срока",
                amount: "Основная сумма",
                profit: "прибыль",
                state: "Положение дел",
                total: "общий",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Мое выступление",
                invitationCode: "Код приглашения",
                inviteNumber: "Количество приглашений",
                achievement: "Прямые продажи",

                level: "уровень",
                count: "Количество людей",
                achieveDetail: "Мое достижение",
                state: "Положение дел",
                stateValues: ["Yes", "No"]
            }
        },

        rule: `
Правила договора с UBS Foundation

UBS Foundation DAPP стремится создать децентрализованную платформу для работы и управления фондом для экологии серии UBS. Благодаря трем основным функциям «вес + управление + дивиденды» способные и влиятельные лояльные пользователи UBS могут участвовать. Пока они набирают вес, они могут получить квалификацию фонда UBS. Директора UBS Foundation пользуются наивысшим уровнем управления и дивидендными правами в отношении серии UBS по экологии, а также станут основной силой для управления серией UBS по экологии.

Типы Defi экологии серии UBS, которые в настоящее время планируются и разрабатываются, включают: DEX, кредитование, агрегирование доходов, деривативы ...

Введение в основные функции
1【вес】
1.1 Вес делится на вес SERO и вес UBSC. Каждый из двух субвесов составляет 50% от полного весового отношения. Результирующее отношение является весовым отношением аккаунта. Весовое отношение используется для участия в «управлении» и «дивиденды» - единственный показатель.
1.2 Сумма в валюте веса SERO: Вес SERO - это адрес инвестиции в экологический контракт UBS Все инвестиции, реинвестиции и снятие средств связаны с исходным экологическим контрактом UBS. Вход в систему возможен только через текущий фундамент DAPP, то есть интерфейсный вход отличается от исходного UBS, а клиентская программа фонда автоматически рассчитывает накопленную валюту инвестиций, чтобы определить квалификацию и уровень директора фонда учетной записи. .
1.3 Войдите в интерфейс взвешивания SERO через текущий DAPP, и когда фактическая сумма инвестиций и реинвестирования составляет ≥200000 SERO (что можно назвать взвешенной валютной суммой), контракт автоматически активирует квалификацию генерального директора фонда для учетной записи.
1.4 Весовой коэффициент SERO: взвешенная сумма в валюте текущего счета / общая взвешенная сумма в валюте всех счетов с квалификацией директора = весовое соотношение SERO текущего счета
1.5 Директора фонда разделены на три уровня в зависимости от суммы взвешенной валюты, и разные уровни соответствуют разным правам и интересам (ускорение веса). Обычные директора, то есть 200000 SERO ≤ взвешенного объема валюты <1 миллиона SERO, и ускорение веса составляет 0%; серебряные директора, то есть 1 миллион SERO ≤ взвешенного объема валюты <3 миллиона SERO, и ускорение веса составляет 5% ; директора с золотой медалью, то есть взвешенная валюта. Если сумма составляет ≥ 3 миллионов SERO, ускорение веса составляет 10%.
1.6 После активации квалификации директора UBS Foundation, если взвешенная валюта меньше 200000 SERO в первый раз, контракт автоматически отменяет квалификацию директора UBS Foundation для учетной записи, и будет не более одного шанса активировать директора фонда. квалификация аккаунта снова. Если взвешенная валюта счета упадет ниже 200 000 SERO во второй раз, учетная запись будет автоматически аннулирована квалификацией директора фонда и навсегда утратит право снова стать квалификацией директора.
1.7 Чтобы первая учетная запись активировала квалификацию директоров фонда, код приглашения должен быть исходным кодом приглашения, а именно ZFX5W3MTNWZHH. Счета других директоров также должны быть связаны с этой учетной записью (допускается передача разных поколений). Если учетная запись связана с пригласительным кодом другой учетной записи, даже если сумма инвестиционной валюты ≥200 000 SERO, она не будет иметь права на должность директора.
1.8 Вес UBSC: будет определен после официального выпуска UBSC

2【Управление】
2.1 План продвижения на рынок для экологии серии UBS, а также текущие предложения по использованию и модификации функций DAPP UBS Foundation могут быть инициированы в функции «управления».
2.2 После подачи предложения все директора фондов проголосуют за предложение (согласны / против), и коэффициент голосов рассчитывается на основе весового коэффициента. Когда коэффициент голосования «согласен» превышает 50%, предложение будет реализовано. Когда доля голосов «против» превышает 50%, предложение автоматически признается недействительным.
2.3 После того, как предложение принято, есть два способа его реализовать. Первый - это контент, который может быть прочитан и выполнен автоматически текущим контрактом, и контракт будет выполняться автоматически. Например, количество монет xx в пуле дивидендов переводится на адрес xx, например, при исключении из списка определенной учетной записи директора, и в контракте может быть реализована логика автоматического выполнения. Второй - это контент, который не может быть прочитан текущим контрактом и выполняется автоматически. Например, если вы хотите изменить некоторые функции текущего базового DAPP, такие как конструктивные и перспективные предложения для серии экологических DAPP UBS, Вы можете использовать поле редактирования содержимого предложения «Отправить разработчику», чтобы отправить содержимое разработчику, который выполнит его вручную.

3【Дивиденды】
3.1 Разработчики будут автоматически вводить 2% ежедневных сборов за технические услуги от UBS в дивидендный пул UBS Foundation, а некоторые UBSC, которые будут предварительно майнить, будут автоматически добавлены в дивидендный пул UBS в соответствии с контрактом после выхода в онлайн. все Стать «дивидендным фондом» UBS Foundation
3.2 Распределение дивидендного фонда будет линейным во времени, часть его будет автоматически переведена на счет директоров фонда, а часть будет автоматически использована для выкупа и уничтожения UBSC. Конкретные правила будут объявлены после публикации полной версии.

Все упомянутые выше правила контракта являются черновыми версиями и еще не полностью реализованы.Реализация всех технических функций может быть завершена только с помощью технологии SERO 2.0. Вышеупомянутые правила также могут быть умеренно изменены во время разработки полной версии. Пожалуйста, ознакомьтесь с правилами контракта после того, как полная версия появится в сети. Желаю, чтобы больше людей стали директорами фонда UBS! Давайте создадим миф с UBS!
`,
        rule1: 'Реферальный код по умолчанию:ZFX5W3MTNWZHH'
    };

    ko_KR = {
        text: "언어",

        warn: "벤처 캐피탈",
        copySucc: "복사 성공",
        copy: "복사",
        Button: {
            Ok: "확인",
            Cancel: "취소"
        },
        fund: {
            title: "보호 기금 [시작]",
            poolAmount: "기금 풀",
            fundAmount: "보호 기금",
            total: "총액",
            close: "수상자 목록"
        },
        account: {
            title: "내 계정",
            change: "스위치",
            balance: "계좌 잔액",
            invest: "사다",
            withdraw: "철수",
            reinvest: "재투자",
            amount: "나의 소득",
            trigger: "소득 트리거",
            staticReward: "일일 고정 수입",
            dynamicReward: "추천 일일 소득",
            canWithdraw: "금액 수집",
            value: "고정 수입 한도",
            returnValue: "누적 고정 수입",
            totalAynamicReward: " 누적 추천 소득",
            rule: "계약 규칙",
            game: {
                title: "보호 기금 [시작]",
                poolAmount: "자금 수영장",
                fundAmount: "보호 기금",
                all: "총액"
            },
            modal: {
                title: "투자",
                code: "초대 코드",
                value: "금액",
                cancel: "취소",
                submit: "제출"
            },
            records: {
                id: "ID",
                title: "내 투자",
                time: "만료일",
                amount: "교장",
                profit: "이익",
                state: "지위",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "내 공연",
                invitationCode: "초대 코드",
                inviteNumber: "초대장 수",
                achievement: "직접 판매",

                level: "수평",
                count: "사람",
                achieveDetail: "나의 업적",
                state: "지위",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBS 재단 계약 규칙

UBS 재단 DAPP는 UBS 생태학 시리즈를위한 분산 형 재단 운영 및 관리 플랫폼을 만드는 것을 목표로합니다. "가중치 + 거버넌스 + 배당금"의 세 가지 핵심 기능을 통해 유능하고 강력한 UBS 충성 사용자가 참여할 수 있으며, 가중치가있는 한 UBS 재단의 자격을 획득 할 수 있습니다. UBS 재단 이사들은 UBS 생태학 시리즈에 대해 최고의 거버넌스와 배당 권을 누리며 UBS 생태학 시리즈 운영의 핵심 힘이 될 것입니다.

현재 계획 및 개발중인 UBS 시리즈 생태학의 Defi 유형에는 DEX, 대출, 소득 집계, 파생 상품 ...

주요 기능 소개
1 【무게】
1.1 중량은 SERO 중량과 UBSC 중량으로 나뉘며, 2 개의 하위 중량은 각각 종합 중량비의 50 %를 차지하고 그 결과 비율은 계정의 중량비이며 중량비는 "거버넌스"에 참여하는 데 사용됩니다. 그리고 "배당금". 유일한 지표.
1.2 SERO 가중치 통화 금액 : SERO 가중치는 UBS 생태 계약에 대한 투자 주소이며 모든 투자, 재투자 및 인출은 원래 UBS 생태 계약에 연결됩니다. 현재 재단 DAPP를 통해서만 로그인 할 수 있습니다. 즉, 프론트 엔드 로그인은 원래 UBS와 다르며, 재단 프론트 엔드 프로그램은 누적 된 투자 통화를 자동으로 계산하여 계정의 재단 이사 자격 및 레벨을 결정합니다. .
1.3 현재 DAPP를 통해 SERO 가중치 인터페이스에 들어가 실제 투자 및 재투자 금액이 200,000 SERO (가중 통화 금액이라고도 함) 이상인 경우 계약은 자동으로 계정의 재단 총감독 자격을 활성화합니다.
1.4 SERO 가중치 비율 : 경상 계정의 가중 통화 금액 / 이사 자격이있는 모든 계정의 총 가중 통화 금액 = 경상 계정의 SERO 가중치 비율
1.5 재단의 이사는 가중 통화 금액에 따라 3 단계로 나뉘며, 각기 다른 권리와 이익 (가중 가속)에 따라 수준이 다릅니다. 일반 이사, 즉 200,000 SERO ≤ 가중 통화량 <100 만 SERO, 가중치 가속은 0 %, 실버 이사, 즉 1 백만 SERO ≤ 가중 통화량 <300 만 SERO, 가중치 가속은 5 % ; 금메달 디렉터, 즉 가중 통화 금액이 3 백만 SERO 이상인 경우 가중치 가속은 10 %입니다.
1.6 UBS 재단 이사 자격 활성화 후 가중 통화가 처음으로 200,000 SERO 미만인 경우 계약은 자동으로 계정의 UBS 재단 이사 자격을 취소하며 재단 이사를 활성화 할 수있는 기회는 최대 1 회입니다. 다시 계정의 자격. 두 번째로 계정의 가중 통화가 200,000 SERO 미만으로 떨어지면 계정은 자동으로 재단 이사 자격이 취소되고 다시 이사 자격을 취득 할 수있는 권한이 영구적으로 상실됩니다.
1.7 첫 번째 계정이 재단 이사의 자격을 활성화하려면 초대 공유 코드가 원본 초대 코드, 즉 ZFX5W3MTNWZHH 여야합니다. 다른 이사의 계정도이 계정으로 연결되어야합니다 (세대 간 허용). 다른 계정의 초대 공유 코드에서 계정이 연결되어있는 경우 투자 통화 금액이 200,000 SERO 이상이더라도 감독 자격이 없습니다.
1.8 UBSC 가중치 : UBSC가 공식적으로 출시 된 후 정의됩니다.

2 【거버넌스】
2.1 UBS 시리즈 생태계에 대한 시장 운영 촉진 계획과 현재 UBS 재단 DAPP 사용 및 기능 수정 제안은 모두 "거버넌스"기능에서 시작될 수 있습니다.
2.2 제안이 시작된 후 모든 재단 이사는 제안에 대해 투표 (동의 / 반대)하고 투표 비율은 가중치를 기준으로 계산됩니다. 투표 "동의"비율이 50 %를 초과하면 제안이 실행됩니다. "반대"비율이 50 %를 초과하면 제안이 자동으로 무효화됩니다.
2.3 제안이 통과 된 후이를 구현하는 두 가지 방법이 있습니다. 첫 번째는 현재 계약에서 자동으로 읽고 실행할 수있는 콘텐츠이며 계약이 자동으로 실행됩니다. 예를 들어, 특정 디렉터 계정을 상장 해제하는 등 배당 풀에있는 xx 코인의 양이 xx 주소로 이체되고 계약은 자동 실행 로직을 구현할 수 있습니다. 두 번째는 현재 계약에서 읽을 수없는 콘텐츠로 자동 실행됩니다. 예를 들어 UBS 생태 DAPP 시리즈에 대한 건설적이고 미래 지향적 인 제안과 같은 현재 재단 DAPP의 일부 기능을 수정하려는 경우, 제안 내용 편집 상자에서 "개발자에게 보내기"를 사용하여 수동으로 실행할 개발자에게 내용을 보냅니다.

3 【배당금】
3.1 개발자는 UBS의 일일 기술 서비스 수수료의 2 %를 UBS 재단 배당 풀에 자동으로 주입하고, 사전 채굴 될 일부 UBSC는 온라인 접속 후 계약에 따라 UBS 배당 풀에 자동으로 주입됩니다. 모두 UBS 재단의 "배당 기금"이됩니다.
3.2 배당금의 분배는 시간에 따라 선형 적이며 일부는 재단 이사의 계정에 자동으로 할당되며 일부는 UBSC의 환매 및 폐기에 자동으로 사용됩니다. 특정 규칙은 정식 버전이 온라인 상태가 된 후에 발표됩니다.

위에서 언급 한 모든 계약 규칙은 초안 버전이며 아직 완전히 구현되지 않았으며 모든 기술 기능의 구현은 SERO 2.0 기술로만 완료 할 수 있습니다. 상기 규정은 정식 버전 개발 과정에서 다소 변경 될 수 있으므로 정식 버전이 온라인 상태가 된 후 계약 규정을 참고하시기 바랍니다. 여기에서 더 많은 사람들이 UBS 재단의 이사가 되었으면합니다! UBS로 신화를 만들어 봅시다!
`,
        rule1: '기본 추천 코드 :ZFX5W3MTNWZHH'
    };

};

const lang = new Language();
export default lang