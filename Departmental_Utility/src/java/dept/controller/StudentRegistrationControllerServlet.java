/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

import dept.dao.StudentDAO;
import dept.dto.AddStudent;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Shivansh
 */
public class StudentRegistrationControllerServlet extends HttpServlet {

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
            AddStudent as=new AddStudent();
            
            as.setName(request.getParameter("name"));
            as.setEmail(request.getParameter("email"));
            as.setAddress(request.getParameter("address"));
            as.setContact(Long.parseLong(request.getParameter("contact")));
            as.setPassword(request.getParameter("pass"));
            as.setEnroll(request.getParameter("enroll"));
            as.setSection(request.getParameter("section"));
            as.setSem(Integer.parseInt(request.getParameter("sem")));
            try {
                boolean userfound=false,result=false;
                if(!StudentDAO.searchUser(as.getEnroll())) {
                    System.out.println("In registration controller");
                    as.setUnique_id(StudentDAO.getNewStudentId());
                    System.out.println(as.getUnique_id());
                    result=StudentDAO.addStudent(as);
                    
                }
                else {
                    userfound=true;
                }
                request.setAttribute("result",result);
                request.setAttribute("userfound",userfound);
                request.setAttribute("enroll",as.getEnroll());
                rd=request.getRequestDispatcher("studentregistrationresponse.jsp");
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
