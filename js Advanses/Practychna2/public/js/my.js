'use strict'
$(document).ready(function(){

   $('#Calc').on('click', function(){
       let obj ={
           text: $('#Select').val()
       };
       
       $.ajax({
           url: 'http://localhost:8000/test',
           data: obj,
           method: 'POST',
           success: function(data){
               alert(data);
           
           }
           
       })
       
   }) 
    
    
    
    
})