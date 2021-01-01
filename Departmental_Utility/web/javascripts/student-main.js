/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function uploadFile(){

   
   
   document.getElementById('content').innerHTML=' <br> <br> <div class="row"><div class="col"style="text-center">\n\
   <h3> Upload Project Files <hr></h3></div></div><br><br> '+                          
 ' <form method="POST" enctype="multipart/form-data"id="fileUploadForm"> '+                          
  ' <div class="row"><div class="col-md-6" > '+                              
       '<div class="row"><div class="col-md-12"><h5><u> Upload Project File :</u></h5></div> </div> <br>'+
       '<div class="row"><div class="col-md-1"></div>\n\
         <div class="col-md-11" ><input type="file" name="zip" id="pro-doc"></div></div></div>\n\
   <div class="col-md-6">\n\
     <div class="row"><div class="col-md-12"><h5><u> Upload Project Snapshots :</u></h5></div> </div><br>'+ 
     '<div class="row"><div class="col-md-3"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Snap1 :</div>\n\
       <div class="col-md-9"><input type="file" name="snap1" id="snap1"></div>\n\
     </div><br><div class="row">\n\
       <div class="col-md-3"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Snap2 :</div>\n\
       <div class="col-md-9"><input type="file" name="snap2" id="snap2"></div>\n\
     </div><br><div class="row">\n\
       <div class="col-md-3"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Snap3 :</div>\n\
       <div class="col-md-9"><input type="file" name="snap3" id="snap3"></div>\n\
     </div><br><div class="row">\n\
       <div class="col-md-3"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Snap4 :</div>\n\
       <div class="col-md-9"><input type="file" name="snap4" id="snap4"></div>\n\
     </div></div></div></form><br><br><div class="row"><div class="col"></div>\n\
 <div class="col"><div class="col"  id="settemp" style="color:red; font-size:16px;text-align=center;font-weight:bold; font-family:Arial black"></div><br><br>\n\
  <button class="btn btn-primary btn-lg btn-block" onclick="checkFileUpload()">Save & Continue!</button>'+                            
  '</div><div class="col"></div></div><br><br>';
                //  alert($("#content").html());

}

function registerTeam(){
 
  alert("register Team : student-main.js");
   loadList();
  document.getElementById('content').innerHTML='  <br> <br> <br>\n\
  <div class="row">\n\
    <div class="col-md-5"></div>\n\
    <div class="col-md-2"style="text-align:left">\n\
     <h3> Add Team</h3> </div>\n\
    </div></div> <hr> </hr><br> <div class="row">\n\
   <div class="col-md-1"></div>\n\
   <div class="col-md-4">\n\
    <input type="text" class="form-control" placeholder="TeamID" id="teamID" disabled></div>\n\
    <!-- <div class="col-md-1"></div> -->\n\
    <div class="col-md-2"> Total Member:</div>\n\
    <div class="col-md-4">\n\
      <input type="number" class="form-control" id="noteam"  min="0" max="4" placeholder="Number Of Members (1-4)" oninput="dynamicteam(1)" >\n\
    </div> </div> <br><div> <div style="color:black ;class="form-control" font-weight:bold" class="col-md-12" >Guide Name:</div><div min="0" max="4"><select id="fname"><option style="color:grey" value="">Select Faulty Guide</option></select></div></div><br>\n\
 <div class="row"><div class="col-md-6">'+                             
    '<div class="row"><div class="col-md-12" id="t1"></div> \n\
     </div> <br> <div class="row"> \n\
       <div class="col-md-12" id="t3"></div> \n\
     </div> </div> <div class="col-md-6"> \n\
    <div class="row"><div class="col-md-12" id="t2"></div> \n\
    </div> <br> <div class="row"> \n\
      <div class="col-md-12" id="t4"></div> </div> \n\
   </div></div> <br> <br><div style="color:red; font-size:12px font-weight:bold" id="temp2"></div><br><br> \n\
 <div class="row"> <div class="col-md-4"></div>\n\
   <div class="col-md-4"> <button class="btn btn-primary btn-lg btn-block" onclick="checkRegister()">Get Registered</button> \n\
   </div><div class="col-md-4"></div> </div> <br> <br> ';
}


