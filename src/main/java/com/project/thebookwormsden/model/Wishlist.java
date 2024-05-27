package com.project.thebookwormsden.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Wishlist implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlist_id;

    @OneToOne
    private User user;

    @ManyToMany
    @JoinTable(
            name = "wishlist_article",
            joinColumns = @JoinColumn(name = "wishlist_id"),
            inverseJoinColumns = @JoinColumn(name = "article_id")
    )
    private List<Article> articles;
    Double totalPrice;

    public Wishlist() {}
}
