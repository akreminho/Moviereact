import React from 'react'
import post from './poster.jpg'
import './Poster.css'
import avt1 from './avatar1.jpg'
import avt2 from './avatar2.jpg'
import avt3 from './avatar3.jpg'
import avt4 from './avatar4.jpg'
import avt5 from './avatar5.jpg'
import avt6 from './avatar6.jpg'
// import poster image 
const Poster = () => {
    return (
        <div className='poster'>
            <img className='postimg' src={post} alt='404' />
            <div className='title'>
                <h1>Avatar</h1>
                <p>
                    Avatar est un film de science-fiction américain réalisé par James Cameron et sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.
                </p>
{/* import movies gallery */}
                <div className='gallery'>
                    <img className='gal' src={avt1} alt='404'/>
                    <img className='gal' src={avt2} alt='404' />
                    <img className='gal' src={avt3} alt='404'/>
                    <img className='gal' src={avt4} alt='404'/>
                    <img className='gal' src={avt5} alt='404'/>
                    <img className='gal' src={avt6} alt='404'/>
                    

                </div>
            </div>
        </div>
    )
}

export default Poster
