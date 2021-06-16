select * from junction j
join product p on j.product_id = p.product_id
where j.cart_id = $1
order by j.product_id;