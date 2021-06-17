import {useState, useEffect} from 'react'
import axios from 'axios'

const Products = () => {
    useEffect(() => {
        setAppState({ loading: true });
        const travelAPI = 'http://api.tripadvisor.com/api/partner/2.0/';
        axios.get(travelAPI).then((info) => {
          const allInfo = info.data;
          setAppState({ loading: false, info: allInfo });
        })
        .catch(err => console.log(err))
      }, [setAppState]);
      
    return(
        <div>
            <h1>This is the products page</h1>
        </div>
    )
}

export default Products