const navbar = document.getElementById('nav');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const dark = document.querySelector('label');

menu.addEventListener("click",()=>{
    navbar.classList.add('opens');
})

close.addEventListener("click",()=>{
    navbar.classList.remove('opens');
})

dark.addEventListener('click',function(){
    dark.classList.toggle('active');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('h1').classList.toggle('dark');
    document.getElementsByTagName('header').classList.toggle('dark');
})