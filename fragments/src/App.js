import React, { Component, Fragment } from 'react';
import "./App.css";

const Temp = (props) => {
  return (
    <Fragment>
      {props.typ === "main"
        ?
        <div>This is main Div</div>
        :
        <div>This is sub Div with name {props.typ}</div>
      }
    </Fragment>
  );
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp typ="main" />
        <Temp typ="abc" />
      </div>
    );
  }
}

export default App;


