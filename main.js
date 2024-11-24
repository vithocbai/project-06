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

// TabUI Dots
function setupTabs(containerSelector, itemSelector, dotSelector) {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach((container) => {
        const items = container.querySelectorAll(itemSelector);
        const dots = container.querySelectorAll(dotSelector);

        dots.forEach((dot, index) => {
            dot.onclick = function () {
                // Xóa class 'active' khỏi dot và item hiện tại
                container.querySelector(`${dotSelector}.active`)?.classList.remove('active');
                container.querySelector(`${itemSelector}.active`)?.classList.remove('active');

                // Thêm class 'active' vào dot và item được chọn
                dot.classList.add('active');
                items[index]?.classList.add('active');
            };
        });
    });
}

// Áp dụng cho specialities__inner
setupTabs('.specialities__inner','.col','.dot')

// Áp dụng cho evaluate__list
setupTabs('.container__evaluate', '.evaluate__people', '.dot');

// Áp dụng cho feature__list
setupTabs('.feature__list', '.col', '.dot');


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


// === Responsive === 

// Navigation Mobile Tablet
let navigation = document.querySelector(".navigation");
let navMobile = document.querySelector("#nav-mobile");
navMobile.innerHTML = navigation.innerHTML;


// Handle Drawer
let menuDrawer = document.querySelector(".menu-drawer");
let closeDrawer = document.querySelector(".menu-drawer--close");
let overlay = document.querySelector(".overlay");
let bar = document.querySelector(".bar");
bar.onclick = function() {
    menuDrawer.style.transform = "translateX(0)";
    overlay.style.visibility = "visible";
}

closeDrawer.onclick = function(){
    menuDrawer.style.transform = "translateX(-101%)";
    overlay.style.visibility = "hidden";
}

