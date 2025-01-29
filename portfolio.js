

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

function createStars() {
    const starsContainer = document.querySelector(".stars");
    const stars = [];

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Random position and size
        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        starsContainer.appendChild(star);
        stars.push(star);
    }

    // Move stars continuously
    function moveStars() {
        stars.forEach(star => {
            let currentTop = parseFloat(star.style.top);
            let newTop = currentTop + 0.2; // Adjust speed here

            // If the star reaches the bottom, move it to the top
            if (newTop > 100) {
                newTop = -5; // Slightly above viewport
                star.style.left = Math.random() * 100 + "vw"; // Randomize horizontal position
            }

            star.style.top = newTop + "vh";
        });

        requestAnimationFrame(moveStars);
    }

    moveStars();
}

createStars();



document.getElementById("contactButton").addEventListener("click", function (event) {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // Toggle the 'open' class to show/hide the menu
    navLinks.classList.toggle('open');
  }
  

function showerror() {
    alert("Sorry For Inconvince Currently live is not avaliable")
}

