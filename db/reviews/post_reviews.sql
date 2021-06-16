insert into reviews
(user_id, review, star)
values
($1, $2, $3) 
returning review_id;