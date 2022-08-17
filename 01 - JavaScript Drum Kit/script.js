
//window.onload is needed to get eventlisteners working in external js. see https://stackoverflow.com/questions/42341761/javascript-eventlistener-not-working-in-external-js-file 
window.onload = function() {
window.addEventListener('keydown', playSound);
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return; //stop the function
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  
  function removeTransition(e) {
      if(e.propertyName !== 'transform') return;
      this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}