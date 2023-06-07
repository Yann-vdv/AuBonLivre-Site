import React from "react";
import { useAuth } from "../context/Auth";
import "../styles/home.css";
import Gallery from "../components/Gallery";
import { book } from "../models/models";

function Home() {
  const { user, logout } = useAuth();

  const add = () => {};

  const bookList: book[] = [
    {
      id: 1,
      title: "La rivière à l'envers",
      author: "Jean-Claude Mourlevat",
      startingPrice: 5.5,
      image: "https://i.ebayimg.com/images/g/oGcAAOSw3PpezsNX/s-l1600.jpg",
    },
    {
      id: 2,
      title: "Un avion sans elle",
      author: "Michel Bussi",
      startingPrice: 6.5,
      image: "https://i.ebayimg.com/images/g/~LoAAOSwQJZkZ31H/s-l500.jpg",
    },
    {
      id: 3,
      title: "Maman a tord",
      author: "Michel Bussi",
      startingPrice: 12.0,
      image: "https://i.ebayimg.com/images/g/YR8AAOSwruxka5Iw/s-l1600.jpg",
    },
    {
      id: 4,
      title: "La ferme des animaux",
      author: "George Orwell",
      startingPrice: 7.5,
      image: "https://i.ebayimg.com/images/g/i30AAOSwKF5cnk4H/s-l500.jpg",
    },
  ];

  return (
    <div className="Home">
      <h2>Nos dernières nouveautés</h2>
      <Gallery products={bookList.concat(bookList)} bid={false} />
    </div>
  );
}

export default Home;