INSERT INTO junction
(cart_id, product_id, quantity)
VALUES
($1, $2, 1);
SELECT * FROM junction j
JOIN product p ON j.product_id = p.product_id
WHERE j.cart_id = $1
ORDER BY j.product_id;