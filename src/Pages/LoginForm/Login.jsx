// import React, { useEffect, useState } from "react";
// import axios, { Axios } from "axios";
// import { Form } from "react-bootstrap";
// import { Button } from "bootstrap";
// import Swal from "sweetalert2";

// const Login = ({ register }) => {
//   let product = register;
//   // Login
//   const LoginSwal = async (e) => {
//     const { value: email2 } = await Swal.fire({
//       // allowOutsideClick: false,
//       title: "Login",
//       input: "email",
//       inputLabel: "Your email address",
//       inputPlaceholder: "Enter your email address",
//     });
//     if (email2) {
//       const { value: password2 } = await Swal.fire({
//         // allowOutsideClick: false,
//         title: "Login",
//         input: "password",
//         inputLabel: "Password",
//         inputPlaceholder: "Enter your password",
//         inputAttributes: {
//           maxlength: 10,
//           autocapitalize: "off",
//           autocorrect: "off",
//         },
//       });

//       if (password2) {
//         // If Password or email Rong return Reister
//         if (
//           // window.localStorage.length === 0 ||
//           window.localStorage.getItem("password") !== password ||
//           window.localStorage.getItem("email") !== email
//         ) {
//           e.preventDefault();
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Emaill or Password is Wrong",
//             footer: `<button class="register btn" >register</button>`,
//           });
//           document.querySelector(".register").onclick = () => {
//             register();
//           };
//         }
//       }
//     }
//   };
//   useEffect(() => {
//     document.querySelector(".register").onclick = () => {
//       product();
//     };
//   }, [product]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [registerdata, setRegister] = useState(false);
//   useEffect(() => {
//     axios
//       .get("https://61a758d0387ab200171d2c12.mockapi.io/login")
//       .then((res) => {
//         console.log(res.data);
//         setRegister(res.data);
//       });
//   }, []);
//   const loginHandle = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://61a758d0387ab200171d2c12.mockapi.io/login", {
//         email,
//         password,
//       })
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <Form onSubmit={loginHandle}>
//       <input
//         type={"text"}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type={"text"}
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {/* <Form.Group className="mb-3" controlId="formGroupEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group> */}
//       {/* <Form.Group className="mb-3" controlId="formGroupPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group> */}
//       <button className="btn btn-primary" onClick={loginHandle}>
//         save
//       </button>
//     </Form>
//   );
// };

// export default Login;
