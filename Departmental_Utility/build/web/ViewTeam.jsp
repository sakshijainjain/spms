<%-- 
    Document   : ViewTeam
    Created on : 16 May, 2020, 9:22:25 PM
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
  if(result.equals("numMembers")) {
      int num=(Integer) request.getAttribute("num");
      String teamid=(String) request.getAttribute("teamid");
      System.out.println(num+","+teamid);
      out.println(num+","+teamid);
  }
  else if(result.equals("loadDetails")){
      String uid=(String) request.getAttribute("uid");
      String name=(String)request.getAttribute("name");
      String email=(String)request.getAttribute("email");
      String contact=(String)request.getAttribute("contact");
 
      out.println(uid+","+name+","+email+","+contact);
  }
  else if(result.equals("getEnroll")){
      StringBuilder sb=new StringBuilder();
       ArrayList<String> members=(ArrayList<String>)request.getAttribute("members");
       for(String s:members){
           if(!s.equals("N/A")){
               sb.append(s+",");
           }         
       }
       
       out.println(sb.toString());
  }
%>