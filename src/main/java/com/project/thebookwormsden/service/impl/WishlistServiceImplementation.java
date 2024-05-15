package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.Wishlist;
import com.project.thebookwormsden.repository.UserRepository;
import com.project.thebookwormsden.repository.WishlistRepository;
import com.project.thebookwormsden.service.WishlistService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistServiceImplementation implements WishlistService {

    private UserRepository userRepository;

    public WishlistServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Wishlist> getWishlistForUser(Long userId) {
        return userRepository.findByUserId(userId);
        // ovoj metod treba da se implementira vo user servisite
    }
}
