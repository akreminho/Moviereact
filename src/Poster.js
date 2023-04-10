import React from 'react'
import post from './poster.jpg'
import './Poster.css'
import avt1 from './avatar1.jpg'
import avt2 from './avatar2.jpg'

const Poster = () => {
    return (
        <div className='poster'>
            <img className='postimg' src={post} alt='404' />
            <div className='title'>
                <h1>Avatar</h1>
                <p>
                    Avatar est un film de science-fiction américain réalisé par James Cameron et sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.
                </p>
                <div className='gallery'>
                    <img className='gal' src={avt1}/>
                    <img className='gal' src={avt2}/>
                    <img className='gal' src={avt1}/>
                    

                </div>
            </div>
        </div>
    )
}

export default Poster
