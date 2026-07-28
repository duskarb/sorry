const sceneButton = document.querySelector("#sceneButton");
const scene = document.querySelector("#scene");
const docTime = document.querySelector("#docTime");
const apologyText = document.querySelector("#apologyText");
const normalImage = "assets/scene-variety-apology.png";
const bowImage = "assets/scene-variety-bow-apology.png";

const hotspots = [
  {
    x: 20,
    y: 51,
    r: 9,
    issue: "손가락질 선제공격 논란",
    subject: "빨간 옷을 입고 손가락질한 출연자",
    thing: "왼쪽 손끝",
    behavior: "상대보다 먼저 문제를 지정하는 듯한 자세를 취한",
    interpretation: "웃음의 형식을 빌린 공개 지목과 분위기 압박",
    harmed: "함께 있는 출연자들과 시청자 여러분의 심리적 안전감",
    correction: "손끝의 방향과 각도를 사전에 윤리적으로 점검하고",
  },
  {
    x: 5,
    y: 45,
    r: 8,
    issue: "과잉 웃음 가담 논란",
    subject: "왼쪽 가장자리에서 웃고 있는 출연자",
    thing: "과하게 열린 웃음",
    behavior: "상황의 심각성을 충분히 확인하지 않은 채 웃음으로 동조한",
    interpretation: "타인의 불편을 오락적 분위기로 소비한 태도",
    harmed: "장면을 지켜보는 모든 분들의 정서적 존엄",
    correction: "웃기 전에 먼저 맥락을 살피고",
  },
  {
    x: 13,
    y: 76,
    r: 10,
    issue: "전경 장악 논란",
    subject: "빨간 옷을 입은 출연자",
    thing: "화면을 크게 차지한 빨간 소매",
    behavior: "자신의 존재감을 화면 앞쪽에 과도하게 배치한",
    interpretation: "공동의 장면을 사적 존재감으로 선점한 행위",
    harmed: "다른 출연자에게 돌아가야 할 시각적 기회",
    correction: "화면 점유 면적을 더 겸허하게 계산하고",
  },
  {
    x: 15,
    y: 63,
    r: 7,
    issue: "농구공 방치 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "바닥의 농구공",
    behavior: "굴러갈 수 있는 물체를 아무 설명 없이 방치한",
    interpretation: "안전과 맥락을 동시에 가볍게 여긴 무책임함",
    harmed: "장면 내부의 질서와 시청자 여러분의 예측 가능성",
    correction: "모든 둥근 물체의 사회적 파장을 점검하고",
  },
  {
    x: 44,
    y: 91,
    r: 8,
    issue: "슬리퍼 이탈 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "중앙 바닥의 노란 슬리퍼",
    behavior: "생활의 흔적을 너무 자연스럽게 흘려보낸",
    interpretation: "공적 장면에 사적 느슨함을 유입한 태도",
    harmed: "정돈된 관람을 기대한 시청자 여러분의 마음",
    correction: "발끝에서 발생하는 모든 메시지를 관리하고",
  },
  {
    x: 8,
    y: 28,
    r: 9,
    issue: "외투 과시 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "벽면의 빨간 외투",
    behavior: "강렬한 색상의 외투를 장면에 과도하게 노출한",
    interpretation: "조용한 배경이어야 할 사물을 감정적으로 부각한 선택",
    harmed: "색채 균형과 이를 감내해야 했던 시청자 여러분",
    correction: "옷걸이에 걸린 감정까지 낮은 자세로 검토하고",
  },
  {
    x: 16,
    y: 18,
    r: 8,
    issue: "모자 태도 불명확 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "초록색 모자",
    behavior: "방향과 의도를 분명히 밝히지 않은 소품을 배치한",
    interpretation: "입장을 유보한 채 귀여움으로 책임을 회피한 태도",
    harmed: "명확한 해명을 기다린 시청자 여러분",
    correction: "모자의 각도와 침묵까지 성실히 해명하고",
  },
  {
    x: 18,
    y: 42,
    r: 7,
    issue: "조명 침묵 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "파란 스탠드 조명",
    behavior: "밝히는 역할을 하면서도 아무 입장을 밝히지 않은",
    interpretation: "필요할 때만 빛나고 책임은 지지 않는 태도",
    harmed: "장면의 투명성을 신뢰한 시청자 여러분",
    correction: "비추는 모든 대상에 대해 더 책임감 있게 임하고",
  },
  {
    x: 31,
    y: 13,
    r: 10,
    issue: "벽 장식 희화화 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "선글라스가 있는 벽 그림",
    behavior: "가벼운 장식처럼 보이는 이미지를 무비판적으로 걸어둔",
    interpretation: "웃기면 넘어갈 수 있다는 안일한 미감",
    harmed: "이미지의 맥락을 감당해야 한 시청자 여러분",
    correction: "장식의 유머성까지 사전에 반성하고",
  },
  {
    x: 43,
    y: 10,
    r: 7,
    issue: "시간 방치 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "벽시계",
    behavior: "시간이 흐르는 것을 알면서도 아무런 사과를 하지 않은",
    interpretation: "지연된 반성을 정상적인 장면 진행처럼 포장한 태도",
    harmed: "이미 오래 기다린 시청자 여러분의 인내",
    correction: "분 단위로 늦어진 책임까지 기록하고",
  },
  {
    x: 39,
    y: 36,
    r: 8,
    issue: "웃음 은폐 논란",
    subject: "초록 니트를 입은 출연자",
    thing: "입을 가린 손",
    behavior: "웃음을 가림으로써 책임 있는 표정 확인을 어렵게 만든",
    interpretation: "해명 가능성을 손바닥 뒤로 숨긴 행위",
    harmed: "진정성 있는 표정을 기다린 시청자 여러분",
    correction: "손바닥 뒤의 감정까지 투명하게 관리하고",
  },
  {
    x: 35,
    y: 54,
    r: 7,
    issue: "애매한 손 위치 논란",
    subject: "초록 니트를 입은 출연자",
    thing: "무릎 근처의 손",
    behavior: "사과도 박수도 아닌 애매한 위치에 손을 둔",
    interpretation: "참여와 회피 사이에서 책임을 흐린 태도",
    harmed: "명확한 제스처를 기대한 시청자 여러분",
    correction: "손의 목적과 위치를 사전에 명확히 하고",
  },
  {
    x: 43,
    y: 63,
    r: 9,
    issue: "과도한 편안함 논란",
    subject: "초록 니트를 입은 출연자",
    thing: "넓게 벌어진 자세",
    behavior: "공동의 소파에서 지나치게 편안한 자세를 취한",
    interpretation: "자기 자리의 안정감을 공동체 정서보다 앞세운 태도",
    harmed: "공간을 나누어 써야 하는 다른 출연자들",
    correction: "앉는 각도와 무릎의 간격까지 겸허히 조정하고",
  },
  {
    x: 27,
    y: 43,
    r: 7,
    issue: "쿠션 기대기 논란",
    subject: "초록 니트를 입은 출연자",
    thing: "노란 쿠션",
    behavior: "편안함의 근거를 쿠션에 과도하게 의존한",
    interpretation: "반성보다 안락함을 먼저 선택한 태도",
    harmed: "긴장감 있게 장면을 지켜본 시청자 여러분",
    correction: "쿠션의 도움 없이도 책임 있는 자세를 유지하고",
  },
  {
    x: 52,
    y: 42,
    r: 8,
    issue: "침묵의 여백 조성 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "소파 중앙의 빈자리",
    behavior: "아무도 책임지지 않는 여백을 남겨둔",
    interpretation: "공백을 통해 문제 제기의 방향을 흐린 태도",
    harmed: "무엇을 봐야 할지 판단해야 했던 시청자 여러분",
    correction: "빈자리조차 책임 있게 배치하고",
  },
  {
    x: 63,
    y: 36,
    r: 8,
    issue: "공범적 웃음 논란",
    subject: "분홍 후드를 입은 출연자",
    thing: "두 손으로 가린 웃음",
    behavior: "상황을 말리지 않고 웃음으로 동조한",
    interpretation: "침묵과 웃음 사이에 숨어 책임을 나눈 태도",
    harmed: "불편함을 먼저 감지한 시청자 여러분",
    correction: "웃음의 방향과 타이밍을 더 엄격히 검토하고",
  },
  {
    x: 62,
    y: 53,
    r: 8,
    issue: "다리 접기 방관 논란",
    subject: "분홍 후드를 입은 출연자",
    thing: "소파 위로 접어 올린 다리",
    behavior: "상황을 수습하기보다 편한 자세를 우선한",
    interpretation: "문제가 발생해도 움직이지 않겠다는 소극적 신호",
    harmed: "적극적인 책임감을 기대한 시청자 여러분",
    correction: "자세 하나에도 공동체적 긴장을 반영하고",
  },
  {
    x: 57,
    y: 13,
    r: 8,
    issue: "창밖 회피 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "창밖 풍경",
    behavior: "실내의 문제를 외부 풍경으로 희석한",
    interpretation: "안 좋은 분위기를 탁 트인 배경으로 덮으려 한 태도",
    harmed: "본질적인 사과를 기다린 시청자 여러분",
    correction: "풍경 뒤로 숨지 않고 장면 내부의 책임을 직면하고",
  },
  {
    x: 77,
    y: 27,
    r: 12,
    issue: "식물 뒤 회피 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "오른쪽 큰 화분",
    behavior: "무성한 잎으로 장면의 책임을 가리게 둔",
    interpretation: "자연스러움을 가장한 은폐와 회피",
    harmed: "명확한 시야를 요구할 권리가 있는 시청자 여러분",
    correction: "잎사귀 하나까지 책임 있게 정리하고",
  },
  {
    x: 71,
    y: 22,
    r: 7,
    issue: "커튼 색채 압박 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "노란 커튼",
    behavior: "밝은 색으로 사안의 무게를 가볍게 만든",
    interpretation: "화사함을 이용해 불편함을 덮는 태도",
    harmed: "진지한 해명을 기대한 시청자 여러분",
    correction: "색상의 명랑함에도 책임을 묻고",
  },
  {
    x: 92,
    y: 38,
    r: 10,
    issue: "검은 화면 침묵 논란",
    subject: "오른쪽 TV 앞의 출연자",
    thing: "꺼진 듯한 TV 화면",
    behavior: "가장 큰 화면을 침묵 상태로 방치한",
    interpretation: "말해야 할 때 말하지 않는 방식의 무책임",
    harmed: "명확한 입장 표명을 기다린 시청자 여러분",
    correction: "꺼진 화면의 침묵까지 제 책임으로 받아들이고",
  },
  {
    x: 86,
    y: 43,
    r: 7,
    issue: "소품 과밀 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "빨간 조명과 휴지",
    behavior: "사과의 가능성을 암시하는 소품을 과하게 배치한",
    interpretation: "눈물을 준비해 둔 듯한 선제적 감정 연출",
    harmed: "진정성을 의심하게 된 시청자 여러분",
    correction: "휴지 한 장의 의도까지 투명하게 밝히고",
  },
  {
    x: 64,
    y: 65,
    r: 7,
    issue: "리모컨 권한 방치 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "테이블 위 리모컨",
    behavior: "누가 장면을 조종하는지 분명히 하지 않은",
    interpretation: "권한은 남겨두고 책임은 흐리는 구조",
    harmed: "통제권의 소재를 알고 싶었던 시청자 여러분",
    correction: "버튼 하나의 권력성까지 반성하고",
  },
  {
    x: 46,
    y: 64,
    r: 8,
    issue: "봉지 과장 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "열린 과자 봉지",
    behavior: "바삭한 소리와 소비의 흔적을 대책 없이 노출한",
    interpretation: "가벼운 간식으로 무거운 책임을 회피한 태도",
    harmed: "장면의 품위를 기대한 시청자 여러분",
    correction: "봉지의 주름과 소음까지 낮은 자세로 관리하고",
  },
  {
    x: 53,
    y: 65,
    r: 8,
    issue: "과자 접시 풍요 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "가득 담긴 과자 접시",
    behavior: "부족함 없는 상태를 아무렇지 않게 드러낸",
    interpretation: "반성보다 풍요를 먼저 전시한 태도",
    harmed: "절제된 장면을 기대한 시청자 여러분",
    correction: "먹을 것의 양과 배열까지 겸허하게 살피고",
  },
  {
    x: 39,
    y: 61,
    r: 7,
    issue: "컵 색상 불균형 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "초록색 점박이 컵",
    behavior: "특정 색상의 컵을 화면 중앙에 두드러지게 배치한",
    interpretation: "작은 컵 하나로도 편향을 만들 수 있음을 간과한 태도",
    harmed: "균형 잡힌 색채 질서를 기대한 시청자 여러분",
    correction: "종이컵 하나의 위치까지 공정하게 검토하고",
  },
  {
    x: 66,
    y: 63,
    r: 7,
    issue: "분홍 컵 튀기 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "분홍색 점박이 컵",
    behavior: "필요 이상으로 발랄한 색을 테이블 위에 세운",
    interpretation: "상황의 엄중함을 색채로 희석한 태도",
    harmed: "진지한 장면을 기다린 시청자 여러분",
    correction: "컵의 귀여움이 책임을 가리지 않도록 조심하고",
  },
  {
    x: 75,
    y: 92,
    r: 8,
    issue: "퇴장 동선 방치 논란",
    subject: "오른쪽에 앉은 출연자",
    thing: "바닥의 파란 슬리퍼",
    behavior: "언제든 빠져나갈 수 있는 동선을 노출한",
    interpretation: "책임을 지기보다 떠날 준비를 한 듯한 인상",
    harmed: "끝까지 해명을 듣고 싶었던 시청자 여러분",
    correction: "떠날 수 있는 물건부터 정리하고",
  },
  {
    x: 89,
    y: 70,
    r: 10,
    issue: "측면 방관 자세 논란",
    subject: "오른쪽에 앉은 출연자",
    thing: "화면 오른쪽의 다리",
    behavior: "장면의 바깥에 걸친 듯한 자세로 방관한",
    interpretation: "속해 있으면서도 책임선 밖에 있으려는 태도",
    harmed: "공동 책임의 기준을 신뢰한 시청자 여러분",
    correction: "몸의 일부라도 빠져나가 보이지 않도록 주의하고",
  },
  {
    x: 0,
    y: 15,
    r: 9,
    issue: "왼쪽 식물 난입 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "화면 왼쪽 끝의 식물 잎",
    behavior: "장면의 가장자리에 설명 없는 초록색 존재감을 들여놓은",
    interpretation: "책임을 져야 할 화면을 자연물의 산만함으로 흐린 선택",
    harmed: "어디서부터 문제를 봐야 할지 혼란스러웠던 시청자 여러분",
    correction: "프레임 끝에 걸린 잎사귀의 의도까지 확인하고",
  },
  {
    x: 11,
    y: 17,
    r: 7,
    issue: "옷걸이 각도 방치 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "비스듬히 선 나무 옷걸이",
    behavior: "기울어진 구조물을 아무렇지 않게 배경에 세워둔",
    interpretation: "불안정한 태도를 인테리어처럼 포장한 무심함",
    harmed: "정돈된 책임감을 기대한 시청자 여러분",
    correction: "기둥 하나의 기울기까지 책임 있게 바로잡고",
  },
  {
    x: 11,
    y: 50,
    r: 7,
    issue: "노란 의자 무임승차 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "왼쪽의 노란 원형 의자",
    behavior: "아무도 앉지 않는 의자를 의미심장하게 비워둔",
    interpretation: "책임의 자리를 마련해 두고도 누구도 앉지 않은 태도",
    harmed: "누가 설명할지 기다려야 했던 시청자 여러분",
    correction: "비어 있는 좌석의 책임 소재까지 분명히 하고",
  },
  {
    x: 21,
    y: 48,
    r: 7,
    issue: "줄무늬 쿠션 시선 분산 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "검은색과 흰색의 줄무늬 쿠션",
    behavior: "강한 패턴으로 시청자의 시선을 불필요하게 흔든",
    interpretation: "문제의 본질보다 무늬의 리듬을 앞세운 연출",
    harmed: "차분하게 상황을 바라보려던 시청자 여러분",
    correction: "반복되는 선 하나까지 과잉 표현인지 살피고",
  },
  {
    x: 54,
    y: 27,
    r: 7,
    issue: "창가 화분 방관 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "창가의 작은 화분",
    behavior: "문제가 벌어지는 동안 창가에서 조용히 방관하게 둔",
    interpretation: "작은 생기까지 침묵의 알리바이로 사용한 태도",
    harmed: "진정성 있는 반응을 기대한 시청자 여러분",
    correction: "작은 화분의 위치와 침묵까지 함께 돌아보고",
  },
  {
    x: 72,
    y: 49,
    r: 9,
    issue: "파란 쿠션 과잉 지원 논란",
    subject: "분홍 후드를 입은 출연자",
    thing: "오른쪽 소파의 파란 쿠션",
    behavior: "편안함을 지나치게 안정적으로 보조받은",
    interpretation: "반성해야 할 몸을 쿠션 뒤에 기대게 한 안일함",
    harmed: "더 긴장감 있는 태도를 기대한 시청자 여러분",
    correction: "등 뒤의 편의까지 사과의 기준에 포함하고",
  },
  {
    x: 70,
    y: 65,
    r: 6,
    issue: "빈 접시 침묵 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "테이블 위의 흰 접시",
    behavior: "비어 있는 접시를 아무 설명 없이 놓아둔",
    interpretation: "남은 말이 없다는 듯한 공백을 식기 위에 전가한 태도",
    harmed: "무엇이 빠졌는지 계속 짐작해야 했던 시청자 여러분",
    correction: "빈 그릇의 의미와 여백까지 성실히 설명하고",
  },
  {
    x: 59,
    y: 61,
    r: 7,
    issue: "나무젓가락 과밀 논란",
    subject: "해당 장면의 출연자 일동",
    thing: "컵에 꽂힌 나무젓가락",
    behavior: "가느다란 물체들을 한곳에 빽빽하게 세워둔",
    interpretation: "사소한 긴장감을 여러 개로 증식시킨 배치",
    harmed: "정돈된 사과의 분위기를 기대한 시청자 여러분",
    correction: "세워진 물건의 수와 방향까지 낮은 자세로 검토하고",
  },
  {
    x: 91,
    y: 13,
    r: 8,
    issue: "TV 위 액자 우월감 논란",
    subject: "오른쪽 TV 앞의 출연자",
    thing: "TV 위에 걸린 파란 액자",
    behavior: "높은 위치의 액자를 통해 장면을 내려다보게 만든",
    interpretation: "사과해야 할 장면 위에 감상자의 시선을 올려놓은 태도",
    harmed: "동등한 눈높이의 해명을 기대한 시청자 여러분",
    correction: "높이 걸린 이미지의 태도까지 겸허하게 낮추고",
  },
  {
    x: 95,
    y: 82,
    r: 8,
    issue: "노란 의자 탈출구 논란",
    subject: "오른쪽에 앉은 출연자",
    thing: "오른쪽 아래의 노란 의자",
    behavior: "장면 밖으로 빠질 수 있는 보조 좌석을 곁에 둔",
    interpretation: "끝까지 책임지기보다 옮겨 앉을 여지를 남긴 태도",
    harmed: "자리를 지키는 사과를 기대한 시청자 여러분",
    correction: "앉을 수 있는 모든 자리의 의미를 먼저 정리하고",
  },
];

