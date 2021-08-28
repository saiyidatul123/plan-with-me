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
      <div className="reg d-flex">
          <img
            src="https://user-images.githubusercontent.com/86279819/130893001-db703098-4dd6-4fb7-be81-8cfecb935cba.png"
            alt="Hello there!" height="200px" width="200px"
          />
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
              name="username"
              className="form-control"
              placeholder="Username"
              value={input.username}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Password"
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <button type="button" class="btn btn-warning">SIGN UP</button>
          </div>
        </form>
      </div>
      </div>
  );
};

export default Register;
