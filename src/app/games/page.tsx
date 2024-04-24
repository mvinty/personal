import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar";
import React from 'react'
import Card from "../components/Card/Card";

const SteamPage = () => {
  return (
    <>
    <NavBar></NavBar>
    <h1>My favorite games at the moment</h1> 
    {data.map((card) => (
        <Card
              key={card.title}
              title={card.title}
              artist={card.artist}
              img={card.img}
            />
      
      
      ))}
    </>
    
    

  )
}

const data = [
  {
    title: 'Helldivers 2',
    artist: '',
    img: '/divers.png'
  },

]

export default SteamPage

