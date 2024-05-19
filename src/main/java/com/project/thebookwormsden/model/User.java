package com.project.thebookwormsden.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String name;

    private String surname;

    private String role;

    @Column(unique = true)
    private String email;

    private String password;

    private String phoneNumber;

    @CreatedDate
    private String createdAt;

    @OneToMany
    private List<Rating> ratings;

    @OneToMany
    private List<Article> articles;

    @OneToOne(fetch = FetchType.LAZY)
    private Wishlist wishlist;

    @OneToMany
    private List<Order> orders;

    public User() {
    }

    public User(String name, String surname, String role, String email, String password, String phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.role = role;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    public User(Long user_id, String name, String surname, String role,
                String email, String password, String phoneNumber,
                String createdAt, List<Rating> ratings,
                List<Article> articles, Wishlist wishlist,
                List<Order> orders) {
        this.user_id = user_id;
        this.name = name;
        this.surname = surname;
        this.role = role;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.createdAt = createdAt;
        this.ratings = ratings;
        this.articles = articles;
        this.wishlist = wishlist;
        this.orders = orders;
    }
}
