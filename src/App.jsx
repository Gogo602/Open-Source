import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/page' element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
