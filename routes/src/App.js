import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

const User = ({match}) =>{
return (<div>Welcome {match.params.username}</div>);
}

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
        <Route path="/user/:username" exact strict component={User}/>
      </div>
    </Router>
  }

}

export default App;
