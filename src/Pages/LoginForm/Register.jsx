import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./LoginForm.css";

const Register = ({ OfferHandler }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [validateAccount, setValidateAccount] = useState([]);
  const navigate = useNavigate();

  const logoutHandeller = () => {
    window.localStorage.setItem("userName", "");
    window.localStorage.setItem("password", "");
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("userID", "");
    window.localStorage.setItem("isOline", "false");
    window.location.reload(false);
  };
  useEffect(() => {
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/login")
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
            "https://61a758d0387ab200171d2c12.mockapi.io/login/" +
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
        navigate("/Product");
      }
    }
  };

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
              .post("https://61a758d0387ab200171d2c12.mockapi.io/login", {
                email,
                password,
                userName,
                // userId: userId,
                discount: true,
              })
              .then((res) => {
                window.localStorage.setItem("userName", userName);
                window.localStorage.setItem("password", password);
                window.localStorage.setItem("email", email);
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                window.location.reload(false);
              })
              .catch((err) => console.log(err));
            navigate("/Product");
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
    // }
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
      {window.localStorage.getItem("isOline") === "true" ? (
        <div>
          <Dropdown.Item href="#/action-2">
            <button className="btn btn-danger Logout" onClick={logoutHandeller}>
              تسجيل الخروج
            </button>
          </Dropdown.Item>
        </div>
      ) : (
        <div className="registerr">
          <button className="btn signup" onClick={HandlerReister}>
            انشاء حساب
          </button>
          <button className="btn Login" onClick={Loginn}>
            تسجيل الدخول
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Register;
