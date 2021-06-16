SELECT cart_id from cart
where user_id = $1 and active = true;