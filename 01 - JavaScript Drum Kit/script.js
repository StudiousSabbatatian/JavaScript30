window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function
    audio.play();
});
//const keys = document.querySelector('.keys');

//console.log(keys.data)
//keys.addEventListener('click', )