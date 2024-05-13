package com.project.thebookwormsden.service.impl;

import com.project.thebookwormsden.model.DTO.RatingDto;
import com.project.thebookwormsden.model.Rating;
import com.project.thebookwormsden.repository.RatingRepository;
import com.project.thebookwormsden.service.RatingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingServiceImpl implements RatingService {
    private final RatingRepository ratingRepository;

    public RatingServiceImpl(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }


    @Override
    public Float getRatingForArticle(Long articleId) {
        List<Rating> ratings = ratingRepository.getRatingsByArticleId(articleId);
        int totalRating = 0;
        int numOfRatings = 0;
        for (Rating rating : ratings) {
            totalRating += rating.getRatingValue();
            numOfRatings++;
        }
        return (float) (totalRating/numOfRatings);
    }

    @Override
    public Rating getRatingByArticleIdAndUserId(Long articleId, Long userId) {
        return ratingRepository.getRatingsByArticleIdAndUserId(articleId,userId);
    }

    @Override
    public Optional<Rating> save(RatingDto ratingDto) {
        Rating r = new Rating(ratingDto.getArticleId(), ratingDto.getUserId(), ratingDto.getRatingValue());
        ratingRepository.save(r);
        return Optional.of(r);
    }
}
