import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const modeBoolean = useSelector((state) => state.mode);
  console.log(modeBoolean);
  return (
    <>
      <div className={`main-container ${modeBoolean ? "main-light" : "main-dark"}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
