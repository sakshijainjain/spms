/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getSignUpForm(id){
    // alert("Id"+id);
    if(id=='btn-stu')
    { 
        document.getElementById("signupform").innerHTML="  <br> <div class='form-group'>\n\
           <div style='text-align: center;'><b> <h3> REGISTER HERE</h3> </b></div>\n\
           <div class='row'><input type='text' class='form-control' placeholder='Name' id='name'  autofocus /></div> <br>\n\
           <div class='row'><input type='text' class='form-control' placeholder='Enroll. No.' id='enroll'/></div> <br>\n\
           <div class='row'><input type='number' class='form-control' placeholder='Semester' id='sem'></div> <br>\n\
           <div class='row'> <input type='number' class='form-control' placeholder='Contact No.' id='contact'> </div> <br>\n\
           <div class='row'><input type='email' class='form-control' placeholder='Email' id='email'></div> <br>\n\
           <div class='row'><input type='text' class='form-control'  placeholder='Address' id='address'></div> <br>\n\
           <div class='row'> <input type='password' class='form-control'  placeholder='Password' id='pass'> </div> <br>\n\
           <div class='row'> <input type='password' class='form-control'  placeholder='Confirm Password' id='cpass'> </div> <br>\n\
           <div class='row' style='text-align: center;'> <button type='submit'  class='btn btn-primary btn-lg btn-block' onclick='addStudent()'><b>Register !</b></button> </div> <br>  \n\
           <div class='row'> \n\
                <p class='message '><b> Already registered? </b><a href='login.html'> Log In </a></p>  \n\
            </div>  \n\
              <div class='row'> \n\
            <p class='message '><b>  Back to </b> <a href='home.html'> HomePage  </a></p> \n\
           </div>  \n\
            </form>\n\
    </div> ";



}
   else if(id=='btn-fac')
   {  
     
    document.getElementById("signupform").innerHTML="  <br> <div class='form-group'>\n\
           <div style='text-align: center;'><b> <h3> REGISTER HERE</h3> </b></div>\n\
           <div class='row'><input type='text'id='fname' class='form-control' placeholder='Name'  autofocus/></div> <br>\n\
           <div class='row'><input type='email' id='femail' class='form-control' placeholder='Email'></div> <br>\n\
           <div class='row'> <input type='number' id='fcontact' class='form-control' placeholder='Contact No.'> </div> <br>\n\
           <div class='row'><input type='text' id='faddress' class='form-control'  placeholder='Address'></div> <br>\n\
           <div class='row'> <input type='password' id='fpass' class='form-control'  placeholder='Password'> </div> <br>\n\
           <div class='row'> <input type='password' id='cfpass' class='form-control'  placeholder='Confirm Password'> </div> <br>\n\
           <div class='row' style='text-align: center;'> <button type='submit'  class='btn btn-primary btn-lg btn-block' onclick='addTeacher()'><b>Register !</b></button> </div> <br> \n\
            <div class='row'> \n\
                <p class='message '><b> Already registered? </b><a href='login.html'> Log In </a></p>  \n\
            </div>  \n\
              <div class='row'> \n\
            <p class='message '><b>  Back to </b> <a href='home.html'> HomePage</a></p> \n\
           </div>  \n\
            </form>\n\
    </div> ";
    }
   }
 
   var name,pass,cpass,contact,email,address,sem,section,enroll;
function addStudent(){
    name=$("#name").val();
    enroll=$("#enroll").val();
    email=$("#email").val();
    contact=$("#contact").val();
    address=$("#address").val();
    sem=$("#sem").val();
    section=$("#section").val();
    pass=$("#pass").val();
    cpass=$("#cpass").val();
   
    if(validateStudent()) {
        if(pass!==cpass) {
            swal("Error!","password does not match!","error");
            return;
        }
        
        else {
            if(checkEmail(email)===false)
                return;
            var data= { name:name,
                pass:pass,
                enroll:enroll,
                email:email,
                contact:contact,
                address:address,
                sem:sem,
                section:section,
                };
            let qxhr=$.post("StudentRegistrationControllerServlet",data,processresponse);
            qxhr.error(handleError);
    }
    }
}
function validateStudent() {
    if(name===""||pass===""||cpass===""||sem===""||address===""||section===""||enroll===""||email===""||contact==="") {
        swal("Error!","All Fields Are Mandatory!","error");
        return false;
    } 
    else {
        return true;
    }
}
function checkEmail(email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }
            else
                return true;
}
function processresponse(responseText) {
    alert();
    responseText=responseText.trim();
    if(responseText==="success") {
        swal("success!","Registration Successful!","success");
        setTimeout(window.location="login.html?signed_up_successfully",2000);
    }
    else if(responseText==="uap") {
        swal("Error!","Sorry! the student enroll number is already present!","error");
    }
    else {
        swal("Error!","Registrataion Failed! Try Again","error");
    }
}
var fname,fpass,cfpass,fcontact,femail,faddress;
function addTeacher() {
    fname=$("#fname").val();    
    femail=$("#femail").val();
    fcontact=$("#fcontact").val();
    faddress=$("#faddress").val();
    fpass=$("#fpass").val();
    cfpass=$("#cfpass").val();
    if(validateTeacher()) {
        if(fpass!==cfpass) {
            swal("Error!","password does not match!","error");
            return;
        }
        
        else {
            if(checkEmail(femail)===false)
                return;
            var data= { name:fname,
                pass:fpass,
                email:femail,
                contact:fcontact,
                address:faddress
                
                };
            let qxhr=$.post("TeacherRegistrationControllerServlet",data,processresponse2);
            
    }
    }
}
function validateTeacher(){
    if(fname===""||fpass===""||cfpass===""||faddress===""||femail===""||fcontact==="") {
        swal("Error!","All Fields Are Mandatory!","error");
        return false;
    } 
    else {
        return true;
    }
}
function processresponse2(responseText) {
    
    responseText=responseText.trim();
    if(responseText==="success") {
        swal("success!","Registration Successful!","success");
        setTimeout(redirectUser,3000);
    }
    else if(responseText==="uap") {
        swal("Error!","Sorry! the student enroll number is already present!","error");
    }
    else {
        swal("Error!","Registrataion Failed! Try Again","error");
    }
}