<%-- 
    Document   : studentregistrationresponse
    Created on : 22 Mar, 2020, 3:37:16 PM
    Author     : Shivansh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    System.out.println("in student registration jsp");
       boolean result=(Boolean)request.getAttribute("result");
       boolean userfound=(Boolean)request.getAttribute("userfound");
       if(userfound==true) {
           out.println("uap");
       }
       else if(result==true) {
           out.println("success");
       }
       else {
           out.println("error");
       }
%>