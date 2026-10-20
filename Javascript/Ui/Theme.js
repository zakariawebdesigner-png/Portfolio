
import { SunDiv,MoonDiv,LightModePic,DarkModePic } from "./Elements.js";



function CheckTheMode(BodyClass_Name){
console.log(BodyClass_Name);
    if(BodyClass_Name==""){
        LightModePic.style.display="none";
DarkModePic.style.display="flex";
    }

    else{
        DarkModePic.style.display="none";
LightModePic.style.display="flex";
    }

}






function LightMode(){

document.body.classList.remove("DarkMode");
document.body.classList.add("light-mode");
SunDiv.classList.add("MoonDiv-SunDiv-Style");
MoonDiv.classList.remove("MoonDiv-SunDiv-Style");
DarkModePic.style.display="none";
LightModePic.style.display="flex";

}



function DarkMode(){
    document.body.classList.remove("light-mode");
document.body.classList.add("DarkMode");

SunDiv.classList.remove("MoonDiv-SunDiv-Style");
MoonDiv.classList.add("MoonDiv-SunDiv-Style");
LightModePic.style.display="none";
DarkModePic.style.display="flex";
}

export{DarkMode,LightMode,CheckTheMode}



