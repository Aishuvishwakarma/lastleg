import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import ClickEffect from "./components/ClickEffect";

const App = () => {
  return (
    <>
      <ClickEffect />
      <div className="flex h-screen">
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
          <Router>
            <div className="ms-16">
              <Routes>
                <Route path="/" element={<Layout />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
