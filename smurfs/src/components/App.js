import React, { Component } from "react";
import "./App.css";
import SmurfInfo from "./smurfs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfInfo />
      </div>
    );
  }
}

export default App;
