import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyle.css';
import logo from '../pages/Gifs/logo.png';
import DropdownMenu from './DropdownMenu';
import { ThemeContext } from '../components/ThemeContext';

function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    const closebtn = document.querySelector('.close');
    closebtn.style.display = 'flex';
    const settingBtn = document.querySelector('.setting');
    settingBtn.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';

    const closebtn = document.querySelector('.close');
    closebtn.style.display = 'none';

    const settingBtn = document.querySelector('.setting');
    settingBtn.style.display = 'none';
}

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    // Define color variables for light mode
    const lightBackgroundColor = '#ffffff';
    const lightTextColor = '#333333';
    const lightButtonColor = '#007bff';
    const lightHoverColor = '#f0f0f0';
    const lightAccentColor = '#ff6347';

    // Define color variables for dark mode
    const darkBackgroundColor = '#333333';
    const darkTextColor = '#ffffff';
    const darkButtonColor = '#007bff';
    const darkHoverColor = '#4f4f4f';
    const darkAccentColor = '#ff6347';

    // Use ternary operator to apply appropriate colors based on theme
    const backgroundColor = theme === 'Light' ? lightBackgroundColor : darkBackgroundColor;
    const textColor = theme === 'Light' ? lightTextColor : darkTextColor;
    const buttonColor = theme === 'Light' ? lightButtonColor : darkButtonColor;
    const hoverColor = theme === 'Light' ? lightHoverColor : darkHoverColor;
    const accentColor = theme === 'Light' ? lightAccentColor : darkAccentColor;

    return (
        <nav style={{ background: backgroundColor }}>
            <ul className='sidebar'>
                <li className='close' onClick={hideSidebar}>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
                </li>
                <li className=''>
                    <Link to="/" className='navBtns' style={{ color: textColor }}>Home</Link>
                </li>
                <li className=''>
                    <Link to="/about" className='navBtns' style={{ color: textColor }}>About</Link>
                </li>
                <li className=''>
                    <Link to="/articlesList" className='navBtns' style={{ color: textColor }}>Blog</Link>
                </li>
                <li className=''>
                    <Link to="/login" className='navBtns' style={{ color: textColor }}>Login</Link>
                </li>
                
                <li className='settingMobile'>
                <div className='settingbtnbg' style={{background:'lightgray',justifyContent:'center', borderRadius:50}}>
                        <DropdownMenu/>
                    </div>
                    
                </li>
            </ul>

            <ul>
                <li className='hideOnMobile'>
                    <Link to="/" className='navBtns'><img src={logo} alt="Logo" /></Link>
                </li>
                <li className='hideOnMobile'>
                    <Link to="/" className='navBtns' style={{ color: textColor }}>Home</Link>
                </li>
                <li className='hideOnMobile'>
                    <Link to="/about" className='navBtns' style={{ color: textColor }}>About</Link>
                </li>
                <li className='hideOnMobile'>
                    <Link to="/articlesList" className='navBtns' style={{ color: textColor }}>Blog</Link>
                </li>
                <li className='hideOnMobile'>
                    <Link to="/articlesList" className='navBtns' style={{ color: textColor }}>Login</Link>
                </li>
                <li className='menu-button' onClick={showSideBar}>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                </li>
                <li className='hideOnMobile settings'>
                    <div className='settingbtnbg' style={{background:'lightgray',justifyContent:'center', borderRadius:50}}>
                        <DropdownMenu/>
                    </div>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
