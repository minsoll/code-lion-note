const qnaList = [
    {
        q: "친구가 쿠키를 만들었다며 나누어준다. 고마움과 동시에 당신은 어떤생각을 하게 되는가?",
        a: [
            {
                answer: "a. 어떤 비율과 레시피로 만들었길래 이렇게 맛있지?",
                type: [0, 1],
            },
            {
                answer: "b. 쿠키 모양이 너무 예뻐서 아까워서 못먹겠다",
                type: [2, 1],
            },
            {
                answer: "c. 베이킹사업을 같이 하자고 제안해봐야겠어",
                type: [0, 3],
            },
        ],
    },
    {
        q: "학교에서 프로젝트 수업을 진행하는데 교수님께서 팀 빌딩을 해도 좋고 혼자 진행해도 좋다고 말씀하셨다. 당신은 팀 활동과 개인 활동 중 무엇을 선택할 것인가?",
        a: [
            {
                answer: "a. 프로젝트는 사람들과 협업하는 묘미지!",
                type: [1, 2, 3],
            },
            { answer: "b. 나는 혼자 하는 게 편해..", type: [0] },
            { answer: "c. 흠 난 둘 다 상관 없어", type: [3] },
        ],
    },
    {
        q: "팀 활동을 할 때 주어진 역할 중 한 가지를 선택한다면?",
        a: [
            {
                answer: "a. ppt 만들기 (이쁘게 보이는게 발표할 때 더 집중하는데 도움이 될 거야!)",
                type: [1, 2],
            },
            {
                answer: "b. 자료조사 (발표에서 중요한 건 자료조사랑 주장에 대한 근거지!)",
                type: [0],
            },
            {
                answer: "c. 발표 (다 필요 없고 난 말하는 거 좋아하니까 발표할래)",
                type: [3],
            },
        ],
    },
    {
        q: "팀플을 하는데 ppt만드는 역할을 맡게 되었다. 당신의 ppt 만들기 스타일은?",
        a: [
            {
                answer: "a. 음.. 그냥 ppt켜서 하얀 슬라이드에 글만 적자…끄적..끄적..",
                type: [0],
            },
            {
                answer: "b. ppt는 예쁜게 짱이지..! 템플릿부터 찾자!!",
                type: [1],
            },
            {
                answer: "c. 템플릿이 뭐야 디자인쯤이야! 내가 다 만들어야지!!",
                type: [3, 2],
            },
        ],
    },
    {
        q: "카페에서 공부를 할려고 한다! 어떤 카페를 갈까??",
        a: [
            { answer: "a. 소음이라고는 없는 스터디카페 !", type: [0] },
            {
                answer: "b. 조용한건 못참아… 그래도 어느정도 사람들 소리가 들리는곳 !",
                type: [2, 1],
            },
            {
                answer: "c.  아, 난 시끄럽고 사람많은 곳 좋아!! 스타벅스 같은 곳 가자!",
                type: [2, 3],
            },
        ],
    },
    {
        q: "최신 맥북이 나왔다! 나의 반응은...!?",
        a: [
            { answer: "a. 와..디자인..미친..잘 빠진거 봐", type: [2, 1] },
            {
                answer: "b. 뭐..? M2칩을 탑재했다고? 성능 미친거 아니야??",
                type: [0],
            },
            { answer: "c. 맥북,,? 나 윈도우 써서 관심없어..ㅋ..", type: [3] },
        ],
    },
    {
        q: "친구가 오랜만에 영화를 보자고 했다. 넷플릭스에서 보고 싶은 영화를 고르는데,, 당신의 취향은?",
        a: [
            { answer: "a. 추리 소설 같이 범죄자 찾는게 재밌어", type: [0] },
            {
                answer: "b. 시나리오가 잘 짜진 좀 인기있는 영화 보자",
                type: [3],
            },
            {
                answer: "c. 난 장르 상관없고 영상미 예쁜 영화가 최고야",
                type: [1, 2],
            },
        ],
    },
    {
        q: "신년을 맞아 새로운 다이어리를 살 예정인 당신, 어떤 다이어리를 살 것인가?",
        a: [
            {
                answer: "a. 일정을 효율적으로 관리하기 위해 주요 일정들을 정리할 수 있는 깔끔한 다이어리가 최고지!!",
                type: [3],
            },
            {
                answer: "b. 취향 저격하는 개성 있는 예술적인 디자인의 다이어리 !",
                type: [1, 2],
            },
            { answer: "c. 디자인 상관없고 그냥 다이어리면 살래 ~", type: [0] },
        ],
    },
    {
        q: "내용이 어려운 공부를 할 때 당신의 스타일은?",
        a: [
            {
                answer: "a. 이해가 될 때까지 넘어가지 않고 공부한다. ",
                type: [0],
            },
            {
                answer: "b. 어차피 이해 못할 것 같으니 그냥 외워버리고 빨리 진도를 나간다.",
                type: [2, 3],
            },
            { answer: "c. 그냥 공부를 안 한다.^^", type: [3] },
        ],
    },
    {
        q: "두근두근 드디어 자취를 시작했다. 아무것도 없는 집.. 이제 인테리어를 시작하려고 한다. 당신은 어떻게 집을 꾸밀 것인가?",
        a: [
            {
                answer: "a. 일단 제일 먼저 방 사이즈부터 재고 크기에 맞는 가구들을 찾아본다.",
                type: [0, 3],
            },
            {
                answer: "b. 이쁜 가구가 최고지 사이즈 상관없고 그냥 내 맘에 드는 이쁜 가구부터 찾아본다.",
                type: [1],
            },
            { answer: "c. 하.. 귀찮아.. 그냥 대충 산다...", type: [0] },
        ],
    },
];

