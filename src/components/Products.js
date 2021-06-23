import axios from 'axios'
import {useState} from 'react'

const {REACT_APP_API_KEY, REACT_APP_API_HOST} = process.env

const Products = () => {

    //car rental information
    const [location] = useState('London')

    const carLocation = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
        params: {name: {location}},
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };

    axios.request(carLocation)
        .then((response) => {
	        console.log(response.data);
        })
        .catch((error) => {
	        console.log('Products.js 30', error);
        });

    const [date_time_return] = useState('')
    const [location_return] = useState('')
    const [location_pickup] = useState('')
    const [date_time_pickup] = useState('')

    const carRentals = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search',
        params: {
            date_time_return: {date_time_return},
            location_return: {location_return},
            location_pickup: {location_pickup},
            date_time_pickup: {date_time_pickup}
        },
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
      
    axios.request(carRentals)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    //flight information
    const [name] = useState('')

    const flightLocation = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
        params: {name: {name}},
        headers: {
          'x-rapidapi-key': REACT_APP_API_KEY,
          'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
      
    axios.request(flightLocation)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    const [location_arrival] = useState('')
    const [location_departure] = useState('')
    const [date_departure] = useState('')
    const [class_type] = useState('')
    const [itinerary_type] = useState('')
    const [sort_order] = useState('')
    const [price_min] = useState('')
    const [price_max] = useState('')
    const [duration_max] = useState('')
    const [date_departure_return] = useState('')
    const [number_of_passengers] = useState('')
    const [number_of_stops] = useState('')
    
    const flightSearch = {
        method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
            params: {
                location_arrival: [location_arrival],
                location_departure: [location_departure],
                date_departure: [date_departure],
                class_type: [class_type],
                itinerary_type: [itinerary_type],
                sort_order: [sort_order],
                price_min: [price_min],
                duration_max: [duration_max],
                number_of_passengers: [number_of_passengers],
                date_departure_return: [date_departure_return],
                price_max: [price_max],
                number_of_stops: [number_of_stops]
            },
            headers: {
              'x-rapidapi-key': REACT_APP_API_KEY,
              'x-rapidapi-host': REACT_APP_API_HOST
            }
          };
          
        axios.request(options)
            .then((response) => {
                console.log(response.data);
            }).
            catch((error) => {
                console.error(error);
            });
        
    //hotel information
    const [longitude] = useState('')
    const [latitude] = useState('')

    const hotelGeolocation = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations-by-geo',
        params: {longitude: [longitude], latitude: [latitude]},
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
      
    axios.request(hotelGeolocation)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    
    const [hotel_id] = useState('')
    
    const hotelDetails = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/details',
        params: {hotel_id: [hotel_id]},
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
          
    axios.request(hotelDetails)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    const [hotelLocation] = useState('')

    const hotelLocation = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
        params: {name: [locationName]},
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
          
    axios.request(hotelLocation)
        .then((response) => {
            console.log(response.data);
        })
        .catch ((error) => {
            console.error(error);
        });

    const [date_checkin] = useState('')
    const [hotel_id] = useState('')
    const [date_checkout] = useState('')
    const [rooms_number] = useState('')

    const hotelDetails = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details',
        params: {
            date_checkin: [date_checkin],
            hotel_id: [hotel_id],
            date_checkout: [date_checkout],
            rooms_number: [rooms_number]
        },
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
          
    axios.request(hotelDetails)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    const [location_id] = useState('')
    const [sort_order] = useState('')
    const [amenities_ids] = useState('')
    const [star_rating_ids] = useState('')


    const hotelSearch = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
            location_id: [location_id],
            sort_order: [sort_order],
            date_checkout: [date_checkout],
            date_checkin: [date_checkin],
            amenities_ids: [amenities_ids],
            star_rating_ids: [star_rating_ids],
            rooms_number: [rooms_number]
        },
        headers: {
            'x-rapidapi-key': REACT_APP_API_KEY,
            'x-rapidapi-host': REACT_APP_API_HOST
        }
    };
          
    axios.request(hotelSearch)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });

    return(
        <div>
            <h1>This is the products page</h1>
        </div>
    )
}

export default Products