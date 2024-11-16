// hand click video
let videoPlayer = document.querySelector("#videoPlayer");
let playVideo = document.querySelector(".about__play");

videoPlayer.onclick = function(e){
    if(videoPlayer.paused == true) {
        playVideo.style.display = "none";
    }
    else {
        playVideo.style.display = "block";
    }
}



// Tabui section evaluate
let evaluates = document.querySelectorAll(".evaluate__people");
let dots = document.querySelectorAll(".dot")

dots.forEach((dot,index)=>{
    let evaluate = evaluates[index];
    dot.onclick = function(){
        let dotActive = document.querySelector(".dot.active");

        dotActive.classList.remove("active");
        this.classList.add("active");

        let evaluateActive = document.querySelector(".evaluate__people.active");
        evaluateActive.classList.remove("active");
        evaluate.classList.add("active");
    }
})