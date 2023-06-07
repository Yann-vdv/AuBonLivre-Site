import React, { useState } from "react";
import { useAuth } from "../context/Auth";
import BAG from "../images/icons/sac-de-courses.png";
import TIME from "../images/icons/time.png";
import { book } from "../models/models";

type props = {
  products: book[];
  bid: boolean;
};

function Gallery(props: props) {
  const { user, logout } = useAuth();
  const [books, setBook] = useState(props.products)
  const [now, setNow] = useState(new Date());

  const add = () => {};

  const getTimeLeft = (time: Date) => {
    return `${time.getHours().toFixed(2)}h${time.getMinutes().toFixed(2)}min${time.getSeconds().toFixed(2)}sec`
  }

  return (
    <div className="wrapper_ensemble_cartes">
      {books.map((book, index) => (
        <div className="wrapper-carte" key={index}>
          {(props.bid && book.bid) && (
            <div className="bid-detail">
              <img src={TIME} className="bid-time" alt="" />
              <p>{book.bid.endAt.getTime() < Date.now() ? "enchère terminée" : getTimeLeft(new Date(book.bid.endAt.getTime() - Date.now()))}</p>
            </div>
          )}
          <img src={book.image} className="book-image" alt={book.title} />
          <h5 className="book-title">{book.title}</h5>
          <div className="card-detail">
            <p className="card-price">{book.startingPrice.toFixed(2) + "€"}</p>
            <div onClick={add} className="home-add-button">
              <p>Add</p>
              <img src={BAG} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
