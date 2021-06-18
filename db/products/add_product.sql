INSERT INTO product
(product_id, name, price)
VALUES
($1, $2, $3);
SELECT * FROM product
order by product_id;