// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
document.getElementById('join').addEventListener('click', function() {
    window.open('https://forms.gle/KBsvcKCg1jd3vu7F8', '_blank');
});

document.getElementById('donate').addEventListener('click', function() {
    window.open('https://forms.gle/8AARdcQ54J24DLxMA', '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    // Trigger the fade-in transition after a delay
    setTimeout(() => {
        fadeElements.forEach((element) => {
            element.style.opacity = '1';
        });
    }, 500); // Adjust the delay before fade-in transition (in milliseconds)
});

