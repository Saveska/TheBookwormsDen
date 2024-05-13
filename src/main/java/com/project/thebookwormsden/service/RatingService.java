package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.DTO.RatingDto;
import com.project.thebookwormsden.model.Rating;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface RatingService {


    //Go vrakja rejtingot za dadena kniga
    Float getRatingForArticle(Long articleId);

    //Go vrakja rejtingot za dadena kniga i korisnik
    Rating getRatingByArticleIdAndUserId(Long articleId,Long userId);

    //Zacuvuva daden rejting
    Optional<Rating> save(RatingDto ratingDto);

}
