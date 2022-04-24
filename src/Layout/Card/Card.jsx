import React from "react";
import "./Card.css";

const Card = ({ name, price, imgUrl, ClickHandel, discount, pharmacyName }) => {
  return (
    <div className={`cards `}>
      <div className="card-image">
        <img src={imgUrl} alt="test" />
      </div>
      <div className="card-content">
        <h4 className="product-name">{name}</h4>
        {/* {window.localStorage.getItem("userID") ? (
          <div className="price">
            <del className="card-price">({price})</del>
            <span className="card-discount">السعر : {discount} ر.س</span>
          </div>
        ) : (
          <div className="price">
            <span className="card-price">السعر : {price} ر.س</span>
          </div>
        )} */}
        <div className="price">
          <span className="card-price">السعر : {price} ر.س</span>
        </div>
        <h4>الصيدلية : {pharmacyName}</h4>
        {window.localStorage.getItem("userID") && (
          <button className="btn viewBtn" onClick={ClickHandel}>
            مشاهدة
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
