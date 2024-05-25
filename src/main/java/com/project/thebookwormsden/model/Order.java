package com.project.thebookwormsden.model;

import com.project.thebookwormsden.model.enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;

    private LocalDateTime createdAt;

    @Enumerated(value = EnumType.STRING)
    private Status status;

    @ManyToMany
    @JoinTable(
            name = "order_article",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "article_id")
    )
    private List<Article> articles;
    Double totalPrice;

    public Order(String address, LocalDateTime now) {
        this.address = address;
        this.createdAt = now;
    }
}