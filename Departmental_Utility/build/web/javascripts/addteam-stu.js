/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function dynamicteam(a){
     for(j=1;j<=4;j++) 
    $("#t"+j).html('');
  
    var max = parseInt($("#noteam").attr('max'));
    var min = parseInt($("#noteam").attr('min'));
    if ($("#noteam").val() > max)
    {
        $("#noteam").val(max);
    }
    else if ($("#noteam").val() < min)
    {
        $("#noteam").val(min);
    } 
    
    var num = $("#noteam").val();

    for(i=1;i<=num;i++)
    {    
           if(a!=1){
            
        $("#t"+i).html('<span> <b> Student:<b> </span>'+(i)+'<a href="#" class="btn" onclick="removeTeam('+i+')" ><i class="fa fa-minus-square" aria-hidden="true"></i></a><hr>'+'<input type="text" class="form-control" id="upden'+i+'" placeholder="Enrollment no." disabled><br><br>\n\
        <input type="text" class="form-control" id="updsid'+i+'" placeholder="StudentID" disabled > <br>\n\
        <input type="text" class="form-control" id="updname'+i+'" placeholder="Name" name="name" disabled ><br>\n\
        <input type="email" class="form-control" id="updemail'+i+'" placeholder="Email" name="email" disabled><br>\n\
       <input type="number" class="form-control" id="updcontact'+i+'"  placeholder="Contact no." name="number" disabled ><br></hr>');
            data={data:"getEnroll"};
       
         $.post("ViewTeamControllerServlet",data,function(responseText){
        responseText=responseText.trim();
            
            for(i=1;i<=num;i++){ 
            index=responseText.indexOf(",");
            en=responseText.substring(0,index);
            $("#upden"+i).val(en);
            responseText=responseText.substring(index+1,responseText.length);  
            
        }
          
    }).done(getTeamDetails);
        }
        else {
        $("#t"+i).html('<span> <b> Student:<b> </span>'+(i)+'<hr>'+'<input type="text" class="form-control" id="regen'+i+'" placeholder="Enrollment no." onkeypress="getDetails(event,'+i+')" onkeydown="clearText('+i+')"><br><span style="color:red;font-size:10px"> Press Enter after filling</span><br>\n\
          <input type="text" class="form-control" id="regsid'+i+'" placeholder="StudentID" disabled > <br>\n\
         <input type="text" class="form-control" id="regname'+i+'" placeholder="Name" name="name" disabled><br>\n\
        <input type="email" class="form-control" id="regemail'+i+'" placeholder="Email" name="email" disabled><br>\n\
       <input type="number" class="form-control" id="regcontact'+i+'"  placeholder="Contact no." name="number" disabled><br></hr>\n\
        <div style="color:red; font-size:12px" class="col-md-12" id="temp'+i+'"></div>');
        } 
       
    }

}
function clearText(i){
   
        $("#temp"+i).text("");
}
function pullteam(){
    
    
    
    var num = $("#noteam").val();
    
    for(j=1;j<=4;j++) 
    $("#t"+j).html('');
   
    

    for(i=1;i<=num;i++)
    {      
        
        
        $("#t"+i).html('<span> <b> Student:<b> </span>'+(i)+'<hr>'+'<input type="text" class="form-control" id="viewen'+i+'" placeholder="Enrollment no." disabled><br>\n\
        <input type="text" class="form-control" id="viewsid'+i+'" placeholder="StudentID" disabled > <br>\n\
        <input type="text" class="form-control" id="viewname'+i+'"  placeholder="Name" name="name" disabled><br>\n\
        <input type="email" class="form-control"  id="viewemail'+i+'" placeholder="Email" name="email" disabled><br>\n\
       <input type="number" class="form-control"  id="viewcontact'+i+'" placeholder="Contact no." name="number" disabled><br></hr>');
         
    }
    data={data:"getEnroll"};
       
    $.post("ViewTeamControllerServlet",data,function(responseText){
        responseText=responseText.trim();
            
            for(i=1;i<=num;i++){ 
            index=responseText.indexOf(",");
            en=responseText.substring(0,index);
            $("#viewen"+i).val(en);
            responseText=responseText.substring(index+1,responseText.length);  
            
        }
          
    }).done(loadDetails);
   
   
 }
 var num = $("#noteam").val();

