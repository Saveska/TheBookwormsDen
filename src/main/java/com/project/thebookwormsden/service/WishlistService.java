package com.project.thebookwormsden.service;

import com.project.thebookwormsden.exception.UserNotFoundException;
import com.project.thebookwormsden.model.Wishlist;

import java.util.List;

public interface WishlistService {

    Wishlist getWishlistForUser(Long userId) throws UserNotFoundException;

    void removeArticleFromWishlist(Long userId, Long articleId) throws UserNotFoundException;

    void addArticleToWishlist(Long userId, Long articleId) throws UserNotFoundException;
}
