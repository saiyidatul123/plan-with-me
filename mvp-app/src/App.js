import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import News from "./components/News";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <body>
      <Router>
        <div className="linkers">
        <Link to="/"><img src="https://image.flaticon.com/icons/png/512/616/616475.png" height="50" width="50"/>
        </Link>
        <Link to="/contacts"><img src="https://image.flaticon.com/icons/png/512/3771/3771518.png" height="50" width="50"/>
        </Link>
        <Link to="/news"> <img src="https://image.flaticon.com/icons/png/512/2965/2965879.png" height="50" width="50"/></Link><Link to="/mood-tracker"> <img src="https://image.flaticon.com/icons/png/512/3174/3174845.png" height="50" width="50"/></Link>
        <Link to="/chatbot"> <img src="https://image.flaticon.com/icons/png/512/4233/4233830.png" height="50" width="50"/></Link>
        </div>
        <Route path="/news" exact component={News} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Calendar} />
        <Route path="/calendar/user/:user_id" component={Calendar} />
      </Router>
    </body>
  );
}

export default App;
