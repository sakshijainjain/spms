<%-- 
    Document   : viewproject
    Created on : 19 May, 2020, 5:35:19 PM
    Author     : Shivansh
--%>

<%@page import="dept.dto.ViewProjectDto"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String userid=(String) session.getAttribute("userid");
  if(userid==null) {
      response.sendRedirect("accessdenied.html");
      return;
  }
  ViewProjectDto vp=(ViewProjectDto) request.getAttribute("ViewProject");
  System.out.println(vp.getSnap1()+","+vp.getSnap2()+","+vp.getSnap3()+","+vp.getSnap4()+","+vp.getPname()+","+vp.getTech()+","+vp.getSoftware()+","+vp.getDesc());

  out.println(vp.getSnap1()+"-"+vp.getSnap2()+"-"+vp.getSnap3()+"-"+vp.getSnap4()+"-"+vp.getPname()+"-"+vp.getTech()+"-"+vp.getSoftware()+"-"+vp.getDesc()+"-");

%>