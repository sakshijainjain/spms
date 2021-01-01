/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dao;

import dept.dbutil.DBConnection;
import dept.dto.AddStudent;
import dept.dto.ProfileDto;
import dept.dto.Student_Team;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Shivansh
 */
public class StudentDAO {
    private static PreparedStatement ps1,ps2,ps3,ps4,ps5,ps6;
    private static Statement st;
    static{
        try{
            Connection conn=DBConnection.getConnection();
            ps1=conn.prepareStatement("insert into student values(?,?,?,?,?,?,?,?,?,'Student','n')");
            ps2=conn.prepareStatement("select * from student where enroll=?");
            ps3=conn.prepareStatement("select name from student where email=?");
            ps4=conn.prepareStatement("update student set status='y' where enroll=?");
            ps5=conn.prepareStatement("select unique_id,name,enroll,semester,email,contact,address,password from student where enroll=?");
            ps6=conn.prepareStatement("update student set name=?,semester=?,contact=?,address=?,password=? where enroll=?");
            st=conn.createStatement();
                    
        }
        catch(SQLException ex){
            System.out.println("Error in DB conn:"+ex);
        }
    }
     public static String getNewStudentId() throws SQLException {
         System.out.println("in new student id");
       
       ResultSet rs=st.executeQuery("select count(*) from student");
         
        if(rs.next()) {
           
            return "S"+(100+(rs.getInt(1)+1));
        }
        else {
        
            return "S101";
            
        }
        
         
}
    public static boolean addStudent(AddStudent as) throws SQLException{
       ps1.setString(1,as.getUnique_id());
       ps1.setString(2,as.getName());
       ps1.setString(3,as.getEnroll());
       ps1.setInt(4,as.getSem());
       ps1.setString(5,as.getSection());
       ps1.setString(6,as.getEmail());
       ps1.setLong(7,as.getContact());
       ps1.setString(8,as.getAddress());
       ps1.setString(9,as.getPassword());
       return (ps1.executeUpdate()!=0);
    }
    public static boolean searchUser(String enroll) throws SQLException {
        ps2.setString(1, enroll);
        return ps2.executeQuery().next();
    }
    public static String getName(String email) throws SQLException {
        ps3.setString(1, email);
        ResultSet rs=ps3.executeQuery();
        if(rs.next())
            return rs.getString(1);
        return null;
    }
    public static void turnStatus(String enroll) throws SQLException {
        ps4.setString(1, enroll);
        ps4.executeUpdate();
       
    }
    public static ProfileDto viewProfile(String enroll) throws SQLException {
        ProfileDto pd=new ProfileDto();
        ps5.setString(1, enroll);
        ResultSet rs=ps5.executeQuery();
        if(rs.next()){
            pd.setUnique_id(rs.getString(1));
            pd.setName(rs.getString(2));
            pd.setEnroll(rs.getString(3));
            pd.setSem(rs.getString(4));
            pd.setEmail(rs.getString(5));
            pd.setContact(rs.getString(6));
            pd.setAddress(rs.getString(7));
            pd.setPass(rs.getString(8));
        }
        return pd;
    }
    public static boolean updateProfile(String name,String sem,String address,String contact,String password,String enroll) throws SQLException{
        ps6.setString(1,name);
        ps6.setString(2, sem);
        ps6.setString(3,contact);
        ps6.setString(4,address);
        ps6.setString(5,password);
        ps6.setString(6,enroll);
        return (ps6.executeUpdate()!=0);
        
    }
}
