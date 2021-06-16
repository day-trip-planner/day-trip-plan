UPDATE junction
set quantity = $3
where cart_id = $1 and product_id = $2;