import React from 'react'
import Image1 from '../assets/images/dores_transparent_1.png'
import Brushstroke1 from '../assets/images/brushstroke_01.png'

const Hero1 = () => {
    return (
        <div className='Hero-dores1' style={{backgroundImage:  `url(${Brushstroke1})`}}>
            <img className='Hero-dores1-image' src={Image1} alt='dores 1' />        
        </div>
    )
}

export default Hero1