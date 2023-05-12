var lastKeyPressTime = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'k') {
    var currentTime = new Date().getTime();
    if (currentTime - lastKeyPressTime > 35000) { // 35 seconds = 35000 milliseconds
      var video = document.getElementById('myVideo');
      if (video.paused) {
        video.currentTime = 0;
        video.style.display = 'block';
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
      }
      lastKeyPressTime = currentTime;
    }
  }
});
