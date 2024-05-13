package com.project.thebookwormsden.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

@Entity
@Data
@IdClass(RatingPrimaryKey.class)
public class Rating {
    @Id
    private Long userId;
    @Id
    private Long articleId;
    private int ratingValue;

    public Rating(Long userId, Long articleId, int ratingValue) {
        this.userId = userId;
        this.articleId = articleId;
        this.ratingValue = ratingValue;
    }

    public Rating() {

    }
}
