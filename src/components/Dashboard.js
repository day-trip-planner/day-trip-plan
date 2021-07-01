import { Link } from 'react-router-dom'
import '../styles/Dashboard.css'

const Dashboard = () => {

    return (
        <div className="dash-home">
            <img className="dash-img" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_380,q_60,w_845/v1/clients/rhodeisland/140_3_6434_jpeg_2c06808c-6beb-46ae-9f56-3b5815354b73.jpg"></img>
            <div className="dash-text-left"><h1>Luxury Inns</h1></div>
            <div className="dash-text-right"><h1>
                <p>Verified Guest Reviews. <br /> <Link to='/products'>Click Here</Link> for Fast & Secure Booking.</p></h1></div>
            <div className="review-img">
                <b />
                All our rooms include complementary breakfast
                <Link to="/products">Locations</Link>
                <img src="https://www.grandsierraresort.com/wp-content/uploads/2020/08/Grand-King-at-The-A-view-of-main-room_16to9-scaled.jpg" />
                Luxury Redefined
                <img src="https://live.staticflickr.com/65535/50098339988_3c9a1363a3_b.jpg" />
            </div>

            <div className="dash-reviews"><Link to='/reviews'>Guest Reviews</Link></div>
            <b />
            <div className="review-text">
                <h1>We love Luxury Inns! <b /> - Mr. and Mrs. Smith</h1></div>
        </div>
    )
}

export default Dashboard