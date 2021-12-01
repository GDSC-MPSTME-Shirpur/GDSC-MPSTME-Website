import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
