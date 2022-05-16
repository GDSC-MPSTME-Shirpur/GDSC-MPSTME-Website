import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Events from './Components/Events';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs';
import Team from './Components/Team';
import Technologies from './Components/Technologies';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* NavBar is good */}
        <NavBar />  

        <Switch>
          <Route exact path='/contact'>
              <ContactUs />
          </Route>
          <Route exact path='/events'>
              <Events />
          </Route>
          <Route exact path='/team'>
              <Team />
          </Route>
          <Route exact path='/technologies'>
              <Technologies />
          </Route>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
