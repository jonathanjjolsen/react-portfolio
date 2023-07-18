import React from 'react';
import '../App.css'


export default function Nav({ currentContent, handleContentChange}) {
    return (
        <ul className="navbar">
            <li className="nav-item">
                <a href="#About Me"
                onClick={()=> handleContentChange('About')}
                className={currentContent === 'About' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
            </li>
            <li className="nav-item">
                <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#Contact">Contact</a>
            </li>
            <li className="nav-item">
                <a href="#Resume">Resume</a>
            </li>
        </ul>
    );
}