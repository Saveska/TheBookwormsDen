package com.project.thebookwormsden.web;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.enums.ArticleType;
import com.project.thebookwormsden.service.ArticleService;
import com.project.thebookwormsden.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ArticleController {


    private final ArticleService articleService;
    private final CategoryService categoryService;

    public ArticleController(ArticleService articleService, CategoryService categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
    }

    @GetMapping("/articles")
    public ResponseEntity<?> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @GetMapping("/articles/{articleId}")
    public ResponseEntity<?> getArticleById(@PathVariable Long articleId) {
        Article article = articleService.getArticleById(articleId);
        if (article != null) {
            return ResponseEntity.ok(article);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    @GetMapping("/categories/{categoryId}/articles")
    public ResponseEntity<?> getArticlesByCategory(@PathVariable Long categoryId) {
        return ResponseEntity.ok(articleService.getArticlesByCategory(categoryId));
    }

    @PostMapping("/articles/add")
    public ResponseEntity<Article> createArticle(
            @RequestParam String name,
            @RequestParam ArticleType articleType,
            @RequestParam String description,
            @RequestParam Double price,
            @RequestParam Long categoryId) {

        Article article = articleService.createArticle(name, articleType, description, price, categoryId);
        if (article != null)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/articles/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        articleService.deleteArticleById(id);
        Article deletedOrder = this.articleService.getArticleById(id);
        if (deletedOrder == null)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}

