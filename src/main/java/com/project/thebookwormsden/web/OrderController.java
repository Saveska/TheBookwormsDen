package com.project.thebookwormsden.web;

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
}