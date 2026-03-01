var nav=document.getElementById("nav");
var hero=document.getElementById("hero");
window.onscroll = function(){
    if(window.pageYOffset >=650)
        nav.classList.add("fixed");
    else
        nav.classList.remove("fixed");
}
// owl-cursoul
$(document).ready(function(){
  $('.owl-carousel1').owlCarousel({
    autoWidth:true,
    loop: true,
    autoMargin:true,
    dots:false
});
});
$(document).ready(function(){
    $('.owl-carousel2').owlCarousel({
        items:1,
        loop: true,
        nav:true,
        dots:false, 
        navText: [
      '<div style="line-height: 40px; width:45px; height:40px;display:flex;align-items:center;justify-content:center;left:-200px;border-radius:50%;border:1px solid #B3B6BD; transition: all 0.3s ease;position:absolute; border-radius:50%; top:50%;  background-color:white;"><i class="fa-solid fa-angle-left" style="font-size:14px; font-weight:600; color:#040E27;   "></i></div>',    
      '<div style="line-height: 40px; width:45px; height:40px;display:flex;align-items:center;justify-content:center;right:-200px;border-radius:50%;border:1px solid  #B3B6BD;transition: all 0.3s ease; position:absolute; border-radius:50%; top:50%;  background-color:white;"><i class="fa-solid fa-angle-right" style="font-size:14px; font-weight:600; color:#040E27;  "></i></div>'   
    ],
    center:false
  });
});