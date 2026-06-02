/* ==================================
   PLUTOMARS VERSION 4
================================== */

console.log("Plutomars V4 Loaded");

/* ==============================
   CUSTOM CURSOR
============================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* ==============================
   CARD GLOW EFFECT
============================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});

/* ==============================
   COUNTER ANIMATION
============================== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

/* ==============================
   INTERSECTION OBSERVER
============================== */

const statsSection = document.querySelector(".stats");

let counterStarted = false;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !counterStarted) {

            startCounter();

            counterStarted = true;

        }

    });

}, {
    threshold: 0.4
});

if(statsSection){
    observer.observe(statsSection);
}

/* ==============================
   NAVBAR SCROLL EFFECT
============================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,8,22,.85)";

        navbar.style.borderColor =
        "rgba(89,207,255,.15)";

    }else{

        navbar.style.background =
        "rgba(255,255,255,.04)";

        navbar.style.borderColor =
        "rgba(255,255,255,.08)";

    }

});

/* ==============================
   GSAP ANIMATIONS
============================== */

if(typeof gsap !== "undefined"){

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-tag",{
        y:40,
        opacity:0,
        duration:1
    });

    gsap.from(".hero h1",{
        y:80,
        opacity:0,
        duration:1.2,
        delay:.2
    });

    gsap.from(".hero-subtitle",{
        y:50,
        opacity:0,
        duration:1,
        delay:.4
    });

    gsap.from(".hero-buttons",{
        y:40,
        opacity:0,
        duration:1,
        delay:.6
    });

    gsap.utils.toArray(".card").forEach(card=>{

        gsap.from(card,{
            scrollTrigger:{
                trigger:card,
                start:"top 85%"
            },
            y:60,
            opacity:0,
            duration:.8
        });

    });

    gsap.utils.toArray(".product").forEach(product=>{

        gsap.from(product,{
            scrollTrigger:{
                trigger:product,
                start:"top 85%"
            },
            y:60,
            opacity:0,
            duration:.8
        });

    });

    gsap.utils.toArray(".timeline-item").forEach(item=>{

        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 85%"
            },
            x:-80,
            opacity:0,
            duration:.8
        });

    });

}

/* ==============================
   PLANET PARALLAX
============================== */

const planet = document.querySelector(".planet");

document.addEventListener("mousemove",(e)=>{

    if(!planet) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    planet.style.transform =
    `translate(${x}px, ${y}px)`;

});

/* ==============================
   BUTTON HOVER EFFECT
============================== */

document.querySelectorAll(
".btn-primary,.btn-secondary"
).forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform =
        "translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform =
        "translateY(0px)";

    });

});
