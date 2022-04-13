// =======================================헤더쪽===============================================
// ============================================================================================

// querySelector == CSS selector로 찾기

// .search영역 찾아서 변수에 할당
const searchEl = document.querySelector('.search');

// .search영역 안에서 input태그 찾아서 변수에 할당
const searchInputEl = searchEl.querySelector('input');

// .search영역에서 click이벤트 발생하면 함수 실행
searchEl.addEventListener('click', ()=>{
  // .search안의 input태그에 focus효과 주기
  searchInputEl.focus();  
});

// .search안 input태그에 focus효과가 생기면 함수 실행
searchInputEl.addEventListener('focus', ()=>{
  //.search영역에 .focused 추가해서 이벤트 진행여부 상태 확인
  searchEl.classList.add('focused');
  // .search안 input태그에 placeholder속성 추가
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// .search안 input태그에 focus이벤트가 해제되면(blur)
searchInputEl.addEventListener('blur', ()=>{
  //.search영역에 .focused 추가해서 이벤트 진행여부 상태 확인
  searchEl.classList.remove('focused');
  // .search안 input태그에 placeholder속성 추가
  searchInputEl.setAttribute('placeholder', '');
});

// header태그 안 .example클래스 가진 녀석 1개 찾기
const badgeEl = document.querySelector('header .badges')

// 페이지에서 scroll이벤트가 발생하면 함수 실행!
// 이벤트 발생시 0.3초당 1회만 호출되도록 제한걸기! loDash.js의 _.throttle(함수, 시간)사용
document.addEventListener('scroll', _.throttle(()=>{

  //scrollY좌표가 500보다 크면
  if(window.scrollY > 500){

    //배지 숨기기 -> 자연스러운 애니메이션 효과를 주는 gsap.js 사용하기
    // gsap의 메소드 to(요소, 지속시간, 옵션)써보자
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });

  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));


/*  ***** 참고 ******

====================== gsap과 transition 관련 ================================
opacity:0으로만 만들면...?
- 시각적으로만 숨겨주고 요소는 그대로 (투명화로)있어 실제 그 영역 마우스 오버되면 버튼도 눌러짐
- 때문에 display:none으로 실제 요소도 없애줘야함.

- CSS transition / gsap처럼 자연스러운 효과 주는애들은 숫자값만주면 알아서 중간값 계산해줌
- display:none같이 숫자값이 아닌 애들은 on/off만 있어서.. 기능적인것은 자연스럽게 사라질수가 없음
- 따라서 display:none + 시각적 투명효과속성 같이쓰자

=====================loDash없이 사용되는 scroll 코드==========================
document.addEventListener('scroll', ()=>{
  console.log('scroll!');
})

-> 순수 vanila에서 스크롤 이벤트는 한번 실행시 매우 빠른 속도로 실행되기 때문에
사용자가 스크롤을 한 번만 해도 엄청나게 많이 실행될 수 있음......
이벤트리스너 안에 복잡한 DOM조작을 넣으면 컴퓨터는 엄청나게 느려질 것.....
그래서 스크롤 이벤트에서는 복잡한 작업을 실행하지 말아야 한다.
또는 추가 메소드로 제한을 거는 것이 좋은데... 그냥 loDash로 쉽게 적용해 쓰자.

-- mdn 내용 --
scroll 이벤트가 빠른 속도로 실행될 수 있기 때문에, 
이벤트 핸들러는 DOM 수정과 같이 느린 작업을 실행하지 말아야 합니다. 
대신, 다음을 사용하여 이벤트를 제한하는 것을 권장합니다.
requestAnimationFrame(), setTimeout(), 혹은, CustomEvent
=======================================================================
*/

// =======================================비주얼쪽===============================================
// ============================================================================================

// .visual 안 .fade-in인 애들 모두 찾아서 fadeEls에 할당
const fadeEls = document.querySelectorAll('.visual .fade-in')

// fadeEls에 담긴 요소들을 한 개씩 꺼내서 반복처리
fadeEls.forEach(function (fadeEl, index) {
  //각 요소 순서대로 시간차 줘서 보여지게 하기
  //gsap의 메소드 to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 1) 0초후, 2) 1.4초후, 3) 2.1초후, 4) 2.7초후 
    opacity: 1
  })
})

// Swiper 인스턴스 사용하기 
//(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  // 방향 설정
  direction: 'vertical',
  // 자동재생 여부
  autoplay: true,
  // 반복 여부
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  // 방향 설정은 기본값이 horizontal이므로 명시할 필요 없음
  
  // 한번에 보여줘야 하는 슬라이드 개수
  slidesPerView: 3, 
  // 슬라이드 사이의 여백 
  spaceBetween: 10,
  // 1번 슬라이드가 가운데에서 보여주도록 하기 
  centeredSlides: true,
  // 반복 여부
  loop: true,
  
  // 자동재생에 delay를 설정할수도 있음!
  autoplay: {
    // 5초
    delay: 5000,
  },

  // 슬라이드중인 요소들의 개수를 나타내주는 UI 사용
  pagination: {
    //페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 사용자가 페이지 번호 요소를 클릭해서 움직이게 할지의 여부 
    clickable: true,
  },

  // 슬라이드 이전/다음 버튼 UI 사용
  navigation: { 
    // 이전 버튼 선택자
    prevEl: '.promotion .swiper-prev',
    // 다음 버튼 선택자
    nextEl: '.promotion .swiper-next'
  }

});


// =======================================프로모션쪽===============================================
// ============================================================================================

// 변수 promotionEl에 .promotion를 가진 노드 1개 찾아서 할당 
const promotionEl = document.querySelector('.promotion')
// 변수 promotionToggleBtn에 .toggle-promotion 가진 노드 1개 찾아서 할당 
const promotionToggleBtn = document.querySelector('.toggle-promotion')

// 변수 isHidePromotion에 프로모션의 on/off를 확인하도록 boolean 값 할당
// true == yes, false == no  
let isHidePromotion = false;

//promotionToggleBtn 변수(.toggle-promotion 가진 노드 영역)에 이벤트 핸들러 만들기 
promotionToggleBtn.addEventListener('click', ()=>{
  console.log('click');
  //클릭 이벤트시 isHidePromotion값 바꿔주기
  isHidePromotion = !isHidePromotion;

  //isHidePromotion == true
  if(isHidePromotion){
      
  //promotionEl(.promotion를 가진 노드)에 .hide 추가해서 숨겨지게 만들기
    promotionEl.classList.add('hide');

  }else { // isHidePromotion == false

  //promotionEl(.promotion를 가진 노드)에 .hide 제거해서 보여지게 만들기
    promotionEl.classList.remove('hide');

  }
});
