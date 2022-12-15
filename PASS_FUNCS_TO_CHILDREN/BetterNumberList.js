import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("REMOVING!");
    console.log(num);
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    // Key must be unique!
    //we use the index if the object being iterated over does not have a way to be uniquely identified
    //YOU SHOULD NOT USE INDEX IF ITEMS FROM THE LIST CAN BE REMOVED OR RE-ORDERED OR CHANGED IN GENERAL
    let nums = this.state.nums.map((n, index) => (
      <BetterNumberItem key={index} value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
