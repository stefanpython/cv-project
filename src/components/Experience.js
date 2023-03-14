import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      schoolname: "",
      studytitle: "",
      startdate: "",
      enddate: "",
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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      complete: true,
    }));
    console.log(this.state);
  }

  render() {
    if (this.state.complete !== false) {
      return (
        <div className="saved--info">
          <hr />
          <p>{this.state.schoolname}</p>
          <p>{this.state.studytitle}</p>
          <p>{this.state.startdate}</p>
          <p>{this.state.enddate}</p>
        </div>
      );
    } else {
      return (
        <div>
          <hr />
          <br />
          <div className="experience--container">
            <form onSubmit={this.handleSubmit}>
              <label>Experience</label>
              <br />
              <br />
              <input
                onChange={this.handleChange}
                name="schoolname"
                type="text"
                placeholder="School Name"
              />
              <input
                onChange={this.handleChange}
                name="studytitle"
                type="text"
                placeholder="Title of study"
              />

              <div className="start--date">
                <label>Start</label>
                <input
                  onChange={this.handleChange}
                  name="startdate"
                  type="date"
                  placeholder="Start"
                />
              </div>

              <div className="end--date">
                <label>End</label>
                <input
                  onChange={this.handleChange}
                  name="enddate"
                  type="date"
                  placeholder="End"
                />
              </div>

              <button type="submit">Save</button>
              <br />
              <br />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Experience;
