package com.capstone.gratitude.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_table")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "first_name")
    private String firstName;
    @Column(name= "last_name")
    private String lastName;
    @Column(name= "email")
    private String email;
    @Column(name= "location")
    private String location;
    @JsonIgnoreProperties({"employees"})
    @ManyToOne
    @JoinColumn(name = "organisation_id", nullable = false)
    private Organisation organisation;

    @Column(name= "job_title")
    private String jobTitle;
    @Column(name= "total_rank")
    private int totalRank;
    @Column(name= "daily_rank")
    private int dailyRank;
    @JsonIgnoreProperties({"user", "recipient", "organisation"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
     List<Praise> praiseposted;
    @JsonIgnoreProperties({"recipient", "organisation", "user"})
    @OneToMany(mappedBy = "recipient", fetch = FetchType.LAZY)
    List<Praise> praisereceived;

    public User( String firstName, String lastName, String email, String location, Organisation organisation, String jobTitle, int totalRank, int dailyRank) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.location = location;
        this.organisation = organisation;
        this.jobTitle = jobTitle;
        this.totalRank = totalRank;
        this.dailyRank = dailyRank;
        this.praiseposted = new ArrayList<>();
        this.praisereceived = new ArrayList<>();
    }

    public User() {};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Organisation getOrganisation() {
        return organisation;
    }

    public void setOrganisation(Organisation organisation) {
        this.organisation = organisation;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public int getTotalRank() {
        return totalRank;
    }

    public void setTotalRank(int totalRank) {
        this.totalRank = totalRank;
    }

    public int getDailyRank() {
        return dailyRank;
    }

    public void setDailyRank(int dailyRank) {
        this.dailyRank = dailyRank;
    }

    public List<Praise> getPraiseposted() {
        return praiseposted;
    }

    public void setPraiseposted(List<Praise> praiseposted) {
        this.praiseposted = praiseposted;
    }

    public List<Praise> getPraisereceived() {
        return praisereceived;
    }

    public void setPraisereceived(List<Praise> praisereceived) {
        this.praisereceived = praisereceived;
    }


    public void setPraiseReceived(List<Praise> praisereceived) {
        this.praisereceived = praisereceived;
    }


}

