// =======================================유튜브 API넣기===============================================
// ============================================================================================

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Youtube API
function onYouTubePlayerAPIReady() {
  // #player인 것 찾아서 적용
  new YT.Player('player', {

    // 최초 재생할 유튜브 영상의 ID
    videoId: 'An6LvWQuj_8', 
    
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록 작성
      origin: 'http://localhost:5500' 
    },

    events: {
      // 영상이 준비되었을 때 실행
      onReady: function (event) {
        event.target.mute(); // event가 실행된 곳을 찾아서 음소거
      }
    }
  });
}