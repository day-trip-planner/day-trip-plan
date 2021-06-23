import axios from 'axios'
import {useEffect, useState} from 'react'

const {REACT_APP_API_KEY, REACT_APP_API_HOST} = process.env

const Cars = () => {
    const [location, setLocation] = useState('')
    const [carList, setCarList] = useState([])
    // useEffect(()=>{
    //     const carLocation = {
    //         method: 'GET',
    //         url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
    //         params: {name: location},
    //         headers: {
    //             'x-rapidapi-key': REACT_APP_API_KEY,
    //             'x-rapidapi-host': REACT_APP_API_HOST
    //         }
    //     };
    
    //     axios.request(carLocation)
    //         .then((response) => {
    //             console.log(response.data);
    //             setCarList(response.data)
    //         })
    //         .catch((error) => {
    //             console.log('Products.js 30', error);
    //         });
    // }, [location])

    const findLocations = ()=>{
        const carLocation = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
            params: {name: location},
            headers: {
                'x-rapidapi-key': REACT_APP_API_KEY,
                'x-rapidapi-host': REACT_APP_API_HOST
            }
        };
    
        axios.request(carLocation)
            .then((response) => {
                console.log(response.data);
                setCarList(response.data)
            })
            .catch((error) => {
                console.log('Products.js 30', error);
            });
    }

    const [date_time_return, setDateReturn] = useState('')
    const [location_return, setLocationReturn] = useState('')
    const [location_pickup, setLocationPickup] = useState('')
    const [date_time_pickup, setDatePickup] = useState('')
    useEffect(()=>{
        const carRentals = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search',
            params: {
                date_time_return: date_time_return,
                location_return: location_return,
                location_pickup: location_pickup,
                date_time_pickup: date_time_pickup
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
    },[date_time_return, location_return, location_pickup, date_time_pickup])

    const findRentals = () => {
        const carRentals = {
            method: 'GET',
            url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search',
            params: {
                date_time_return: date_time_return,
                location_return: location_return,
                location_pickup: location_pickup,
                date_time_pickup: date_time_pickup
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
    }

    return(
        <div>
            <div>stuff in it</div>
            <input value={location} onChange={(e) => setLocation(e.target.value)}/>
            <button onClick={findLocations}>Search</button>

            {carList.map((carObj) => {
                return(
                    <div>
                        <h3>{carObj.itemName}</h3>
                    </div>
                )
            })}
        </div>
    )

}

export default Cars