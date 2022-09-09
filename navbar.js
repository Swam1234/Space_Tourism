const navbarOpenBtn = document.querySelector("#navbar-open-btn");
const navbarCloseBtn = document.querySelector("#navbar-close-btn");
const navbar = document.querySelector("#navbar");
const body = document.body;

navbarOpenBtn.addEventListener("click" , () => {
    navbar.classList.replace('hidden' , 'flex')
    body.classList.replace('overflow-y-auto' , 'overflow-y-hidden')
})

navbarCloseBtn.addEventListener("click" , () => {
    navbar.classList.replace('flex' , 'hidden')
    body.classList.replace('overflow-y-hidden' , 'overflow-y-auto')
})