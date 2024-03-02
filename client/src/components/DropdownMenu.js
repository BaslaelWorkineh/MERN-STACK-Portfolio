import React, { useContext, useState, useEffect } from 'react';
import setting from '../pages/Gifs/setting.svg'
import light from '../pages/Gifs/light.svg'
import dark from '../pages/Gifs/dark.svg'
import home from '../pages/Home';
import ArticlesList from '../pages/ArticlesList';
import CoolSearchBar from './CoolSearchBar';
import { ThemeContext } from './ThemeContext';

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
    console.log(option); // You can handle the option click here
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  useEffect(() => {
    // Call handleOptionClick with "Light" option when the component is mounted
    handleOptionClick("Light");
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <li className='setting' onClick={toggleDropdown}>
      <img src={setting} alt="Setting" />
      {isOpen && (
        <ul className="dropdown-menu">
          <li><button onClick={() => handleOptionClick("Light")}><img src={light} />Light</button></li>
          <li><button onClick={() => handleOptionClick("Dark")}><img src={dark} />Dark</button></li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
