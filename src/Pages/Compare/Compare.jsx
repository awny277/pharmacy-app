// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Col, Container, Row } from "react-bootstrap";
// import "./Compare.css";
// import { TiDeleteOutline } from "react-icons/ti";
// import imgNotfound from "../../images/notfound2.svg";

// const Compare = () => {
//   const [data, setData] = useState([]);
//   const result = data
//     .filter((e) => e.compare === true)
//     .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//   const deletHandeller = (ele) => {
//     const obj = {
//       name: ele.name,
//       price: ele.price,
//       imgUrl: ele.imgUrl,
//       discount: ele.discount,
//       pharmacyName: ele.pharmacyName,
//       compare: false,
//     };
//     axios
//       .put("https://61a758d0387ab200171d2c12.mockapi.io/products/" + ele.id, {
//         ...obj,
//       })
//       .then((res) => {
//         const filterData = result.filter((e) => e.id !== res.data.id);
//         setData(filterData);
//       });
//   };

//   useEffect(() => {
//     axios
//       .get("https://61a758d0387ab200171d2c12.mockapi.io/products")
//       .then((res) => setData(res.data));
//   }, []);

//   return (
//     <Container className="text-center data-compare">
//       <h1 className="text-center"> Comparison of medicines</h1>
//       {result.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th scope="col">Name</th>
//               <th scope="col">Price</th>
//               <th scope="col">Pharmacy </th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((ele, idx) => {
//               return (
//                 /* <Col md={6} key={idx}>
//                 <div className="data-content">
//                   <Row>
//                     <Col xs={12}>
//                       <div className="img-container">
//                         <img src={ele.imgUrl} alt={ele.name} />
//                       </div>
//                     </Col>
//                     <Col>
//                       <div>
//                         <div className="product-details-content text-center">
//                           <h2> {ele.name}</h2>
//                           <h3>pharmacy name: {ele.pharmacyName}</h3>
//                           {window.localStorage.getItem("userID").length > 0 ? (
//                             <div className="price">
//                               <del> price: {ele.price}</del>
//                               <h3>discount: {ele.discount}</h3>
//                             </div>
//                           ) : (
//                             <div className="price">
//                               <h3> price: {ele.price}</h3>
//                             </div>
//                           )}
//                           <p> {ele.description}</p>
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                   <button
//                     className="btn deletebtn"
//                     onClick={() => deletHandeller(ele)}
//                   >
//                     <TiDeleteOutline className="delete" />
//                   </button>
//                 </div>
//               </Col> */
//                 <tr>
//                   <td data-label="Name">{ele.name}</td>
//                   <td data-label="Price">{ele.price}$</td>
//                   <td data-label="Pharmacy">{ele.pharmacyName}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => deletHandeller(ele)}
//                     >
//                       {" "}
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <div>
//           <h2 className="notfoundText">there is no data to compare</h2>
//           <img
//             className="imgNotfound"
//             src={imgNotfound}
//             alt="there is no data to compare"
//           />
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Compare;
