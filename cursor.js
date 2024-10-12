const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`
    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }
        , { duration: 1000, fill: "forwards" })
});




let image_a = document.querySelector("#image");
if (image_a) {
    cursorOutline.classList.remove('cursor')
}


document.querySelectorAll('a , span , i').forEach(a => {
    a.addEventListener('mouseover', () => {
        cursorOutline.classList.add('cursor');
    });

    a.addEventListener('mouseout', () => {
        cursorOutline.classList.remove('cursor');
    });
});