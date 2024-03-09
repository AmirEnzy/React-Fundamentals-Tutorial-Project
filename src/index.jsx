import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);


//If you do not want to use jsx for any some reason you will also have this option
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
