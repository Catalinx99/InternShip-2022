import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      <Route  path="/about-us">
      <About/>
      </Route>
      <Route  path="/contact">
      <Contact/>
      </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
