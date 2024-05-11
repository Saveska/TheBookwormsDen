package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Category;
import com.project.thebookwormsden.repository.ArticleRepository;
import com.project.thebookwormsden.repository.CategoryRepository;
import com.project.thebookwormsden.service.ArticleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImplementation implements ArticleService{

    private final ArticleRepository articleRepository;
    private final CategoryRepository categoryRepository;

    public ArticleServiceImplementation(ArticleRepository articleRepository, CategoryRepository categoryRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public List<Article> getArticlesByCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        if (category != null) {
            return category.getArticles();
        }
        return null;
    }

    @Override
    public Article getArticleById(Long articleId) {
        return articleRepository.findById(articleId).orElse(null);
    }
}
