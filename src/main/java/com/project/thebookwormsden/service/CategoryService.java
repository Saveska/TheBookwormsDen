package com.project.thebookwormsden.service;

import com.project.thebookwormsden.model.Article;
import com.project.thebookwormsden.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();

    Category getCategoryById(Long categoryId);

    Category createCategory(String categoryName);

    Category updateCategory(Long categoryId, String categoryName);

    void deleteCategory(Long categoryId);
}
