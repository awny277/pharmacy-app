import React, { useEffect, useState } from "react";
import NavBar from "./Layout/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Layout/Footer/Footer";
import Product from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
import Register from "./Pages/LoginForm/Register";
import Swal from "sweetalert2";
import axios from "axios";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [userId, setUserId] = useState("");
  const [dataComapre, setdataCompare] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [validateAccount, setValidateAccount] = useState([]);

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

  const ShowMogtam3InMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.37935310607602 +
        "," +
        39.788001929964814
    );
  };

  const ShowNahdiInMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.396601294967642 +
        "," +
        39.79143950864262
    );
  };
  useEffect(() => {
    axios
      .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/login")
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [validateAccount]);

  const HandelForgetPassword = async () => {
    const { value: email } = await Swal.fire({
      // allowOutsideClick: false,
      title: "Enter Your Account",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    const accoundValidation = userInfo.find((ele) => {
      return ele.email.toLowerCase() === email.toLowerCase();
    });
    if (email) {
      const { value: password } = await Swal.fire({
        title: "Enter your new password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your New password",
        inputAttributes: {
          maxlength: 10,
          autocapitalize: "off",
          autocorrect: "off",
        },
      });
      if (password) {
        axios
          .put(
            "https://6276e9ed2f94a1d706082b7e.mockapi.io/login/" +
              accoundValidation.id,
            {
              email,
              password,
            }
          )
          .then((res) => {
            window.localStorage.setItem("userName", accoundValidation.userName);
            window.localStorage.setItem("password", password);
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("userID", res.data.id);
            window.localStorage.setItem("isOline", "true");
            window.location.reload(false);
          })
          .catch((err) => console.log(err));
        // navigate("/Product");
      }
    }
  };

  const Loginn = async (e) => {
    const { value: email } = await Swal.fire({
      // allowOutsideClick: false,
      title: "Login",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    const loginValidate = userInfo.find((ele) => {
      return ele.email.toLowerCase() === email.toLowerCase();
    });
    setValidateAccount(loginValidate);
    if (email) {
      if (loginValidate || window.localStorage.getItem("email") === email) {
        const { value: password } = await Swal.fire({
          // allowOutsideClick: false,
          title: "Login",
          input: "password",
          inputLabel: "Password",
          inputPlaceholder: "Enter your password",
          inputAttributes: {
            maxlength: 10,
            autocapitalize: "off",
            autocorrect: "off",
          },
        });
        if (password) {
          // If Password or email Rong return Reister
          if (loginValidate.password.toLowerCase() === password.toLowerCase()) {
            const obj = {
              userName: loginValidate.userName,
              email: loginValidate.email,
              password: loginValidate.password,
              discount: true,
            };
            axios
              .put(
                "https://6276e9ed2f94a1d706082b7e.mockapi.io/login/" +
                  loginValidate.id,
                { ...obj }
              )
              .then((res) => {
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                window.location.reload(false);
              })
              .catch((err) => console.log(err));
            navigate("/Product");
            OfferHandler();
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Emaill or Password is Wrong",
              footer: `<button class="Forget btn" >Forget Password</button>`,
            });
            document.querySelector(".Forget").onclick = () => {
              HandelForgetPassword();
            };
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Emaill or Password is Wrong",
          footer: `<button class="Forget btn" >Forget Password</button>`,
        });
        document.querySelector(".Forget").onclick = () => {
          HandelForgetPassword();
        };
      }
    }
  };

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
              Loginn={Loginn}
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
              Loginn={Loginn}
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
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
