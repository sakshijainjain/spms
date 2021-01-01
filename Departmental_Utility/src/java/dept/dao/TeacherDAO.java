/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dao;

import dept.dbutil.DBConnection;
import dept.dto.AddTeacher;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author Shivansh
 */
public class TeacherDAO {
    private static PreparedStatement ps1,ps2,ps3;
    private static Statement st,st2;
    static{
        try{
            Connection conn=DBConnection.getConnection();
            ps1=conn.prepareStatement("insert into teacher values(?,?,?,?,?,?,'Teacher')");
            ps2=conn.prepareStatement("select * from teacher where email=?");
            ps3=conn.prepareStatement("select unique_id from teacher where name=?");
            
            st2=conn.createStatement();
            st=conn.createStatement();
                    
        }
        catch(SQLException ex){
            System.out.println("Error in DB conn:"+ex);
        }
    }
    public static String getNewTeacherId() throws SQLException {
         System.out.println("in new teacher id");
       
       ResultSet rs=st.executeQuery("select count(*) from teacher");
         
        if(rs.next()) {
           
            return "T"+(100+(rs.getInt(1)+1));
        }
        else {
        
            return "T101";
            
        }
    }
    
    public static boolean addTeacher(AddTeacher at) throws SQLException{
       ps1.setString(1,at.getUnique_id());
       ps1.setString(2,at.getName());
       ps1.setString(3,at.getEmail());
       ps1.setLong(4,at.getContact());
       ps1.setString(5,at.getPassword());
       ps1.setString(6,at.getAddress());
       return (ps1.executeUpdate()!=0);
    }
    public static boolean searchUser(String email) throws SQLException {
        ps2.setString(1, email);
        return ps2.executeQuery().next();
    }
    public static ArrayList<String> getTeacherList() throws SQLException {
        ResultSet rs=st2.executeQuery("select name from teacher");
        ArrayList<String> name=new ArrayList<>();
        while(rs.next()) {
           name.add(rs.getString(1));
        }
        return name;
}
    public static String getIdfromName(String name) throws SQLException {
        ps3.setString(1, name);
        ResultSet rs=ps3.executeQuery();
        if(rs.next())
            return rs.getString(1);
        return null;
    }
}
