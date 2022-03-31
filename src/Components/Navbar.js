import React from 'react';
import reactlogo from '../images/react-icon-small.png';

const Navbar = (props) => {

  const handleDarkMode = () => {
    props.toggleDarkMode();
  }

  return (
    <nav className={props.isDarkMode ? 'navbar-dark' : 'navbar'}>
      <img className="nav--logo-image" src={reactlogo} alt=''/>
      <p className='nav--logo-text'>ReactFacts</p>
      <div className='toggler-container' onClick={handleDarkMode}>
        <p className={props.isDarkMode ? 'toggler-text-light-dark' : ''}>Light</p>
        <div className={props.isDarkMode ? 'toggler-dark' : 'toggler'}>
          <div className={props.isDarkMode ? 'toggler-dot-dark' : 'toggler-dot'}></div>
        </div>
        <p className={props.isDarkMode ? 'toggler-dark-dark' : 'toggler-text-dark'}>Dark</p>
      </div>
    </nav>
  );
}

export default  Navbar;