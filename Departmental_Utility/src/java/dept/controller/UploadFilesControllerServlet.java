/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.controller;

import dept.dao.ProjectDAO;
import dept.dao.TeamDAO;
import dept.dto.FileUploadDto;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;

/**
 *
 * @author Shivansh
 */
public class UploadFilesControllerServlet extends HttpServlet {

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
            try {
                String enroll=TeamDAO.getEnroll(userid);
                String teamid=TeamDAO.getTeamID(enroll);
                
                DiskFileItemFactory dif=new DiskFileItemFactory();
                ServletRequestContext srq=new ServletRequestContext(request);
                ServletFileUpload sfu=new ServletFileUpload(dif);
                List<FileItem> multiparts=sfu.parseRequest(srq);
               
                
                InputStream fileContent[]=new InputStream[5];
                int i=0;
                
               
                for(FileItem item: multiparts) {
                    if(!item.isFormField()) {
                        
                        String fieldName=item.getFieldName();
                        String fileName=item.getName();
                        System.out.println(fieldName+":"+fileName);
                        fileContent[i]=item.getInputStream();
                        
                        i++;
                    }
                }
                FileUploadDto fu=new FileUploadDto(teamid,fileContent[0],fileContent[1],fileContent[2],fileContent[3],fileContent[4]);
                boolean up=ProjectDAO.uploadFileServer(fu);
                if(up==true)
                    rd=request.getRequestDispatcher("success.jsp");
                else
                    rd=request.getRequestDispatcher("failure.jsp");
            
                
            }
            catch(Exception ex) {
                rd=request.getRequestDispatcher("showexception.jsp");
                ex.printStackTrace();
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
