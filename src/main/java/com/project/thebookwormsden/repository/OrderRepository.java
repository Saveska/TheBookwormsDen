package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
