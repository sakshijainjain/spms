/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dbutil;



/**
 *
 * @author Shivansh
 */
import java.sql.Connection;
import java.sql.DriverManager;
//import java.sql.SQLException;

public class DBConnection {
    private static Connection conn;
    static {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            System.out.println("Driver Successfully loaded");
            conn=DriverManager.getConnection("jdbc:oracle:thin:@//UPLC/xe","department","minor");
            System.out.println("Connection done successfully");
        }
        catch(Exception ex) {
            System.out.println("Exception in Opening Connection");
        }
    }
    public static Connection getConnection() {
        return conn;
    }
    public static void closeConnection() {
        try{
            conn.close();
        }
        catch(Exception ex) {
            System.out.println("Exception in closing connection"+ex);
        }
    }
}
