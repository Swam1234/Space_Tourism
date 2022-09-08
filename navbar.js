const navbarOpenBtn = document.querySelector("#navbar-open-btn");
const navbarCloseBtn = document.querySelector("#navbar-close-btn");
const navbar = document.querySelector("#navbar");

navbarOpenBtn.addEventListener("click" , () => {
    navbar.classList.replace('hidden' , 'flex')
})

navbarCloseBtn.addEventListener("click" , () => {
    navbar.classList.replace('flex' , 'hidden')
})