function viewTeam(){

 
   data={data:"fetchnum"};
   $.post("ViewTeamControllerServlet",data,function(responseText){
       responseText=responseText.trim();
       index=responseText.indexOf(",");
       num=responseText.substring(0,index);
       teamid=responseText.substring(index+1,responseText.length);
        $("#noteam").val(num);
        $("#teamID").val(teamid);
       pullteam();
    });
  document.getElementById('content').innerHTML='  <br> \n\ '+                            
     ' <div class="row"> \n\
    <div class="col-md-9"></div> \n\
    <div class="col-md-3"> \n\
     <a href="#" class="btn btn-info" onclick="updateteam()"><i class="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;<b>Update Team!</b> </a> \n\
    </div></div> <br> \n\
  <div class="row"><div class="col-md-5"></div> \n\
    <div class="col-md-2" style="text-align: left;"> \n\
     <h3> Your Team </h3> </div> \n\
    </div> <hr> </hr> <br> <div class="row"> \n\
 <div class="col-md-1"></div>  <div class="col-md-4"> \n\
  <input type="text" class="form-control" placeholder="TeamID" id="teamID" disabled></div> \n\
  <!-- <div class="col-md-1"></div> --> \n\
  <div class="col-md-2"> Total Member:</div> <div class="col-md-4"> \n\
    <input type="number" class="form-control" id="noteam"  min="0" max="4" disabled  > \n\
  </div> </div> <br> <br> <div class="row"><div class="col-md-6"> \n\ ' +                            
   '<div class="row"><div class="col-md-12" id="t1"></div> \n\
   </div> <br> <div class="row"> <div class="col-md-12" id="t3"></div> \n\
   </div> </div> <div class="col-md-6"> \n\
  <div class="row"><div class="col-md-12" id="t2"></div> \n\
  </div> <br> <div class="row"> \n\
    <div class="col-md-12" id="t4"></div> </div> \n\
 </div></div> <br> <br> <br> ';
   
}
 
function updateteam(){
   
 
  document.getElementById('content').innerHTML='  <br> <br> <br>\n\
  <div class="row">\n\
    <div class="col-md-5"></div>\n\
    <div class="col-md-3"style="text-align:left">\n\
     <h3> Review Your Team </h3> </div>\n\
    </div></div> <hr> </hr><br> <div class="row">\n\
   <div class="col-md-1"></div>\n\
   <div class="col-md-4">\n\
    <input type="text" class="form-control" placeholder="TeamID" id="teamID" disabled></div>\n\
    <!-- <div class="col-md-1"></div> -->\n\
    <div class="col-md-2"> Total Member:</div>\n\
    <div class="col-md-4">\n\
      <input type="number" class="form-control" id="noteam"  min="0" max="4" placeholder="Number Of Members (1-4)" disabled>\n\
    </div> </div> <br> <br>\n\
 <div class="row"><div class="col-md-6">'+                             
    '<div class="row"><div class="col-md-12" id="t1"></div> \n\
     </div> <br> <div class="row"> \n\
       <div class="col-md-12" id="t3"></div> \n\
     </div> </div> <div class="col-md-6"> \n\
    <div class="row"><div class="col-md-12" id="t2"></div> \n\
    </div> <br> <div class="row"> \n\
      <div class="col-md-12" id="t4"></div> </div> \n\
   </div></div> <br> <br> \n\
 <div class="row"> <div class="col-md-4"></div> \n\
   <div class="col-md-4"> <button class="btn btn-primary btn-lg btn-block" onclick="checkUpdate()">Update Team</button> \n\
   </div><div class="col-md-4"></div> </div> <br> <br> ';
    
     
   data={data:"fetchnum"};
   $.post("ViewTeamControllerServlet",data,function(responseText3){
       responseText3=responseText3.trim();
       alert(responseText3);
       index2=responseText3.indexOf(",");
       num2=responseText3.substring(0,index2);
      
       teamid2=responseText3.substring(index2+1,responseText3.length);
     
       $("#noteam").val(num2);
        $("#teamID").val(teamid2);
        
    }).done(dynamicteam);
   
}



