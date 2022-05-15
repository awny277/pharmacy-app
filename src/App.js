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
  const [userInfo, setUserInfo] = useState([]);
  const [validateAccount, setValidateAccount] = useState([]);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // البحث عن المنتج بالاسم
  const searchNameHandeler = (name) => {
    setSearchName(name);
  };

  // موقع المتحدة علي الخريطة
  const ShowMotahedaInMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.387757328569762 +
        "," +
        39.78686664878236
    );
  };

  // موقع المجتمع علي الخريطة
  const ShowMogtam3InMapClick = () => {
    window.open(
      "https://maps.google.com?q=" +
        21.37935310607602 +
        "," +
        39.788001929964814
    );
  };

  // موقع النهدي علي الخريطة
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

  // دالة عدم تذكر الرقم السري
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
        if (accoundValidation.admin === true) {
          navigate("/admin");
          window.localStorage.setItem("type", "admin");
        }
        // navigate("/Product");
      }
    }
  };

  // دالة تسجيل الدخول
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
          // If Password or email Rong return ForgetPassword
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
            if (loginValidate.admin === true) {
              navigate("/admin");
              window.localStorage.setItem("type", "admin");
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Account is wrong",
          footer: `<button class="register btn" >register</button>`,
        });
        document.querySelector(".register").onclick = () => {
          HandlerReister();
        };
      }
    }
  };

  // انشاء حساب جديد
  const HandlerReister = async (e) => {
    const { value: userName } = await Swal.fire({
      title: "User Name",
      input: "text",
      inputLabel: "Your Name",
      inputPlaceholder: "Enter your userName",
    });

    if (userName) {
      const { value: email } = await Swal.fire({
        title: "Register",
        input: "email",
        inputLabel: "Your email address",
        inputPlaceholder: "Enter your email address",
      });

      const accoundValidation = userInfo.find((ele) => {
        return ele.email.toLowerCase() === email.toLowerCase();
      });

      if (email) {
        if (!accoundValidation) {
          const { value: password } = await Swal.fire({
            title: "Enter your password",
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
            axios
              .post("https://6276e9ed2f94a1d706082b7e.mockapi.io/login", {
                email,
                password,
                userName,
                admin: false,
                discount: true,
              })
              .then((res) => {
                window.localStorage.setItem("userName", userName);
                window.localStorage.setItem("password", password);
                window.localStorage.setItem("email", email);
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                window.localStorage.setItem("type", "user");
                window.location.reload(false);
              })
              .catch((err) => console.log(err));
            // navigate("/Product");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This User is Signup Befor",
            footer: `<button class="register btn" >register</button>`,
          });
          document.querySelector(".register").onclick = () => {
            HandlerReister();
          };
        }
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
        {/* صفحة عرض كل المنتجات و البحث */}
        <Route
          path="/Product"
          element={
            <Product
              searchName={searchName}
              Loginn={Loginn}
              userInfo={userInfo}
            />
          }
        />
        {/* صفحة العرض الخاصة بكل منتج */}
        <Route
          path="/Product/:id"
          element={
            <ProductDetails
              ShowMotahedaInMapClick={ShowMotahedaInMapClick}
              ShowMogtam3InMapClick={ShowMogtam3InMapClick}
              ShowNahdiInMapClick={ShowNahdiInMapClick}
            />
          }
        />
        {/* اشناء حساب جديد لمستخدمين الموقع و انشاء حساب جديد للمستخم*/}
        <Route path="/register" element={<Register />} />
        {/*تسجيل دخول مسؤل الموقع ز انشاء حساب جديد */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
