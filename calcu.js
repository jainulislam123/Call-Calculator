let display = document.querySelector(".display");
let inputBtn = document.querySelectorAll(".btnIn");
let Equal = document.querySelector(".btnEqual");
let AC = document.querySelector(".btnAC");
let btnDel = document.querySelector(".btnDel")
let calcuatorBox = document.querySelector(".calcuatorBox")
let btnCall = document.querySelector(".btnCall");
let a = document.querySelector("a");

 let pre = +91;
btnCall.addEventListener("click",()=>{
  let ph = display.value;
  a.href = `tel:${pre} ${ph}`
  console.log(a.href = `tel:${pre} ${ph}`);
})

inputBtn.forEach((inputDigit)=>{
inputDigit.addEventListener("click",(e)=>{

    let inputs = e.target.value;
    display.innerHTML= display.value =  display.value +inputs;
    // console.log(inputs);

    if(inputs=="7"){
        calcuatorBox.style.backgroundColor="rgba(0, 255, 123, 0.451)";
        calcuatorBox.style.boxshadow="inset 2px 1px 1px 1px #524b4b";
     }else{
         calcuatorBox.style.backgroundColor="rgba(0, 0, 0, 0.451)"; 

     }

 
});

})
Equal.addEventListener("click",()=>{
    if(display.value == false){
    display.innerHTML= display.value = "ItsMadeByJainul ";
  
  }
    let text = eval(display.value) ;
    // console.log(text);
    display.innerHTML= display.value = text;

});

btnDel.addEventListener("click",()=>{
    let text = display.value;
    display.value = text.substring(0,text.length-1)
})

AC.addEventListener("click",()=>{
    display.innerHTML= display.value = display.innerHTML;

});

///* Eval ,substring ---------detalis

// // let display = document.querySelector(".display");
// let Equal = document.querySelector(".btnEqual");
// let AC = document.querySelector(".btnAC");
// let btnDel = document.querySelector(".btnDel")
//  let empty ="";
// Equal.addEventListener("click",()=>{
//     let text = eval(display.value) ;
//     console.log(text);
//     display.innerHTML= display.value = text;
//   if(empty==""){
//     display.innerHTML= display.value = "ItsMade by Jainul ";

//   }
// });
// AC.addEventListener("click",()=>{
//     display.innerHTML= display.value = "00";

// });
// btnDel.addEventListener("click",()=>{
//     let text = display.value;
//     display.value = text.substring(0,text.length-1)
// })

/*// self Parcties-------------------------------------------------------------------------

let display = document.querySelector(".display");
let btns = document.querySelectorAll(".btnIn");
let Del = document.querySelector(".btnDel");
let AC = document.querySelector(".btnAC");
let btnEqual = document.querySelector(".btnEqual");

btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
  let  btnDigit = e.target.value;
  display.innerHTML= display.value = display.value+btnDigit;     ///its Understand
//   display.innerHTML= display.value += btnDigit;
  console.log(btnDigit);
})
});
btnEqual.addEventListener("click",()=>{
 let displaydigitCalu = eval(display.value); //  its understand
 display.innerHTML= display.value = displaydigitCalu; // Understand
 console.log(displaydigitCalu);

})

Del.addEventListener("click",()=>{
    let displayInputs = display.value;
    display.value = displayInputs.substring(0,displayInputs.length-1)
    console.log("df");
})  
AC.addEventListener("click",()=>{
 display.innerHTML= display.value= "";
 
})

//by function--------------
// function del(){
//     let displayInputs = display.value;
//     display.value = displayInputs.substring(0,displayInputs.length-1)
// }
*/