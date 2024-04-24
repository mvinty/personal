import Image from "next/image";
import styles from "./page.module.css";
import React from 'react'
import NavBar from "../components/NavBar";
import Card from "../components/Card/Card";
import { title } from "process";

const SpotifyPage = () => {
  return (
    <main className="styles.main">
      <NavBar></NavBar>
      <h1>My Current Spotify Jams</h1>
      <iframe src="https://open.spotify.com/embed/playlist/5infFAgCclgFdDHNUOsDP7?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      {data.map((card) => (
        <Card
              key={card.title}
              title={card.title}
              artist={card.artist}
              img={card.img}
            />
      
      
      ))}
    
    </main>
  )
}

const data = [
  {
    title: 'Janey Girl',
    artist: 'by 10:01',
    img: '/janey.png'
  },
  {
    title: 'rain bird interlude',
    artist: 'by CODE KUNST',
    img: '/bird.png'
  },
  {
    title: 'Feel It',
    artist: 'by d4vd',
    img: '/feel.png'
  },
  {
    title: 'Moving Out',
    artist: 'by Vacations',
    img: '/moving.png'
  },
  {
    title: 'only u',
    artist: 'by Karri',
    img: '/only.png'
  },
]

export default SpotifyPage