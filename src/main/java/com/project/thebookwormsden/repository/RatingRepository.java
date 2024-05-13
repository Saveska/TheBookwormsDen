package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.Rating;
import lombok.extern.java.Log;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating,Long> {
    List<Rating> getRatingsByArticleId(Long articleId);
    Rating getRatingsByArticleIdAndUserId(Long articleId, Long userId);
}
