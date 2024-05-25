package com.project.thebookwormsden.data;

import com.project.thebookwormsden.model.*;
import com.project.thebookwormsden.model.enums.ArticleType;
import com.project.thebookwormsden.model.enums.Status;
import com.project.thebookwormsden.repository.*;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class DataLoader implements ApplicationRunner {

    private final ArticleRepository articleRepository;

    private final CategoryRepository categoryRepository;

    private final OrderRepository orderRepository;

    private final RatingRepository ratingRepository;

    private final UserRepository userRepository;

    private final WishlistRepository wishlistRepository;

    public DataLoader(ArticleRepository articleRepository, CategoryRepository categoryRepository, OrderRepository orderRepository, RatingRepository ratingRepository, UserRepository userRepository, WishlistRepository wishlistRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
        this.orderRepository = orderRepository;
        this.ratingRepository = ratingRepository;
        this.userRepository = userRepository;
        this.wishlistRepository = wishlistRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Category fiction = new Category();
        fiction.setCategory_name("Fiction");
        Category nonFiction = new Category();
        nonFiction.setCategory_name("Non-Fiction");

        categoryRepository.saveAll(List.of(fiction, nonFiction));

        Article article1 = new Article();
        article1.setArticle_name("The Great Gatsby");
        article1.setArticle_type(ArticleType.BOOK);
        article1.setDescription("A classic novel by F. Scott Fitzgerald");
        article1.setPrice(10.99);
        article1.setCategory(fiction);

        Article article2 = new Article();
        article2.setArticle_name("Sapiens: A Brief History of Humankind");
        article2.setArticle_type(ArticleType.BOOK);
        article2.setDescription("A book by Yuval Noah Harari");
        article2.setPrice(15.99);
        article2.setCategory(nonFiction);

        articleRepository.saveAll(List.of(article1, article2));

        User user1 = new User("John", "Doe", "USER", "john.doe@example.com", "password123", "1234567890");
        User user2 = new User("Jane", "Doe", "ADMIN", "jane.doe@example.com", "password123", "0987654321");

        userRepository.saveAll(List.of(user1, user2));

        Wishlist wishlist1 = new Wishlist();
        wishlist1.setUser(user1);
        wishlist1.setArticles(new HashSet<>(Set.of(article1)));

        Wishlist wishlist2 = new Wishlist();
        wishlist2.setUser(user2);
        wishlist2.setArticles(new HashSet<>(Set.of(article2)));

        wishlistRepository.saveAll(List.of(wishlist1, wishlist2));

        Order order1 = new Order("123 Main St", LocalDateTime.now());
        order1.setStatus(Status.CREATED);
        order1.setArticles(List.of(article1));
        order1.setTotalPrice(10.99);

        Order order2 = new Order("456 Elm St", LocalDateTime.now());
        order2.setStatus(Status.CREATED);
        order2.setArticles(List.of(article2));
        order2.setTotalPrice(15.99);

        orderRepository.saveAll(List.of(order1, order2));

        Rating rating1 = new Rating(user1.getUser_id(), article1.getArticle_id(), 5);
        Rating rating2 = new Rating(user2.getUser_id(), article2.getArticle_id(), 4);

        ratingRepository.saveAll(List.of(rating1, rating2));
    }
}
