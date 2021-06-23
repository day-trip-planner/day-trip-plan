import axios from 'axios'
import {useEffect, useState} from 'react'

const {REACT_APP_API_KEY, REACT_APP_API_HOST} = process.env

const Flights = () => {
    const [name] = useState('')
    useEffect(()=>{
        const flightLocation = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
            params: {name: name},
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
    }, [name])

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
    useEffect(()=>{
        const flightSearch = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
            params: {
                location_arrival: location_arrival,
                location_departure: location_departure,
                date_departure: date_departure,
                class_type: class_type,
                itinerary_type: itinerary_type,
                sort_order: sort_order,
                price_min: price_min,
                duration_max: duration_max,
                number_of_passengers: number_of_passengers,
                date_departure_return: date_departure_return,
                price_max: price_max,
                number_of_stops: number_of_stops
            },
            headers: {
                'x-rapidapi-key': REACT_APP_API_KEY,
                'x-rapidapi-host': REACT_APP_API_HOST
            }
        };
                  
        axios.request(flightSearch)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [location_arrival, location_departure, date_departure, class_type, 
        itinerary_type, sort_order, price_min, duration_max, number_of_passengers, 
        date_departure_return, price_max, number_of_stops])
}

export default Flights