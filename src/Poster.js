import React from 'react'
import poster from './posterres.jpg'
import './Poster.css'
import res1 from './reason1.jpg'
import res2 from './reason2.jpg'
import res3 from './reason3.jpg'
import res4 from './reason1.jpg'

//  poster movie 
const Poster = () => {
    return (
        <div className='poster'>
            <img className='postimg' src={poster} alt='404' />
            <div className='title'>
                <h1>13 REASONS WHY</h1>
                <p>
                13 Reasons Why, ou Treize Raisons au Québec, est une série télévisée américaine développée par Brian Yorkey (en) d'après le roman Treize raisons de Jay Asher et diffusée du 31 mars 2017 au 5 juin 2020 dans le monde entier sur Netflix  
                </p>
{/*  movies gallery */}
                <div className='gallery'>
                    <img className='gallery_items' src={res1} alt='404'/>
                    <img className='gallery_items' src={res2} alt='404' />
                    <img className='gallery_items' src={res3} alt='404'/>
                    <img className='gallery_items' src={res4} alt='404'/>
                    <img className='gallery_items' src={res1} alt='404'/>
                    <img className='gallery_items' src={res2} alt='404' />
                    <img className='gallery_items' src={res3} alt='404'/>
                    <img className='gallery_items' src={res4} alt='404'/>
                </div>
            </div>
        </div>
    )
}

export default Poster
