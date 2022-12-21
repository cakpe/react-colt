import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    //the main difference between this and passing data downwards is that all the data lies here in this child component.
    //so you're passing state (all the data) up as we see on line 15. BUT CAN'T LIE DON'T CONFUSE YOURSELF. IT'S THE SAME THING.
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }

  handleChange(evt) {
    //although we have multiple inputs below, we can have one concise handleChange function because the name attributes
    //for each input matches the name in state.
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name: </label> {/*when using labels, htmlFor must match the id of the input*/}
        <input
          id='name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='qty'>Quantity: </label>
        <input
          id='qty'
          name='qty'
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>Add Item!</button>
      </form>
    );
  }
}
export default ShoppingListForm;
