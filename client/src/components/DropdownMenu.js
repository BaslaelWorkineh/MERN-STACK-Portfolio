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
        <ul className="dropdown-menu">
          <li><button onClick={() => handleOptionClick("Light")}><img src={light} alt="Light" />Light</button></li>
          <li><button onClick={() => handleOptionClick("Dark")}><img src={dark} alt="Dark" />Dark</button></li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
