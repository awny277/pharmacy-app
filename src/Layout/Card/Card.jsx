import React from "react";
import "./Card.css";
const Card = ({ name, price, imgUrl, ClickHandel, discount, pharmacyName }) => {
  return (
    <div className={`cards `}>
      <div className="card-image">
        <img src={imgUrl} alt="test" />
      </div>
      <div className="card-content">
        <h4>{name}</h4>
        {window.localStorage.getItem("userID") ? (
          <div className="price">
            <span className="card-discount">discount: {discount}$</span>
            <del className="card-price">price: {price}$</del>
          </div>
        ) : (
          <div className="price">
            <span className="card-price">{price}$</span>
          </div>
        )}
        <h4>pharmacy Name: {pharmacyName}</h4>
        <button className="btn m-2 viewBtn" onClick={ClickHandel}>
          view
        </button>
      </div>
    </div>
  );
};

export default Card;
