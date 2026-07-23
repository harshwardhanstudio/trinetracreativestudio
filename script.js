/*=========================================
   HARTION STUDIO
   SCRIPT.JS - PART 1
=========================================*/

// ======================
// Sticky Header
// ======================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


// ======================
// Mobile Menu
// ======================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.add("active");
document.body.style.overflow="hidden";

});

}

if(closeBtn){

closeBtn.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
document.body.style.overflow="";

});

}


// ======================
// Close Menu On Link Click
// ======================

document.querySelectorAll(".mobile-nav a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
document.body.style.overflow="";

});

});


// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

}

});

});


// ======================
// Active Navigation
// ======================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*=========================================
  COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".count");

let counterStarted = false;

function runCounter() {

    if (counterStarted) return;

    const counterSection = document.getElementById("counter");

    if (!counterSection) return;

    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 100;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounter);



/*=========================================
  PORTFOLIO FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 250);

            }

        });

    });

});



/*=========================================
  FAQ
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



/*=========================================
  SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".section,.service-card,.portfolio-item,.why-card,.process-card,.testimonial-card,.contact-card"

);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/*=========================================
  TESTIMONIAL SLIDER
=========================================*/

const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-testimonial");
const nextBtn = document.querySelector(".next-testimonial");

let currentSlide = 0;

function showSlide(index){

    testimonialCards.forEach((card,i)=>{

        card.style.display = i === index ? "block" : "none";

    });

}

if(testimonialCards.length){

    showSlide(currentSlide);

    nextBtn?.addEventListener("click",()=>{

        currentSlide++;

        if(currentSlide >= testimonialCards.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

    prevBtn?.addEventListener("click",()=>{

        currentSlide--;

        if(currentSlide < 0){

            currentSlide = testimonialCards.length-1;

        }

        showSlide(currentSlide);

    });

    setInterval(()=>{

        currentSlide++;

        if(currentSlide >= testimonialCards.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    },5000);

}


/*=========================================
 BACK TO TOP
=========================================*/

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backTop.style.opacity="1";
        backTop.style.visibility="visible";

    }else{

        backTop.style.opacity="0";
        backTop.style.visibility="hidden";

    }

});

backTop?.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
 MOUSE GLOW
=========================================*/

const mouseGlow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    if(!mouseGlow) return;

    mouseGlow.style.left=e.clientX+"px";
    mouseGlow.style.top=e.clientY+"px";

});


/*=========================================
 GOLD PARTICLES
=========================================*/

const particleBox=document.querySelector(".gold-particles");

if(particleBox){

    for(let i=0;i<35;i++){

        const span=document.createElement("span");

        span.style.left=Math.random()*100+"%";
        span.style.animationDelay=Math.random()*6+"s";
        span.style.animationDuration=5+Math.random()*5+"s";

        particleBox.appendChild(span);

    }

}


/*=========================================
 HERO PARALLAX
=========================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/40;
    const y=(window.innerHeight/2-e.clientY)/40;

    heroImage.style.transform=`translate(${x}px,${y}px)`;

});


/*=========================================
 PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

    revealOnScroll();
    runCounter();

    console.log("Hartion Studio Loaded Successfully");

});