const fallbackRegion = {
  issue: "애매한 존재감 논란",
  subject: "화면 속 출연자",
  thing: "정확히 해명하기 어려운 지점",
  behavior: "명확히 해명하기 어려운 방식으로 장면 안에 존재한",
  interpretation: "어디를 봐도 문제가 될 수 있다는 가능성을 방치한 태도",
  harmed: "불편함의 근거를 직접 찾아야 했던 시청자 여러분",
  correction: "오해의 소지가 적은 형태로 화면에 머무르고",
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatTime(date = new Date()) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getPoint(event) {
  const rect = scene.getBoundingClientRect();
  const naturalRatio = scene.naturalWidth / scene.naturalHeight || 16 / 9;
  const renderedRatio = rect.width / rect.height;
  let imageWidth = rect.width;
  let imageHeight = rect.height;
  let offsetX = 0;
  let offsetY = 0;

  if (renderedRatio > naturalRatio) {
    imageWidth = rect.height * naturalRatio;
    offsetX = (rect.width - imageWidth) / 2;
  } else {
    imageHeight = rect.width / naturalRatio;
    offsetY = (rect.height - imageHeight) / 2;
  }

  return {
    x: clamp(((event.clientX - rect.left - offsetX) / imageWidth) * 100, 0, 100),
    y: clamp(((event.clientY - rect.top - offsetY) / imageHeight) * 100, 0, 100),
  };
}

function distance(point, hotspot) {
  const dx = point.x - hotspot.x;
  const dy = point.y - hotspot.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getRegion(point) {
  const ranked = hotspots
    .map((hotspot) => ({
      ...hotspot,
      score: distance(point, hotspot) / hotspot.r,
    }))
    .sort((a, b) => a.score - b.score);

  return ranked[0] || fallbackRegion;
}

function generateApology(region) {
  const now = formatTime();

  return `저는 ${region.subject}로서, 금일 ${now}경 화면 안의 ${region.thing} 부근에서 ${region.behavior} 점에 대해 사과드립니다. 단순히 "그렇게 보일 줄 몰랐다"는 말로 넘길 수 없는 일입니다. 장면 안에 놓인 표정, 자세, 사물, 여백은 모두 보는 사람에게 하나의 태도로 전달되는데, 저는 그 전달 방식을 충분히 점검하지 못했습니다.

특히 이번 지점은 ${region.interpretation}으로 읽힐 수 있었습니다. 이로 인해 ${region.harmed}께 불필요한 해석의 부담과 정서적 피로를 드렸습니다. 문제를 사소한 소품이나 우연한 포즈 탓으로 돌리지 않겠습니다. 제가 그 장면 안에 있었고, 그 장면이 그대로 보이도록 두었다는 사실 자체가 책임의 출발점이라고 받아들이겠습니다.

앞으로는 ${region.correction} 같은 문제가 반복되지 않도록 하겠습니다. 또한 누군가 지적하기 전에는 몰랐다고 말하는 데 그치지 않고, 지적 가능한 부분을 먼저 찾아내는 태도를 갖겠습니다.

부족하고 경솔했습니다. 변명하지 않겠습니다. ${region.issue}에 대해 저희 모두 고개 숙여 사과드립니다.`;
}

function accuse(event) {
  const region = getRegion(getPoint(event));

  docTime.textContent = `${formatTime()} 자동 생성 · ${region.issue}`;
  apologyText.textContent = generateApology(region);

  scene.src = bowImage;
  window.setTimeout(() => window.print(), 650);
  window.setTimeout(() => {
    scene.src = normalImage;
  }, 3200);
}

sceneButton.addEventListener("click", accuse);

const preloadBow = new Image();
preloadBow.src = bowImage;
