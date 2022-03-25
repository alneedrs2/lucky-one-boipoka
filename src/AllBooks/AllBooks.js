import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./AllBooks.css";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);
  return (
    <div className="d-flex">
      <div className="section">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
      <div>
          <h2>selected items</h2>
      </div>
    </div>
  );
};

export default AllBooks;
