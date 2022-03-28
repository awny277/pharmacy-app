import React, { useEffect, useState } from "react";
import "./Card.css";
import { GoGitCompare } from "react-icons/go";
import axios from "axios";

const Card = ({
  name,
  price,
  imgUrl,
  ClickHandel,
  discount,
  pharmacyName,
  compare,
  setdataCompare,
  result,
  ElementId,
}) => {
  // const [reultCompare, setResultComapre] = useState([]);
  // const [comapredata, setComapre] = useState(false);

  const HandeladdToCompare = () => {
    if (compare === false) {
      const obj = {
        name: name,
        price: price,
        imgUrl: imgUrl,
        discount: discount,
        pharmacyName: pharmacyName,
        compare: true,
      };
      axios.put(
        "https://61a758d0387ab200171d2c12.mockapi.io/products/" + ElementId,
        { ...obj }
      );
    } else {
      const obj = {
        name: name,
        price: price,
        imgUrl: imgUrl,
        discount: discount,
        pharmacyName: pharmacyName,
        compare: false,
      };
      axios.put(
        "https://61a758d0387ab200171d2c12.mockapi.io/products/" + ElementId,
        { ...obj }
      );
    }
  };
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
        <button className="btn m-2 compare-Btn " onClick={HandeladdToCompare}>
          <GoGitCompare
            className={`compare ${compare === true ? "active" : null}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
