import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <body>
      <Router>
        <Link to="/calendar"><img src="https://image.flaticon.com/icons/png/512/616/616475.png" height="50" width="50"/>
            Test
        </Link>
        <Route path="/" exact component={Register} />
        <Route path="/" exact component={Login} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/calendar/user/:user_id" component={Calendar} />
      </Router>
    </body>
  );
}

export default App;
