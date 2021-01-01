<%-- 
    Document   : viewprofile
    Created on : 19 May, 2020, 11:41:52 PM
    Author     : Shivansh
--%>

<%@page import="dept.dto.ProfileDto"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
String userid=(String) session.getAttribute("userid");
  if(userid==null) {
      response.sendRedirect("accessdenied.html");
      return;
  }
  ProfileDto pd=(ProfileDto) request.getAttribute("ViewProfile");
  String teamid=(String) request.getAttribute("team");
  out.println(pd.getName()+"-"+pd.getUnique_id()+"-"+pd.getEnroll()+"-"+teamid+"-"+pd.getSem()+"-"+pd.getEmail()+"-"+pd.getContact()+"-"+pd.getAddress()+"-"+pd.getPass()+"-");
  

%>