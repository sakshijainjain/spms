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
public class AbstractDto {
    private String teamid;
     private String pname;
    private String tech;
    private String software; 
    private String desc;

    public String getTeamid() {
        return teamid;
    }

    public void setTeamid(String teamid) {
        this.teamid = teamid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getTech() {
        return tech;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }

    public String getSoftware() {
        return software;
    }

    public void setSoftware(String software) {
        this.software = software;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public AbstractDto(String teamid, String pname, String tech, String software, String desc) {
        this.teamid = teamid;
        this.pname = pname;
        this.tech = tech;
        this.software = software;
        this.desc = desc;
    }
    
    
}
