// Here we are importing API's (line 2-8)
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDOM.render(
  // render method will render a react element into the DOM and return a reference to the component
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("root") // an id on the html file with the attribute 'root'
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
