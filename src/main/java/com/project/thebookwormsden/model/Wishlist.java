package com.project.thebookwormsden.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;

@Entity
@Data
public class Wishlist implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlist_id;

    @OneToOne
    private User user;

    @ManyToMany(mappedBy = "wishlists")
    private Set<Article> articles;

    public Wishlist() {}
}
