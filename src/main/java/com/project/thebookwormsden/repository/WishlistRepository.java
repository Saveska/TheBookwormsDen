package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.User;
import com.project.thebookwormsden.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {

    Wishlist findWishlistByUser(User user);

}
