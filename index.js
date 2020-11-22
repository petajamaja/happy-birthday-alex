var toggleAudio = function () {

    let player = document.getElementsByClassName('player')[0];
    let controls = document.getElementsByClassName('music')[0];

    if ( player.classList.contains('on')) { 
        player.pause();
        player.classList.remove('on');
        player.classList.add('pause');
        controls.style.backgroundImage = "url('./assets/img/silent_music.svg')";
    } else {
        player.play();
        player.classList.remove('pause');
        player.classList.add('on');
        controls.style.backgroundImage = "url('./assets/img/music.svg')";
    }
}

window.toggleAudio = toggleAudio;
/**
 * Make sure the address bar is hidden on mobile devices
 */
window.onload = function(){ 
    setTimeout(function(){window.scrollTo(0, 1);}, 0);
}