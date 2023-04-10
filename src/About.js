import React from 'react'
import av from './avatarp.png'
import './About.css'
function About() {
  return (
    <div className='about'>
          <p>
    Avatar est un film de science-fiction américain réalisé par James Cameron et sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.
    </p>
      <img className='avatarp' src={av} alt='404'/>

    </div>
  )
}

export default About
