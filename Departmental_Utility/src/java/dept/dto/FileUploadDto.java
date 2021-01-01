/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dept.dto;

import java.io.InputStream;

/**
 *
 * @author Shivansh
 */
public class FileUploadDto {
    private String teamid;
    private InputStream file1;
    private InputStream snap1;
    private InputStream snap2;
    private InputStream snap3;
    private InputStream snap4;

    public String getTeamid() {
        return teamid;
    }

    public void setTeamid(String teamid) {
        this.teamid = teamid;
    }

    public InputStream getFile1() {
        return file1;
    }

    public void setFile1(InputStream file1) {
        this.file1 = file1;
    }

    public InputStream getSnap1() {
        return snap1;
    }

    public void setSnap1(InputStream snap1) {
        this.snap1 = snap1;
    }

    public InputStream getSnap2() {
        return snap2;
    }

    public void setSnap2(InputStream snap2) {
        this.snap2 = snap2;
    }

    public InputStream getSnap3() {
        return snap3;
    }

    public void setSnap3(InputStream snap3) {
        this.snap3 = snap3;
    }

    public InputStream getSnap4() {
        return snap4;
    }

    public void setSnap4(InputStream snap4) {
        this.snap4 = snap4;
    }

    public FileUploadDto(String teamid, InputStream file1, InputStream snap1, InputStream snap2, InputStream snap3, InputStream snap4) {
        this.teamid = teamid;
        this.file1 = file1;
        this.snap1 = snap1;
        this.snap2 = snap2;
        this.snap3 = snap3;
        this.snap4 = snap4;
    }
    
    public FileUploadDto(){
        
    }
}
