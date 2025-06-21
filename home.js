// Fade-in and slide-in effect when sections enter viewport
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Animate only once
        }
    });
},
{
    threshold: 0.15 // Trigger when 15% is visible
});

sections.forEach(section => {
    observer.observe(section);
});


// Board animation
const board = document.getElementById('board');
const bang = document.getElementById('bangSound');

board.addEventListener('mouseenter', () => {
    bang.currentTime = 0;
    bang.play();
});

board.addEventListener('click', () => {
    board.classList.add('animate__hinge');
});