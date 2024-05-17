package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
