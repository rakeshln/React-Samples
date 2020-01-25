import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

const Abt = () =>{
  return (<div>About from Component</div>);
}

class App extends Component{

  render(){
    return <Router>
      <div>
        <Route path="/c" exact strict render={
          () => {
            return <div>Home</div>
          }
        }></Route>
        <Route path="/about" exact strict render={
          () => {
            return <div>About</div>
          }
        }></Route>
        <Route path="/" exact  component={Abt}/>
      </div>
    </Router>
  }

}

export default App;
