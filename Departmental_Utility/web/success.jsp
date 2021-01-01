<%-- 
    Document   : success
    Created on : 17 May, 2020, 1:57:16 PM
    Author     : Shivansh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
  String userid=(String)session.getAttribute("userid");
  if(userid==null) {
      response.sendRedirect("accessdenied.html");
      return;
  }
  System.out.println("in success");
  out.println("success");
%>