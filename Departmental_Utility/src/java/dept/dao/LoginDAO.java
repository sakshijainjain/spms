/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dao;

import dept.dbutil.DBConnection;
import dept.dto.LoginDto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Shivansh
 */
public class LoginDAO {
    private static PreparedStatement ps1,ps2;
    private static Statement st;
    static{
        try{
            Connection conn=DBConnection.getConnection();
             ps1=conn.prepareStatement("select type from student where email=? and password=?");
            ps2=conn.prepareStatement("select type from teacher where email=? and password=?");
        }
        catch(Exception ex){
            System.out.println("Error in DB conn:"+ex);
        }      
}
 public static String validateUser(LoginDto user) throws SQLException {
          ps1.setString(1,user.getUserid());
          ps1.setString(2,user.getPassword());
          ResultSet rs=ps1.executeQuery();
          if(rs.next()) {
              return rs.getString(1);
          }
          else {
              ps2.setString(1,user.getUserid());
              ps2.setString(2,user.getPassword());
              ResultSet rs2=ps2.executeQuery();
              if(rs2.next()){
                  return rs2.getString(1);
              }
              else
                  return null;
          }
    }   
}
