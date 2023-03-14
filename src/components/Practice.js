import React, { Component } from "react";

class Practice extends Component {
  constructor() {
    super();

    this.state = {
      companyname: "",
      positiontitle: "",
      tasks: "",
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

            <div className="practice--container">
              <form onSubmit={this.handleSubmit}>
                <label className="subtitle">Practice</label>
                <br />
                <br />
                <input
                  onChange={this.handleChange}
                  name="companyname"
                  type="text"
                  placeholder="Company Name"
                  value={this.state.companyname}
                />
                <input
                  onChange={this.handleChange}
                  name="positiontitle"
                  type="text"
                  placeholder="Position Title"
                  value={this.state.positiontitle}
                />
                <input
                  onChange={this.handleChange}
                  name="tasks"
                  type="text"
                  placeholder="Main tasks of your job"
                  value={this.state.tasks}
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
          <div className="saved--info practice--div">
            <hr />
            <h3>--Practice--</h3>
            <br />
            <p>
              <span>Company Name: </span>
              {this.state.companyname}
            </p>
            <p>
              <span>Position Title: </span>
              {this.state.positiontitle}
            </p>
            <p>
              <span>Tasks: </span>
              {this.state.tasks}
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

          <div className="practice--container">
            <form onSubmit={this.handleSubmit}>
              <label className="subtitle">Practice</label>
              <br />
              <br />
              <input
                onChange={this.handleChange}
                name="companyname"
                type="text"
                placeholder="Company Name"
              />
              <input
                onChange={this.handleChange}
                name="positiontitle"
                type="text"
                placeholder="Position Title"
              />
              <input
                onChange={this.handleChange}
                name="tasks"
                type="text"
                placeholder="Main tasks of your job"
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

export default Practice;
