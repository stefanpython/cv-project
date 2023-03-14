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
        <div className="saved--info">
          <p>
            <span>First Name: </span>
            {this.state.firstname}
          </p>
          <p>
            <span>Last Name: </span>
            {this.state.lastname}
          </p>
          <p>
            <span>Email: </span>
            {this.state.email}
          </p>
          <p>
            <span>Phone: </span>
            {this.state.number}
          </p>
        </div>
      );
    } else {
      return (
        <div className="general--container">
          <form onSubmit={this.handleSubmit}>
            <label className="subtitle">General information</label>
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
