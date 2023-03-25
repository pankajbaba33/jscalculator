let items=document.querySelectorAll(".item");
let screen=document.getElementById('input');
let screenValue="";
for(var item of items){
   item.addEventListener('click',(e)=>{
      buttonText=e.target.innerText;
      console.log(buttonText);
      if(buttonText==="x"){

           buttonText="*";
           screenValue+=buttonText
           screen.value+=screenValue
      }
        else if(buttonText==="AC"){
        
         screen.value="";
          
        }
        else if(buttonText==="="){
            screen.value=eval(screenValue);
        }
        else if(buttonText==="←"){
          back()


        }
        else{
         screenValue+=buttonText
         screen.value=screenValue;
   
        }

   })
}

function back()
{
   var value = document.getElementById("input").value;
   document.getElementById("input").value = value.substr(0, value.length - 1);
}

 
 



  
   

