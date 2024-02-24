import React from 'react';
import github from '../pages/LinkImages/github.svg';
import youtube from'../pages/LinkImages/youtube.svg';
import reddit from'../pages/LinkImages/reddit.svg';
import telegram from'../pages/LinkImages/telegram.svg';
import linkedin from'../pages/LinkImages/linkedin.svg';
import instagram from'../pages/LinkImages/instagram.svg';
import setting from '../pages/Gifs/setting.svg';
import './Footer.css'
import DropdownMenu from './DropdownMenu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">© 2024 Baslael Workineh. All rights reserved.</div>
        <div className="social-icons">
          <a href="https://github.com/BaslaelWorkineh" target="_blank"><img src={github} alt="Icon 1" /></a>
          <a href="https://www.reddit.com/user/Same-Ad8290" target="_blank"><img src={reddit} alt="Icon 2" /></a>
          <a href="https://www.youtube.com/channel/UC41TiP_i_Nxi6SgY0ogAAUA" target="_blank"><img src={youtube} alt="Icon 3" /></a>
          <a href="https://www.instagram.com/basketo_w/" target="_blank"><img src={instagram} alt="Icon 4" /></a>
          <a href="https://t.me/MrBasketo" target="_blank"><img src={telegram} alt="Icon 5" /></a>
          <a href="https://www.linkedin.com/in/baslael-workineh-ayele-131b11248/" target="_blank"><img src={linkedin} alt="Icon 5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
