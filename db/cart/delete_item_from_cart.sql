delete from junction
where cart_id = $1 and product_id = $2;
select * from junction j
where j.cart_id = $1
order by j.product_id;