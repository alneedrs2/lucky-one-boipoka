import React from "react";
import "./Card.css";
import { GiShoppingCart } from "react-icons/gi";

const Card = ({ book, handleAddToCart }) => {
  const { title, author, img, price } = book;

  return (
    <div>
      <div className="card-box">
        <div className="card-info">
          <img className="image-box" src={img} alt="" />
          <h3>Name: {title.slice(0, 20)}</h3>
          <p>Author: {author}</p>
          <h4>Price: ${price}</h4>
          <button
            className="btn-cart p-2"
            onClick={() => handleAddToCart(book)}
          >
            <h5>
              Add to Cart <GiShoppingCart></GiShoppingCart>
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
