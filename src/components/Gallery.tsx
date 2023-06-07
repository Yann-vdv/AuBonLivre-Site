import React, { useState } from "react";
import { useAuth } from "../context/Auth";
import BAG from "../images/icons/shopping-bag.png";
import TIME from "../images/icons/hourglass.png";
import AUCTION2 from "../images/icons/auction(2).png"
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
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    return `${hours}h ${minutes}min ${seconds}sec`
  }

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-3 lg:mx-10 my-8">
      {books.map((book, index) => (
        <div className="flex flex-col w-72 justify-between items-center m-auto rounded-lg" style={{backgroundColor:'#d9d9d9'}} key={index}>
          <div className="flex flex-col mx-6 mt-6">
            {(props.bid && book.bid) && (
              <div className="flex justify-center mb-3">
                <img src={TIME} className="h-10" alt="" />
                <p className="flex items-center ml-4 text-red-600 text-lg">{book.bid.endAt.getTime() < Date.now() ? "Enchère terminée" : getTimeLeft(new Date(book.bid.endAt.getTime() - Date.now()))}</p>
              </div>
            )}
            <img src={book.image} className="w-56" alt={book.title} />
            <h5 className="text-center font-bold text-lg">{book.title}</h5>
          </div>
          <div className="flex justify-between w-full">
            <p className="flex ml-5 items-center">{book.startingPrice.toFixed(2) + " €"}</p>
            <div onClick={add} className="flex justify-between pl-3 pr-2 py-1 rounded-br-lg rounded-tl-lg" style={{backgroundColor:'#DFE0A2'}}>
              <p className="font-semibold text-lg mr-1">{(props.bid && book.bid) ? 'Enchérir' : 'Ajouter'}</p>
              <img src={(props.bid && book.bid) ? AUCTION2 : BAG} className="h-6"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
