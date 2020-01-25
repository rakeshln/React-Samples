import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';

const User = ({ match }) => {
  return (<div>Welcome {match.params.username}</div>);
}

class App extends Component {

  render() {
    return <Router>
      <ul>
        <li><NavLink to="/about" exact activeStyle={
          {color:'green'}
        }>About</NavLink></li>
        <li><NavLink to="/user/John" exact activeStyle={
          {color:'green'}
        }>User</NavLink></li>
      </ul>

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
        <Route path="/user/:username" exact strict component={User} />
      </div>
    </Router>
  }

}

export default App;
