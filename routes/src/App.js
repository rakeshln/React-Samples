import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component{

  render(){
    return <Router>
      <div>
        <Route path="/" exact strict render={
          () => {
            return <div>Home</div>
          }
        }></Route>
        <Route path="/about" exact strict render={
          () => {
            return <div>About</div>
          }
        }></Route>
      </div>
    </Router>
  }

}

export default App;
