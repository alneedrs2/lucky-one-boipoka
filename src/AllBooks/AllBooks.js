import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import ChooseItem from "../ChooseItem/ChooseItem";
import ShowRandom from "../ShowRandom/ShowRandom";
import "./AllBooks.css";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [carts, setCarts] = useState([]);
  const [items, setItem] = useState([]);

  const handleAddToCart = (book) => {
    const newCart = [...carts, book];
    setCarts(newCart);
  };

  const chooseItem = () => {
    let items = 0;
    if (!items !== undefined) {
      setItem(items);
      const cart = Math.floor(Math.random() * 3 + 1);
      items = carts[cart];
      setItem(items);
    }
  };

  const handleChooseAgain = () => {
    const changeCart = [];
    setCarts(changeCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="book-container">
      <div className="section">
        {books.map((book) => (
          <Card key={book.id} book={book} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="secondary">
        <h2 className="text-center">Selected Books</h2>
        {carts.map((item) => (
          <Cart key={item.id} item={item} />
        ))}

        <ShowRandom itm={items} chooseItem ={chooseItem}></ShowRandom>

        <ChooseItem chooseItem ={chooseItem}></ChooseItem>
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
