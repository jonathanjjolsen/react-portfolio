import React from 'react';
import Nav from './Nav';
import '../App.css'
import image from '../Images/texturedbackground.jpg'

export default function Header() {
    return (
      <header className="header" style={{backgroundImage:`url(${image})`}}>
        <h1 id='title'>Jonathan Olsen</h1>
        <Nav />
      </header>
    );
  }