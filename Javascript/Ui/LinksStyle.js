import { Links } from "./Elements.js";

function ClickedLinkStyle(e){

 let link=e.target.closest(".Link");

   let TextOfLink=link.querySelector("p");

 TextOfLink.classList.add("TheClicked-a");

 let Dot=link.querySelector(".Dot");

    Dot.style.display="flex";

ClickedLink_RemoveStyle(Links,link);

 

}


function ClickedLink_RemoveStyle(Links,link){
 Links.forEach(l=>{

            if(l!==link){
                   let TextOfLink=l.querySelector("p");
                    TextOfLink.classList.remove("TheClicked-a");
                    let Dot=l.querySelector(".Dot");
                     Dot.style.display="none";
            }

      });
    
}



export{ClickedLinkStyle}