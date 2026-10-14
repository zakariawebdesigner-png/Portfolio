
import { SunDiv,MoonDiv } from "./Elements.js";


function LightMode(kc){

//body.classList.add("LightMode");

SunDiv.classList.add("MoonDiv-SunDiv-Style");
MoonDiv.classList.remove("MoonDiv-SunDiv-Style");



}



function DarkMode(){
//body.classList.add("DarkMode");
SunDiv.classList.remove("MoonDiv-SunDiv-Style");
MoonDiv.classList.add("MoonDiv-SunDiv-Style");

}

export{DarkMode,LightMode}



