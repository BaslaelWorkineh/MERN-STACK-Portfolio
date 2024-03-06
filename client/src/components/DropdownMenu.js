import React, { useContext, useState, useEffect } from 'react';
import setting from '../pages/Gifs/setting.svg';
import light from '../pages/Gifs/light.svg';
import dark from '../pages/Gifs/dark.svg';
import { ThemeContext } from './ThemeContext';
import './DropdownMenu.css'; // Import the CSS file for DropdownMenu

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { theme, setTheme } = useContext(ThemeContext);

  const handleOptionClick = (option) => {
    if (option === 'Light') {
      setTheme(option);
    } else if (option === 'Dark') {
      setTheme(option);
    }
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  useEffect(() => {
    handleOptionClick("Light");
  }, []);

  return (
    <li className='setting' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <img src={setting} alt="Setting" />
      {isOpen && (
        <ul className="dropdown-menu" style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' ,borderColor: theme === 'Light' ? '#333' : '#f9f9f97b'}}>
          <li style={{ color: theme === 'Light' ? 'black' : '#fff'}}><button onClick={() => handleOptionClick("Light")}><div className="darklightbgicons" style={{width:40,height:40,borderRadius:50,padding:5, background:'lightgray'}}><img src={light} alt="Light" /></div>Light</button></li>
          <li style={{ color: theme === 'Light' ? 'black' : '#fff'}}><button onClick={() => handleOptionClick("Dark")}><div className="darklightbgicons" style={{width:40,height:40,borderRadius:50,padding:5, background:'lightgray'}}><img src={dark} alt="Dark" /></div>Dark</button></li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
