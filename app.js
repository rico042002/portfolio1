const hamburger = document.querySelector('.header #navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header #navbar .nav-list ul a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "rgba(31, 30, 30, 0.24)";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach(item=> {
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})