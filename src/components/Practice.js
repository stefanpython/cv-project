import React, { Component } from "react";

class Practice extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <hr />
        <br />

        <div className="practice--container">
          <form>
            <label>Practice</label>
            <br />
            <br />
            <input name="company" type="text" placeholder="Company Name" />
            <input name="position" type="text" placeholder="Position Title" />
            <input
              name="task"
              type="email"
              placeholder="Main tasks of your job"
            />

            <div className="start--date">
              <label>Start</label>
              <input name="startdate" type="date" placeholder="Start" />
            </div>

            <div className="end--date">
              <label>End</label>
              <input name="enddate" type="date" placeholder="End" />
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

export default Practice;
