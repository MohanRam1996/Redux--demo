import React, { Component } from "react";
import "./App.css";
import GrandFather from "./GrandFather";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*calling the grand father component*/}
        <GrandFather />
      </div>
    );
  }
}

export default App;
