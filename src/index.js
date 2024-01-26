import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/main.scss";
// * Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      style={{
        fontFamily: "Work Sans",
        fontSize: "1.3rem",
        zIndex: 9999,
      }}
    />
  </React.StrictMode>
);
