package com.project.thebookwormsden.repository;

import com.project.thebookwormsden.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article,Long> {
}
