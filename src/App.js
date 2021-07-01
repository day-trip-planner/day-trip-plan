import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
