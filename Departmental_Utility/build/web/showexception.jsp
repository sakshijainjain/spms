<%-- 
    Document   : showexception
    Created on : 23 Mar, 2020, 1:53:16 PM
    Author     : Shivansh
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="stylesheet/backgroundimage.css" rel="stylesheet">
        <link href="stylesheet/pageheader.css" rel="stylesheet">
        <title>Show Exception Page</title>
    </head>
    <body>
        <br>
        <div class="candidate">Departmental Utility Web</div>
        <br>
        <div class="subcandidate">Please Try Again Later</div>
        <%  
              Exception ex=(Exception) request.getAttribute("exception");
              System.out.println(ex);
              out.println(ex);
        %>
    </body>
</html>
