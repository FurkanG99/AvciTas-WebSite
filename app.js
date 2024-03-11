
const slider = document.querySelector(".slider")

const trail = document.querySelector(".trail").querySelectorAll("div")


let value = 0

let trailValue = 0

let interval = 6000


const slide = (condition) => {

    clearInterval(start)

    condition === "increase" ? initiateINC() : initiateDEC()

    // move(value, trailValue)

    animate()

    start = setInterval(() => slide("increase"), interval);
}

const initiateINC = () => {

    trail.forEach(cur => cur.classList.remove("active"))

    value === 80 ? value = 0 : value += 20

    trailUpdate()
}


const initiateDEC = () => {

    trail.forEach(cur => cur.classList.remove("active"))
    value === 0 ? value = 80 : value -= 20

    trailUpdate()
}

const move = (S, T) => {

    slider.style.transform = `translateX(-${S}%)`

    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

// function to restart animation
const animate = () => tl.restart()


const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)


document.querySelectorAll("svg").forEach(cur => {

    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})


const clickCheck = (e) => {

    clearInterval(start)

    trail.forEach(cur => cur.classList.remove("active"))

    const check = e.target

    check.classList.add("active")


    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}


//MOBİL JS
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

const touchSlide = (() => {
    let start, move, change, sliderWidth


    slider.addEventListener("touchstart", (e) => {
    
        start = e.touches[0].clientX
      
        sliderWidth = slider.clientWidth/trail.length
    })
    

    slider.addEventListener("touchmove", (e) => {
   
        e.preventDefault()
        
        move = e.touches[0].clientX
       
        change = start - move
    })

    const mobile = (e) => {
        
        change > (sliderWidth/4)  ? slide("increase") : null;
        
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    
    slider.addEventListener("touchend", mobile)
})()

window.onload = function() {
    adjustFlagSize();
    window.addEventListener('resize', adjustFlagSize);
};


window.onload = function() {
    adjustFlagSize();
    window.addEventListener('resize', adjustFlagSize);
};

function adjustFlagSize() {
    var flagContainer = document.querySelector('.site-header img');
    var flag = document.querySelector('.flag');

    var containerWidth = flagContainer.offsetWidth;
    var containerHeight = flagContainer.offsetHeight;

    var aspectRatio = 3/ 2; 
}