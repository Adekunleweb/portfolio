
// ========
//==================================
// ADEOLA PORTFOLIO SCRIPT
// Part 1
// ==========================================

// ==========================
// Hire Me Button
// ==========================

const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {
    hireBtn.addEventListener("click", () => {

        if (hireBtn.textContent === "Hire Me") {
            hireBtn.textContent = "Hired ✅";
            hireBtn.style.backgroundColor = "limegreen";
        } else {
            hireBtn.textContent = "Hire Me";
            hireBtn.style.backgroundColor = "#00ffcc";
        }

    });
}


// ==========================
// Typewriter Effect
// ==========================

const roles = [
    "Frontend Developer",
    "JavaScript Developer",
    "Responsive Web Designer",
    "Future Full-Stack Developer"
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRoles() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typing.textContent = currentRole.substring(0, charIndex++);
    } else {
        typing.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeRoles, speed);

}

window.addEventListener("DOMContentLoaded", typeRoles);


// ==========================
// Profile Image Zoom
// ==========================

const profile = document.getElementById("profile");

if (profile) {

    profile.addEventListener("click", () => {

        if (profile.style.transform === "scale(1.2)") {
            profile.style.transform = "scale(1)";
        } else {
            profile.style.transform = "scale(1.2)";
        }

    });

}


// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "☀️ Light";
        } else {
            themeBtn.textContent = "🌙 Dark";
        }

    });

}
// ==========================
// Scroll Reveal Animation
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(element => {
    observer.observe(element);
});


// ==========================
// Animated Counters
// ==========================

function animateValue(id, end, speed) {

    const element = document.getElementById(id);

    if (!element) return;

    let start = 0;

    const counter = setInterval(() => {

        start++;

        element.textContent = start + "+";

        if (start >= end) {
            clearInterval(counter);
        }

    }, speed);

}

animateValue("projectCount", 10, 100);
animateValue("skillCount", 8, 120);
animateValue("clientCount", 5, 150);


// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================
// Cursor Glow
// ==========================

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}
// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});