import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  let [users, setUsers] = useState([]);
  let [input, setInput] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
    setInput({ name: "", username: "", password: "" });
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
            username: input.username,
            password: input.password,
          },
        ]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
      <div className="offset-sm-1">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="col-sm">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={(e) => handleChange(e)}
            />
            <br/>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <button type="button" class="btn btn-warning">SIGN UP</button>
          </div>
        </form>
      </div>
  );
};

export default Register;
