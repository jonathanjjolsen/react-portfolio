import React from 'react';
import empTrack from '../../Images/employeeTracker.jpeg'

export default function Projects() {
    return (
        <div className='box'>
                <h2>Portfolio</h2>
                <div className='projects'>
                    <div className='Card'>
                        <img src={empTrack} />
                        <label className='projectLabel'>Employee Database Tracker</label>
                    </div>
                    <div className='Card'>
                        <img src={empTrack} />
                        <label className='projectLabel'>Project 1</label>
                    </div><div className='Card'>
                        <img src={empTrack} />
                        <label className='projectLabel'>Project 1</label>
                    </div><div className='Card'>
                        <img src={empTrack} />
                        <label className='projectLabel'>Project 1</label>
                    </div><div className='Card'>
                        <img src={empTrack} />
                        <label className='projectLabel'>Project 1</label>
                    </div>
                </div>
        </div>
    )
}