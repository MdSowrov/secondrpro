import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
       <>
       <Navbar/>
          <Switch> 
              <Route exact path="/"><Home/></Route>
              <Route path="/about"><About/></Route>
              <Route path="/contact"><Contact/></Route>
          </Switch>
          <Footer/>
        </>
   </Router>
  );
}

export default App;
