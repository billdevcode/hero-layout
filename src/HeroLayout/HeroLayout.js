import React from 'react'
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import './HeroLayout.css'

const HeroLayout = () => {
    return (
        <div className='HeroLayout'>
            <div className='Hero-wrapper'>
                <Hero2 />
                <Hero1 />
                <Hero3 />
            </div>
            <header className='Hero-header'>
                <h1>Dores André</h1>
                <h2>The Spanish Ballerina Pirouetting Her Way to Stardom</h2>
            </header>
        </div>
    )
}

export default HeroLayout