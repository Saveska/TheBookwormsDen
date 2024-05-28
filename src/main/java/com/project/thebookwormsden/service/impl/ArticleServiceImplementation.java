package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Category;
import com.project.thebookwormsden.model.enums.ArticleType;
import com.project.thebookwormsden.repository.ArticleRepository;
import com.project.thebookwormsden.repository.CategoryRepository;
import com.project.thebookwormsden.repository.OrderRepository;
import com.project.thebookwormsden.repository.WishlistRepository;
import com.project.thebookwormsden.service.ArticleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImplementation implements ArticleService {

    private final ArticleRepository articleRepository;
    private final CategoryRepository categoryRepository;
    private final OrderRepository orderRepository;
    private final WishlistRepository wishlistRepository;

    public ArticleServiceImplementation(ArticleRepository articleRepository, CategoryRepository categoryRepository, OrderRepository orderRepository, WishlistRepository wishlistRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.orderRepository = orderRepository;
        this.wishlistRepository = wishlistRepository;
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

    @Override
    public Article createArticle(String name, ArticleType articleType, String description, Double price, Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        return articleRepository.save(new Article(name, articleType, description, price, category));
    }

    @Override
    public Article updateArticle(Long articleId, String name, ArticleType articleType, String description, Double price, Long categoryId) {
        Article article = articleRepository.findById(articleId).orElse(null);
        if (article != null) {

            if (name != null) {
                article.setArticle_name(name);
            }
            if (articleType != null) {
                article.setArticle_type(articleType);
            }
            if (description != null) {
                article.setDescription(description);
            }
            if (price != null) {
                article.setPrice(price);
            }
            if (categoryId != null) {
                Category category = categoryRepository.findById(categoryId).orElse(null);
                if (category != null) {
                    article.setCategory(category);
                }
            }
            return articleRepository.save(article);
        }
        return null;
    }


    public void deleteArticleById(Long id) {
        Article article = this.getArticleById(id);

        orderRepository.findByArticlesContaining(article)
                .stream()
                .peek(order -> order.getArticles().remove(article))
                .forEach(orderRepository::save);

        wishlistRepository.findByArticlesContaining(article)
                .stream()
                .peek(wishlist -> wishlist.getArticles().remove(article))
                .forEach(wishlistRepository::save);

        this.articleRepository.deleteById(id);
    }

}
