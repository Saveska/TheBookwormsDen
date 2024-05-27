package com.project.thebookwormsden.data;

import com.project.thebookwormsden.model.*;
import com.project.thebookwormsden.model.enums.ArticleType;
import com.project.thebookwormsden.model.enums.Status;
import com.project.thebookwormsden.repository.*;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.*;

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

        Article article3 = new Article();
        article3.setArticle_name("Pride and Prejudice");
        article3.setArticle_type(ArticleType.BOOK);
        article3.setDescription("A romantic novel by Jane Austen");
        article3.setPrice(8.55);
        article3.setCategory(fiction);

        Article article4 = new Article();
        article4.setArticle_name("To Kill a Mockingbird");
        article4.setArticle_type(ArticleType.BOOK);
        article4.setDescription("A novel by Harper Lee that explores themes of racial injustice");
        article4.setPrice(12.99);
        article4.setCategory(fiction);

        Article article5 = new Article();
        article5.setArticle_name("Educated: A Memoir");
        article5.setArticle_type(ArticleType.BOOK);
        article5.setDescription("A memoir by Tara Westover about growing up in a strict and abusive household in rural Idaho");
        article5.setPrice(14.99);
        article5.setCategory(nonFiction);

        Article article6 = new Article();
        article6.setArticle_name("1984");
        article6.setArticle_type(ArticleType.BOOK);
        article6.setDescription("A dystopian novel by George Orwell");
        article6.setPrice(9.99);
        article6.setCategory(fiction);


        articleRepository.saveAll(List.of(article1, article2, article3, article4, article5, article6));

        User user1 = new User("John", "Doe", "USER", "john.doe@example.com", "password123", "1234567890");
        User user2 = new User("Jane", "Doe", "ADMIN", "jane.doe@example.com", "password123", "0987654321");
        User user3 = new User("Alice", "Smith", "USER", "alice.smith@example.com", "password123", "1122334455");
        User user4 = new User("Bob", "Johnson", "USER", "bob.johnson@example.com", "password123", "6677889900");
        User user5 = new User("Charlie", "Brown", "ADMIN", "charlie.brown@example.com", "password123", "1231231234");
        User user6 = new User("Emma", "Davis", "USER", "emma.davis@example.com", "password123", "9876543210");


        userRepository.saveAll(List.of(user1, user2, user3, user4, user5, user6));

        Wishlist wishlist1 = new Wishlist();
        wishlist1.setUser(user1);
        List<Article> list1 = new ArrayList<>();
        list1.add(article1);
        wishlist1.setArticles(list1);

        Wishlist wishlist2 = new Wishlist();
        wishlist2.setUser(user2);
        List<Article> list2 = new ArrayList<>();
        list2.add(article2);
        wishlist2.setArticles(list2);

        Wishlist wishlist3 = new Wishlist();
        wishlist3.setUser(user3);
        List<Article> list3 = new ArrayList<>();
        list3.add(article2);
        list3.add(article4);
        wishlist3.setArticles(list3);

        Wishlist wishlist4 = new Wishlist();
        wishlist4.setUser(user4);
        List<Article> list4 = new ArrayList<>();
        list4.add(article5);
        list4.add(article6);
        wishlist4.setArticles(list4);

        wishlistRepository.saveAll(List.of(wishlist1, wishlist2, wishlist3, wishlist4));

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
