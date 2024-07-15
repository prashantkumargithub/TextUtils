import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
import TestForm from "./components/TestForm";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {
  //alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  //mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#020a18';
      showAlert("Dark mode had been enabled", "success");
      document.title = "TextUtils - Dark mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode had been enabled", "success");
      document.title = "TextUtils - Light mode";

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TestForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
        <SpeedInsights />
        <Analytics />
      </Router>

    </>
  );
}

export default App;
