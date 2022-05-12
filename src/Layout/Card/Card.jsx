import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
const Card = ({
  name,
  price,
  imgUrl,
  ClickHandel,
  discount,
  pharmacyName,
  productId,
  Loginn,
}) => {
  // const [ID, setId] = useState("");
  // const [userInfo, setUserInfo] = useState([]);
  // useEffect(() => {
  //   if (window.localStorage.getItem("userID")) {
  //     setId(window.localStorage.getItem("userID"));
  //     axios
  //       .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/login/" + ID)
  //       .then((res) => {
  //         setUserInfo(res.data);
  //       })
  //       .catch((err) => {
  //         window.localStorage.setItem("userName", "");
  //         window.localStorage.setItem("password", "");
  //         window.localStorage.setItem("email", "");
  //         window.localStorage.setItem("userID", "");
  //         window.localStorage.setItem("isOline", "false");
  //         window.location.reload(false);
  //         console.log(err);
  //       });
  //   } else {
  //     return null;
  //   }
  // }, [ID]);
  const handelDelete = () => {
    axios
      .delete(
        "https://6276e9ed2f94a1d706082b7e.mockapi.io/products/" + productId
      )
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  };
  return (
    <div className={`cards `}>
      <div className="card-image">
        <img src={imgUrl} alt="test" />
      </div>
      <div className="card-content">
        {/* <h4 className="product-name">{name}</h4>
        <div className="price">
          <span className="card-price">السعر : {price} ر.س</span>
        </div>
        <h4>الصيدلية : {pharmacyName}</h4> */}
        {/* {window.localStorage.getItem("userID") && (
          
        )} */}
        <button
          className="btn viewBtn"
          onClick={(e) => {
            if (window.localStorage.getItem("isOline") === "false") {
              e.preventDefault();
              Loginn();
            } else {
              ClickHandel();
            }
          }}
        >
          مشاهدة
        </button>
        {window.localStorage.getItem("type") === "admin" && (
          <button className="btn viewBtn" onClick={handelDelete}>
            حذف
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
