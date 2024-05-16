package com.project.thebookwormsden.model;

import com.project.thebookwormsden.model.enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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

    public Order(String address, LocalDateTime createdAt) {
        this.address = address;
        this.createdAt = createdAt;
        this.status = Status.CREATED;
    }
}