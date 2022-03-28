// import axios from "axios";
// import React, { useState } from "react";
// import { Container, Form, Col, Row, InputGroup } from "react-bootstrap";
// import "./LoginForm.css";

// const SignUp = () => {
//   const [validated, setValidated] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//     RegesterHandeller();
//   };

//   const RegesterHandeller = (e) => {
//     if (!userName || !email || !password) {
//       e.preventDefault();
//     } else {
//       axios
//         .post("https://61a758d0387ab200171d2c12.mockapi.io/login", {
//           userName,
//           email,
//           password,
//         })
//         .then((res) => console.log(res))
//         .then((err) => console.log(err));
//     }
//   };

//   return (
//     <Container>
//       <div className="add-project">
//         <div className="add-project-content">
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <Row className="mb-3">
//               <Form.Group as={Col} md="4" controlId="validationCustom01">
//                 <Form.Label>First name</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="First name"
//                   defaultValue="Mark"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationCustom02">
//                 <Form.Label>Last name</Form.Label>
//                 <Form.Control
//                   required
//                   type="email"
//                   placeholder="Last name"
//                   defaultValue="Otto"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//                 <Form.Label>Username</Form.Label>
//                 <InputGroup hasValidation>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder="Username"
//                     aria-describedby="inputGroupPrepend"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please choose a username.
//                   </Form.Control.Feedback>
//                 </InputGroup>
//               </Form.Group>
//             </Row>
//             <button type="submit" className="btn btn-primary">
//               save
//             </button>
//           </Form>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SignUp;
