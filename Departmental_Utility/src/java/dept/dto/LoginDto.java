/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dto;

/**
 *
 * @author Shivansh
 */
public class LoginDto {
    private String userid;
    private String password;

    public LoginDto(String userid, String password) {
        this.userid = userid;
        this.password = password;
    }
    public LoginDto(){
        
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
