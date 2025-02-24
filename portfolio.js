

var typed = new Typed("#type", {
    strings: ["Full-Stack Developer", "Frontend Specialist", "Problem Solver"], // Use an array here
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.addEventListener("scroll", () => {
    var navbar = document.querySelector(".nav-bar")

    if (window.scrollY > 0) {
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
    document.getElementById("contact").scrollIntoView();
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}


function showerror() {
    alert("Sorry For Inconvince Currently live is not avaliable")
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splashscreen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 4000);
})


function sendMail(event) {
    event.preventDefault(); // Prevent form refresh

    var params = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value, // Added phone
        message: document.getElementById("message").value,
    };

    const serviceid = "service_m3usog4";
    const templateId = "template_hlpdfx6";

    emailjs.send(serviceid, templateId, params)
        .then((res) => {
            // Clear input fields
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => console.error("Error:", err));
}


