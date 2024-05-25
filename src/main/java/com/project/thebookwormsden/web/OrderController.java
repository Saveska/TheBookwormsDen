package com.project.thebookwormsden.web;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Order;
import com.project.thebookwormsden.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findById(@PathVariable Long id) {
        Order order = orderService.findById(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public List<Order> findAll() {
        return orderService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        orderService.deleteById(id);
        Order deletedOrder = this.orderService.findById(id);
        if (deletedOrder == null)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Order> save(@RequestParam String address) {
        Order order = orderService.createOrder(address);
        if (order != null)
            return ResponseEntity.ok().body(order);
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/{orderId}/add-article/{articleId}")
    public ResponseEntity<Order> addArticleToOrder(@PathVariable Long orderId, @PathVariable Long articleId) {
        Order order = orderService.addArticleToOrder(orderId, articleId);
        if (order == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/{orderId}/articles")
    public ResponseEntity<List<Article>> findArticlesByOrderId(@PathVariable Long orderId) {
        List<Article> articles = orderService.findArticlesByOrderId(orderId);
        if (articles == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(articles);
    }

}