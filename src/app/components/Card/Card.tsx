import Image from "next/image";
import React from 'react'
import styles from './Card.module.css'

const Card = ({title, artist, img} : {title:any, artist:any, img:any}) => {
  return (
    <div className={styles.card}>
          <div>
            <Image 
            src={img} 
            width={300}
            height={300}
            alt="" 
            className='card-image' 
        />
        <p className='card-title'>{title} {artist}</p> 
         </div>   
    </div>
  )
}


export default Card