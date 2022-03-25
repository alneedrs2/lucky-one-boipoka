import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);
  return (
    <div>   
      {books.map((book) => (
        <Card/>
      ))}
    </div>
  );
};

export default AllBooks;
