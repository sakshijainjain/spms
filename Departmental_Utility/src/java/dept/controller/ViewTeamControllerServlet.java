/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

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
public class ViewTeamControllerServlet extends HttpServlet {

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
            HttpSession session=request.getSession();
            String data=(String) request.getParameter("data");
            String getenroll=(String) request.getParameter("enroll");
            
            String userid=(String) session.getAttribute("userid");
            if(userid==null) 
            {
                        session.invalidate();
                        response.sendRedirect("accessdenied.html");
                        return;
            }
            try {
         
              if(data!=null && data.equals("fetchnum")){
                  System.out.println("in fetch num contrller");
                String enroll=TeamDAO.getEnroll(userid);
                String teamid=TeamDAO.getTeamID(enroll);
                int count=0;
                ArrayList<String> members=TeamDAO.getNumofMem(enroll);
                for(String s:members){
                    if(!s.equals("N/A"))
                        count++;
                }
                request.setAttribute("num",count);
                request.setAttribute("result","numMembers");
                request.setAttribute("teamid", teamid);
//                request.setAttribute("members", members);
                rd=request.getRequestDispatcher("ViewTeam.jsp");
              }
              else if(data!=null && data.equals("getEnroll")){
                 String enroll=TeamDAO.getEnroll(userid);
                  
                  ArrayList<String> members=TeamDAO.getNumofMem(enroll);
                  request.setAttribute("members",members);
                  request.setAttribute("result","getEnroll");
                  rd=request.getRequestDispatcher("ViewTeam.jsp");
              }
              else if(data!=null && data.equals("load")){
                  Student_Team st=TeamDAO.getStudentDetails(getenroll);
                  request.setAttribute("uid",st.getID());
                  
                 request.setAttribute("name",st.getName());
                 request.setAttribute("email",st.getEmail());
                 request.setAttribute("contact", st.getContact());
                 request.setAttribute("result","loadDetails");
                 rd=request.getRequestDispatcher("ViewTeam.jsp");
              }
                    
            }
            catch(Exception e){
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
