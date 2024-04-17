$(document).ready(function(){
    function cal(){
   let operationVal=$("#operation").val()
   if 
   (operationVal==$("option").eq(0).val())
   {result=parseInt($("#frist").val())+parseInt($("#second").val());}

   
   else if
   (operationVal==$("option").eq(1).val())
    {result=parseInt($("#frist").val())-parseInt($("#second").val());}
   
    else if 
    (operationVal==$("option").eq(2).val())
    { result=parseInt($("#frist").val())*parseInt($("#second").val());}
   
    else
    { result=parseInt($("#frist").val())/parseInt($("#second").val());}
   
    $("#result").val(result);
  }

   $("#frist").keyup(function(){cal()})
   $("#second").keyup(function(){cal()})
   $("#operation").change(function(){cal()})
   
})

$("#frist")
 // let sum =$("option").eq(0).val()
   // let subtract =$("option").eq(1).val()
   // let multiply =$("option").eq(2).val()
   // let divide =$("option").eq(3).val()
   // let frist=$("#frist").val()
   // let second=$("#second").val()
   // let result=$("#result").val()

   
  
  
