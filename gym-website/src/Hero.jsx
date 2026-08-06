import React from 'react'
import Hero1 from './assets/hero1.webp'
import Hero2 from './assets/hero2.webp'
import Hero3 from './assets/hero3.webp'
import Hero4 from './assets/hero4.webp'
import Hero5 from './assets/hero5.webp'
import Hero6 from './assets/hero6.webp'

const Hero = () => {

let heroPics=[Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

  return (
    <>
    <div id="hero-container">
      <div id="hero-wrapper">
      {heroPics.map((pic, index) => <img src={pic} alt="Hero Pictures" key={index} className="hero-pic" />)}
      </div>
    </div>
    </>
  )
}


export default Hero;