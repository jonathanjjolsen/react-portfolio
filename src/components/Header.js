import React from 'react';
import '../App.css'
import image from '../Images/texturedbackground.jpg'

export default function Header(props) {
  return (
    <header className="header" style={{ backgroundImage: `url(${image})` }}>
      <h1 id='title'>Jonathan Olsen</h1>
      {props.children}
    </header>
  );
}