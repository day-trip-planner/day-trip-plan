import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <footer>
                    &copy;{new Date().getFullYear()} Day Trip Planner | All rights reserved | Terms of Use

                </footer>
            </div>
        </div>
    )
}

export default Footer