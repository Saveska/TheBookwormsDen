package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.enums.ArticleType;

import java.util.List;

public interface ArticleService {

    List<Article> getAllArticles();

    List<Article> getArticlesByCategory(Long category_id);

    Article getArticleById(Long article_id);

    Article createArticle(String name, ArticleType articleType, String description, Double price, Long categoryId);
}
