/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

import dept.dao.StudentDAO;
import dept.dao.TeacherDAO;
import dept.dto.AddTeacher;
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Shivansh
 */
public class TeacherRegistrationControllerServlet extends HttpServlet {

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
        AddTeacher at=new AddTeacher();
        System.out.println("In teacher servlet");
        at.setName(request.getParameter("name"));
        at.setEmail(request.getParameter("email"));
        at.setAddress(request.getParameter("address"));
        at.setContact(Long.parseLong(request.getParameter("contact")));
        at.setPassword(request.getParameter("pass"));
        try {
                boolean userfound=false,result=false;
                if(!TeacherDAO.searchUser(at.getEmail())) {
                    System.out.println("In registration controller");
                    at.setUnique_id(TeacherDAO.getNewTeacherId());
                    System.out.println(at.getUnique_id());
                    result=TeacherDAO.addTeacher(at);
                    System.out.println("teacher added");
                }
                else {
                    userfound=true;
                }
                request.setAttribute("result",result);
                request.setAttribute("userfound",userfound);
                request.setAttribute("unique_id",at.getUnique_id());
                rd=request.getRequestDispatcher("teacherregistrationresponse.jsp");
            }
            catch(Exception e) {
                request.setAttribute("exception",e);
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
