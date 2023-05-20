 const header = document.querySelector("header");
 window.addEventListener ("scroll", function(){
     header.classList.toggle("sticky", window.scrollY > 100);
});

  $(document).ready( function(){
 $('.navbar li a').click (function(){
     $('li a').removeClass('active')
     $(this).addClass('active') })
 })

let menu = document.getElementById('menu-icon');
console.log(menu);

let navbar = document.querySelector('navbar');
menu.onclick = () => {
     menu.classList.toggle('bx-x');
    navbar.classList.toggle('navbar');
   
}


   