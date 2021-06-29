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
  photo_one VARCHAR(7000),
  photo_two VARCHAR(7000),
  description VARCHAR(90000),
  latitude INT,
  longitude int,
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
    review VARCHAR(60000), 
    star INT,
    user_id INT REFERENCES users(user_id)
);

insert into product
(name, price, photo_one, photo_two, description, latitude, longitude)
values
('Luxury Inns - Grand Canyon', 239, 'https://www.grandcanyonlodges.com/content/uploads/2020/05/Bright-Angel-Exterior-1600x510.jpg', 
'https://www.grandcanyonlodges.com/content/uploads/2013/07/8-Cabin-3-1050x510.jpg', 
'Our cabins provide a rustic charm, and a twist on our typical luxurious stays. Paired with the scenic views and close proximity to the treasured Grand Canyon. This property makes the perfect stay for anyone.',
36.057437, -112.137622),

('Luxury Inns - Maui', 305, 'https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/9b0bef2a9aa948c4f91b0288f7f72179/original.jpg',
'https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/d496183378193905ea5a72f927c78371/original.jpg',
'These oceanfront bungalows offer a truly unforgettable Hawaiian experience. Our beautiful accommodations are ideally equipped with modern amenities to make you feel right at home. Come and enjoy your next luxurious stay with us.',
20.802957, -156.310683),

('Luxury Inns - San Francisco', 82, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/8522846.jpg?k=341db20d9dc54fd0ff558b1af10561cd6cd87e9fc3bfc906fcf1d109d9aeb8c4&o=&hp=1 ',
'https://cf.bstatic.com/xdata/images/hotel/max1024x768/29879430.jpg?k=2cd32888d322a1903d69267f1e45c6d5ffa2cc5d0b4d7a3fa162b71860dcff31&o=&hp=1 ',
'Featuring city views, this room features high ceilings, an innovative pull-out minibar, a modern desk with built-in USB ports and bedside reading lights. The perfect office getaway for anyone traveling for work.',
37.779026, -122.419906),

('Luxury Inns - New York', 97, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/de/de/e0/presidential-suite-bedroom.jpg?w=1000&h=-1&s=1', 
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6d/42/d6/outdoor-seating.jpg?w=1000&h=-1&s=1', 
'Relax in our chic boutique accommodations, which boast thoughtful details, cutting-edge technology and expansive views of NYC. Our elegantly designed king guest room features rustic, earth tones and garden-inspired whimsical touches like rabbit desk lamps.', 
40.712728, -74.006015),

('Luxury Inns - Asheville', 149, 'https://cache.marriott.com/marriottassets/marriott/AVLBR/avlbr-lobby-1036-hor-clsc.jpg?downsize=1440px:*', 
'https://cache.marriott.com/marriottassets/marriott/AVLBR/avlbr-queen-9537-hor-clsc.jpg?downsize=1440px:*', 
'Our downtown location means you can walk to the breweries or take a short ride to the Biltmore. Rest easy in a modern and updated guest room with enough space for the whole family. As one of the tallest hotels in downtown Asheville, you can see all that Asheville has to offer.',
35.600950, -82.554016),

('Luxury Inns - DC', 162, 'https://media.cntraveler.com/photos/5b215f658dc65e080e91c4be/master/w_3600,h_2400,c_limit/InterContinental-Washington-D.C.---The-Wharf_2018_Guestroom-View-of-Potomac-River-2.jpg',
'https://cache.marriott.com/marriottassets/marriott/WASSX/wassx-exterior-3752-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*', 
'Located downtown, with close proximity to all of the Capitals finest monuments and attractions.After enjoying a day of sightseeing, relax in the luxuries that our Inn provides.',
 38.8949992, -77.036558),

('Luxury Inns - New Orleans', 115, 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_800,q_75,w_640/v1/clients/neworleans/69713859_H1_NEW_Patio_Model_Room_2__b10f4c92-8a8d-4b0d-92ad-ad5b7d1c4eca.jpg', 
'https://i.pinimg.com/originals/c6/5f/63/c65f63c27e309e9b32470ef246596832.jpg', 
'Steps from the French Quarter, enjoy this lively and vibrant city. Savor the tactfully designed rooms each paired with a balcony overlooking the streets of New Orleans.',
 29.949932, -90.070116),

('Luxury Inns - Moab', 154, 'https://d3qvqlc701gzhm.cloudfront.net/thumbs/617ba12aa8a682f923fa8a586a606bbda6e194b009ebd207ca923a28d0a9fe9a-750.jpg', 
'https://www.hotelmoabdowntown.com/wp-content/uploads/sites/82/2019/02/IMG_4381-1024x683.jpg', 
'Delight in the subtle charms of this rustic venue. Within minutes of Arches National Park. THis is the perfect stay for an adventure loving group.', 
38.573810, -109.546215),

('Luxury Inns - Jackson Hole', 434, 'http://jacksonhole-traveler-production.s3.amazonaws.com/wp-content/uploads/2014/05/handlebar-restaurant-1280x853.jpg', 
'https://m.fourseasons.com/alt/img-opt/~70.1530.0,0000-250,9574-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/JAC/JAC_695_original.jpg', 
'description', 43.684017, -110.443663),

