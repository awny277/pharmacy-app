import React from "react";
import NavBar from "./Layout/NavBar/NavBar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
