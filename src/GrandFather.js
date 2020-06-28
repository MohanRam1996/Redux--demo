import React, { Component } from "react";
import "./App.css";
import Father from "./Father";
//action creator must be imported to use it
import { sendDataToStore } from "./action/action";

// redux - connect
import { connect } from "react-redux";

class GrandFather extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  handleChange = (event) => {
    //setting value in state variable 
    this.setState({ item: event.target.value });
  };
  handleClick = () => {
    //sending data to the store 
    sendDataToStore(this.props.dispatch, this.state.item);
  };

  render() {
    return (
      <div className="grandFather">
        <h1>Grand Father Component</h1>
        <input placeholder="Item" onChange={this.handleChange} />
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleClick}> Store </button>
        <br />
        <br />
        Entered value:&nbsp;{this.state.item}
        <br />
        <br />
        <Father />
      </div>
    );
  }
}

function mapStateToProps({ Item }) {
  return {
    Item,
  };
}
export default connect(mapStateToProps)(GrandFather);
