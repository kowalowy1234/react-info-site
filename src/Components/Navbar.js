import React from 'react';
import reactlogo from '../images/react-icon-small.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav--logo-image" src={reactlogo} />
      <p className='nav--logo-text'>ReactFacts</p>
      <p className='nav--title'>React Course - Project 1</p>
    </nav>
  );
}