import React, { Component } from "react";

class C12 extends Component {
  render() {

    const { firstName, lastName } = this.props;
    return(<>
    <p>Question 12: </p>
    <h2>Hello, {firstName} {lastName}!</h2>
    </> 
    )
  }
}

export default C12;
