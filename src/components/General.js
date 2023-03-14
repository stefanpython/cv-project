import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      complete: false,
      editMode: false,
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
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      complete: true,
      editMode: false,
    }));
  }

  render() {
    if (this.state.complete) {
      if (this.state.editMode) {
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
                value={this.state.firstname}
              />
              <input
                onChange={this.handleChange}
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={this.state.lastname}
              />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
              />
              <input
                onChange={this.handleChange}
                name="number"
                type="tel"
                placeholder="Phone Number"
                value={this.state.number}
              />

              <button type="submit">Save</button>
              <br />
              <br />
            </form>
          </div>
        );
      } else {
        return (
          <div className="saved--info">
            <h3>--General Information--</h3>
            <br />
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

            <button
              className="edit--btn"
              onClick={() => this.setState({ editMode: true })}
            >
              Edit
            </button>
          </div>
        );
      }
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
