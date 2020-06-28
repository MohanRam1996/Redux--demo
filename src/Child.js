import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class Child extends Component {
  render() {
    //the data from the store is received as props and 
    //displayed here
    const { Item } = this.props;
    return (
      <div className="Child">
        <h1>Child Component</h1>
        <br />
        <br />
        Value in Store :&nbsp;&nbsp;{Item.value}
      </div>
    );
  }
}

function mapStateToProps({ Item }) {
  return {
    Item,
  };
}

export default connect(mapStateToProps)(Child);
