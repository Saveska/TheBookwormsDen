package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Article;

import java.util.List;

public interface ArticleService {

    List<Article> getAllArticles();
    List<Article> getArticlesByCategory(Long category_id);
    Article getArticleById(Long article_id);

}
