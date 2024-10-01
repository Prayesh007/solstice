// code for toggle betn cinema & poetry


let toggle1 = document.querySelector('.cinema-btn');
let toggle2 = document.querySelector('.poetry-btn');
let cinema = document.querySelector(".cinema");
let poetry = document.querySelector(".poetry");


toggle1.addEventListener('click', function () {
    cinema.classList.remove('hidden');
    poetry.classList.add('hidden');
    toggle1.classList.add('active');
    toggle2.classList.remove('active');


});
toggle2.addEventListener('click', function () {
    cinema.classList.add('hidden');
    poetry.classList.remove('hidden');
    toggle2.classList.add('active');
    toggle1.classList.remove('active');

});

// code for scroll icon

let icon = document.querySelector('.scroll-icon');
window.addEventListener('scroll', function () {


    if (window.scrollY > 0) {
        icon.classList.add('hidden-btn');
    }

});



document.addEventListener('DOMContentLoaded', function () {
    const videoDiv = document.querySelectorAll('.cinema-item');

    function enableHoverPlay() {
        for (const div of videoDiv) {
            const video = div.querySelector('video');
            div.addEventListener('mouseover', function () {
                for (const otherDiv of videoDiv) {
                    const otherVideo = otherDiv.querySelector('video');
                    if (otherVideo !== video) {
                        otherVideo.pause();
                        otherVideo.currentTime = 0;
                    }
                }
                video.play();
            });


        }
    }

    enableHoverPlay();
});




document.addEventListener('DOMContentLoaded', function () {
    const videoDiv = document.querySelectorAll('.cinema-item');
    let clickCount = 0;

    function clickToPlay() {
        for (const div of videoDiv) {

            div.addEventListener('click', function () {
                clickCount++;
                if (clickCount % 2 === 1) {
                    div.classList.add('clicked');
                } else {
                    div.classList.remove('clicked');
                }

            });



        }
    }

    clickToPlay();
});
