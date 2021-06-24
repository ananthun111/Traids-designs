 function onshow(display){
    document.getElementById("menu").style.left =display;
 }
 window.addEventListener('scroll',function(e){
     const target=document.querySelector('.imges')
     var scrolled =window.pageYOffset;
     var rate =scrolled *.5;
     target.style.transform ='translate3d(0px, '+rate+'px,0px)';

 })