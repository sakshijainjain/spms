/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dao;

import dept.dbutil.DBConnection;
import dept.dto.AbstractDto;
import dept.dto.FileUploadDto;
import dept.dto.ViewProjectDto;
import java.io.IOException;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Base64;

/**
 *
 * @author Shivansh
 */
public class ProjectDAO {
    private static PreparedStatement ps1,ps2,ps3,ps4;
//    private static Statement st;
    static{
        try{
            Connection conn=DBConnection.getConnection();
            ps1=conn.prepareStatement("insert into uploadfile values(?,?,?,?,?,?)");
            ps2=conn.prepareStatement("insert into abstract values(?,?,?,?,?)");
            ps3=conn.prepareStatement("select snap1,snap2,snap3,snap4 from uploadfile where team_id=?");
            ps4=conn.prepareStatement("select p_name,tech,software,description from abstract where team_id=? ");
        }
        catch(SQLException ex){
            System.out.println("Error in DB conn:"+ex);
        }
    }
    public static boolean uploadFileServer(FileUploadDto fu) throws SQLException, IOException {
        ps1.setString(1,fu.getTeamid());
        ps1.setBinaryStream(2,fu.getFile1(),fu.getFile1().available());
        ps1.setBinaryStream(3,fu.getSnap1(),fu.getSnap1().available());
        ps1.setBinaryStream(4,fu.getSnap2(),fu.getSnap2().available());
        ps1.setBinaryStream(5,fu.getSnap3(),fu.getSnap3().available());
        ps1.setBinaryStream(6,fu.getSnap4(),fu.getSnap4().available());
        return (ps1.executeUpdate()!=0);
       
    }
    public static boolean uploadAbstract(AbstractDto ad) throws SQLException {
        ps2.setString(1,ad.getTeamid());
        ps2.setString(2,ad.getPname());
        ps2.setString(3,ad.getTech());
        ps2.setString(4,ad.getSoftware());
        ps2.setString(5,ad.getDesc());
        return (ps2.executeUpdate()!=0);
    }
    public static ViewProjectDto viewProject(String teamid) throws SQLException {
        ViewProjectDto vp=new ViewProjectDto();
        ps3.setString(1, teamid);
        ps4.setString(1, teamid);
        Blob blob;
        byte[] imageBytes;
        String base64Image;
        ResultSet rs=ps3.executeQuery();
        ResultSet rs2=ps4.executeQuery();
        if(rs.next()){
            blob=rs.getBlob(1);
            imageBytes=blob.getBytes(1l,(int)blob.length());
            Base64.Encoder ec=Base64.getEncoder();
             base64Image=ec.encodeToString(imageBytes);
            vp.setSnap1(base64Image);
            blob=rs.getBlob(2);
            imageBytes=blob.getBytes(1l,(int)blob.length());
            Base64.Encoder ec2=Base64.getEncoder();
             base64Image=ec2.encodeToString(imageBytes);
             vp.setSnap2(base64Image);
             blob=rs.getBlob(3);
            imageBytes=blob.getBytes(1l,(int)blob.length());
            Base64.Encoder ec3=Base64.getEncoder();
             base64Image=ec3.encodeToString(imageBytes);
            vp.setSnap3(base64Image);
            blob=rs.getBlob(4);
            imageBytes=blob.getBytes(1l,(int)blob.length());
            Base64.Encoder ec4=Base64.getEncoder();
             base64Image=ec4.encodeToString(imageBytes);
             vp.setSnap4(base64Image);
 
        }
        if(rs2.next()){
            vp.setPname(rs2.getString(1));
            vp.setTech(rs2.getString(2));
            vp.setSoftware(rs2.getString(3));
            vp.setDesc(rs2.getString(4));
        }
        return vp;
    }
}
