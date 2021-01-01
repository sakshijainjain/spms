<%-- 
    Document   : loginresponse
    Created on : 23 Mar, 2020, 6:39:10 PM
    Author     : Shivansh
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    System.out.println("in login response");
  String userid=(String)request.getAttribute("userid");
  String result=(String)request.getAttribute("result");
  String name=(String) request.getAttribute("Name");
  System.out.println(result);
  System.out.println(userid);
  if(userid!=null && result!=null) {
      HttpSession sess=request.getSession();
      sess.setAttribute("userid",userid);
      sess.setAttribute("name", name);
      if(result.equalsIgnoreCase("Student")) {
          
          String url="StudentsControllerServlet;jsessionid="+session.getId();
          System.out.println(url);
          out.println(url);
      }
      else {
          System.out.println("in else");
          String url="TeacherControllerServlet;jsessionid="+session.getId();
          out.println(url);
      }
  }
  else {
      out.println("error");
  }
  

%>