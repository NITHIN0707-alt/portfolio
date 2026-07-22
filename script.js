/* ===========================================
   Mamindla Nithin Portfolio
   script.js
=========================================== */

// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing-text");

const roles = [
    "IT Student",
    "AI Marketing Intern",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Future Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();


// ===============================
// Dark Mode
// ===============================

const themeToggle =
document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "🌙";

    }

});

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    }

});


// ===============================
// Scroll Progress Bar
// ===============================

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});


// ===============================
// Active Navigation
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Back To Top Button
// ===============================

const topButton =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ===========================================
   Scroll Reveal Animation
=========================================== */

const revealElements = document.querySelectorAll(".fade-up");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* ===========================================
   Achievement Counters
=========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            const duration = 1800;

            const step = target / (duration / 16);

            let current = 0;

            function updateCounter() {

                current += step;

                if (current >= target) {

                    counter.textContent = target + "+";

                } else {

                    counter.textContent = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.5,
    }
);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* ===========================================
   Project Filter
=========================================== */

const filterButtons =
    document.querySelectorAll(".project-filter button");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach((card) => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ===========================================
   Smooth Scroll
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",

            block: "start",

        });

    });

});


/* ===========================================
   Navbar Shadow on Scroll
=========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ===========================================
   Contact Form Validation
=========================================== */

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            contactForm.querySelector(
                'input[name="name"]'
            );

        const email =
            contactForm.querySelector(
                'input[name="email"]'
            );

        const message =
            contactForm.querySelector("textarea");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()
        ) {

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    });

}


/* ===========================================
   Image Lazy Loading
=========================================== */

document.querySelectorAll("img").forEach((image) => {

    image.loading = "lazy";

});


/* ===========================================
   Mamindla Nithin Portfolio
   Final Enhancements
=========================================== */

/* ==========================
   Current Year in Footer
========================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ==========================
   Navbar Mobile Toggle
========================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navbar ul");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.classList.toggle("active");

    });

}

/* ==========================
   Close Mobile Menu
========================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navigation) {

            navigation.classList.remove("open");

        }

        if (menuButton) {

            menuButton.classList.remove("active");

        }

    });

});

/* ==========================
   Active Section Highlight
========================== */

const observerOptions = {

    threshold: 0.4

};

const activeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        document.querySelectorAll(".navbar a").forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + id) {

                link.classList.add("active");

            }

        });

    });

}, observerOptions);

document.querySelectorAll("section").forEach(section => {

    activeObserver.observe(section);

});

/* ==========================
   Keyboard Accessibility
========================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navigation) {

            navigation.classList.remove("open");

        }

    }

});

/* ==========================
   Console Greeting
========================== */

console.log("%cWelcome to Mamindla Nithin's Portfolio",
"font-size:20px;color:#2563EB;font-weight:bold;");

console.log(
"Built using HTML, CSS and JavaScript."
);

/* ==========================
   Performance
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   Preloader (Optional)
========================== */

const loader = document.querySelector(".preloader");

if (loader) {

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    });

}

/* ==========================
   Theme Icon Sync
========================== */

const themeIcon = document.querySelector(".theme-toggle");

function updateThemeIcon() {

    if (!themeIcon) return;

    if (document.body.classList.contains("dark")) {

        themeIcon.innerHTML = "☀️";

    } else {

        themeIcon.innerHTML = "🌙";

    }

}

updateThemeIcon();

/* ==========================
   Developer Credit
========================== */

console.log("Portfolio Developed Successfully");
