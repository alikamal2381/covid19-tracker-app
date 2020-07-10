import React, { Component } from "react";
import "./App.css";
import Details from "./Details";

class App extends Component {
  render() {
    //const { data } = this.state;
    return (
      <div className="App">
        <h1>COVID19 Tracker App by Ali Kamal</h1>
        <Details />
      </div>
    );
  }
}

export default App;
