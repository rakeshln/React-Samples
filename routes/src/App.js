import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink , Redirect, Prompt} from "react-router-dom";
import './App.css';

const User = ( params ) => {
  return (<div>Welcome {params.username}</div>);
}

class App extends Component {

  state ={
    loggedIn:false
  }

  loginHdlr = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

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
      <Prompt 
      when={!this.state.loggedIn}
      message={(location) =>{
        return location.pathname.startsWith("/user") ? 'You are not logged in' : true
      }} />
        <input type="button" value={this.state.loggedIn ? "Log Out" : "Log In"}  onClick={this.loginHdlr.bind(this)}/>
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
        <Route path="/user/:username" exact strict render={
          ({match}) => (
            this.state.loggedIn ? (<User username={match.params.username}/>) : <Redirect to="/" />
          )
        } />
      </div>
    </Router>
  }

}

export default App;
