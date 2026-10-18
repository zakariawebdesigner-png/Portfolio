

import { ViewMore,AllCards } from "./Elements.js";
let ViewMoreClicked=false;
function ControllCardsVisibility(e){

  
 if(!e.target.closest(".ViewMore"))return;

          const BtnText=ViewMore.querySelector("p");
                 let  hide=ViewMoreClicked;
          if(hide==false){

             BtnText.textContent="View less";

          }
         else{

              BtnText.textContent="View all projects";
              
         }

     


      AllCards.forEach((Card,index)=>{

   if(index>=3)Card.hidden=hide;

});


ViewMoreClicked=!ViewMoreClicked;

}

export{ControllCardsVisibility}