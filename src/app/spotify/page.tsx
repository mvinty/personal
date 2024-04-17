import Image from "next/image";
import styles from "./page.module.css";
import React from 'react'
import NavBar from "../components/NavBar";

const SpotifyPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <p>What I am listening to on Spotify Page</p>
    </>
  )
}

export default SpotifyPage