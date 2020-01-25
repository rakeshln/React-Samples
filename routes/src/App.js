import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const User = ({ match }) => {
  return (<div>Welcome {match.params.username}</div>);
}

class App extends Component {

  render() {
    return <Router>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user/John">User</Link></li>
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
