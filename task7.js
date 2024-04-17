let a=document.querySelectorAll('option')[0]
let b=document.querySelectorAll('option')[1]
let c=document.querySelectorAll('option')[2]
let  d=document.querySelectorAll('option')[3]

let frist=document.getElementById('frist');
let second=document.getElementById('second');
let operation=document.getElementById('operation');
let result=document.getElementById('result');
let btn=document.getElementById('btn')
console.log(frist.value)

console.log(a)
console.log(a.value)

console.log(operation)
console.log(operation.value)
 function y(){
    let  operationVal=operation.value
if (operationVal==a.value)
 {result.value= parseInt (frist.value) + parseInt (second.value);}
 
 else if (operationVal==b.value)
 {result.value=  parseInt (frist.value) - parseInt (second.value);}
 
 else if (operationVal==c.value)
 {result.value=  parseInt (frist.value) * parseInt (second.value);}

else
 {result.value= parseInt (frist.value) / parseInt (second.value);}
}

second.onkeyup=function(){ y()}
frist.onkeyup=function(){ y()}
operation.onkeyup=function(){ y()}

// second.onkeyup = function(){
//     let  operationVal=operation.value
// if (operationVal==a.value)
//  {result.value= parseInt (frist.value) + parseInt (second.value);}
 
//  else if (operationVal==b.value)
//  {result.value=  parseInt (frist.value) - parseInt (second.value);}
 
//  else if (operationVal==c.value)
//  {result.value=  parseInt (frist.value) * parseInt (second.value);}

// else
//  {result.value= parseInt (frist.value) / parseInt (second.value);}

// }
// frist.onkeyup = function(){
//     let  operationVal=operation.value
// if (operationVal==a.value)
//  {result.value= parseInt (frist.value) + parseInt (second.value);}
 
//  else if (operationVal==b.value)
//  {result.value=  parseInt (frist.value) - parseInt (second.value);}
 
//  else if (operationVal==c.value)
//  {result.value=  parseInt (frist.value) * parseInt (second.value);}

// else
//  {result.value= parseInt (frist.value) / parseInt (second.value);}

// }
// operation.onkeyup = function(){
//     let  operationVal=operation.value
// if (operationVal==a.value)
//  {result.value= parseInt (frist.value) + parseInt (second.value);}
 
//  else if (operationVal==b.value)
//  {result.value=  parseInt (frist.value) - parseInt (second.value);}
 
//  else if (operationVal==c.value)
//  {result.value=  parseInt (frist.value) * parseInt (second.value);}

// else
//  {result.value= parseInt (frist.value) / parseInt (second.value);}

// }