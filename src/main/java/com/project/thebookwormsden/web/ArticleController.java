package com.project.thebookwormsden.web;
import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.service.ArticleService;
import com.project.thebookwormsden.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ArticleController {


    private ArticleService articleService;
    private CategoryService categoryService;

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

}

