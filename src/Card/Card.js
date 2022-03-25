import React from "react";
import "./Card.css";
import { GiShoppingCart } from "react-icons/gi";

const Card = ({ book }) => {
  const { title, img, price } = book;
  return (
    <div className="section">
      <div className="card-box">
        <img className="image-box" src={img} alt="" />
        <h3>Name: {title.slice(0, 20)}</h3>
        <h5>Price: ${price}</h5>
        <button className="btn-cart p-2" onClick={(book)}>
          <h5>
            Add to Cart <GiShoppingCart></GiShoppingCart>
          </h5>
        </button>
      </div>
    </div>
  );
};

export default Card;
