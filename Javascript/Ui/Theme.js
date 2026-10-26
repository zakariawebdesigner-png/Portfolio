
import { SunDiv,MoonDiv,DarkModePic } from "./Elements.js";
const Right=document.getElementById("Right");
 const LightModePic=document.createElement("img");

function CheckTheMode(BodyClass_Name){
console.log(BodyClass_Name);
    if(BodyClass_Name==""){
        if(LightModePic!=null)LightModePic.remove();
        
DarkModePic.style.display="flex";
DarkModePic.style.borderRadius = "0.3rem";
    }

    else{
        DarkModePic.style.display="none";



   LightModePic.src="Photos/ContactMe-Pic2.png";
  
     Right.appendChild(LightModePic);
    }

}






function LightMode(){

document.body.classList.remove("DarkMode");
document.body.classList.add("light-mode");
SunDiv.classList.add("MoonDiv-SunDiv-Style");
MoonDiv.classList.remove("MoonDiv-SunDiv-Style");
DarkModePic.style.display="none";


   LightModePic.src="Photos/ContactMe-Pic2.png";
   LightModePic.style.width="99%";
   LightModePic.style.height="70%";
   LightModePic.style.borderRadius = "0.3rem";
 Right.appendChild(LightModePic);

}



function DarkMode(){
    document.body.classList.remove("light-mode");
document.body.classList.add("DarkMode");

SunDiv.classList.remove("MoonDiv-SunDiv-Style");
MoonDiv.classList.add("MoonDiv-SunDiv-Style");
LightModePic.remove();
DarkModePic.style.display="flex";
DarkModePic.style.borderRadius = "0.3rem";
}

export{DarkMode,LightMode,CheckTheMode}



