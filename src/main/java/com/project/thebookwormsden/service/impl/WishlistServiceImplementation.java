package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.User;
import com.project.thebookwormsden.model.Wishlist;
import com.project.thebookwormsden.repository.ArticleRepository;
import com.project.thebookwormsden.repository.UserRepository;
import com.project.thebookwormsden.repository.WishlistRepository;
import com.project.thebookwormsden.service.WishlistService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistServiceImplementation implements WishlistService {

    private UserRepository userRepository;
    private ArticleRepository articleRepository;
    private final WishlistRepository wishlistRepository;

    public WishlistServiceImplementation(UserRepository userRepository,
                                         WishlistRepository wishlistRepository) {
        this.userRepository = userRepository;
        this.wishlistRepository = wishlistRepository;
    }

    @Override
    public Wishlist getWishlistForUser(Long userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
        // ovoj metod treba da se implementira vo user servisite
        return null;
    }

    @Override
    public void removeArticleFromWishlist(Long userId, Long articleId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Wishlist wishlist = wishlistRepository.findWishlistByUser(user);
        if (wishlist != null) {
            Article articleToRemove = articleRepository.findById(articleId).orElseThrow(() -> new IllegalArgumentException("Article not found"));
            wishlist.getArticlesList().remove(articleToRemove);
            wishlistRepository.save(wishlist);
        }
    }

    @Override
    public void addArticleToWishlist(Long userId, Long articleId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
//        Wishlist wishlist = wishlistRepository.findByUser(user);
//        // ovoj metod treba da se implementira vo user servisite
//        if (wishlist != null) {
//            Article articleToAdd = articleRepository.findById(articleId).orElseThrow(() -> new IllegalArgumentException("Article not found"));
//            wishlist.getArticlesList().add(articleToAdd);
//            wishlistRepository.save(wishlist);
//        }
    }
}
