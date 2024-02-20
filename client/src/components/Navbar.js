import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyle.css'
import logo from '../pages/Gifs/logo.png'

function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
const Navbar = () => {
  return (
   <nav>
    <ul className='sidebar'>
        <li className='inline-block py-4' onClick={hideSidebar}>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
        </li>
        <li className='inline-block py-4'>
            <Link to="/" className='pl-6 pr-8'>Home</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/articlesList" className='pl-6 pr-8'>Projects</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/about" className='pl-6 pr-8'>About</Link>
        </li>
        <li className='inline-block py-4'>
            <Link to="/articlesList" className='pl-6 pr-8'>Blog</Link>
        </li>
    </ul>
    <ul>
        <li className=''>
            <Link to="/" className='pl-6 pr-8'><img src={logo}/></Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/" className='pl-6 pr-8'>Home</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/articlesList" className='pl-6 pr-8'>Projects</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/about" className='pl-6 pr-8'>About</Link>
        </li>
        <li className='hideOnMobile'>
            <Link to="/articlesList" className='pl-6 pr-8'>Blog</Link>
        </li>
        <li className='menu-button' onClick={showSideBar}>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
        </li>
        
    </ul>
   </nav>
  )
}

export default Navbar