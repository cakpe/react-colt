import React, { Component } from "react";

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    //the main thing is you have to bind the remove function here and in the parent component
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  //another main thing to note is you don't call the parent remove function directly. You wrap it in another fucntion
  //that you must bind
  handleRemove(evt) {
    console.log("INSIDE HANDLE REMOVE");
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
