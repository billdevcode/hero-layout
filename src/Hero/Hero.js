import React from 'react'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
// import Brushstroke1 from '../assets/images/brushstroke_01.png'
// import Brushstroke2 from '../assets/images/brushstroke_02.png'
// import Brushstroke3 from '../assets/images/brushstroke_03.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='Hero row'>
            <div className='Hero-wrapper'>
                <Hero1 />
                <Hero2 />
                <Hero3 />
            </div>
        </div>
    )
}

export default Hero