function uploadAbstract(){
       
  alert("Upload Abstract : student-main.js");
  document.getElementById('content').innerHTML= ' <br> \n\
  <div class="row"><div class="col-md-4"></div> \n\
    <div class="col-md-3" style="text-align: center;"> '+
     '<h3> &nbsp;&nbsp; Project Abstract </h3> </div> \n\
    </div> <hr> </hr> <br> <div class="row"> \n\
             <div class="col-md-2"></div>\n\
             <div class="col-md-8"> \n\
     <input type="text" class="form-control" id="pname" placeholder="Name of the Project" name="projectname" style="font-weight: bold;" ><br> \n\
      <input type="text" class="form-control" id="tech" placeholder="Technologies Used" name="technologies" ><br> \n\
      <textarea class="form-control" rows="2" id="software" placeholder="Required Software" ></textarea><br> \n\
     <textarea class="form-control" rows="10"  id="desc" placeholder="Description" ></textarea><br> \n\
       </div><br><br> \n\
     <div class="col-md-2"></div> </div>\n\
     <div class="row"> <div class="col-md-4"></div> <div class="col-md-3" style="text-align: center;"> '+ 
      '<button class="btn btn-primary btn-lg btn-block" onclick="checkAbstract()">Submit</button></div></div> <br><br>';      


}
function logout(){
    window.location='login.html?Successfully_logout';
    
}
function viewHome(){
  alert("View Home : student-main.js");

  document.getElementById('content').innerHTML=' <br> <br> \n\
  <div class="row"> \n\
 <div class="col-md-11" style="text-align: center;"><h3>Your Status </h3> <hr></div></div> <br> <br> \n\
<div class="progress" style="height: 30px;"> \n\
<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" id="tastk1" style="width: 25%">Register Team</div>\n\
<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" id="task2" style="width: 25%">Upload Project Abstract</div>\n\
<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" id="task3" style="width: 25%"> Upload Project File</div>\n\
<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" id="task4" style="width: 25%">Evaluation</div>\n\
</div> <br> <br> <br>\n\
 <div class="row">\n\
  <div class="col-md-11" style="text-align: center;">\n\
  <h3> Status : All </h3> <hr></div></div> <br>\n\
  <div class="row"><div class="col-md-2"></div>\n\
    <div class="col-md-2"><b> Total Teams : </b></div>\n\
    <div class="col-md-2"><input type="text" class="form-control" id="totalteam" disabled value="To be fetched"></div>\n\
  </div> <br> <br>'+                 
    '<div class="row"><div class="col-md-1"></div>\n\
      <div class="col-md-3">Uploaded Project Abstract :</div>\n\
      <div class="col-md-6"> <div class="progress" style="height: 20px;">\n\
          <div class="progress-bar  progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: 75%" id="totalabstract" >75%</div>\n\
        </div></div></div><br>\n\
        <div class="row"><div class="col-md-1"></div> \n\
      <div class="col-md-3">Uploaded Project File :</div> \n\
      <div class="col-md-6"><div class="progress" style="height: 20px;">\n\
          <div class="progress-bar  progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: 75%" id="totalfile" >75%</div>\n\
        </div></div></div> <br>\n\
    <div class="row"><div class="col-md-1"></div>\n\
      <div class="col-md-3">Evaluated :</div>\n\
      <div class="col-md-6"> <div class="progress" style="height: 20px;">\n\
          <div class="progress-bar  progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: 75%" id="totalevaluation" >75%</div>\n\
        </div></div></div> <br>';



}
function loadList(){
    
    data={data:"fname"};
          $.post("RegisterTeamControllerServlet",data,function(responseText){
              
              $("#fname").append(responseText);
          });
    var fname=$("#fname").children("option:selected").val();
}
let unique_id,name,enroll,teamid,sem,email,contact,address,pass;
function preViewProfile() {
    $.post("ViewProfileControllerServlet",function(responseText){
       
                responseText=responseText.trim();
                i1=responseText.indexOf("-");
                
              name=responseText.substring(0,i1);
             
              rest1=responseText.substring(i1+1,responseText.length);
              i2=rest1.indexOf("-");
              unique_id=rest1.substring(0,i2);
              rest2=rest1.substring(i2+1,rest1.length);
              i3=rest2.indexOf("-");
              enroll=rest2.substring(0,i3);
              rest3=rest2.substring(i3+1,rest2.length);
              i4=rest3.indexOf("-");
              teamid=rest3.substring(0,i4);
              rest4=rest3.substring(i4+1,rest3.length);
              
              i5=rest4.indexOf("-");
              sem=rest4.substring(0,i5);
              rest5=rest4.substring(i5+1,rest4.length);
              
              i6=rest5.indexOf("-");
              email=rest5.substring(0,i6);
              rest6=rest5.substring(i6+1,rest5.length);
              
              i7=rest6.indexOf("-");
              contact=rest6.substring(0,i7);
              rest7=rest6.substring(i7+1,rest6.length);
              
              i8=rest7.indexOf("-");
              address=rest7.substring(0,i8);
              rest8=rest7.substring(i8+1,rest7.length);
              
              i9=rest8.indexOf("-");
              pass=rest8.substring(0,i9);
           
    }).done(viewProfile);
}
function viewProfile()
        {   
            
          alert("View Profile : student-main.js");
          
          document.getElementById('content').innerHTML='<br>\n\
          <div class="row">\n\
            <div class="col-md-7" style="text-align: left;">\n\
             </div><div class="col-md-2"></div>\n\
           <div class="col-md-2"><button class="btn btn-warning" onclick="editProfile()" >\n\
            <i class="fa fa-user-circle-o" aria-hidden="true"></i> <b> Edit Profile </b></button></div></div>\n\
             <div class="row"><div class="col-md-11" style="text-align: center;"> <h4><u>Your Profile </u> </h4></div></div><br><br>'+
             '<div class="row"> <div class="col-md-6"> '+                               
               ' <div class="row"><div class="col-md-1"></div> \n\
                  <div class="col-md-10"><div class="trow row">\n\
                  <div class="col-md-4">Name :</div>\n\
                  <div class="col-md-8"> <input type="text" class="editable form-control" id="name" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div> <br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Unique Id :</div>\n\
                      <div class="col-md-8"><input type="text" class="non-editable form-control" id="sid" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div> <br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Enrollment No :</div>\n\
                      <div class="col-md-8"><input type="text" class="non-editable form-control" id="enroll" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div> <br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Team Id :</div>\n\
                      <div class="col-md-8"><input type="text" class="non-editable form-control" id="teamid" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div> <br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Semester :</div>\n\
                      <div class="col-md-8"><input type="number" class="editable form-control" min="1" max="8" id="sem" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div><br></div>\n\
               <div class="col-md-6"><div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Email :</div>\n\
                      <div class="col-md-8"> <input type="email" class="non-editable form-control" id="email" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div><br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Contact :</div>\n\
                      <div class="col-md-8"><input type="number" class="editable form-control"  id="contact" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div><br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Address</div>\n\
                      <div class="col-md-8"><textarea type="text" rows="3" class="editable form-control" id="address" disabled></textarea></div>\n\
                    </div></div><div class="col-md-1"></div></div><br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row">\n\
                      <div class="col-md-4">Password :</div>\n\
                      <div class="col-md-8"><input type="password" class="editable form-control" id="password" disabled></div>\n\
                    </div></div><div class="col-md-1"></div></div><br>\n\
                <div class="row"><div class="col-md-1"></div>\n\
                  <div class="col-md-10"><div class="trow row" style="visibility: hidden;" id="repassword-row">\n\
                      <div class="col-md-4">Re-Type Password :</div>\n\
                      <div class="col-md-8"><input type="password" class="editable form-control" id="repassword" ></div>\n\
                    </div></div><div class="col-md-1"></div></div><br></div></div><br><div class="row">\n\
                     <div class="col"></div><div class="col" id="updbtn" style="visibility: hidden;"> \n\
                      <button class="btn btn-primary btn-lg btn-block" onclick="updateProfile()">Save Changes</button></div><div class="col"></div>\n\
                        </div><br><br>';
          $("#name").val(name);
          $("#sid").val(unique_id);
          $("#enroll").val(enroll);
          $("#teamid").val(teamid);
          $("#sem").val(sem);
          $("#email").val(email);
          $("#contact").val(contact);
          $("#address").val(address);
          $("#password").val(pass);
  }
  function viewReport(){

    alert("View Report : student-main.js");

    document.getElementById('content').innerHTML='<br><br>\n\
    <div class="row">\n\
      <div class="col-md-12" style="text-align: center;"><h3>Your Report</h3><hr>  </div>\n\
    </div><br>\n\
     <div class="row">\n\
       <div class="col-md-4"><div id="chartContainer" style="height: 370px; width: 100%;"></div></div>\n\
       <div class="col-md-8">\n\
         <table class="table ">\n\
           <thead class="thead-dark">\n\
             <tr><th>Current Status :</th>\n\
            <th id="reportstatus">Evaluation Awaited !</th>\n\
             </tr>\n\
           </thead> \n\
           <tbody> \n\
             <tr ><th>Your Score :</th><td><input type="text" class="form-control" id="marks" disabled></td>\n\
              <tr><th>Remarks :</th><td><textarea class="form-control" id="remarks" cols="30" rows="6" disabled></textarea></td>\n\
          </tr>\n\
           </tbody>\n\
         </table>\n\
       </div></div> <br><br><br>';

       setGraph(4,6.8,8,9); // Fuction to set Graph pass setGraph(Min,Avg,Score,Max)

  }