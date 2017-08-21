import React from 'react'
import './LearnMoreButton.css'

const LearnMoreButton = () => {
    return (
        <div className='LearnMoreButton'>
            Learn More
            <span className='LearnMoreButton-topLeft'></span>
            <span className='LearnMoreButton-topRight'></span>
            <span className='LearnMoreButton-bottomLeft'></span>
            <span className='LearnMoreButton-bottomRight'></span>
        </div>
    )
}
export default LearnMoreButton