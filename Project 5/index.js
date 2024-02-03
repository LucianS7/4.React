//import React from "react";
//import reactDOM from "react-dom";

const page = (
  <div id="react-page">
    <img className="react-logo" src="./react-logo.png"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprises apps, including mobile apps</li>
    </ul>
  </div>
)

const root = document.getElementById("root");
ReactDOM.render(page, root);