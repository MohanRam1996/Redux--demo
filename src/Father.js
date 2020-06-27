import React, { Component } from 'react';
import './App.css';
import Child from "./Child";

class Father extends Component {
  render (){
  return (
    <div className="Father">
        <h1>Father Component</h1>
     <br/>
     <br/>
     <Child/>
    </div>
  );}
}

export default Father;