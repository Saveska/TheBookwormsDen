package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.User;
import com.project.thebookwormsden.repository.UserRepository;
import com.project.thebookwormsden.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User register(String name, String surname, String role, String email, String password, String repeatPass, String phoneNumber) {
//        if (name.isEmpty() || name == null
//                || surname.isEmpty() || surname == null
//                || email.isEmpty() || email == null
//                || password.isEmpty() || password == null
//                || phoneNumber.isEmpty() || phoneNumber == null)
//            throw new Exception();
//        if (!password.equals(repeatPass))
//            throw new Exception();
//        if (this.userRepository.findByEmail(email).isPresent())
//            throw new Exception();
//        User user = new User(name, surname, role, email, passwordEncoder.encode(password), phoneNumber);
        return null;
    }
}
