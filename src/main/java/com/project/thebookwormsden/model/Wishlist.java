package com.project.thebookwormsden.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Wishlist {

    @Id
    @GeneratedValue()
    private Long wishlist_id;

    @OneToOne
    private User user;

    @OneToMany
    private List<Article> articlesList = new ArrayList<>();

}
