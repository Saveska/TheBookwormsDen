package com.project.thebookwormsden.model;

import jakarta.persistence.Id;

import java.io.Serializable;

public class RatingPrimaryKey implements Serializable {
    private Long userId;
    private Long articleId;

    public RatingPrimaryKey(Long userId, Long articleId) {
        this.userId = userId;
        this.articleId = articleId;
    }
}
