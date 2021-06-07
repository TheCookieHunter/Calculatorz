document.getElementById('display').readOnly = true;
let display = document.getElementById("display")
let value1= [];
      value1[0] = 0;
      value1[1] = 0;
      
      document.body.onclick = function(anEvent) {
        
        let b = anEvent.target.id;
        display.type='text'
        
        if(b===''){
          return;
        }


        if (display.value ==='0' && b!='percent' && b!='0' && b!='equal' && b!='divide' && b!='multiply' && b!='add' && b!='subtract') {
          if(b !='clear'){
            display.value = b;
          }

          
          else{
            display.value=0;
          }
           }

          else if(b==='clear') {
            display.value=0;
          }

          else if(b==='percent') {
            display.value *= 0.01;
          }

          else if(b==='negate'){
            display.value *= -1;
          }
          
          else if (b==='dot'){
            if(!display.value.includes('.')){
              display.value +='.';
            } 
          }

         else if (b==='add' || b==='subtract' || b==='multiply' || b==='divide'){
            value1[0]=display.value;
            console.log(value1)
            display.value ='';
            value1[2] = b;
          }

          else if (b==='equal'){
            operaotrs();
            display.value=value1[0];
            font();
          }


          else{
            if(display.value.length >= 25){   // The calculator display can only hold maximun 25 num. 
              alert('Too many numbers, my brain hurts')
            }
            else{
              display.value += b;
              font();
            }
            }
      
    };



function operaotrs(){
  value1[1]=display.value;
  switch(value1[2]){
    case 'add':
      value1[0]*= 1;
      value1[1]*= 1;
      value1[0]+=value1[1];
      break
    
    case 'subtract':
        value1[0]-=value1[1];
        break
      
    case 'multiply':
        value1[0]= value1[0]*value1[1];
        break
    
    case 'divide':
        value1[0]= value1[0]/value1[1];
        break

    default:
        return
  }

}

function font() {  // for the fontsize. 
  for (let index = 0; index < display.value.length; index++) { // if the display has more then 0 numbers this loops.   
    if(display.value.length === 14) {  // if true the font size changes to fit the display. 
      display.style.fontSize = "24px"
    }
    else if (display.value.length === 18) { // if true the font size changes to fit the display. 
      display.style.fontSize = "20px"
    }
    else if (display.value.length === 22) {   // if true the font size changes to fit the display. 
      display.style.fontSize = "16px"
    }
  }
}




/*let display1 = document.getElementById("display"); 


document.getElementById("3").onclick = function() {myFunction()};


    function myFunction() {
        let number = document.getElementById("3").innerHTML;
       
    display1.value = number;
    
      }*/
    /*  let display1 = document.getElementById("display")
      document.getElementById("1").addEventListener("click", displayDate);

      function displayDate() {
        let number = document.getElementById("1").innerHTML;
       
    display1.value = number;
      }*/
      /*
      let x = document.getElementById("1");
x.addEventListener("click", myFunction);

function myFunction() {

    document.getElementById("display").value += '1';
}*/
/* //clear function
let display1 = document.getElementById("display")
document.getElementById("clear").onclick = function() {myFunction2()};
function myFunction2() {
    let clear1 = document.getElementById("clear").innerHTML;
   
display1.value = clear1;

  }

  */
 /*
  let display1 = document.getElementById("display")
  document.getElementById("clear").onclick = function() {myFunction2()};function myFunction2() {
     let clear1 = document.getElementById("clear").innerHTML;
     display1.value = clear1;
 
    }*/
/*
    
function clear1 () {

  display1.value = '0';
}



/*if(btnId == clear) {
  reset()
  UpdateDisplay()
}
else if(operator == divide){

}
else if(operator == percent) {
  value *=0,01
}
*/
/*
numberButtons.forEach(button =>
  button.addEventListener('click' {
    
  }
  )
  )

//document.getElementsByClassName(key)

// alla tal
// clear,+,-,x,=,/
// % (dela med 100), change operator 
// fix kod 
*/
