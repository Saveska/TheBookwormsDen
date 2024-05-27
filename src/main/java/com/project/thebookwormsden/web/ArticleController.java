package com.project.thebookwormsden.web;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Category;
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

    @PostMapping("/articles/{articleId}/update")
    public ResponseEntity<Article> updateArticle(
            @PathVariable Long articleId,
            @RequestParam String name,
            @RequestParam ArticleType articleType,
            @RequestParam String description,
            @RequestParam Double price,
            @RequestParam Long categoryId) {

        Article updatedArticle = articleService.updateArticle(articleId, name, articleType, description, price, categoryId);
        if (updatedArticle != null) {
            return ResponseEntity.ok(updatedArticle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/categories/add")
    public ResponseEntity<Category> createCategory(@RequestParam String categoryName) {
        Category createdCategory = categoryService.createCategory(categoryName);
        return ResponseEntity.ok(createdCategory);
    }

    @PostMapping("/categories/{categoryId}/update")
    public ResponseEntity<Category> updateCategory(
            @PathVariable Long categoryId,
            @RequestParam String categoryName) {

        Category updatedCategory = categoryService.updateCategory(categoryId, categoryName);
        if (updatedCategory != null) {
            return ResponseEntity.ok(updatedCategory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/categories/{categoryId}/delete")
    public ResponseEntity<?> deleteCategory(@PathVariable Long categoryId) {
        categoryService.deleteCategory(categoryId);
        return ResponseEntity.ok().build();
    }

}

