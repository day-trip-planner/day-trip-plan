import axios from 'axios'
import {useState} from 'react'

const Products = () => {

    //car rental information
    const [location] = useState('')
    const [date_time_return] = useState('')
    const [location_return] = useState('')
    const [location_pickup] = useState('')
    const [date_time_pickup] = useState('')

    const carLocation = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
        params: {name: {location}},
        headers: {
            'x-rapidapi-key': '5844aad306mshdb230a2d16e246dp127583jsn9bc5aa786234',
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com'
        }
    };

    axios.request(carLocation)
        .then((response) => {
	        console.log(response.data);
        })
        .catch((error) => {
	        console.log(error);
        });

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
            'x-rapidapi-key': '5844aad306mshdb230a2d16e246dp127583jsn9bc5aa786234',
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com'
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
    //hotel information
      
    return(
        <div>
            <h1>This is the products page</h1>
        </div>
    )
}

export default Products