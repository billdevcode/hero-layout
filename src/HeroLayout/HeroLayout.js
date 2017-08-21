import React from 'react'
import Header from './components/Header'
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import LearnMoreButton from './components/LearnMoreButton'
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
            <LearnMoreButton />
        </div>
    )
}

export default HeroLayout