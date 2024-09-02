let icon = document.querySelector('.scroll-icon');
window.addEventListener('scroll', function () {


    if (window.scrollY > 0) {
        icon.classList.add('hidden');
    }

});

const body = document.body;
let toggle = document.querySelectorAll('.light-theme')
let heading = document.querySelector('.light-theme-h1');
let buttons = document.querySelectorAll('.button-light');



let themeToggle = this.document.getElementById('theme');


document.addEventListener("DOMContentLoaded",function(){
    themeToggle.checked = false;
    themeToggle.dispatchEvent(new Event('change'));
    
})
