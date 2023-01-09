package com.capstone.gratitude.models;

import com.capstone.gratitude.models.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "praise_table")
public class Praise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "time")
    private String time;
    @Column(name= "date")
    private String date;
    @JsonIgnoreProperties({"praiseposted", "praisereceived"})
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @JsonIgnoreProperties({"praiseposted", "praisereceived"})
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recipient_id", nullable = false)
    private User recipient;
    @Column(name= "message", columnDefinition = "LONGTEXT")
    private String message;

    public Praise(String time, String date, User user, User recipient, String message) {
        this.time = time;
        this.date = date;
        this.user = user;
        this.recipient = recipient;
        this.message = message;
    }

    public Praise() {};


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
