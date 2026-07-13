//===========================================
// Recognition Slider - Infinite Loop
// Part 1
//===========================================

const slider = document.querySelector(".slider");
const track = document.querySelector(".slider-track");
const dotsContainer = document.querySelector(".slider-dots");

let cards = [...document.querySelectorAll(".recognition-card")];

let cardsPerView = 5;
let currentIndex = 0;
let autoSlide;
let cardWidth;

//===========================================
// Responsive
//===========================================

function getCardsPerView() {

    if (window.innerWidth <= 768) {

        cardsPerView = 1;

    }

    else if (window.innerWidth <= 992) {

        cardsPerView = 2;

    }

    else {

        cardsPerView = 5;

    }

}

//===========================================
// Clone Cards
//===========================================

function cloneCards() {

    const firstCards = cards
        .slice(0, cardsPerView)
        .map(card => card.cloneNode(true));

    const lastCards = cards
        .slice(-cardsPerView)
        .map(card => card.cloneNode(true));

    lastCards.reverse().forEach(card => {

        track.insertBefore(card, track.firstChild);

    });

    firstCards.forEach(card => {

        track.appendChild(card);

    });

    cards = [...document.querySelectorAll(".recognition-card")];

}

//===========================================
// Card Width
//===========================================

function updateCardWidth() {

    const style = window.getComputedStyle(cards[0]);

const marginRight = parseInt(style.marginRight);

cardWidth = cards[0].offsetWidth + marginRight;

}

//===========================================
// Initial Position
//===========================================

function setInitialPosition() {

    updateCardWidth();

    currentIndex = cardsPerView;

    track.style.transition = "none";

    track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;

}


//===========================================
// Move Slider
//===========================================

function moveSlider() {

    track.style.transition = "transform .7s ease-in-out";

    track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;

}

//===========================================
// Next Slide
//===========================================

function nextSlide() {

    currentIndex++;

    moveSlider();

}

//===========================================
// Previous Slide
//===========================================

function prevSlide() {

    currentIndex--;

    moveSlider();

}

//===========================================
// Infinite Loop
//===========================================

track.addEventListener("transitionend", () => {

    // Last Clone
    if (currentIndex >= cards.length - cardsPerView) {

        track.style.transition = "none";

        currentIndex = cardsPerView;

        track.style.transform =
            `translateX(-${currentIndex * cardWidth}px)`;

    }

    // First Clone
    if (currentIndex <= 0) {

        track.style.transition = "none";

        currentIndex = cards.length - (cardsPerView * 2);

        track.style.transform =
            `translateX(-${currentIndex * cardWidth}px)`;

    }

    updateDots();

});

//===========================================
// Create Dots
//===========================================

function createDots() {

    dotsContainer.innerHTML = "";

    const totalRealCards = 13;

    const totalDots = Math.ceil(totalRealCards / cardsPerView);

    for (let i = 0; i < totalDots; i++) {

        const dot = document.createElement("span");

        if (i === 0) {

            dot.classList.add("active");

        }

        dot.addEventListener("click", () => {

            currentIndex = i * cardsPerView + cardsPerView;

            moveSlider();

            restartAutoSlide();

        });

        dotsContainer.appendChild(dot);

    }

}


//===========================================
// Update Active Dots
//===========================================

function updateDots() {

    const dots = document.querySelectorAll(".slider-dots span");

    let activeIndex = currentIndex - cardsPerView;

    activeIndex = Math.floor(activeIndex / cardsPerView);

    const totalDots = dots.length;

    if (activeIndex >= totalDots) {

        activeIndex = 0;

    }

    if (activeIndex < 0) {

        activeIndex = totalDots - 1;

    }

    dots.forEach(dot => dot.classList.remove("active"));

    if (dots[activeIndex]) {

        dots[activeIndex].classList.add("active");

    }

}

//===========================================
// Auto Slide
//===========================================

function startAutoSlide() {

    autoSlide = setInterval(() => {

        nextSlide();

    }, 7000);

}

//===========================================
// Restart Auto Slide
//===========================================

function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}

//===========================================
// Pause On Hover
//===========================================

slider.addEventListener("mouseenter", () => {

    clearInterval(autoSlide);

});

slider.addEventListener("mouseleave", () => {

    startAutoSlide();

});

//===========================================
// Resize
//===========================================

window.addEventListener("resize", () => {

    clearInterval(autoSlide);

    track.innerHTML = "";

    location.reload();

});

//===========================================
// Initialize Slider
//===========================================

getCardsPerView();

cloneCards();

updateCardWidth();

setInitialPosition();

createDots();

updateDots();

startAutoSlide();


//===========================================
// Optional Next / Prev Buttons Support
//===========================================

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        restartAutoSlide();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        prevSlide();

        restartAutoSlide();

    });

}