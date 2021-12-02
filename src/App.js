import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // whether darkmode enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");
      // document.title="TextUtils - Dark Mode";          for updating titles according to state changes
      // setInterval(() => {
      //   document.title = "TextUtils is amazing app";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is used for text manipulation";
      // }, 1500);                                        for updating titles according to state changes
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been Enabled", "success");
      // document.title = "TextUtils - Light Mode";       for updating titles according to state changes
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils"/>
      <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> component 1
            /users/home --> component 2     for exact matching the path we have to use exact*/}
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
