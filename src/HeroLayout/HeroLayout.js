import React from 'react'
import Header from './components/Header'
import HeroIntro from './components/HeroIntro'
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import './HeroLayout.css'

const HeroLayout = () => {
    return (
        <div className='HeroLayout'>
            <Header />
            <div className='Hero-wrapper'>
                <Hero2 />
                <Hero1 />
                <Hero3 />
            </div>
            <HeroIntro />
        </div>
    )
}

export default HeroLayout