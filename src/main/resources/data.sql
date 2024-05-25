-- Insert fake data into bookworm_user
INSERT INTO bookworm_user (user_id) VALUES
                                        (DEFAULT), (DEFAULT), (DEFAULT);

-- Insert fake data into category
INSERT INTO category (category_name) VALUES
                                         ('Fiction'), ('Non-Fiction'), ('Science');

-- Insert fake data into article
INSERT INTO article (article_name, article_type, description, price, category_id) VALUES
                                                                                      ('Article 1', 'BOOK', 'Description for Article 1', 10.0, 1),
                                                                                      ('Article 2', 'BOOK', 'Description for Article 2', 20.0, 2),
                                                                                      ('Article 3', 'COMICS', 'Description for Article 3', 30.0, 3);

-- Insert fake data into rating
INSERT INTO rating (user_id, article_id, rating_value) VALUES
                                                           (1, 1, 5),
                                                           (2, 2, 4),
                                                           (3, 3, 3);

-- Insert fake data into wishlist
INSERT INTO wishlist (wishlist_id, user_user_id) VALUES
                                        (DEFAULT, 1), (DEFAULT, 2), (DEFAULT, 3);

-- Insert fake data into wishlist_articles
INSERT INTO article_wishlist (wishlist_id, article_id) VALUES
                                                            (1, 1), (1, 2), (2, 3), (3, 1), (3, 2);
