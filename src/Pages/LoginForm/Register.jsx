import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const Register = ({ OfferHandler, SetUserId }) => {
  const [logintest, setLogin] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [validateAccount, setValidateAccount] = useState([]);
  const [validationEmail, setValidationEmail] = useState([]);
  const navigate = useNavigate();

  const logoutHandeller = () => {
    window.localStorage.setItem("userName", "");
    window.localStorage.setItem("password", "");
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("userID", "");
    window.localStorage.setItem("isOline", "false");
    setLogin(true);
  };
  useEffect(() => {
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/login")
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [validationEmail, validateAccount]);

  const HandlerReister = async (e) => {
    const { value: userName } = await Swal.fire({
      title: "User Name",
      input: "text",
      inputLabel: "Your Name",
      inputPlaceholder: "Enter your userName",
    });

    const { value: email } = await Swal.fire({
      title: "Register",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    const emailValidate = userInfo.find((ele) => {
      return ele.email.toLowerCase() === email.toLowerCase();
    });

    if (email) {
      if (!emailValidate) {
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
          window.localStorage.setItem("userName", userName);
          window.localStorage.setItem("password", password);
          window.localStorage.setItem("email", email);
          setValidationEmail(emailValidate);
          axios
            .post("https://61a758d0387ab200171d2c12.mockapi.io/login", {
              email,
              password,
              userName,
              discount: false,
            })
            .then((res) => window.localStorage.setItem("userID", res.data.id))
            .catch((err) => console.log(err));
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
                "https://61a758d0387ab200171d2c12.mockapi.io/login/" +
                  loginValidate.id,
                { ...obj }
              )
              .then((res) => {
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                setLogin(false);
              })
              .catch((err) => console.log(err));
            navigate("/Product");
            OfferHandler();
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Emaill or Password is Wrong",
              footer: `<button class="register btn" >register</button>`,
            });
            document.querySelector(".register").onclick = () => {
              HandlerReister();
            };
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Emaill or Password is Wrong",
          footer: `<button class="register btn" >register</button>`,
        });
        document.querySelector(".register").onclick = () => {
          HandlerReister();
        };
      }
    }
  };

  return (
    <React.Fragment>
      {window.localStorage.getItem("isOline") === "false" || !logintest ? (
        <div className="register">
          <button className="btn signup" onClick={HandlerReister}>
            signup
          </button>
          <button className="btn Login" onClick={Loginn}>
            Login
          </button>
        </div>
      ) : (
        <button className="btn btn-danger Logout" onClick={logoutHandeller}>
          Log out
        </button>
      )}

      {/* {window.localStorage.getItem("isOline") === "true" || !logintest ? (
        
      ) : null} */}
    </React.Fragment>
  );
};

export default Register;
