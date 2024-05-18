package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Wishlist;

import java.util.List;

public interface WishlistService {

    Wishlist getWishlistForUser(Long userId);

    void removeArticleFromWishlist(Long userId, Long articleId);

    void addArticleToWishlist(Long userId, Long articleId);
}