('Luxury Inns - Aspen', 319, 'https://thumbnails.expedia.com/SFp67zswQ0RFlpkeYxuD82YhVTU=/500x333/smart/filters:quality(60)/exp.cdn-hotels.com/hotels/2000000/1330000/1328600/1328567/8951563d_y.jpg', 
'https://www.hotelaspen.com/files/5795/DeluxeRoom_2Q.jpg', 
'description', 39.191113, -106.823561),

('Luxury Inns - Chicago', 129, 'https://freehandhotels.com/chicago/wp-content/uploads/sites/3/2016/07/FHqueen.jpg', 
'https://freehandhotels.com/chicago/wp-content/uploads/sites/3/2018/07/gallerysliderlobby-1920x1080.jpg', 
'description', 41.878113, -87.629799),

('Luxury Inns - Pittsburgh', 145, 'https://d2a2nuxd7hhwtm.cloudfront.net/media/images/PGH-Rooms-Large-Hero.width-960.jpg', 
'https://media-cdn.tripadvisor.com/media/photo-s/0c/c7/53/a2/ace-pittsburgh-lobby.jpg', 
'Large rooms have one king bed, places for books and writing and timeless warming comforts, a good Pendleton quilt designed by us specially for Pittsburgh, and window seats for divining plans large and small.', 
40.440624, -79.995888),

('Luxury Inns - Seattle', 129, 'https://damhyul3s75yv.cloudfront.net/photos/4201/original_Best%20Boutique%20Hotels%20in%20Seattle.jpg', 
'https://www.innatthemarket.com/application/files/5114/5652/3912/water-view_deluxe-02.jpg', 
'decsription', 47.606209, -122.332069),

('Luxury Inns - Miami', 169, 'https://freehandhotels.com/miami/wp-content/uploads/sites/2/2019/01/Freehand_Miami_Home2.jpg', 
'https://freehandhotels.com/miami/wp-content/uploads/sites/2/2016/07/MIA-King-Bedroom-2.jpg', 
'description', 25.761681, -80.191788),

('Luxury Inns - Vegas', 180, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/61/88/fa/artisan-hotel.jpg?w=1200&h=-1&s=1', 
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a7/14/cb/masterpiece-suite--v6223166.jpg?w=1200&h=-1&s=1 ', 
'description', 36.169941, -115.139832),

('Luxury Inns - San Antonio', 133, 'https://www.omnihotels.com/-/media/images/hotels/satwat/digex/hero/satwat-2880x1870.jpg', 
'https://digital.ihg.com/is/image/ihg/hotel-indigo-san-antonio-6550931229-4x3', 
'description', 29.424600, -98.495141),

('Luxury Inns - Savannah', 147, 'https://shershegoes.com/wp-content/uploads/Best-Hotels-in-Savannah-GA.jpg', 
'https://d3qpqomdjdty0i.cloudfront.net/perrylanehotel.com-1533827170/cms/cache/v2/5b464a1176e77.jpg/1920x1080/fit/80/4928dba7921c4a71ea2b0684af0e66c5.jpg', 
'description', 32.080926, -81.091177),

('Luxury Inns - Mackinac Island', 202, 'https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/583/176/1583176564_5e5d5b74c4086-thumb.jpg', 
'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/mission-point/media/cache/missionpoint-rooms-new-01-5c9cf41b43086-558x382.jpg', 
'description', 45.849204, -84.619672),

('Luxury Inns - Charleston', 223, 'https://www.planetware.com/wpimages/2019/03/south-carolina-charleston-best-hotels-belmond-charleston-place.jpg', 
'https://cf.bstatic.com/xdata/images/hotel/max1024x768/151433709.jpg?k=bc696768074ddf4e6c2de31de1038f0947998dbe994ff9cd50dd7a37d42146fa&o=&hp=1', 
'description', 32.787601, -79.940273),

('Luxury Inns - Portland', 138, 'https://content.fortune.com/wp-content/uploads/2019/12/wlk_exterior_alder_4250a.jpg ', 
'https://www.hotelvintage-portland.com/images/1700-960/povpg-06-de81a64b.jpg', 
'description',  45.520247, -122.674195),

('Luxury Inns - Nasheville', 159, 'https://www.nashville.com/wp-content/uploads/2018/03/omni-nashville-hotel.jpg', 
'https://i.pinimg.com/originals/d9/3d/57/d93d576af6621541b6f0368cda5eebf4.jpg', 
'description', 37.441686, -98.422577),

('Luxury Inns - Cape Cod', 265, 'https://www.planetware.com/wpimages/2019/11/massachusettes-cape-cod-best-hotels-wequassett-resort-golf-club.jpg ', 
'https://secure.s.forbestravelguide.com/img/properties/wequassett-resort-and-golf-club/wequassett-resort-and-golf-club-signature-collection-bedroom.jpg ', 
'A lavish destination featuring both luxurious accommodations and surroundings. Featuring a stylish and rustic design with plenty of activities for a fun and relaxing stay. ',
41.798807, -69.996013),

('Luxury Inns - Anchorage', 318, 'https://www.hotelscombined.com.au/himg/15/f4/81/revato-26901-12298274-689040.jpg ',
'https://media.millenniumhotels.com/Live/B/3/B/B3BBF209-B7A9-4334-AE63-353BD00D9EEE/LakefrontAnchorage_slide01.jpg?r=210603125100 ',
'A lakefront property, thoughtfully furnished to give our guests a luxurious stay away from home. Our deluxe rooms are spacious and full of the charm of the Alaskan comforts.',
61.216313, -149.894852);

