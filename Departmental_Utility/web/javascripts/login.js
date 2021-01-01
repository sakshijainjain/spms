
var userid,password;
function connectStudent() {
    userid=$("#inputEmail").val();
    password=$("#inputPassword").val();
    if(!validate())
        return;
    var data={
        userid:userid,
        password:password
    };
    $.post("LoginControllerServlet",data,processResponse);
//    qxhr.error(handleError);
}

function processResponse(responseText) {
    responseText=responseText.trim();
    alert(responseText);
    if(responseText==="error") {
        swal("Access Denied!","please Enter valid userid/password","error");
    }
    else if(responseText.indexOf("jsessionid")!==-1) {
        alert("in else if");
            window.location=responseText;
            
        
    }
    else {
        swal("Access Denied!","Some Problem Occured, Please Try Again Later","error");
    }
}
function validate() {
    if(userid===""||password==="")
        return false;
    return true;
}
function disableback() {
    window.onload=window.history.forward();
}

