import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  const bodyColor = darkMode ? '#282D35' : '#ffffff';
  document.querySelector('body').style.backgroundColor = bodyColor;

  return (
    <div className="App">
      <Navbar isDarkMode={darkMode} toggleDarkMode={handleDarkMode}/>
      <Main isDarkMode={darkMode}/>
    </div>
  );
}

export default App
