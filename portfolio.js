

var typed = new Typed("#type", {
    strings: ["Full-Stack Developer","Frontend Specialist","Problem Solver"], // Use an array here
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.addEventListener("scroll",()=>{
    var navbar = document.querySelector(".nav-bar")

    if(window.scrollY > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled');
    }
})






