import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./AllBooks.css";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    const newCart = [...cart, book];
    setCart(newCart);
  };

  const handleChooseAgain = () => {
    const changeCart = [];
    setCart(changeCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="d-flex">
      <div className="section">
        {books.map((book) => (
          <Card key={book.id} book={book} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="secondary">
        <h2 className="text-center">Selected Books</h2>
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <button className="btn btn-success p-2 m-2">CHOOSE 1 FOR ME</button>
        <br />
        <button
          onClick={() => handleChooseAgain()}
          className="btn btn-warning p-2 m-2"
        >
          CHOOSE AGAIN
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
