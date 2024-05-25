package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Order;
import com.project.thebookwormsden.repository.OrderRepository;
import com.project.thebookwormsden.service.ArticleService;
import com.project.thebookwormsden.service.OrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository orderRepository;
    private final ArticleService articleService;

    public OrderServiceImplementation(OrderRepository orderRepository, ArticleService articleService) {
        this.orderRepository = orderRepository;
        this.articleService = articleService;
    }

    @Override
    public Order findById(Long id) {
        return this.orderRepository.findById(id).orElse(null);
    }

    @Override
    public List<Order> findAll() {
        return this.orderRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        this.orderRepository.deleteById(id);
    }

    @Override
    public Order createOrder(String address) {
        return orderRepository.save(new Order(address, LocalDateTime.now()));
    }

    @Override
    public Order addArticleToOrder(Long orderId, Long articleId) {
        Order order = this.orderRepository.findById(orderId).orElse(null);
        Article article = this.articleService.getArticleById(articleId);
        if (order == null || article == null) return null;
        order.getArticles().add(article);
        order.setTotalPrice(order.getTotalPrice() + article.getPrice());
        return orderRepository.save(order);
    }

    @Override
    public List<Article> findArticlesByOrderId(Long orderId) {
        Order order = this.orderRepository.findById(orderId).orElse(null);
        if (order == null) return null;
        return order.getArticles();
    }


}
