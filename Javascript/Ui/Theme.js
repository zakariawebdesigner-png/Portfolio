
import { SunDiv,MoonDiv } from "./Elements.js";


function LightMode(){

document.body.classList.remove("DarkMode");
document.body.classList.add("light-mode");
SunDiv.classList.add("MoonDiv-SunDiv-Style");
MoonDiv.classList.remove("MoonDiv-SunDiv-Style");



}



function DarkMode(){
    document.body.classList.remove("light-mode");
document.body.classList.add("DarkMode");

SunDiv.classList.remove("MoonDiv-SunDiv-Style");
MoonDiv.classList.add("MoonDiv-SunDiv-Style");

}

export{DarkMode,LightMode}



