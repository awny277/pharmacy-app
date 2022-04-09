import React, { useEffect, useState } from "react";
import NavBar from "./Layout/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Layout/Footer/Footer";
import Product from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
import Register from "./Pages/LoginForm/Register";
// import Compare from "./Pages/Compare/Compare";
import "./App.css";

function App() {
  const [searchName, setSearchName] = useState("");
  const [userId, setUserId] = useState("");
  const [dataComapre, setdataCompare] = useState([]);

  const getCompareData = (data) => {
    setdataCompare(data);
  };

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
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home searchName={searchNameHandeler} />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/Product"
          element={
            <Product
              searchName={searchName}
              OfferHandler={userLogin}
              setdataCompare={(data) => getCompareData(data)}
            />
          }
        />
        <Route
          path="/Product/:id"
          element={
            <ProductDetails setdataCompare={(data) => getCompareData(data)} />
          }
        />
        {/* <Route
          path="/compare"
          element={<Compare dataComapre={dataComapre} />}
        /> */}
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
