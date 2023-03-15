import { useState } from "react";

export default function Practice() {
  const [data, setData] = useState({
    companyname: "",
    positiontitle: "",
    tasks: "",
    startdate: "",
    enddate: "",
    complete: false,
    editMode: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prevState) => ({
      ...prevState,
      complete: true,
      editMode: false,
    }));
  };

  if (data.complete) {
    if (data.editMode) {
      return (
        <div>
          <hr />

          <div className="practice--container">
            <form onSubmit={handleSubmit}>
              <label className="subtitle">Practice</label>
              <br />
              <br />
              <input
                onChange={handleChange}
                name="companyname"
                type="text"
                placeholder="Company Name"
                value={data.companyname}
              />
              <input
                onChange={handleChange}
                name="positiontitle"
                type="text"
                placeholder="Position Title"
                value={data.positiontitle}
              />
              <input
                onChange={handleChange}
                name="tasks"
                type="text"
                placeholder="Main tasks of your job"
                value={data.tasks}
              />

              <div className="start--date">
                <label>Start</label>
                <input
                  onChange={handleChange}
                  name="startdate"
                  type="date"
                  placeholder="Start"
                  value={data.startdate}
                />
              </div>

              <div className="end--date">
                <label>End</label>
                <input
                  onChange={handleChange}
                  name="enddate"
                  type="date"
                  placeholder="End"
                  value={data.enddate}
                />
              </div>

              <button className="printPageButton" type="submit">
                Save
              </button>
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
            {data.companyname}
          </p>
          <p>
            <span>Position Title: </span>
            {data.positiontitle}
          </p>
          <p>
            <span>Tasks: </span>
            {data.tasks}
          </p>
          <p>
            <span>Starting Date: </span>
            {data.startdate}
          </p>
          <p>
            <span>Ending Date: </span>
            {data.enddate}
          </p>

          <button
            className="edit--btn printPageButton"
            onClick={() =>
              setData((prevState) => ({
                ...prevState,
                editMode: true,
              }))
            }
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
          <form onSubmit={handleSubmit}>
            <label className="subtitle">Practice</label>
            <br />
            <br />
            <input
              onChange={handleChange}
              name="companyname"
              type="text"
              placeholder="Company Name"
            />
            <input
              onChange={handleChange}
              name="positiontitle"
              type="text"
              placeholder="Position Title"
            />
            <input
              onChange={handleChange}
              name="tasks"
              type="text"
              placeholder="Main tasks of your job"
            />

            <div className="start--date">
              <label>Start</label>
              <input
                onChange={handleChange}
                name="startdate"
                type="date"
                placeholder="Start"
              />
            </div>

            <div className="end--date">
              <label>End</label>
              <input
                onChange={handleChange}
                name="enddate"
                type="date"
                placeholder="End"
              />
            </div>

            <button className="printPageButton" type="submit">
              Save
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}
