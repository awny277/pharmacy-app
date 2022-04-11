import React from "react";
import "./Card.css";
// import { GoGitCompare } from "react-icons/go";
// import axios from "axios";

const Card = ({
  name,
  price,
  imgUrl,
  ClickHandel,
  discount,
  pharmacyName,
  // compare,
  // setdataCompare,
  // result,
  // ElementId,
}) => {
  // const [compareBtn, setCompareBtn] = useState(null);

  // const HandeladdToCompare = () => {
  //   if (compare === false) {
  //     const obj = {
  //       name: name,
  //       price: price,
  //       imgUrl: imgUrl,
  //       discount: discount,
  //       pharmacyName: pharmacyName,
  //       compare: true,
  //     };
  //     axios
  //       .put(
  //         "https://61a758d0387ab200171d2c12.mockapi.io/products/" + ElementId,
  //         { ...obj }
  //       )
  //       .then(setCompareBtn(true));
  //   } else {
  //     const obj = {
  //       name: name,
  //       price: price,
  //       imgUrl: imgUrl,
  //       discount: discount,
  //       pharmacyName: pharmacyName,
  //       compare: false,
  //     };
  //     axios
  //       .put(
  //         "https://61a758d0387ab200171d2c12.mockapi.io/products/" + ElementId,
  //         { ...obj }
  //       )
  //       .then(setCompareBtn(false));
  //   }
  // };
  return (
    <div className={`cards `}>
      <div className="card-image">
        <img src={imgUrl} alt="test" />
      </div>
      <div className="card-content">
        <h4 className="product-name">{name}</h4>
        {window.localStorage.getItem("userID") ? (
          <div className="price">
            <del className="card-price">({price})</del>
            <span className="card-discount">السعر : {discount} ر.س</span>
          </div>
        ) : (
          <div className="price">
            <span className="card-price">السعر : {price} ر.س</span>
          </div>
        )}
        <h4>الصيدلية : {pharmacyName}</h4>
        {window.localStorage.getItem("userID") && (
          <button className="btn viewBtn" onClick={ClickHandel}>
            مشاهدة
          </button>
        )}
        {/* <button className="btn m-2 compare-Btn " onClick={HandeladdToCompare}>
          <GoGitCompare
            className={`compare ${compareBtn === true ? "active" : null}`}
          />
        </button> */}
      </div>
    </div>
  );
};

export default Card;
