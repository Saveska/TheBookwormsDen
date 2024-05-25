package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.User;

import java.util.Optional;

public interface UserService {
    User register(String name, String surname, String role, String email, String password, String repeatPass,String phoneNumber);
    Optional<User> findByEmail(String email);
    Optional<User> findUserById(Long id);
    void deleteById(Long id);
}
