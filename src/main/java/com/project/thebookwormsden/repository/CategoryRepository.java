package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
