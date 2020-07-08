import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
//import styles from "./App.module.css";
import "./App.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchData1 = await fetchData();

    this.setState({ data: fetchData1 });
    //console.log(data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <h1>Covid-19 Tracker App</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
