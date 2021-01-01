/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

import dept.dao.TeamDAO;
import java.io.IOException;
import java.io.PrintWriter;
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
public class RemoveMemberControllerServlet extends HttpServlet {

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
        String userid=(String) session.getAttribute("userid");
            if(userid==null) 
            {
                        session.invalidate();
                        response.sendRedirect("accessdenied.html");
                        return;
            }
            String i=(String)(request.getParameter("i"));
            String enroll=(String) request.getParameter("enroll");
            try {
                String teamid=(String) TeamDAO.getTeamID(enroll);
                boolean result=TeamDAO.updateTeam(i,teamid);
                if(result) {
                    boolean result2=TeamDAO.updateStatus(enroll);
                    if(result2)
                        rd=request.getRequestDispatcher("success.jsp");
                    else
                        rd=request.getRequestDispatcher("failure.jsp");
                }
                else
                    rd=request.getRequestDispatcher("failure.jsp");
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
