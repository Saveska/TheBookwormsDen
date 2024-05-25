package com.project.thebookwormsden;

import com.project.thebookwormsden.model.Order;
import com.project.thebookwormsden.repository.OrderRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer {
    private final OrderRepository orderRepository;

    public DataInitializer(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostConstruct
    public void initialize() {
        initOrders();
    }

    private void initOrders() {
        for (int i = 0; i < 10; i++) {
            Order order = new Order("address" + i, LocalDateTime.now().plusMinutes(i));
            this.orderRepository.save(order);
        }
    }
}
