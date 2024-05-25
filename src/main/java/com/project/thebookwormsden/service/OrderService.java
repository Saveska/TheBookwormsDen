package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Order;

import java.util.List;

public interface OrderService {
    Order findById(Long id);

    List<Order> findAll();

    void deleteById(Long id);

    Order createOrder(String address);
    Order addArticleToOrder(Long orderId, Long articleId);
    List<Article> findArticlesByOrderId(Long orderId);
}
