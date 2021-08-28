import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacts = () => {
  let [users, setUsers] = useState([]);
  let [input, setInput] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
    setInput({ name: "", phone: "", birthday: "" });
  };

  const addUser = () => {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.jason())
      .then((data) => {
        setUsers([
          ...users,
          {
            id: data[data.length - 1].id,
            name: input.name,
            username: input.phone,
            password: input.birthday,
          },
        ]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
      <div className="d-flex">
      <div className="offset-sm-1">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="col-sm">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <br/>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone number"
              value={input.phone}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <input
              type="text"
              name="birthday"
              className="form-control"
              placeholder="Birthday"
              value={input.birthday}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <button type="button" className="btn btn-warning">ADD CONTACT</button>
          </div>
        </form>
        {users.map(e => e.name)}
      </div>
      </div>
  );
};

export default Contacts;
