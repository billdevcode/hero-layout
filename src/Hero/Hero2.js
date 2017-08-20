import React from 'react'
import Image2 from '../assets/images/dores_transparent_2.png'
import Brushstroke2 from '../assets/images/brushstroke_02.png'

const Hero2 = () => {
    return (
        <div className='Hero-dores2' style={{backgroundImage:  `url(${Brushstroke2})`}}>        
            <img className='Hero-dores2-image' src={Image2} alt='dores 2' />
        </div>
    )
}

export default Hero2