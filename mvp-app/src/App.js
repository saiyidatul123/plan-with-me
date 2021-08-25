import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
      <body>
          <img
            src="https://user-images.githubusercontent.com/86279819/130724442-f39f164b-78b7-480c-8ed9-976a0753e822.png"
            alt="Hello there!" height="200px" width="200px"
          />
      <div className="only-form">
      <Register></Register>
      <br/>
      <Login></Login>
      </div>
      </body>
  );
}

export default App;
