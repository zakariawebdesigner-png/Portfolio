
import { SunDiv,MoonDiv,Links } from "./Ui/Elements.js";

import { LightMode,DarkMode,CheckTheMode } from "./Ui/Theme.js";

import { ClickedLinkStyle } from "./Ui/LinksStyle.js";












SunDiv.addEventListener("click",(e)=>{

if(!e.currentTarget.closest(".SunDiv") && !e.currentTarget.closest("button") && !e.currentTarget.closest("i") )return;

LightMode();


});


MoonDiv.addEventListener("click",(e)=>{
    if(!e.currentTarget.closest(".MoonDiv") && !e.currentTarget.closest("button") && !e.currentTarget.closest("i") )return;
DarkMode();
document.body.className=document.body.className;
console.log(document.body.className);

});




Links.forEach(link=>{

  link.addEventListener("click",(e)=>{

        ClickedLinkStyle(e);

  });

});

import { AllCards,ViewMore } from "./Ui/Elements.js";
window.addEventListener("load",()=>{
AllCards.forEach((Card,index)=>{

   if(index>=3)Card.hidden=true;

});

CheckTheMode(document.body.className);




});


import { ControllCardsVisibility } from "./Ui/Controll-ProjectsCards-Visibility.js";

ViewMore.addEventListener("click",(e)=>{

ControllCardsVisibility(e);

});


      


// Initialize EmailJS
const emailjs = window.emailjs;

emailjs.init({
    publicKey: "rrhkj_7PW9BfcS7LO"
});

const form = document.getElementById("InputsDiv");
const loader_wrapper = document.getElementById("loader-wrapper");


form.addEventListener("submit", function (e) {
    e.preventDefault();

       loader_wrapper.style.display="flex";
    
    emailjs.sendForm(
        "service_hv5uui6",
        "template_k2a1r9l",
        form
    )
    .then(() => {
       
          loader_wrapper.style.display="none";
        form.reset();
        
    })
    .catch((error) => {
        console.error("EMAILJS ERROR:", error);

        alert("Failed to send: " + (error.text || error.message || "Unknown error"));
    });
});











