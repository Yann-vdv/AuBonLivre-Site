import React from 'react';
import { useAuth } from '../context/Auth';
import Gallery from "../components/Gallery";
import { book } from "../models/models";
import SUBTITLE from "../images/icons/subTitle.png"

function Bid() {

  const { user,logout } = useAuth();

  const add = () => {};

  const bookList: book[] = [
    {
      id: 1,
      title: "La rivière à l'envers",
      author: "Jean-Claude Mourlevat",
      startingPrice: 5.5,
      image: "https://i.ebayimg.com/images/g/oGcAAOSw3PpezsNX/s-l1600.jpg",
      bid: {
        id: 1,
        amount: 5.7,
        bidderId: 1,
        bookId: 1,
        endAt: new Date(new Date().setHours(18))
      }
    },
    {
      id: 2,
      title: "Un avion sans elle",
      author: "Michel Bussi",
      startingPrice: 6.5,
      image: "https://i.ebayimg.com/images/g/~LoAAOSwQJZkZ31H/s-l500.jpg",
      bid: {
        id: 2,
        amount: 7,
        bidderId: 2,
        bookId: 2,
        endAt: new Date(new Date().setHours(8))
      }
    },
    {
      id: 3,
      title: "Maman a tord",
      author: "Michel Bussi",
      startingPrice: 12.0,
      image: "https://i.ebayimg.com/images/g/YR8AAOSwruxka5Iw/s-l1600.jpg",
      bid: {
        id: 1,
        amount: 5.7,
        bidderId: 1,
        bookId: 1,
        endAt: new Date(new Date().setHours(22))
      }
    },
    {
      id: 4,
      title: "La ferme des animaux",
      author: "George Orwell",
      startingPrice: 7.5,
      image: "https://i.ebayimg.com/images/g/i30AAOSwKF5cnk4H/s-l500.jpg",
      bid: {
        id: 1,
        amount: 5.7,
        bidderId: 1,
        bookId: 1,
        endAt: new Date(new Date().setHours(14))
      }
    },
  ];

  return (
    <div className="w-full"> 
      <h2 className='font-bold pl-10 pt-6' style={{fontSize:'2.2rem'}}>Enchères</h2>
      <img src={SUBTITLE} className="h-3 w-72 opacity-60 pl-8 mt-1"/>
      <Gallery products={bookList.concat(bookList)} bid={true} />
  </div>
  );
}

export default Bid;