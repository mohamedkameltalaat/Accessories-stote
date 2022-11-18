let menu =document.getElementById("menu");
let close =document.getElementById("close");
let search =document.getElementById("search");
let button_menu =document.getElementById("button_menu");
let form_group =document.querySelector(".container form");
let overly=document.createElement("div");
let answers =document.querySelectorAll(".question_text");

button_menu.onclick=function(){
    menu.classList.toggle("active");
    overly.className="overly";
    
    document.body.appendChild(overly);
}

close.onclick=function(){
    menu.classList.remove("active");
    overly.classList.add("active");
}

search.onclick=function(){
  form_group.classList.toggle("active");  
}


// triger swiper 
var swiper = new Swiper(".products_list", {
        pagination: {
         
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         loop:true,
         grabCursor:true
      });

      answers.forEach(function(Element){
       Element.addEventListener("click",function(){
        this.classList.toggle("active");
        
       }) 
      })

      // trigger customer viewers 

            var swiper = new Swiper(".client_list", {
        slidesPerView: 3,
        spaceBetween:10,
        loop: true,
               grabCursor:true,
         breakpoints:{
      767:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
      //   
     },
       992:{
                 slidesPerView: 3,
         }
}
       
      });