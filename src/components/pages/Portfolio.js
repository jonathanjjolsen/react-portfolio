import React from 'react';
import empTrack from '../../Images/employeeTracker.jpeg'
import jateText from '../../Images/jateText.jpeg'

export default function Projects() {
    return (
        <div className='box'>
                <h2>Portfolio</h2>
                <div className='projects'>
                    <div className='Card'>
                        <img className='image' src={empTrack} />
                        <p className='projectp'>Employee&nbsp;Database&nbsp;Tracker</p>
                    </div>
                    <div className='Card'>
                        <img className='image' src={jateText} />
                        <p className='projectp'>Just&nbsp;Another&nbsp;Text&nbsp;Editor</p>
                    </div><div className='Card'>
                        <img className='image' src={empTrack} />
                        <p className='projectp'>Project 1</p>
                    </div><div className='Card'>
                        <img className='image' src={empTrack} />
                        <p className='projectp'>Project 1</p>
                    </div><div className='Card'>
                        <img className='image' src={empTrack} />
                        <p className='projectp'>Project 1</p>
                    </div>
                </div>
        </div>
    )
}