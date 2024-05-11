package com.project.thebookwormsden.model;

import com.project.thebookwormsden.model.enums.ArticleType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Article {
    private Long article_id;
    private String article_name;
    @Enumerated(value = EnumType.STRING)
    private ArticleType article_type;
    private String description;
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public Article() {

    }

    public void setArticle_id(Long article_id) {
        this.article_id = article_id;
    }

    @Id
    @GeneratedValue
    public Long getArticle_id() {
        return article_id;
    }

    public Article(Long article_id, String article_name, ArticleType article_type, String description, Double price, Category category) {
        this.article_id = article_id;
        this.article_name = article_name;
        this.article_type = article_type;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    public String getArticle_name() {
        return article_name;
    }

    public void setArticle_name(String article_name) {
        this.article_name = article_name;
    }

    public ArticleType getArticle_type() {
        return article_type;
    }

    public void setArticle_type(ArticleType article_type) {
        this.article_type = article_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
