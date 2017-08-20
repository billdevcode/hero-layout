import React from 'react'
import Image3 from '../assets/images/dores_transparent_3.png'
import Brushstroke3 from '../assets/images/brushstroke_03.png'

const Hero3 = () => {
    return (
        <div className='Hero-dores3' style={{backgroundImage:  `url(${Brushstroke3})`}}>
            <img className='Hero-dores3-image' src={Image3} alt='dores 3' />
        </div>
    )
}

export default Hero3