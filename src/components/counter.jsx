import React, { Component } from "react"; // lets you do class Counter extends Component

class Counter extends Component {
  state = {
    count: 0,
  };

  // COUNTER CLASS--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // state: object created to represent the current state of the count
  // count: set to 0 for the initial start
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // HANDLE INCREMENT METHOD---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  /*
  Here we create a method that is set to an arrow function. It takes in a parameter.
  We want to log to the console whatever that parameter is.
  this.setState method tells react that the state is going to be updated. For the argument, we pass in an object that has 1 property with a value of:
  whatever the state is + 1
  */
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  // RENDER METHOD---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // render(): will return the following react elements onto the virtual DOM

  // <div>: react div element to hold the following react elements we want to render

  // <span>: react span element to represent the value of the incremented number
  // <span>: we give it a className that invokes the getBadgeClasses method
  // <span>: we set the value to invoke the formatCount method

  // <button>: we add a react button element
  // <button>: we give it 3 classNames
  // <button>: we pass in an event handler onClick and set it equal to an arrow function that takes in a parameter and set that arrow function to the handleIncrement method and give it an argument of product
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  // FORMAT COUNT METHOD--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  /*
  We create a method that will return the value of the count.
  We use object destructuring to define the count variable and assign it the value of the count property
  We use the ternary operator: if count equals 0 ? return string zero (true) : return the value of count (false)
  */
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // GET BADGE CLASSES METHOD---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  /*
  We create a method that will get the classes for the badges.
  We declare a local variable and set it equal to the bootstrap classes that we want by default.
  We use the ternary operator: classes = classes + if this.state.count strictly equals 0 ? append the string (class) "warning" to classes (if true) : append the string (class) "primary" to classes (if false).
  We return the updated value of classes
  */
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
}

export default Counter; // This will expose the Counter component to other modules
