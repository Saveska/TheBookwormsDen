package com.project.thebookwormsden.web;

import com.project.thebookwormsden.model.Wishlist;
import com.project.thebookwormsden.service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/wishlist/{userId}")
    public ResponseEntity<Wishlist> getWishlistForUser(@PathVariable Long userId) {
        Wishlist wishlist = wishlistService.getWishlistForUser(userId);
        if (wishlist != null) {
            return ResponseEntity.ok(wishlist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