const infoList = [
    {
        nameIntro: "뒤에서 묵묵히 모든걸 해낼께!",
        name: "<백엔드형>",
        descTitle1: "🦁 당신은 어떤 상황에서든 최대 효율을 뽑아내는 전략가!",
        desc1: "반복적인 일은 질색인 당신! 효율과 정답을 찾아 헤매는 당신은 찐 개발자의 머리를 타고 났습니다!",
        descTitle2:
            "🦁 당신은 폭넓은 이해력과 뛰어난 설계능력을 가지고 있어요.",
        desc2: "백엔드 개발자들은 눈에 보이지 않는 것들을 개발합니다. 그렇기에 추상적인 것들을 잘 받아들이는 능력이 필요하죠. 실체 없는 것을 구상하고 이해하는 탁월한 능력을 가진 당신은 백엔드 개발자로서 서비스와 데이터 저장에 대한 구조를 이해하는 탁월한 능력을 가졌답니다.",
    },
    {
        nameIntro: "보이는 부분은 내가책임질께!",
        name: "<프론트엔드형>",
        descTitle1:
            "🦁 당신은 새로운 것에 대한 호기심과 도전의식으로 가득해요.",
        desc1: "도전적이고 창의적이며 트렌드에 민감하기 때문에 빠르게 변화하는 웹 기술을 효율적으로 다룰 수 있어요.",
        descTitle2: "🦁 당신은 섬세한 관찰력을 가지고 있어요.",
        desc2: "사용자의 입장에서, 디테일한 부분까지 놓치지 않고 구현할 수 있는 능력을 가지고 있으므로 사용자에게 적합한 UI를 제공할 수 있어요.",
    },
    {
        nameIntro: "보이는 부분은 내가 책임질께!",
        name: "<디자인형>",
        descTitle1: "🦁 당신은 예술적인 감각을 타고났어요.",
        desc1: "아름다움을 표현할 수 있는 디자인감각 및 색채감각이 타고난 당신은 새롭고도 트렌디한 디자인들을 막힘없이 창의적으로 생각해냅니다.",
        descTitle2:
            "🦁 당신은 상대방이 원하는 니즈를 파악하는 뛰어난 통찰력과 관찰력을 가지고 있어요.",
        desc2: "디자이너의 가장 큰 역할은 사용자가 편리한 디자인을 하는 것이기 때문에 누군가의 니즈를 말하지 않아도 캐치해내는 능력을 가진 당신은 사용자에게 가장 적합한 디자인을 제공할 수 있어요.",
    },
    {
        nameIntro: "기획은 나한테 맡기라구~",
        name: "<기획형>",
        descTitle1: "🦁 리더십이 뛰어난 당신, 뛰어난 협업능력을 가졌어요.",
        desc1: "서비스 기획을 위해 디자이너, 백엔드, 프론트엔드 등 모든 직군들과 소통을 하는 기획자는 원만한 소통능력과 업무를 효율적으로 이끌어 나가는 타고난 리더십을 지녔습니다.",
        descTitle2: "🦁 당신은 섬세한 분석력을 가지고 있어요.",
        desc2: "기획자는 사용자가 원하는 요구사항 및 사용자들의 성향등을 분석하며 예리한 시각으로  서비스 전체를 뛰어난 분석력으로 통괄합니다.",
    },
];