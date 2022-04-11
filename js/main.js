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
  console.log('scroll!', window.scrollY);
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
opacity:0으로 만들면...?
- 시각적으로만 숨겨주고 요소는 그대로 (투명화로)있어 실제 그 영역 마우스 오버되면 버튼도 눌러짐
- 때문에 display:none으로 실제 요소도 없애줘야함.

- CSS transition / gsap처럼 자연스러운 효과 주는애들은 숫자값만주면 알아서 중간값 계산해줌
- display:none같이 숫자값이 아닌 애들은 on/off만 있어서.. 기능적인것은 자연스럽게 사라질수가 없음

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

