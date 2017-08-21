import React from 'react';
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import './HeroLayout.css'

const HeroLayout = () => {
    return (
        <div className='HeroLayout'>
            <header className='Hero-header'>
                <h1>Dores André</h1>
                <p>The Spanish Ballerina Pirouetting Her Way to Stardom</p>
            </header>
            <div className='Hero-wrapper'>
                <Hero2 />
                <Hero1 />
                <Hero3 />
            </div>
            <div className='Hero-showMoreBtn'>
                Learn More
                <span className='Hero-btn-topLeft'></span>
                <span className='Hero-btn-topRight'></span>
                <span className='Hero-btn-bottomLeft'></span>
                <span className='Hero-btn-bottomRight'></span>
            </div>
        </div>
    )
}

export default HeroLayout