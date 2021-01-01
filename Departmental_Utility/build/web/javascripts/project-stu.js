/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function checkFileUpload(){

    if($('#pro-doc').get(0).files.length === 0 || $('#snap1').get(0).files.length === 0 || $('#snap2').get(0).files.length === 0||
    $('#snap3').get(0).files.length === 0||$('#snap4').get(0).files.length === 0)
    { $("#settemp").append("Please Attach all the files");
        return;}
    
        uploadFileServer();

}


function SnapUpload(i){
        
    if ($('#snap'+i).get(0).files.length === 0) {
        
        alert("No File Choosen");
        }
        else{           
               $('#add'+(i+1)).css("visibility","visible");
            
        }
    }

function closeUpload(i){
                 //alert("Close");       
                 $('#add'+(i)).css("visibility","hidden");
                 $('#snap'+(i)).val(null);

        }

function checkUpload(){
          
    for( i =1;i<=4;i++)
    {     // alert("value "+$("#add"+i).css("visibility"));
        if($("#add"+i).css("visibility")=="visible")
        {    
            if ($('#snap'+i).get(0).files.length === 0) {alert("Kindly Fill All Fields");return;}
        }
    }
    alert("SAVED SUCCESSFULLY");
}


function checkAbstract(){

    alert("check Abstract: project-stu.js ");
    if($("#pname").val()==""||$("#tech").val()==""||$("#software").val()==""||$("#desc").val()=="") {
        swal("Error","Please Fill out all the fields!","error");
       return;
    }
    pname=$("#pname").val();
    tech=$("#tech").val();
    software=$("#software").val();
    desc=$("#desc").val();
    data={pname:pname,tech:tech,software:software,desc:desc};
    $.post("UploadAbstractControllerServlet",data,function(responseText){
        responseText=responseText.trim();
        if(responseText=="success"){
            swal("success","Abstract Uploaded Successfully!","success");
            setTimeout(window.location="StudentsControllerServlet",2000);
        }
        else
           swal("Error","Some error occured! Please try again later!","error");
    });
    
}

function changeStatus(){
    $('#statusinfo').html('');
}

function uploadFileServer() {
    var form=$('#fileUploadForm')[0];
    var data=new FormData(form);
    alert(data.toString());
    $.ajax({
        type:"POST",
        enctype:'multipart/form-data',
        url: 'UploadFilesControllerServlet',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(data) {
            swal("Success!","File Uploaded Successfully","success");
           
        },
        error: function(e) {
            swal("Error",e,"error");
        }
    });

}
function submitGuide(){
    alert("submitGuide : project-stu.js");
    alert(" Change project status to Y");
}