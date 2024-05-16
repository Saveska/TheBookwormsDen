package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Order;

import java.util.List;

public interface OrderService {
    Order findById(Long id);

    List<Order> findAll();

    void deleteById(Long id);
}
