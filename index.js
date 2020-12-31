console.log('Made in https://planoplan.com/ 💙');

document.addEventListener('DOMContentLoaded', function () {
  if (window.gallery) {
    window.gallery.init();
  }

  var button = document.getElementById('audio');
  var audio = document.getElementById('music');
  var isAudioStarted = false;
  var isAudioPlay = false;
  var events = ['mousedown', 'keydown', 'touchstart'];

  function autoStartAudio() {
    if (isAudioStarted) return;

    isAudioStarted = true;
    isAudioPlay = true;
    audio.play();

    events.forEach(function (event) {
      window.removeEventListener(event, autoStartAudio);
    });
  }

  events.forEach(function (event) {
    window.addEventListener(event, autoStartAudio);
  });

  button.addEventListener('click', function () {
    if (isAudioPlay) {
      audio.pause();
      isAudioPlay = false;
    } else {
      audio.play();
      isAudioPlay = true;
    }
  });
});
