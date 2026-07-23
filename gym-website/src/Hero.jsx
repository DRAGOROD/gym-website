import React from 'react'
import Hero1 from './assets/hero1.png'
import Hero2 from './assets/hero2.png'
import Hero3 from './assets/hero3.png'
import Hero4 from './assets/hero4.png'
import Hero5 from './assets/hero5.png'
import Hero6 from './assets/hero6.png'

const Hero = () => {

let heroPics=[Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

  return (
    <>
    <div id="hero-container">
    {heroPics.map((pic, index) => <img src={pic} alt="Hero Pictures" key={index} className="hero-pic" />)}
    </div>
    </>
  )
}


export default Hero;