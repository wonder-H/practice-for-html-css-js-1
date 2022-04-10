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