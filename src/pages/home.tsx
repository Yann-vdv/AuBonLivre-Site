import React from 'react';
import { useAuth } from '../context/Auth';
import BAG from "../images/sac-de-courses.png"
import '../styles/home.css'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Home() {

  const { user,logout } = useAuth();

  console.log('user',user)

    React.useEffect(() => {
        console.log("i'm home")
    })
    
  const [cardToShow, setCardToShow] = React.useState(8);

  return (
    <div className="Home"> 
    {/* <h1>Nombre de joueurs : {Joueur_variable.length}</h1> */}
      <h2>Nos dernières nouveautés</h2>
      
      <div className='wrapper_ensemble_cartes'>
        {[...Array(cardToShow)].map(
          (value, index)=>(
            <Card id={index+1} key={index}/>
          )
        )}
      </div>
      {/* <Ajout/> */}
  </div>
  );
}

const Card = ({id}: {id:number})=>{
  const add=()=>{

  }
  return (<div className="wrapper-carte">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPC6Q_Kpxa_CJcPij6rjAUn0vu6FuHxLHMb8PLCM&s"} className="book-image" alt=""/>
                   {/* <h3 className="Attribut_Nom">{variable.name}</h3> */}
                    <h5 className="book-title">titre</h5>
                <div className="card-detail">
                    <p className="card-price">price</p>
                    <div onClick={add} className='home-add-button'>
                      <p>Add</p>
                      <img src={BAG}></img>
                      
                    </div>
                </div>
            </div>
            );
}

export default Home;