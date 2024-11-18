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

// Question
let btnDetails = document.querySelectorAll(".question__img--detail");
let btnSubtracts = document.querySelectorAll(".question__img--subtract");
let questionTitles = document.querySelectorAll(".question__list-title");
let questionDescs = document.querySelectorAll(".question__list-desc")

btnDetails.forEach((btnDetail,index)=>{
    // btnDetail
    btnDetail.onclick = function() {
        btnDetail.classList.remove("active");
        btnSubtracts[index].classList.add("active");
        questionTitles[index].classList.add("active");
        questionTitles[index].style.marginBottom  = "0px";
        questionDescs[index].style.display = "block";
    }
    // btnSubtracts
    btnSubtracts[index].onclick = function() {
        btnSubtracts[index].classList.remove("active");
        btnDetail.classList.add("active");
        questionTitles[index].classList.remove("active");
        questionTitles[index].style.marginBottom  = "33px";
        questionDescs[index].style.display = "none";
    }
})

