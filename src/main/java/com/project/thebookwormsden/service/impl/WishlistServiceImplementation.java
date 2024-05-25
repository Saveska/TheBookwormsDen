package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.exception.UserNotFoundException;
import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.User;
import com.project.thebookwormsden.model.Wishlist;
import com.project.thebookwormsden.repository.ArticleRepository;
import com.project.thebookwormsden.repository.UserRepository;
import com.project.thebookwormsden.repository.WishlistRepository;
import com.project.thebookwormsden.service.WishlistService;
import org.springframework.stereotype.Service;

@Service
public class WishlistServiceImplementation implements WishlistService {

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final WishlistRepository wishlistRepository;

    public WishlistServiceImplementation(UserRepository userRepository,
                                         ArticleRepository articleRepository,
                                         WishlistRepository wishlistRepository) {
        this.userRepository = userRepository;
        this.articleRepository = articleRepository;
        this.wishlistRepository = wishlistRepository;
    }

    @Override
    public Wishlist getWishlistForUser(Long userId) throws UserNotFoundException {
        User u =  userRepository.findById(userId).orElseThrow(() ->
                new UserNotFoundException("User with id " + userId + " not found"));
        return wishlistRepository.findWishlistByUser(u);

    }

    @Override
    public void removeArticleFromWishlist(Long userId, Long articleId) throws UserNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(() ->
                new UserNotFoundException("User with id " + userId + " not found"));
        Wishlist wishlist = wishlistRepository.findWishlistByUser(user);
        if (wishlist != null) {
            Article articleToRemove = articleRepository.findById(articleId).orElseThrow(() ->
                    new IllegalArgumentException("Article not found"));
            wishlist.getArticles().remove(articleToRemove);
            wishlistRepository.save(wishlist);
        }
    }

    @Override
    public void addArticleToWishlist(Long userId, Long articleId) throws UserNotFoundException {
        Wishlist wishlist = getWishlistForUser(userId);
        if (wishlist != null) {
            Article articleToAdd = articleRepository.findById(articleId).orElseThrow(() ->
                    new IllegalArgumentException("Article not found"));
            wishlist.getArticles().add(articleToAdd);
            wishlistRepository.save(wishlist);
        }
    }
}
