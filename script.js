/* ==================================
   PLUTOMARS VERSION 6.1
================================== */

console.log("Plutomars V6.1 Loaded");

/* ==============================
   SPOTLIGHT EFFECT
============================== */

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty(
"--mouse-x",
`${e.clientX}px`
);

document.body.style.setProperty(
"--mouse-y",
`${e.clientY}px`
);

});

/* ==============================
   MOBILE MENU
============================== */

const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

if(menuBtn && mobileMenu){

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

});

}

/* ==============================
   CARD GLOW EFFECT
============================== */

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.setProperty(
"--x",
`${x}px`
);

card.style.setProperty(
"--y",
`${y}px`
);

});

});

/* ==============================
   COUNTER ANIMATION
============================== */

const counters =
document.querySelectorAll(".counter");

function startCounters(){

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let count = 0;

const speed =
target / 100;

function update(){

count += speed;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText =
target + "+";

}

}

update();

});

}

const statsSection =
document.querySelector(".stats");

let counterStarted = false;

if(statsSection){

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting &&
!counterStarted
){

startCounters();

counterStarted = true;

}

});

},{
threshold:.4
});

observer.observe(statsSection);

}

/* ==============================
   NAVBAR SCROLL EFFECT
============================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

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
   PLANET PARALLAX
============================== */

const planet =
document.querySelector(".planet");

document.addEventListener(
"mousemove",
(e)=>{

if(!planet) return;

const x =
(e.clientX /
window.innerWidth - .5)
* 25;

const y =
(e.clientY /
window.innerHeight - .5)
* 25;

planet.style.transform =
`translate(${x}px,${y}px)`;

}
);

/* ==============================
   LOADER
============================== */

window.addEventListener(
"load",
()=>{

const loader =
document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.classList.add("hide");

},1500);

}

}
);

/* ==============================
   GSAP ANIMATIONS
============================== */

if(typeof gsap !== "undefined"){

gsap.registerPlugin(
ScrollTrigger
);

gsap.from(".hero-tag",{

opacity:0,
y:40,
duration:1

});

gsap.from(".hero h1",{

opacity:0,
y:80,
duration:1.2,
delay:.2

});

gsap.from(".hero-subtitle",{

opacity:0,
y:50,
duration:1,
delay:.4

});

gsap.from(".hero-buttons",{

opacity:0,
y:40,
duration:1,
delay:.6

});

gsap.utils
.toArray(".card")
.forEach(card=>{

gsap.from(card,{

scrollTrigger:{
trigger:card,
start:"top 85%"
},

opacity:0,
y:60,
duration:.8

});

});

gsap.utils
.toArray(".product")
.forEach(product=>{

gsap.from(product,{

scrollTrigger:{
trigger:product,
start:"top 85%"
},

opacity:0,
y:60,
duration:.8

});

});

gsap.utils
.toArray(".timeline-item")
.forEach(item=>{

gsap.from(item,{

scrollTrigger:{
trigger:item,
start:"top 85%"
},

opacity:0,
x:-80,
duration:.8

});

});

}

/* ==============================
   BUTTON HOVER
============================== */

document
.querySelectorAll(
".btn-primary,.btn-secondary"
)
.forEach(btn=>{

btn.addEventListener(
"mouseenter",
()=>{

btn.style.transform =
"translateY(-5px)";

}
);

btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform =
"translateY(0px)";

}
);

});