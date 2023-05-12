import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./index.css"





const App = () => {
  return (
    <>
      
    
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Project} />
        <Route exact path="/Contact" component={Contact} />
       <Redirect to="/"/>
      </Switch>
      {/* <Navbar/> */}
      {/* <Home/> */}
    </>
  )
}

export default App;
