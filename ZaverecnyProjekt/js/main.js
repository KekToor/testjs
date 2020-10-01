var lightmode = document.getElementById('lightmode');
var lightmode2 = document.getElementById('lightmode2');
var lightmode3 = document.getElementById('lightmode3');
var lightmode4 = document.getElementById('lightmode4');

const video = document.querySelector('iframe');
const obrazek = document.getElementById('obrazek');
let gr = document.getElementById('gr');

function lightMode(){
    lightmode.classList.toggle("light-mode");
    lightmode2.classList.toggle("gray-mode");
    lightmode3.classList.toggle("gray-mode");
    lightmode4.classList.toggle("lightgray-mode");
} 

video.addEventListener('mouseover',function(){
    video.src = 'https://www.youtube.com/embed/eSkK2kqU3JM';
})

video.addEventListener('mouseleave',function(){
    video.src = 'https://www.youtube.com/embed/575YkIJSk24';
})

obrazek.addEventListener('mouseover',function(){
    obrazek.src = 'img/g.jpg';
    gr.innerHTML = "May the bold man be with you!";
})

obrazek.addEventListener('mouseleave',function(){
    obrazek.src = 'img/arena.jpg';
    gr.innerHTML = "This is your arena for fighting him.";
})