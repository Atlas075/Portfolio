const menuButton = document.getElementsByClassName('menu-button')[0]
const navbarUl = document.getElementsByClassName('nav-links')[0]

menuButton.addEventListener('click',()=>{
    navbarUl.classList.toggle('active')   
} )