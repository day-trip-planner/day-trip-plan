import axios from 'axios'

const Products = () => {
    const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
        params: {name: 'London'},
        headers: {
            'x-rapidapi-key': 'ab419d1536mshec16b6e719f722ep1c42dfjsn74ccdcfb7164',
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
	    console.log(response.data);
    })
    .catch((error) => {
	    console.log(error);
    });
      
    return(
        <div>
            <h1>This is the products page</h1>
        </div>
    )
}

export default Products