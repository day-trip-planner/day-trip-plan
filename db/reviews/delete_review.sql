delete from reviews
where review_id = $1;
select * from reviews
order by review_id;