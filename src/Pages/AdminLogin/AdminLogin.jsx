import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [validateAccount, setValidateAccount] = useState([]);
  const navigate = useNavigate();

  const logoutHandeller = () => {
    window.localStorage.setItem("userName", "");
    window.localStorage.setItem("password", "");
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("userID", "");
    window.localStorage.setItem("isOline", "false");
    window.localStorage.setItem("type", "user");
    window.location.reload(false);
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
        if (accoundValidation.admin === true) {
          window.localStorage.setItem("type", "admin");
          navigate("/admin");
        } else {
          navigate("/Product");
          window.localStorage.setItem("type", "user");
        }
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
              .post("https://6276e9ed2f94a1d706082b7e.mockapi.io/login", {
                email,
                password,
                userName,
                admin: true,
                discount: true,
              })
              .then((res) => {
                window.localStorage.setItem("userName", userName);
                window.localStorage.setItem("password", password);
                window.localStorage.setItem("email", email);
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                window.localStorage.setItem("type", "admin");
                window.location.reload(false);
              })
              .catch((err) => console.log(err));
            navigate("/admin");
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
                "https://6276e9ed2f94a1d706082b7e.mockapi.io/login/" +
                  loginValidate.id,
                { ...obj }
              )
              .then((res) => {
                window.localStorage.setItem("userName", res.data.userName);
                window.localStorage.setItem("userID", res.data.id);
                window.localStorage.setItem("isOline", "true");
                window.location.reload(false);
              })
              .catch((err) => console.log(err));
            if (loginValidate.admin === true) {
              navigate("/admin");
              window.localStorage.setItem("type", "admin");
            } else {
              navigate("/Product");
              window.localStorage.setItem("type", "user");
            }
            // OfferHandler();
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
      <div className="AdminLogin text-center">
        <Container>
          <div className="AdminLogin-container">
            <h1>?????????? ???? ?????????? ?????????? ???????????? ???????????? ?????? ???????? ???????????? ???? ??????</h1>
            <h2>???????? ?????????? ???????? ???????????????? ?????? ???? ??????</h2>
            {window.localStorage.getItem("isOline") === "true" ? (
              <div>
                <button
                  className="btn btn-danger Logout"
                  onClick={logoutHandeller}
                >
                  ?????????? ????????????
                </button>
              </div>
            ) : (
              <div className="registerr">
                <button className="btn signup" onClick={HandlerReister}>
                  ?????????? ????????
                </button>
                <button className="btn Login" onClick={Loginn}>
                  ?????????? ????????????
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
