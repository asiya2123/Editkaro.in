var moons= document.querySelectorAll('.fa-sun');
var body=document.querySelector("body");
var head=document.querySelector("header");
var home=document.querySelector('.fa-home');/*
var innerpart=document.getElementsByClassName("inner-part");*/
var innerpart=document.querySelectorAll(".inner-part");
var lgin_link=document.querySelector('.logon-link');
moons.forEach(moon => {

moon.addEventListener('click',()=>{
   moon.classList.toggle("fa-moon");
    moon.classList.toggle("fa-sun");
    body.classList.toggle("bgimage");
    lgin_link.classList.toggle('lgin');
    head.classList.toggle(".header");
    innerpart.forEach(function(el){
    el.classList.toggle('inner-partforlightmode'); 
    });
    
});

    
});
let menu_icon=document.querySelector(".fa-bars");
let link=document.querySelector(".links");
menu_icon.addEventListener("click",()=>{
    console.log("clicked");
    link.classList.toggle("links");
    menu_icon.classList.toggle("fa-xmark");
    menu_icon.classList.toggle("fa-bars");
});