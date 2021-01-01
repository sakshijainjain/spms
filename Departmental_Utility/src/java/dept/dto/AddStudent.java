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
public class AddStudent {
    private String unique_id;
    private String name;
    private String enroll;
    private int sem;
    private String section;
    private String email;
    private long contact;
    private String address;
    private String password;

    public String getUnique_id() {
        return unique_id;
    }

    public void setUnique_id(String unique_id) {
        this.unique_id = unique_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEnroll() {
        return enroll;
    }

    public void setEnroll(String enroll) {
        this.enroll = enroll;
    }

    public int getSem() {
        return sem;
    }

    public void setSem(int sem) {
        this.sem = sem;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getContact() {
        return contact;
    }

    public void setContact(long contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AddStudent(String unique_id, String name, String enroll, int sem, String section, String email, long contact, String address, String password) {
        this.unique_id = unique_id;
        this.name = name;
        this.enroll = enroll;
        this.sem = sem;
        this.section = section;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.password = password;
    }
    public AddStudent(){
        
    }
    
}
