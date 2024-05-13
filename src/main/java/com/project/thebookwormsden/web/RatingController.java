package com.project.thebookwormsden.web;


import com.project.thebookwormsden.model.DTO.RatingDto;
import com.project.thebookwormsden.model.Rating;
import com.project.thebookwormsden.service.RatingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/rating")
public class RatingController {

    private final RatingService ratingService;

    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @GetMapping("/articleRatings/{articleId}")
    public Float getRatingsForArticle(@PathVariable Long articleId){
        return ratingService.getRatingForArticle(articleId);
    }

    @PostMapping("/addRating")
    public ResponseEntity<Rating> addRating(@RequestBody RatingDto ratingDto){
        return ratingService.save(ratingDto).map(rating -> ResponseEntity.ok().body(rating)).
                orElseGet(() -> ResponseEntity.badRequest().build());
    }

}
