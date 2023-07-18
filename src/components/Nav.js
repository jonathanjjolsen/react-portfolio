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
                <a href="#portfolio"
                onClick={()=> handleContentChange('Portfolio')}
                className={currentContent === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#Contact"
                onClick={()=> handleContentChange('Contact')}
                className={currentContent === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
            <li className="nav-item">
                <a href="#Resume"
                onClick={()=> handleContentChange('Resume')}
                className={currentContent === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
        </ul>
    );
}