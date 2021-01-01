/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

import dept.dao.StudentDAO;
import dept.dao.TeacherDAO;
import dept.dao.TeamDAO;
import dept.dto.Student_Team;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Shivansh
 */
public class RegisterTeamControllerServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            RequestDispatcher rd=null;
             String data = (String)request.getParameter("data");
             String enroll=(String) request.getParameter("enroll");
            
            HttpSession session = request.getSession();
         String userid =(String)session.getAttribute("userid");
         if(userid==null){ 
             session.invalidate();
           response.sendRedirect("accessdenied.html");
           return;
         }
         try{
                 if(data!=null&&data.equalsIgnoreCase("fname")){
                    ArrayList<String> Tname = TeacherDAO.getTeacherList();
                    
                    request.setAttribute("Tname", Tname);
                    
                    request.setAttribute("result","teacherlist");
                    rd=request.getRequestDispatcher("registerTeam.jsp");
                }
                 else if(data!=null && data.equalsIgnoreCase("teamid")){
                    String teamid=TeamDAO.getNewTeamId(); 
                    request.setAttribute("team", teamid);
                    request.setAttribute("result","teamid");
                    rd=request.getRequestDispatcher("registerTeam.jsp");
                 }
                 else if(data!=null && data.equalsIgnoreCase("register")){
                     String fname=(String) request.getParameter("fname");
                     String enrollment=(String) request.getParameter("enroll");

                     System.out.println(enrollment);
                     String s[]=enrollment.split(",");
                     String enroll1=s[0];
                     String enroll2=s[1];
                     String enroll3=s[2];
                     String enroll4=s[3];
                     String teamid=(String) request.getParameter("team");
                     String fid=TeacherDAO.getIdfromName(fname);

                     boolean res=TeamDAO.registerTeam(teamid, enroll1, enroll2, enroll3, enroll4, fid);
                     if(res==true){
                         if(!enroll1.equals("N/A"))
                            StudentDAO.turnStatus(enroll1);
                         if(!enroll2.equals("N/A"))
                            StudentDAO.turnStatus(enroll1);
                         if(!enroll3.equals("N/A"))
                            StudentDAO.turnStatus(enroll1);
                         if(!enroll4.equals("N/A"))
                            StudentDAO.turnStatus(enroll1);
                     }
                     System.out.println(res);
                     request.setAttribute("res", Boolean.toString(res));
                     request.setAttribute("result","register");
                     rd=request.getRequestDispatcher("registerTeam.jsp");
                     
                 }
                 else {
                     Student_Team st=TeamDAO.getStudentDetails(enroll);
                   boolean present=TeamDAO.checkEnroll(enroll);
                 request.setAttribute("uid",st.getID());
                 request.setAttribute("name",st.getName());
                 request.setAttribute("email",st.getEmail());
                 request.setAttribute("contact", st.getContact());
                 request.setAttribute("result","filldetails");
                 request.setAttribute("present",present);
                 rd=request.getRequestDispatcher("registerTeam.jsp");
                 
                 }
         }
         catch(Exception e) {
                   request.setAttribute("exception", e);
                   rd=request.getRequestDispatcher("showexception.jsp");
                   e.printStackTrace();
               }
                finally {
                 rd.forward(request, response);
             }  
            
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
