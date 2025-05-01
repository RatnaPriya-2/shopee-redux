import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const modeBoolean = useSelector((state) => state.mode);
  console.log(modeBoolean);
  return (
    <>
      <div
        className={`main-container ${modeBoolean ? "main-light" : "main-dark"}`}
      >
        <ToastContainer autoClose="1500" />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
