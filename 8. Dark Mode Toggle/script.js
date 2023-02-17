const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
// const btn = document.querySelector('#changeBtn');
const changeColorToggle = document.querySelector('.button');


// btn.addEventListener('click', function(){
//     body.classList.toggle('color');
// })

changeColorToggle.addEventListener('click', function(){
    body.classList.toggle('color');
})
