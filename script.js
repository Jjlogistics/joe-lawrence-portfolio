const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle("active")

    if (navLinks.classList.contains("active")){
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    }else {
         menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

const navItems = document.querySelectorAll(".nav-links a")
navItems.forEach(function(navItem){
    navItem.addEventListener("click", function(){
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-label", "Open navigation menu")
    })
})

document.addEventListener("click", function(){
    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ){
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-label", "Open navigation menu")
    }
})

const contactForm = document.querySelector(".contact-form")
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector(".form-message");
const characterCount = document.querySelector(".character-count");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const response = `Thanks, ${name}! Your message has been received.`;

    formMessage.textContent = response;

    contactForm.reset();

    characterCount.textContent = "0 / 500 characters";
})

messageInput.addEventListener("input", function(){
    const characterLength = messageInput.value.length;
    
    characterCount.textContent = `${characterLength} / 500 characters`;
})

contactForm.addEventListener("input", function(){

    formMessage.textContent = ""
})

const header = document.querySelector("header");
console.log(header)
window.addEventListener("scroll", function(){

    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})