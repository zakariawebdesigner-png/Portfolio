
import { SunDiv,MoonDiv,Links } from "./Ui/Elements.js";

import { LightMode,DarkMode } from "./Ui/Theme.js";

import { ClickedLinkStyle } from "./Ui/LinksStyle.js";

SunDiv.addEventListener("click",(e)=>{

if(!e.currentTarget.closest(".SunDiv") && !e.currentTarget.closest("button") && !e.currentTarget.closest("i") )return;

LightMode();

});



MoonDiv.addEventListener("click",(e)=>{
    if(!e.currentTarget.closest(".MoonDiv") && !e.currentTarget.closest("button") && !e.currentTarget.closest("i") )return;
DarkMode();

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

});


import { ControllCardsVisibility } from "./Ui/Controll-ProjectsCards-Visibility.js";

ViewMore.addEventListener("click",(e)=>{

ControllCardsVisibility(e);

});















