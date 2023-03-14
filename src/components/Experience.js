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
          <div>
            <hr />

            <div className="experience--container">
              <form onSubmit={this.handleSubmit}>
                <label className="subtitle">Experience</label>
                <br />
                <br />
                <input
                  onChange={this.handleChange}
                  name="schoolname"
                  type="text"
                  placeholder="School Name"
                  value={this.state.schoolname}
                />
                <input
                  onChange={this.handleChange}
                  name="studytitle"
                  type="text"
                  placeholder="Title of study"
                  value={this.state.studytitle}
                />

                <div className="start--date">
                  <label>Start</label>
                  <input
                    onChange={this.handleChange}
                    name="startdate"
                    type="date"
                    placeholder="Start"
                    value={this.state.startdate}
                  />
                </div>

                <div className="end--date">
                  <label>End</label>
                  <input
                    onChange={this.handleChange}
                    name="enddate"
                    type="date"
                    placeholder="End"
                    value={this.state.enddate}
                  />
                </div>

                <button type="submit">Save</button>
                <br />
                <br />
              </form>
            </div>
          </div>
        );
      } else {
        return (
          <div className="saved--info">
            <hr />
            <h3>--Experience--</h3>
            <br />
            <p>
              <span>School Name: </span>
              {this.state.schoolname}
            </p>
            <p>
              <span>Title of study: </span>
              {this.state.studytitle}
            </p>
            <p>
              <span>Starting Date: </span>
              {this.state.startdate}
            </p>
            <p>
              <span>Ending Date: </span>
              {this.state.enddate}
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
        <div>
          <hr />

          <div className="experience--container">
            <form onSubmit={this.handleSubmit}>
              <label className="subtitle">Experience</label>
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
