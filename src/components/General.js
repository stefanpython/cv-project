import { useState } from "react";

export default function General() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
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
        <div className="general--container">
          <form onSubmit={handleSubmit}>
            <label className="subtitle">General information</label>
            <br />
            <br />
            <input
              onChange={handleChange}
              name="firstname"
              type="text"
              placeholder="First Name"
              value={data.firstname}
            />
            <input
              onChange={handleChange}
              name="lastname"
              type="text"
              placeholder="Last Name"
              value={data.lastname}
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
            />
            <input
              onChange={handleChange}
              name="number"
              type="tel"
              placeholder="Phone Number"
              value={data.number}
            />

            <button className="printPageButton" type="submit">
              Save
            </button>
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
            {data.firstname}
          </p>
          <p>
            <span>Last Name: </span>
            {data.lastname}
          </p>
          <p>
            <span>Email: </span>
            {data.email}
          </p>
          <p>
            <span>Phone: </span>
            {data.number}
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
      <div className="general--container">
        <form onSubmit={handleSubmit}>
          <label className="subtitle">General information</label>
          <br />
          <br />
          <input
            onChange={handleChange}
            name="firstname"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            name="number"
            type="tel"
            placeholder="Phone Number"
          />

          <button className="printPageButton" type="submit">
            Save
          </button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
