/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function showDropdown(id)
{   
     if(id=='drop1') {
       var content=$('#content1');

       if (content.css('display')=='block') {
            content.css('display','none');
        
      } 
      else {
            content.css('display','block');
          }
      }


     else if(id=='drop2') {
        var content=$('#content2');
 
        if (content.css('display')=='block') {
             content.css('display','none');
         
       } 
       else {
             content.css('display','block');
           }
       }


}