import React from 'react';
import empTrack from '../../Images/employeeTracker.jpg'
import jateText from '../../Images/jateText.jpg'
import logoGen from '../../Images/logoGen.jpg'
import passGen from '../../Images/passwordGen.jpg'
import tradeHub from '../../Images/tradehub.jpg'

export default function Projects() {
    return (
        <div className='container'>
            <h2 className='contentHeader'>Portfolio</h2>
            <div className='projects'>
                <a href='https://google.com'>
                    <div className='Card'>
                        <img className='image' alt='Command Line Database' src={empTrack} />
                        <p className='projectp'>Employee&nbsp;Database&nbsp;Tracker</p>
                    </div>
                </a>
                <a href='https://google.com'>
                    <div className='Card'>
                        <img className='image' alt='Homepage of Jate Text Editor' src={jateText} />
                        <p className='projectp'>Just&nbsp;Another&nbsp;Text&nbsp;Editor</p>
                    </div>
                </a>
                <a href='https://google.com'>
                    <div className='Card'>
                        <img className='image' alt='Logo Generated by SVG creation app' src={logoGen} />
                        <p className='projectp'>Logo&nbsp;Generator</p>
                    </div>
                </a>
                <a href='https://google.com'>
                    <div className='Card'>
                        <img className='image' alt='Password Input Box' src={passGen} />
                        <p className='projectp'>Password&nbsp;Generator</p>

                    </div>
                </a>
                <a href='https://google.com'>
                    <div className='Card'>
                        <img className='image' alt='Visual Schematic of Online Sales Interactionsv' src={tradeHub} />
                        <p className='projectp'>TradeHub</p>
                    </div>
                </a>
            </div>
        </div >
    )
}