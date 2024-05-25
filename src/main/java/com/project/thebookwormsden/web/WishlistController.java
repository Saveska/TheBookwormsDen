package com.project.thebookwormsden.web;

import com.project.thebookwormsden.exception.UserNotFoundException;
import com.project.thebookwormsden.model.Wishlist;
import com.project.thebookwormsden.service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/forUser/{userId}")
    public ResponseEntity<Wishlist> getWishlistForUser(@PathVariable Long userId) {
        Wishlist wishlist;
        try {
            wishlist = wishlistService.getWishlistForUser(userId);
            return ResponseEntity.ok(wishlist);
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/forUser/{userId}/article/{articleId}")
    public ResponseEntity<Void> removeArticleFromWishlist(@PathVariable Long userId, @PathVariable Long articleId) {
        try {
            wishlistService.removeArticleFromWishlist(userId, articleId);
            return ResponseEntity.noContent().build();
        }
        catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/forUser/{userId}/articleToAdd/{articleId}")
    public ResponseEntity<Void> addArticleToWishlist(@PathVariable Long userId, @PathVariable Long articleId) {
        try {
            wishlistService.addArticleToWishlist(userId, articleId);
            return ResponseEntity.ok().build();
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
