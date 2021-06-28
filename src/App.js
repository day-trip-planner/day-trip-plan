import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import routes from './routes';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
      <p>Find the best travel deals on vacation packages when you book on Day Trip Planner. 24/7 Customer Support. Day Trip Planner Rewards. Get the Free Day Trip Planner App. Save up to 50% on Hotels. Verified Guest Reviews. Packages: Save up to 20% Double Points on App. Fast & Secure Booking.</p>
     <Footer />
    </div>
  );
}

export default App;
