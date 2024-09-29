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
