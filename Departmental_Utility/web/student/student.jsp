<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="stylesheet" href="stylesheet/fac-sidemenu.css">
   <link rel="stylesheet" href="stylesheet/modal-image.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre Baskerville">
<!--   <link rel="stylesheet" href="../stylesheet/navbar.css">
  <link rel="stylesheet" href="../stylesheet/footer.css">  -->
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="javascripts/sidemenu.js"></script>
  <script src="javascripts/createTeam.js"></script>
  <script src="javascripts/viewproject.js"></script>
  <script src="javascripts/student-main.js"></script>
  <script src="javascripts/project-stu.js"></script>
  <script src="javascripts/addteam-stu.js"></script>

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>Student | Departmental Utility</title>

            <style>
              
                 #title{
                   
                   text-align: center;
                   background-color: rgb(233, 230, 230);
                   padding: 8px;
                 }

                 #det{
                   text-align: left;
                 }

                 #pro_det{
                  text-indent: 50px;
                text-align: justify;
                   letter-spacing: 3px;

                 }

       
            </style>
            <%
            String userid=(String)session.getAttribute("userid");
            String name=(String) session.getAttribute("name");
            if(userid==null)
            {
                response.sendRedirect("accessdenied.html");
                return;
            }
            System.out.println(name);
            String team=(String)request.getAttribute("team");
           
                System.out.println(team);
            %>
        </head>


              <body class="text-center">
                
                    
                <div class="row" >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  id="navbar">
                    <a class="navbar-brand" href="/home.html"> &nbsp;&nbsp;&nbsp;&nbsp; Project Management System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse">
                      <ul class="navbar-nav ml-auto">
                          <div class="pull-right">
                              <ul class="nav pull-right">
                                  <li class="dropdown"><a href="#" class="dropdown-toggle text-white" data-toggle="dropdown"><i class="fa fa-fw fa-user"></i>
                                    &nbsp;Welcome <%= name %></a>
                                      <ul class="dropdown-menu bg-dark">
                                         
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-pencil fa-fw" ></i>&nbsp; Profile</a></li> 
                                          <li class="dropdown-divider"></li>
                                          <li>&nbsp;&nbsp;&nbsp;&nbsp; <button type='button' onclick="logout()"style="color:rgb(206, 16, 16);"> <i class="fa fa-fw fa-sign-out"></i>&nbsp;Logout</a></li>
                                          
                                      </ul>
                                  </li>
                              </ul>
                            </div>
                        </ul>
                      </div>
                  </nav> 
              </div>
               
                
               
                   <div class="row" >                     
                  
                    <div class="col-md-2.5">
                  
                    <!-- The sidebar -->
                  <div class="sidebar" id="sidemenu">
                    <button class="btn btn-dark btn-block" id="home" onclick="viewHome()" ><i class="fa fa-fw fa-home"></i> Home</button>
                    <button class="btn btn-dark btn-block" id="profile" onclick="preViewProfile()"><i class="fa fa-fw fa-user"></i> Profile</button>

                    <button class="btn  btn-dark btn-block dropdown-btn" id="drop1" onclick="showDropdown(this.id)">
                      <i class="fa fa-users" aria-hidden="true"></i>&nbsp; Project Team <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-container" id="content1">
                      
                        <button class="btn btn-dark btn-block" id="registerT" onclick="registerTeam()" <% if(team.equals("yes")){ %> disabled <% } %>> &nbsp;1. Register Team</button>
                        <button class="btn btn-dark btn-block" id="updateT" onclick="viewTeam()" <% if(team.equals("no")){ %> disabled <% }  %>> &nbsp;2. View/Update Team</button>
                      <!-- <button class="btn btn-dark btn-block" id="viewT" onclick="viewTeam()"> &nbsp;3. View Team</button> -->
                    
                    </div>

                    <button class="btn  btn-dark btn-block dropdown-btn" id="drop2" onclick="showDropdown(this.id)">
                      <i class="fa fa-upload" aria-hidden="true"></i>&nbsp; Project File <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-container" id="content2">
                      <button class="btn btn-dark btn-block" id="abstractP" onclick="uploadAbstract()"> &nbsp;1. Upload Abstract</button>
                      <button class="btn btn-dark btn-block" id="fileP"  onclick="uploadFile()"> &nbsp;2. Upload File</button>
                      <button class="btn btn-dark btn-block" id="snapP" onclick="preViewProject()"> &nbsp;3. View Project</button>
                    </div>

                    <button class="btn btn-dark btn-block"  id="report"  onclick="viewReport()"> <i class="fa fa-pie-chart" ></i>&nbsp; Report</button>
                    <button class="btn btn-dark btn-block" id="logout" onclick="logout()"> <i class="fa fa-sign-out" ></i>&nbsp; Logout</button>

                    
                    
                  </div>
                </div>

                <!-- MAIN CONTENT AREA -->
                <div class="col-md-10"  >
                          
                 
                 <div id="overlay" >
                      
                      <div class="row">
                        <div class="col-md-12" style="text-align: right;">
                          <a href="#" class="btn" id="close" onclick="offoverlay()"><i class="fa fa-2x fa-times" aria-hidden="true" ></i></a>
                        </div>
                      </div> <br>
                  <div class="row">
                 <div class="col-md-6" id="img-overlay" style="height: 620px;">

                      
                 </div>
                 <div class="col-md-6" id="text-overlay" >
                  
                  <h3 id="project-title"></h3> <br>
                  <h5>Technology Used :</h5>
                  <span id="project-tech">
                   
                  </span> <br> <br>
                  
                  <h5>Required Software:</h5>
                  <span id="project-soft">
                   </span> <br> <br>
                  
                  <h5>Description :</h5>
                  <span id="project-desc">
                   </span> <br>
                   </div>
                      </div> <br> 

                      <div class="row" >
                        <div class="col-md-12" style="align-content: center;">
                          <button class="btn btn-lg btn-warning" onclick="submitGuide()"><b> Submit To Guide</b></button>
                        </div>                         
                      </div> <br> <br>

                  </div>             
                  
                
                
                
                <div class="main-content border shadow" id="content"  > 
             

                        


                             
                                        
                                        
                                        
                                        
                        </div> 
                           
                </div>
                  
                 <div class="row">
                 <footer class="footer">
                    <div class=" footer-copyright text-center  text-capitalize bg-dark text-white" style="height: 50px;"> 
                     <p>  &copy; projectManagementUIT: 2020 </p>
                    </div>
                  </footer>
                </div>
                    
                    </body>
</html>