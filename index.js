

const btnEle = document.querySelector(".btn");
const resEle = document.querySelector(".result");
const legendEle =  document.querySelector("#legend");
const h2Ele = document.querySelector(".h2");




/* The Text Above My Button that changes when reached required click amount*/

let clickCount = 0;
btnEle.addEventListener("click", () => {
  clickCount++;
  resEle.innerHTML = "The button has been clicked " + clickCount + " times ";

  if (clickCount > 100) {
    h2Ele.innerHTML = "Click Faster!!";
    
    if (clickCount > 200) {
    h2Ele.innerHTML = "Omg Dont Stop!!";
        
    } else {
        
    }

    if (clickCount > 400) {
    h2Ele.innerHTML = "Your almost there!!";
        
    } else {
        
    }

    if (clickCount > 500) {
    h2Ele.innerHTML = "Yeah its finished!";
      
    } else {
      
    }

    


}

/* Text inside button changing when reached required amount*/

if (clickCount > 500){
btnEle.innerHTML = "Thanks bro bro";
}

/* The background color of the webpage that changes on required click amount*/
  
  if (clickCount > 100) {
    document.body.style.backgroundColor ='green';

    if (clickCount > 150) {
    document.body.style.backgroundColor ='yellow';
    
        
    } else {
        
    }

    if (clickCount > 200) {
    document.body.style.backgroundColor ='magenta';
        
    } else {
        
    }

    if (clickCount > 400) {
    document.body.style.backgroundColor ='pink';
        
    } else {
        
    }

    /* The text under the button and the background image surprize*/

    if (clickCount > 500) {

      document.body.style.backgroundImage = "url('images/scaredDog.jpg')";
      
    } else {
      
    }
    legendEle.style.color = '#000';
    if (clickCount > 500) {
     
    legendEle.innerHTML = "Your a sick being  " + "You really touched me that much......"
    document.getElementById("legend").style.color = "red";
    
    }
    
  }
});