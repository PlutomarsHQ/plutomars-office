/* =================================
   PLUTOMARS VERSION 7
================================= */

console.log("Plutomars V7 Loaded");

/* ===========================
   SPOTLIGHT EFFECT
=========================== */

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
}

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});

/* ===========================
   COUNTERS
=========================== */

const counters = document.querySelectorAll(".counter");

function startCounters() {
  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let count = 0;

    const step = Math.max(1, target / 100);

    function updateCounter() {
      count += step;

      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + "+";
      }
    }

    updateCounter();
  });
}

const statsSection = document.querySelector(".stats");
let countersStarted = false;

if (statsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        startCounters();
        countersStarted = true;
      }
    });
  }, {
    threshold: 0.4
  });

  observer.observe(statsSection);
}

/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,.95)";
    navbar.style.borderColor = "rgba(255,45,45,.25)";
  } else {
    navbar.style.background = "rgba(255,255,255,.04)";
    navbar.style.borderColor = "rgba(255,255,255,.08)";
  }
});

/* ===========================
   MARS PARALLAX
=========================== */

const planet = document.querySelector(".planet");

document.addEventListener("mousemove", e => {
  if (!planet) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  planet.style.transform =
    `translate(${x}px, ${y}px)`;
});

/* ===========================
   BUTTON HOVER EFFECT
=========================== */

document.querySelectorAll(".btn-primary,.btn-secondary")
.forEach(btn => {

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-5px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0px)";
  });

});

/* ===========================
   GSAP ANIMATIONS
=========================== */

if (typeof gsap !== "undefined") {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-tag", {
    opacity: 0,
    y: 40,
    duration: 1
  });

  gsap.from(".hero h1", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power4.out"
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    delay: 0.4
  });

  gsap.from(".hero-buttons", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.7
  });

  gsap.utils.toArray(".card").forEach(card => {

    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      },
      opacity: 0,
      y: 60,
      duration: 0.8
    });

  });

  gsap.utils.toArray(".product").forEach(product => {

    gsap.from(product, {
      scrollTrigger: {
        trigger: product,
        start: "top 85%"
      },
      opacity: 0,
      y: 60,
      duration: 0.8
    });

  });

  gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%"
      },
      opacity: 0,
      x: -80,
      duration: 0.8
    });

  });

}

/* ===========================
   SMOOTH SCROLL FOR MENU
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

      mobileMenu?.classList.remove("active");
      menuBtn?.classList.remove("active");

    }

  });

});
