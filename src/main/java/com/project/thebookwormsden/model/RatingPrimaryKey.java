package com.project.thebookwormsden.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class RatingPrimaryKey implements Serializable {
    private Long userId;
    private Long articleId;

    public RatingPrimaryKey(Long userId, Long articleId) {
        this.userId = userId;
        this.articleId = articleId;
    }
}
