<%-- 
    Document   : registerTeam
    Created on : 15 May, 2020, 11:40:12 PM
    Author     : Shivansh
--%>

<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
  String userid=(String) session.getAttribute("userid");
  if(userid==null) {
      response.sendRedirect("accessdenied.html");
      return;
  }
  String result=(String) request.getAttribute("result");
  String res=(String) request.getAttribute("res");
 
  StringBuffer displayBlock=new StringBuffer("");
  if(result.equals("teacherlist")) {
      ArrayList<String> Tname=(ArrayList) request.getAttribute("Tname");
      
      for(String c:Tname) {
          displayBlock.append("<option value='"+c+"'>"+c+"</option>");
          
      }
      out.println(displayBlock);
  }
  else if(result.equals("filldetails")){
      boolean present=(Boolean) request.getAttribute("present");
      String uid=(String)request.getAttribute("uid");
      String name=(String)request.getAttribute("name");
      String email=(String) request.getAttribute("email");
      String contact=(String) request.getAttribute("contact");
      System.out.println(uid+" "+name+" "+email+" "+contact);
      if(present==true)
          out.println("false");
      else
          out.println(uid+","+name+","+email+","+contact);
  }
  else if(result.equals("teamid")){
      String teamid=(String) request.getAttribute("team");
      out.println(teamid);
      
  }
  else if(result.equals("register")){
     
      if(res.equalsIgnoreCase("true"))
        out.println("success");
      else
          out.println("error");
  }
 %>