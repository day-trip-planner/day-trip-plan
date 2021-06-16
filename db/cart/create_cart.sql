INSERT INTO cart
(user_id, active)
values
($1, TRUE) 
RETURNING cart_id;