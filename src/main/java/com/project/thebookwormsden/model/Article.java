package com.project.thebookwormsden.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.thebookwormsden.model.enums.ArticleType;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Article implements Serializable {

    @Id
    @GeneratedValue
    private Long article_id;

    private String article_name;

    @Enumerated(value = EnumType.STRING)
    private ArticleType article_type;

    private String description;

    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIgnore
    private Category category;

    public Article() {}

    public Article(String article_name, ArticleType article_type, String description, Double price, Category category) {
        this.article_name = article_name;
        this.article_type = article_type;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}
