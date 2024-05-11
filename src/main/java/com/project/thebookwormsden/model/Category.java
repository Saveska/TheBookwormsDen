package com.project.thebookwormsden.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Category {

    private Long category_id;
    private String category_name;

    @OneToMany(mappedBy = "category")
    private List<Article> articles;

    public Category(Long category_id, String category_name, List<Article> articles) {
        this.category_id = category_id;
        this.category_name = category_name;
        this.articles = articles;
    }

    public Category() {

    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    @Id
    @GeneratedValue
    public Long getCategory_id() {
        return category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
