 function onshow(display){
    document.getElementById("menu").style.left =display;
 }
 window.addEventListener('scroll',function(e){
     const target=document.querySelector('.imges')
     var scrolled =window.pageYOffset;
     var rate =scrolled *.5;
     target.style.transform ='translate3d(0px, '+rate+'px,0px)';

 })
 ScrollReveal().reveal('.banner-container', {
    delay: 300,
    duration: 500,
    distance: '60px',
    origin:'top',
    opacity: .2,
    reset: true
});
ScrollReveal().reveal('.items,.item', {
    delay: 300,
    duration: 800,
    distance: '10px',
    opacity: .2,
    reset: true
});