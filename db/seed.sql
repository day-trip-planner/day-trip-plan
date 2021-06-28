DROP TABLE IF EXISTS junction;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(2000)
);

CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price int,
  user_id int REFERENCES users(user_id)
);

CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  active BOOLEAN
);

CREATE TABLE junction (
  product_cart_id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES cart(cart_id),
  product_id INT REFERENCES product(product_id),
  quantity INT
);


CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    -- Product_id varchar not null refernces product_id,
    review VARCHAR(60000), 

    -- not null , 
    star INT,
    -- rating int not null check (
      -- rating >=1 and rating <=5)
    -- )
    user_id INT REFERENCES users(user_id)
)
