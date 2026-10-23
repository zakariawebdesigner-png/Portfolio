

import { PhilosophyDivs_Container,LeftOfAbout,Detailed_Discription,MoreAbout_Btn } from "./Elements.js";

MoreAbout_Btn.dataset.Clicked=false;
function MoreInfoVisibility(){
    
    if(MoreAbout_Btn.dataset.Clicked=="false" || MoreAbout_Btn.dataset.Clicked=="" ){

    
LeftOfAbout.classList.remove("SlideRight");

LeftOfAbout.classList.add("SlideLeft");

PhilosophyDivs_Container.classList.remove("SlideRight");
PhilosophyDivs_Container.classList.add("SlideLeft");


PhilosophyDivs_Container.addEventListener("animationend",()=>{

LeftOfAbout.style.display="none";

PhilosophyDivs_Container.style.display="none";

Detailed_Discription.style.display="flex";



},{once:true});

Detailed_Discription.classList.remove("Detaled-Disappearence");
Detailed_Discription.classList.add("Detaled-Appearence");
MoreAbout_Btn.dataset.Clicked=true;
    }


    
    else{

    
Detailed_Discription.classList.remove("Detaled-Appearence");
Detailed_Discription.classList.add("Detaled-Disappearence");

PhilosophyDivs_Container.classList.remove("SlideLeft");

PhilosophyDivs_Container.classList.add("SlideRight");

Detailed_Discription.addEventListener("animationend",()=>{

LeftOfAbout.style.display="flex";

PhilosophyDivs_Container.style.display="flex";

Detailed_Discription.style.display="none";



},{once:true});

LeftOfAbout.classList.remove("SlideLeft");
LeftOfAbout.classList.add("SlideRight");

MoreAbout_Btn.dataset.Clicked=false;

    }




}

export{MoreInfoVisibility}