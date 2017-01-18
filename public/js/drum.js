window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together

    audio.currentTime = 0; // rewind to start of sample
    audio.play();
    console.log(audio);
});
