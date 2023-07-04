const district = [
  {
    Gu: '강남구',
    Dong: [
      '대치동',
      '논현동',
      '청담동',
      '삼성동',
      '역삼동',
      '개포동',
      '수서동',
      '신사동',
      '일원동',
      '도곡동',
      '율현동',
    ],
  },
  {
    Gu: '강동구',
    Dong: ['길동', '천호동', '성내동', '명일동'],
  },
  {
    Gu: '강북구',
    Dong: ['수유동', '미아동', '우이동', '번동'],
  },
  {
    Gu: '강서구',
    Dong: ['등촌동', '화곡동', '가양동', '내발산동', '공항동', '방화동', '염창동', '마곡동'],
  },
  { Gu: '구로구', Dong: ['구로동', '고척동', '개봉동', '온수동', '오류동', '가리봉동', '궁동', '천왕동'] },
  {
    Gu: '관악구',
    Dong: ['남현동', '신림동', '봉천동'],
  },
  {
    Gu: '광진구',
    Dong: ['중곡동', '구의동', '자양동', '광장동', '화양동', '군자동', '능동'],
  },
  {
    Gu: '영등포구',
    Dong: [
      '영등포동4가',
      '영등포동1가',
      '영등포동3가',
      '여의도동',
      '당산동6가',
      '문래동3가',
      '양평동2가',
      '대림동',
      '당산동4가',
      '신길동',
      '당산동3가',
      '영등포동',
      '당산동1가',
      '양평동4가',
      '도림동',
      '영등포동7가',
      '양평동1가',
      '영등포동2가',
    ],
  },
  {
    Gu: '금천구',
    Dong: ['독산동', '시흥동', '가산동'],
  },
  {
    Gu: '노원구',
    Dong: ['월계동', '중계동', '상계동', '공릉동', '하계동'],
  },
  {
    Gu: '도봉구',
    Dong: ['도봉동', '방학동', '쌍문동', '창동'],
  },
  {
    Gu: '동대문구',
    Dong: ['이문동', '장안동', '용두동', '제기동', '답십리동', '청량리동', '전농동', '휘경동'],
  },
  {
    Gu: '동작구',
    Dong: ['신대방동', '사당동', '노량진동', '대방동', '흑석동', '상도1동', '상도동', '본동'],
  },
  {
    Gu: '마포구',
    Dong: [
      '서교동',
      '신공덕동',
      '상수동',
      '성산동',
      '공덕동',
      '연남동',
      '도화동',
      '망원동',
      '신수동',
      '동교동',
      '상암동',
      '대흥동',
      '창전동',
      '아현동',
      '염리동',
      '중동',
    ],
  },
  {
    Gu: '서대문구',
    Dong: ['남가좌동', '북가좌동', '홍은동', '연희동', '창천동', '홍제동', '대현동', '북아현동', '영천동'],
  },
  {
    Gu: '서초구',
    Dong: ['방배동', '양재동', '서초동', '잠원동'],
  },
  {
    Gu: '성동구',
    Dong: [
      '행당동',
      '성수동1가',
      '마장동',
      '용답동',
      '하왕십리동',
      '금호동1가',
      '금호동2가',
      '성수동2가',
      '도선동',
      '송정동',
      '금호동3가',
    ],
  },
  {
    Gu: '성북구',
    Dong: [
      '동선동2가',
      '보문동2가',
      '상월곡동',
      '정릉동',
      '장위동',
      '동소문동5가',
      '삼선동4가',
      '하월곡동',
      '삼선동5가',
    ],
  },
  {
    Gu: '송파구',
    Dong: [
      '풍납동',
      '잠실동',
      '오금동',
      '송파동',
      '석촌동',
      '삼전동',
      '방이동',
      '문정동',
      '마천동',
      '거여동',
      '가락동',
    ],
  },
  {
    Gu: '양천구',
    Dong: ['신월동', '목동', '신정동'],
  },
  {
    Gu: '영등포구',
    Dong: [
      '여의동',
      '당산1동',
      '당산2동',
      '당산3동',
      '당산4동',
      '당산5동',
      '도림동',
      '문래동',
      '양평1동',
      '양평2동',
      '신길1동',
      '신길3동',
      '신길4동',
      '신길5동',
      '신길6동',
      '신길7동',
    ],
  },
  {
    Gu: '용산구',
    Dong: [
      '원효로2가',
      '갈월동',
      '남영동',
      '한강로2가',
      '이태원동',
      '용문동',
      '서계동',
      '보광동',
      '효창동',
      '한남동',
      '용산동2가',
      '원효로1가',
      '서빙고동',
      '동빙고동',
      '문배동',
    ],
  },
  {
    Gu: '은평구',
    Dong: [
      '녹번동',
      '불광1동',
      '불광2동',
      '응암1동',
      '응암2동',
      '신사1동',
      '신사2동',
      '증산동',
      '수색동',
      '역촌동',
      '대조동',
      '은평1동',
      '은평2동',
      '은평3동',
      '진관동',
    ],
  },
  {
    Gu: '종로구',
    Dong: [
      '종로4가',
      '효제동',
      '숭인동',
      '내자동',
      '창신동',
      '종로5가',
      '연건동',
      '동숭동',
      '교북동',
      '명륜3가',
      '낙원동',
      '종로2가',
      '종로3가',
      '적선동',
      '수송동',
      '인사동',
    ],
  },
  {
    Gu: '중구',
    Dong: [
      '장충동2가',
      '신당동',
      '북창동',
      '광희동2가',
      '회현동1가',
      '다동',
      '회현동3가',
      '저동2가',
      '남산동2가',
      '충무로2가',
      '황학동',
      '광희동1가',
      '필동2가',
      '오장동',
      '서소문동',
      '만리동1가',
      '충무로4가',
      '중림동',
      '을지로5가',
    ],
  },
  {
    Gu: '중랑구',
    Dong: ['신내동', '면목동', '중화동', '상봉동', '망우동', '목동'],
  },
]

export default district