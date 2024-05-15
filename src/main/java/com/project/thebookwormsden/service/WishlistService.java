package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Wishlist;

import java.util.List;

public interface WishlistService {

    public List<Wishlist> getWishlistForUser(Long userId);

}
