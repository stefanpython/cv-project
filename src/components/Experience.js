import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <hr />
        <br />
        <div className="experience--container">
          <form>
            <label>Experience</label>
            <br />
            <br />
            <input type="text" placeholder="School Name" />
            <input type="text" placeholder="Title of study" />

            <div className="start--date">
              <label>Start</label>
              <input type="date" placeholder="Start" />
            </div>

            <div className="end--date">
              <label>End</label>
              <input type="date" placeholder="End" />
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

export default Experience;
