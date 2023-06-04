import React from 'react';
import { useAuth } from '../context/Auth';
import BAG from "../images/icons/sac-de-courses.png";
import OOPS from "../images/oops.png";
import '../styles/home.css';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';



function Home() {

  const { user,logout } = useAuth();

  console.log('user',user);
  

    React.useEffect(() => {
        console.log("i'm home")

        
    })

    const add=()=>{

    }
    const [bookList,setBookList] = React.useState([
      {id:1,title:"La rivière à l'envers",price: 5.50,image:"../images/oops.png"},
      {id:2,title:"Un avion sans elle",price: 6.50,image:"../images/oops.png"},
      {id:3,title:"Maman a tord",price: 12.00,image:"../images/oops.png"},
      {id:4,title:"La ferme des animaux",price: 7.50,image:"../images/oops.png"},
    ])
  const [cardToShow, setCardToShow] = React.useState(bookList.length);
  

  return (
    <div className="Home"> 
      <h2>Nos dernières nouveautés</h2>
      
      <div className='wrapper_ensemble_cartes'>
        {bookList.map(
          (book)=>(
            <div className="wrapper-carte" key={book.id}>
                    <img src={book.image} className="book-image" alt={book.title}/>
                   {/* <h3 className="Attribut_Nom">{variable.name}</h3> */}
                    <h5 className="book-title">{book.title}</h5>
                <div className="card-detail">
                    <p className="card-price">{book.price.toFixed(2)+"€"}</p>
                    <div onClick={add} className='home-add-button'>
                      <p>Add</p>
                      <img src={BAG}></img>
                      
                    </div>
                </div>
            </div>
          )
        )}
      </div>
      {/* <Ajout/> */}
  </div>
  );
}

export default Home;