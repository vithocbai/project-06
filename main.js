
let videoPlayer = document.querySelector("#videoPlayer");
let playVideo = document.querySelector(".about__play");
console.log(playVideo);

videoPlayer.onclick = function(e){
    if(videoPlayer.paused == true) {
        playVideo.style.display = "none";
    }
    else {
        playVideo.style.display = "block";
    }
}


