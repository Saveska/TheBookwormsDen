package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByArticlesContaining(Article article);
}
