import React from "react";
import "./Card.css";
import axios from "axios";
const Card = ({
  imgUrl,
  ClickHandel,
  productId,
  Loginn,
  filterHandeller,
  type,
  name,
  price,
}) => {
  // حذف منتج
  const handelDelete = () => {
    filterHandeller(productId);
    axios
      .delete(
        "https://6276e9ed2f94a1d706082b7e.mockapi.io/products/" + productId
      )
      .catch((err) => console.log(err));
  };
  return (
    // كارد يحتوي علي تفاصيل المنتج
    <div className={`cards `}>
      <div className="card-image">
        <img src={imgUrl} alt="test" />
      </div>
      <div className="card-content">
        {window.localStorage.getItem("isOline") === "true" && (
          <div>
            <h4>{name}</h4>
            <p className="price2">السعر : {price} ر.س</p>
          </div>
        )}
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
        {window.localStorage.getItem("type") === "admin" &&
        type === "delete" ? (
          <button
            className="btn viewBtn"
            onClick={() => {
              handelDelete();
            }}
          >
            حذف
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Card;
