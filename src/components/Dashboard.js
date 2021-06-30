import { Link } from 'react-router-dom'

const Dashboard = () => {

    return (
        <div className="dash-home">
            <img className="dash-img" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_380,q_60,w_845/v1/clients/rhodeisland/140_3_6434_jpeg_2c06808c-6beb-46ae-9f56-3b5815354b73.jpg"></img>
            <div className="dash-text-left"><h1>Luxury Inns</h1></div>
            <div className="dash-text-right"><h1>
                <p>Your home away from home. Verified Guest Reviews. <Link to='/products'>Click Here</Link> for Fast & Secure Booking.</p></h1></div>
        </div>
    )
}

export default Dashboard