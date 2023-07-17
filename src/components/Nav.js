import React from 'react';

export default function Nav() {
    return (
        <ul className="navbar">
            <li className="nav-item">
                <a href="#About Me">About Me</a>
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