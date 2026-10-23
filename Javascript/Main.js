
import { SunDiv,MoonDiv,Links,AllCards,ViewMore,MoreAbout_Btn } from "./Ui/Elements.js";

import { LightMode,DarkMode,CheckTheMode } from "./Ui/Theme.js";

import { ClickedLinkStyle } from "./Ui/LinksStyle.js";

// Reveal content as it enters the viewport, while keeping the page usable
// in browsers without IntersectionObserver and for reduced-motion users.
const revealSelectors = [
  ".MyProjects > .FirstDiv",
  ".ProjectsContainer > .ProjectCard",
  ".MyProjects > .LastText",
  ".AboutMe > .Left",
  ".AboutMe > .PhilosophyDivs-Container",
  ".AboutMe > .MoreAbout-Btn",
  ".Skills > .FirstDiv2",
  ".SkilsDiv > div",
  ".ContactMe > .Top",
  ".HowToContact-Holder > *",
  "footer > *"
];

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealItems = document.querySelectorAll(revealSelectors.join(","));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

  revealItems.forEach((item, index) => {
    item.classList.add("scroll-reveal");
    if (item.matches(".ProjectCard, .SkilsDiv > div")) {
      item.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    }
    revealObserver.observe(item);
  });
}












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

import { MoreInfoVisibility } from "./Ui/MoreInformations-Appearence-Controll.js";
MoreAbout_Btn.addEventListener("click",()=>{

  MoreInfoVisibility();

});







