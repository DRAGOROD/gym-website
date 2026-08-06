import React from 'react'
import Hero from './Hero'
import Calculator from './calculator'
import { useContext } from 'react'
import { navContext } from './navbar'

const Home = () => {

let calRef=useContext(navContext)

  return (
    <div>
        <Hero/>
      <div ref={calRef}>
        <Calculator/>
      </div>
    </div>
  )
}

export default Home