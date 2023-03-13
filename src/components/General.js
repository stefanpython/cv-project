import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      complete: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      complete: true,
    }));
  }

  render() {
    if (this.state.complete !== false) {
      return (
        <>
          <p>{this.state.firstname}</p>
          <p>{this.state.lastname}</p>
          <p>{this.state.email}</p>
          <p>{this.state.number}</p>
        </>
      );
    } else {
      return (
        <div className="general--container">
          <form onSubmit={this.handleSubmit}>
            <label>General information</label>
            <br />
            <br />
            <input
              onChange={this.handleChange}
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={this.handleChange}
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              name="number"
              type="tel"
              placeholder="Phone Number"
            />

            <button type="submit">Save</button>
            <br />
            <br />
          </form>
        </div>
      );
    }
  }
}

export default General;
