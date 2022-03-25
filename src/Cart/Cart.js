import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = ({ item }) => {
  const { title } = item;
  return (
    <div className="d-flex justify-content-between mt-5">
      <h5>{title}</h5>
      <h5>
        <button className="text-danger">
          <AiTwotoneDelete></AiTwotoneDelete>
        </button>
      </h5>
    </div>
  );
};

export default Cart;
