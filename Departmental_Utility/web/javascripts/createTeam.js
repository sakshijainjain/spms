/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){

    $(":input").bind('keyup mouseup', function () {
        var n = $("#noteam").val();
        var divEle='';
      for(i=0;i<n;i++){
       
      divEle+=  '<span><b> Student: <b> </span>'+(i+1)+'<hr>'+'<div class="row"> <div class="col"><input type="text" class="form-control" placeholder="StudentID" id="st"></div>\n\
       <div class="col"><input type="text" class="form-control" placeholder="Enrollment no." id="st"></div>\n\
       </div><br>';
       }; 
       $('#dynamicteam').html(divEle);
      });

});


$(document).ready(function(){
  $( "#numteam" ).on('mouseup keyup',function() {
    var max = parseInt($(this).attr('max'));
     var min = parseInt($(this).attr('min'));
     if ($(this).val() > max)
     {
         $(this).val(max);
     }
     else if ($(this).val() < min)
     {
         $(this).val(min);
     }       
  });
  });

  

$(document).ready(function(){

  $(":input").bind('keyup mouseup', function () {
      var n = $("#numteam").val();
      var divEle='';
    for(i=0;i<n;i++){
     
    divEle+= '<span> <b> Student:<b> </span>'+(i+1)+'<hr>'+'<div class="row"> <div class="col"><input type="text" class="form-control" placeholder="StudentID" disabled></div>\n\
     <div class="col"><input type="text" class="form-control" placeholder="Enrollment no." disabled></div></div><br>\n\
     <div class="row"><input type="text" class="form-control" placeholder="Name" name="name" disabled></div><br>\n\
     <div class="row"><input type="email" class="form-control" placeholder="Email" name="email" disabled></div><br>\n\
     <div class="row"><input type="number" class="form-control" placeholder="Contact no." name="number" disabled></div><br>\n\
     <hr>';
     }; 
     $('#viewteam').html(divEle);
    });

});


function setTeam(){
  $( "#numteam" ).on('mouseup keyup',function() {
    var max = parseInt($(this).attr('max'));
     var min = parseInt($(this).attr('min'));
     if ($(this).val() > max)
     {
         $(this).val(max);
     }
     else if ($(this).val() < min)
     {
         $(this).val(min);
     }  
    
     var n = $("#noteam").val();
     var divEle='';
   for(i=0;i<n;i++){
    
   divEle+=  '<span><b> Student: <b> </span>'+(i+1)+'<hr>'+'<div class="row"> <div class="col"><input type="text" class="form-control" placeholder="StudentID" id="st"></div>\n\
    <div class="col"><input type="text" class="form-control" placeholder="Enrollment no." id="st"></div>\n\
    </div><br>';
    }; 
    $('#dynamicteam').html(divEle);
  });
     
    
}