/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dao;

import dept.dbutil.DBConnection;
import dept.dto.Student_Team;
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
public class TeamDAO {
    private static PreparedStatement ps1,ps2,ps3,ps4,ps5,ps6,ps7,ps8;
    private static Statement st;
    
    static{
        try{
            Connection conn=DBConnection.getConnection();
            ps1=conn.prepareStatement("select unique_id,name,email,contact from student where enroll=?");
            ps3=conn.prepareStatement("select status from student where enroll=?");
            ps2=conn.prepareStatement("insert into team values(?,?,?,?,?,?)");
            ps4=conn.prepareStatement("select ID from team where enroll1=? or enroll2=? or enroll3=? or enroll4=?");
            ps5=conn.prepareStatement("select enroll from student where email=?");
            ps6=conn.prepareStatement("select enroll1,enroll2,enroll3,enroll4 from team where enroll1=? or enroll2=? or enroll3=? or enroll4=?");
            
            ps8=conn.prepareStatement("update student set status='n' where enroll=?");
            st=conn.createStatement();
        }
        catch(SQLException ex){
            System.out.println("Error in DB conn:"+ex);
        }
    }
    public static String getNewTeamId() throws SQLException {
      
       
       ResultSet rs3=st.executeQuery("select count(*) from team");
         
        if(rs3.next())
            return "TM"+(10000+(rs3.getInt(1)+1));
        return "TM100001";
            
     
    }
    public static Student_Team getStudentDetails(String enroll) throws SQLException {
        Student_Team st=new Student_Team();
        ps1.setString(1, enroll);
        ResultSet rs=ps1.executeQuery();
        if(rs.next()){
            st.setID(rs.getString(1));
            st.setName(rs.getString(2));
            st.setEmail(rs.getString(3));
            st.setContact(rs.getString(4));
        }
        st.setEnroll(enroll);
        return st;
    }
    public static boolean registerTeam(String tid,String enroll1,String enroll2,String enroll3,String enroll4,String fid) throws SQLException{
        ps2.setString(1, tid);
        ps2.setString(2, enroll1);
        ps2.setString(3, enroll2);
        ps2.setString(4, enroll3);
        ps2.setString(5, enroll4);
        ps2.setString(6, fid);
        return (ps2.executeUpdate()!=0);
    }
    public static boolean checkEnroll(String enroll) throws SQLException {
        ps3.setString(1, enroll);
        ResultSet rs=ps3.executeQuery();
        if(rs.next()){
            if(rs.getString(1).equalsIgnoreCase("y"))
                return true;
        }
        return false;
    }
    public static String getEnroll(String email) throws SQLException {
        ps5.setString(1,email);
        ResultSet rs=ps5.executeQuery();
        if(rs.next())
            return rs.getString(1);
        return null;
    }
    public static String getTeamID(String enroll) throws SQLException {
        ps4.setString(1, enroll);
        ps4.setString(2, enroll);
        ps4.setString(3,enroll);
        ps4.setString(4, enroll);
        ResultSet rs=ps4.executeQuery();
        if(rs.next())
            return rs.getString(1);
        return null;
        
    }
    public static ArrayList<String> getNumofMem(String enroll) throws SQLException {
        ArrayList<String> arr=new ArrayList();
        ps6.setString(1, enroll);
        ps6.setString(2, enroll);
        ps6.setString(3, enroll);
        ps6.setString(4, enroll);
        ResultSet rs=ps6.executeQuery();
        if(rs.next()){
            arr.add(rs.getString(1));
            arr.add(rs.getString(2));
            arr.add(rs.getString(3));
            arr.add(rs.getString(4));
        }
        return arr;
    }
    public static boolean updateTeam(String i, String teamid) throws SQLException {
        Connection conn=DBConnection.getConnection();
        ps7=conn.prepareStatement("update team set enroll"+i+"='N/A' where ID=?");
        ps7.setString(1,teamid);
        return (ps7.executeUpdate()!=0);
    }
    public static boolean updateStatus(String enroll) throws SQLException {
        ps8.setString(1, enroll);
        return (ps8.executeUpdate()!=0);
    }
}
