import React, { useEffect, useState } from "react";

const Login = () => {
    let [login, setLogin] = useState([]);
    let [input, setInput] = useState({});
  
    const handleChange = (event) => {
      const value = event.target.value;
      setInput({ ...input, [event.target.name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      userLogin();
      setInput({ username: "", password: "" });
    };
  
    const  userLogin = () => {
      fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      })
        .then((response) => response.jason())
        .then((data) => {
          setLogin([
            ...login,
            {
              id: data[data.length - 1].id,
              name: input.name,
              username: input.username,
              password: input.password,
            },
          ]);
          console.log("response from login",data);
        })
        .catch((err) => console.log("Fail to login.",err));
    };
  
  return (
      <div className="offset-sm-1">
        <div className="col-sm">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={input.username}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handleChange(e)}
          />
          <br></br>
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Password"
            value={input.password}
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(e) => handleChange(e)}
          />
        <br></br>
        <button type="button" class="btn btn-primary">
          LOGIN 
        </button>
        </form>
        </div>
      </div>
  );
};

export default Login;
