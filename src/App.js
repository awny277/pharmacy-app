import React, { useEffect, useState } from "react";
import NavBar from "./Layout/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Layout/Footer/Footer";
import Product from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
import Register from "./Pages/LoginForm/Register";
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

  const ShowMotahedaInMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.387757328569762 +
        "," +
        39.78686664878236
    );
  };
  // 21.387889846323215, 39.78687515003181
  // 21.387867602006136, 39.78688859440077
  // 21.387858824625667, 39.78687919338947
  // 21.38786133042132,  39.78687899846413
  // 21.387757328569762, 39.78687753367424
  // 21.387757328569762, 39.78686664878236

  const ShowMogtam3InMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.37935310607602 +
        "," +
        39.788001929964814
    );
  };
  // 21.37935310607602, 39.788001929964814

  const ShowNahdiInMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.396601294967642 +
        "," +
        39.79143950864262
    );
  };
  // 21.396594331895447, 39.79144780687863
  // 21.396547229602696, 39.79140805103041
  // 21.388637822818346 , 39.796190271137135
  // 21.396615686728577, 39.791403529980386
  // 21.39660349375364, 39.79143949901927
  // 21.396598841466577, 39.79145046315517
  // 21.396601294967642, 39.79143950864262

  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchName={searchNameHandeler}
              ShowMotahedaInMapClick={ShowMotahedaInMapClick}
              ShowMogtam3InMapClick={ShowMogtam3InMapClick}
              ShowNahdiInMapClick={ShowNahdiInMapClick}
            />
          }
        />
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
            <ProductDetails
              setdataCompare={(data) => getCompareData(data)}
              ShowMotahedaInMapClick={ShowMotahedaInMapClick}
              ShowMogtam3InMapClick={ShowMogtam3InMapClick}
              ShowNahdiInMapClick={ShowNahdiInMapClick}
            />
          }
        />
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
