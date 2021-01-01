/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let snap1,snap2,snap3,snap4,pname,tech,software,desc;
function preViewProject() {
$.post("ViewProjectControllerServlet",function(responseText){
              responseText=responseText.trim();
           
              i1=responseText.indexOf("-");
             
              snap1=responseText.substring(0,i1);
              
              rest1=responseText.substring(i1+1,responseText.length);
              i2=rest1.indexOf("-");
              snap2=rest1.substring(0,i2);
              rest2=rest1.substring(i2+1,rest1.length);
              i3=rest2.indexOf("-");
              snap3=rest2.substring(0,i3);
              rest3=rest2.substring(i3+1,rest2.length);
              i4=rest3.indexOf("-");
              snap4=rest3.substring(0,i4);
              rest4=rest3.substring(i4+1,rest3.length);
              
              i5=rest4.indexOf("-");
              p_name=rest4.substring(0,i5);
              rest5=rest4.substring(i5+1,rest4.length);
              
              i6=rest5.indexOf("-");
              tech=rest5.substring(0,i6);
              rest6=rest5.substring(i6+1,rest5.length);
              
              i7=rest6.indexOf("-");
              software=rest6.substring(0,i7);
              rest7=rest6.substring(i7+1,rest6.length);
              
              i8=rest7.indexOf("-");
              desc=rest7.substring(0,i8);
              rest8=rest7.substring(i8+1,rest7.length);
            
              
          }).done(viewProject);
 }
function viewProject(){
          
          alert("View Project : student-main.js");
          
          
          document.getElementById('img-overlay').innerHTML='<img src="data:image/png;base64,'+snap1+'" class="overlay-image" >\n\
          <img src="data:image/png;base64,'+snap2+'" class="overlay-image" >\n\
          <img src="data:image/png;base64,'+snap3+'"  class="overlay-image">\n\
          <img src="data:image/png;base64,'+snap4+'"  class="overlay-image" >';

          $("#project-title").html('<b>'+p_name+'</b>');

          $("#project-tech").html(tech);
          
          $("#project-soft").html(software);
          
          $("#project-desc").html(desc);
          
          $("#overlay").css("display","block");
        }

        function offoverlay(){
          $("#overlay").css("display","none");
        }