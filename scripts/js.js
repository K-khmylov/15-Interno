'use strict'

let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let body = document.body;

burgerBtn.addEventListener('click', ()=>{
    if(burgerBtn.classList.contains('open')){
        body.style.overflow = 'auto';
        burgerBtn.classList.remove('open');
        burgerMenu.classList.remove('open');
    } else {
        body.style.overflow = 'hidden';
        burgerBtn.classList.add('open');
        burgerMenu.classList.add('open');
    }
})

AOS.init();