function loadDetails(i){
     for(let k=1;k<=num;k++) {
    enroll=$("#viewen"+k).val();
    data={data:"load",enroll:enroll};
    
    $.post("ViewTeamControllerServlet",data, function(responseText2){
        responseText2=responseText2.trim();
     
        j=responseText2.indexOf(",");
        $("#viewsid"+k).val(responseText2.substring(0,j));
        uname=responseText2.substring(j+1,responseText2.length);
        r1=uname.indexOf(",");
        
        $("#viewname"+k).val(uname.substring(0,r1));
       
        r2=uname.substring(r1+1,uname.length);
        r3=r2.indexOf(",");
        $("#viewemail"+k).val(r2.substring(0,r3));
        r4=r2.substring(r3+1,r2.length);
        
        $("#viewcontact"+k).val(r4.substring(0,r4.length));

    });
 } 
}
function removeTeam(i){
    var en = document.getElementById('upden'+i).value;
    if(confirm("Do you Really Want to Remove "+en+" ?")){
    alert("Remove Team :addteam-stu.js");
    alert("i "+i);
    data={enroll:en,i:i};
    $.post("RemoveMemberControllerServlet",data,function(responseText){
        responseText=responseText.trim();
        if(responseText=="success"){
            swal("success!","Team Member Removed Successfully!","success");
            setTimeout(window.location="StudentsControllerServlet",3000);
        }
        else 
            swal("error!","Some error occured! Please Try again!","error");
            
    });
      
    
}
}
var fname;
var enroll2;
function loadList(){
    
    data={data:"fname"};
          $.post("RegisterTeamControllerServlet",data,function(responseText){
              
              $("#fname").append(responseText);
          });
    data={data:'teamid'};
        $.post("RegisterTeamControllerServlet",data,function(responseText){
            responseText=responseText.trim();
            alert(responseText);
            $("#teamID").val(responseText);
        });
        
}
function checkRegister(){
    fname=$("#fname").children("option:selected").val();
    enroll2="";
    if(fname==null || fname=="") {
        $("#temp2").append("Please select guide faculty");
        return;
    }
    var num = $("#noteam").val();
    
 
    for(i=1;i<=num;i++){
        enroll2=enroll2+$("#regen"+i).val()+",";
    }
 
    for(j=i;j<=4;j++)
        enroll2=enroll2+"N/A,";
    index=enroll2.lastIndexOf(",");
    
    enroll2=enroll2.substring(0,index);
    
    id=$("#teamID").val();
       data={ data:'register', fname:fname,enroll:enroll2,team:id};
     $.post("RegisterTeamControllerServlet",data,function(responseText){
         responseText=responseText.trim();
         if(responseText=="success") {
             swal("success","Team registered successfully","success");
             setTimeout(function() { window.location="StudentsControllerServlet"; },2000);
         }
         else
             swal("error","Some error occured","error");
     });       
            
    }


function checkUpdate(){
    alert("check Update : addteam-stu.js");
    alert(" Success");
}
function getDetails(e,i){
    
    if(e.keyCode===13) {
       
        data={enroll:$("#regen"+i).val()};
        if($("#regen"+i).val()=="" ||$("#regen"+i).val()==null){
            $("#temp"+i).append("Please fill out all the fields");
            return;
        }
            
        enroll=$("#regen"+i).val();
        alert(enroll);
        $.post("RegisterTeamControllerServlet",data,function(responseText){
        responseText=responseText.trim();
        
        if(responseText=='false'){
            
            $("#temp"+i).append("Enrollment No. "+enroll+" already in a team!");
            return;
        }
        var j=responseText.indexOf(",");
//        $("#stuID").empty();
//        var j=responseText.split(/[s.]+/);
//        alert(j[0]+" "+j[1]);
//        $("#stuID").append(j[0]);
//        $("#name").append(j[1]);
//        $("#email").append(j[2]);
//        $("#contact").append(j[3]);
        if(responseText.substring(0,j)=="null"){
            
            $("#temp"+i).append("Enrollment no. "+enroll+" not registered!");
            return;
        }
        
        $("#regsid"+i).val(responseText.substring(0,j));
       
        var uname=responseText.substring(j+1,responseText.length);
        var r1=uname.indexOf(",");
        
        $("#regname"+i).val(uname.substring(0,r1));
        var r2=uname.substring(r1+1,uname.length);
        var r3=r2.indexOf(",");
        $("#regemail"+i).val(r2.substring(0,r3));
        var r4=r2.substring(r3+1,r2.length);
        
        $("#regcontact"+i).val(r4.substring(0,r4.length));
      
        });
    }
    
}
function editProfile(){

    alert("edit Profile : addteam-stu.js");

    $(".editable").removeAttr('disabled');
    $("#repassword-row").css("visibility","visible");
    $("#updbtn").css("visibility","visible");

}


function updateProfile(){

    alert("update Profile : addteam-stu.js");
    var e = $(".editable");
    for(i=0;i<e.length;i++)
    {
        if(e[i].value=="")
        {  alert("Kindly Fill All Fields"); return;  }
    }
    $(".editable").attr('disabled',"disabled");
    $("#repassword-row").css("visibility","hidden"); 
    $("#updbtn").css("visibility","hidden");    
    name=$("#name").val();
    sem=$("#sem").val();
   
    contact=$("#contact").val();
    address=$("#address").val();
    pass=$("#password").val();
    repass=$("#repassword").val();
    alert(pass+","+repass);
    if(pass!=repass){
        swal("Password and Re-entered password does not match!");
        return;
    }
    data={name:name,sem:sem,contact:contact,address:address,pass:pass};
    $.post("UpdateProfileControllerServlet",data,function(responseText){
        responseText=responseText.trim();
        if(responseText=="success") {
            swal("success!","Profile Updated Successfully!","success");
            setTimeout(window.location="StudentsControllerServlet",2000);
        }
        else {
            swal("Error!","Some Error occured! Please Try again","error");
        }
            
    });

}
function getTeamDetails() {
     for(let k=1;k<=num;k++) {
    enroll=$("#upden"+k).val();
    data={data:"load",enroll:enroll};
    
    $.post("ViewTeamControllerServlet",data, function(responseText2){
        responseText2=responseText2.trim();
     
        j=responseText2.indexOf(",");
        $("#updsid"+k).val(responseText2.substring(0,j));
        uname=responseText2.substring(j+1,responseText2.length);
        r1=uname.indexOf(",");
        
        $("#updname"+k).val(uname.substring(0,r1));
       
        r2=uname.substring(r1+1,uname.length);
        r3=r2.indexOf(",");
        $("#updemail"+k).val(r2.substring(0,r3));
        r4=r2.substring(r3+1,r2.length);
        
        $("#updcontact"+k).val(r4.substring(0,r4.length));

    });
}
}
