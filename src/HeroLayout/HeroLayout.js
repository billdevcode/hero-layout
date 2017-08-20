import React from 'react'
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import './HeroLayout.css'

const HeroLayout = () => {
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

export default HeroLayout