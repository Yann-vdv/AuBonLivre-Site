import React from 'react';
import { useAuth } from '../context/Auth';
import BAG from "../images/icons/sac-de-courses.png";
import TIME from '../images/icons/time.png';
import OOPS from "../images/oops.png";
import '../styles/home.css';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';



function Bid() {

  const { user,logout } = useAuth();

  console.log('user',user);
  

    React.useEffect(() => {
        console.log("i'm home")

        
    })

    const add=()=>{

    }
    const [bookList,setBookList] = React.useState([
      {id:1,title:"La rivière à l'envers",price: 5.50,image:"../images/oops.png",time:"18h23min06sec"},
      {id:2,title:"Un avion sans elle",price: 6.50,image:"../images/oops.png",time:"8h05min58sec"},
      {id:3,title:"Maman a tord",price: 12.00,image:"../images/oops.png",time:"23min45sec"},
      {id:4,title:"La ferme des animaux",price: 7.50,image:"../images/oops.png",time:"1h41min01sec"},
    ])
  const [cardToShow, setCardToShow] = React.useState(bookList.length);
  

  return (
    <div className="Home"> 
      <h2>Enchères</h2>
      
      <div className='wrapper_ensemble_cartes'>
        {bookList.map(
          (book)=>(
            <div className="wrapper-carte" key={book.id}>
                <div className="bid-detail">
                   <img src={TIME} className="bid-time" alt=""/>
                   <p>{book.time}</p>
                </div>
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

export default Bid;