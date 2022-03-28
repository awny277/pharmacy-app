import React, { useState } from "react";
import NavBar from "./Layout/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Layout/Footer/Footer";
import Product from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
import Register from "./Pages/LoginForm/Register";
import "./App.css";

function App() {
  const [searchName, setSearchName] = useState("");
  const [userId, setUserId] = useState("");

  const GetUserIdHandeller = (id) => {
    setUserId(id);
    console.log(userId);
  };
  const searchNameHandeler = (name) => {
    setSearchName(name);
  };
  const [userLogin, setUserLogin] = useState(false);

  const OfferHandler = () => {
    setUserLogin(true);
  };
  const canselOffer = () => {
    setUserLogin(false);
  };
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home searchName={searchNameHandeler} />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/Product"
          element={<Product searchName={searchName} OfferHandler={userLogin} />}
        />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route
          path="/register"
          element={
            <Register
              OfferHandler={() => OfferHandler()}
              canselOffer={() => canselOffer()}
              SetUserId={(id) => GetUserIdHandeller(id)}
            />
          }
        />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
