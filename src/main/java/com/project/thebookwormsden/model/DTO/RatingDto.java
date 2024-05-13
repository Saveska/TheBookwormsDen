package com.project.thebookwormsden.model.DTO;

import lombok.Data;

@Data
public class RatingDto {
    private Long articleId;
    private Long userId;
    private int ratingValue;
}
