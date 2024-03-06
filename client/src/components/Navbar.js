import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyle.css'
import logo from '../pages/Gifs/logo.png'
import DropdownMenu from './DropdownMenu';



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
  return (
   <nav>
    <ul className='sidebar'>
        <li className='close' onClick={hideSidebar}>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
        </li>
        <li className=''>
            <Link to="/" className='navBtns'>Home</Link>
        </li>
        <li className=''>
            <Link to="/about" className='navBtns'>About</Link>
        </li>
        <li className=''>
            <Link to="/articlesList" className='navBtns'>Blog</Link>
        </li>
        <li className=''>
            <Link to="/login" className='navBtns'>Login</Link>
        </li>
        
        <li className='settingMobile'>
            <DropdownMenu/>
        </li>
    </ul>

    <ul>
        <li className='hideOnMobile'>
            <Link to="/" className='navBtns'><img src={logo}/></Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/" className='navBtns'>Home</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/about" className='navBtns'>About</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/articlesList" className='navBtns'>Blog</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/articlesList" className='navBtns'>Login</Link>
        </li>
        <li className='menu-button' onClick={showSideBar}>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
        </li>
        <li className='hideOnMobile settings'>
            <DropdownMenu/>
        </li>
        
    </ul>
   </nav>
  )
}

export default Navbar