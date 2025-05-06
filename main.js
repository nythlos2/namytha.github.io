
const header_section = document.querySelector('.header_section')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 250) {
        header_section.classList.add('active')
    }else {
        header_section.classList.remove('active')
    }
})



// wow animation code 
new WOW().init(); // ok done . just a code




// mobile menu 
const mobile_menu_container = document.querySelector('.mobile_menu_container');
const menu_icon = document.querySelector('.menu_icon');
menu_icon.addEventListener('click', () => {
    mobile_menu_container.classList.add('active')
})


const menu_close = document.querySelector('.menu_close');
menu_close.addEventListener('click', () => {
    mobile_menu_container.classList.remove('active')
})

