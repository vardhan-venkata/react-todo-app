import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const DATA = [
  {
    id: "todo-0",
    name: "Create Todo-app with API integration",
    completed: true,
  },
  { id: "todo-1", name: "Learnt Next JS", completed: false },
  { id: "todo-2", name: "Implement a ML model", completed: false },
];
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
