import React, {useContext, useState ,useEffect } from 'react';
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
    // const bg = document.querySelector('body');
    // const changingTexts = document.querySelectorAll('.changingText');
    // const introParas = document.querySelectorAll('.LandingPageValues p');
    // const headings = document.querySelectorAll('.test .heading');
    // const box = document.querySelectorAll('.test .box');
    // const boxtitles = document.querySelectorAll('.test .box h1');
    // const boxdescriptions = document.querySelectorAll('.test .box p');
    // const projectDescriptions = document.querySelectorAll('.project-Description');
    // const projectDescriptionTitles = document.querySelectorAll('.project-Description .project-Description-Header .title');
    // const projectDescriptionbodies = document.querySelectorAll('.project-Description .project-Description-body p');
    // const projectDescriptioninstructions = document.querySelectorAll('.project-Description .project-Description-body h1');
    // const projectDescriptioncopyText = document.querySelectorAll('.project-Description .project-Description-body .copy-text');
    // const projectDescriptioninputs = document.querySelectorAll('.project-Description .project-Description-body .copy-text input');
    // const projectDescriptioninputsText = document.querySelectorAll('.project-Description .project-Description-body .copy-text input.text');

    // const tradingviewArticleTitle = document.querySelectorAll('.tradingviewArticles h1');
    // const tradingviewArticlebody = document.querySelectorAll('.tradingviewArticles p');
    // const discoverpage = document.querySelectorAll('.discoverpage .articlesContainer');
    // const discoverpagetitle = document.querySelectorAll('.discoverpage  .articlesContainer .articlesbox .articlecontent h3');
    // const discoverpagebody = document.querySelectorAll('.discoverpage  .articlesContainer .articlesbox .articlecontent p');

    // const searchbarcontainer = document.querySelectorAll('.search-bar-container');
    // const searchbarset = document.querySelectorAll('.dropdownSet');
    // const searchbarcatagorybutton = document.querySelectorAll('.dropdown-content button');
    // const searchbarinput = document.querySelectorAll('.onlysearch input');


    // const hotTopicsContainer = document.querySelectorAll('.blogcontainer .hottopicsBox .articlesContainer');
    // const hotTopicsTitle = document.querySelectorAll('.blogcontainer .hottopicsBox .articlesContainer .articlesbox .articlecontent h3');
    // const hotTopicsbody = document.querySelectorAll('.blogcontainer .hottopicsBox .articlesContainer .articlesbox .articlecontent p');
    // const hotTopicsbutton = document.querySelectorAll('.blogcontainer .hottopicsBox .articlesContainer .articlesbox .articlecontent .articleLearnMoreBtn');
   
    
    if (option === 'Light') {

      // searchbarcontainer.forEach(elem => elem.style.background = 'white');
      // searchbarset.forEach(elem => {elem.style.background = 'white'; elem.style.color = '#333'});
      // searchbarinput.forEach(elem => {elem.style.background = 'white'; elem.style.color ='#333'});
      // searchbarcatagorybutton.forEach(elem => elem.style.background = 'white');

      // tradingviewArticleTitle.forEach(elem => elem.style.color = 'black');
      // tradingviewArticlebody.forEach(elem => elem.style.color = '#333');
      // discoverpage.forEach(elem => elem.style.background = 'linear-gradient(to bottom,  #ffffff, #ffc2c2)')
      // discoverpagetitle.forEach(elem => elem.style.color = 'black');
      // discoverpagebody.forEach(elem => elem.style.color = '#333');

      // bg.style.background = 'linear-gradient(to bottom,  #ffffff, #ffc2c2)';
      // changingTexts.forEach(elem => elem.style.color = '#535353');
      // introParas.forEach(elem => elem.style.color = '#666');
      // headings.forEach(elem => elem.style.color = '#000000');
      // boxtitles.forEach(elem => elem.style.color = '#333');
      // box.forEach(elem => elem.style.background = '#f9f9f97b');
      // boxdescriptions.forEach(elem => elem.style.color = '#333');
      // projectDescriptions.forEach(elem =>  elem.style.background = 'rgba(255,255,255,0.816)');
      // projectDescriptionTitles.forEach(elem => elem.style.color = '#000000');
      // projectDescriptionbodies.forEach(elem => elem.style.color = '#000000');
      // projectDescriptioninstructions.forEach(elem => elem.style.color = '#000000');
      // projectDescriptioncopyText.forEach(elem => elem.style.background = '#313131');
      // projectDescriptioninputs.forEach(elem => elem.style.background = '#313131');
      // projectDescriptioninputsText.forEach(elem => elem.style.color = '#ebebeb');

      // hotTopicsContainer.forEach(elem=> elem.style.background = 'linear-gradient(rgb(255, 85, 0), rgb(47, 99, 255)');
      // hotTopicsTitle.forEach(elem => elem.style.color = 'white');
      // hotTopicsbody.forEach(elem => elem.style.color = 'white');
      // hotTopicsbutton.forEach(elem => elem.style.color = '#ffbf9d');
      setTheme(option);
    } else if (option === 'Dark') {

      // searchbarcontainer.forEach(elem => elem.style.background = '#333');
      // searchbarset.forEach(elem => {elem.style.background = '#333'; elem.style.color = 'white'});
      // searchbarinput.forEach(elem => {elem.style.background = '#333'; elem.style.color ='white'});
      // searchbarcatagorybutton.forEach(elem => elem.style.background = '#333');

      // tradingviewArticleTitle.forEach(elem => elem.style.color = '#dfdfdf');
      // tradingviewArticlebody.forEach(elem => elem.style.color = '#bababa');
      // discoverpage.forEach(elem => elem.style.background = 'linear-gradient(to bottom,  #696969, #231f1f)')
      // discoverpagetitle.forEach(elem => elem.style.color = 'dfdfdf');
      // discoverpagebody.forEach(elem => elem.style.color = '#bababa');

      // bg.style.background = '#282727';
      // changingTexts.forEach(elem => elem.style.color = '#bababa');
      // introParas.forEach(elem => elem.style.color = '#bababa');
      // headings.forEach(elem => elem.style.color = '#dfdfdf');
      // box.forEach(elem => elem.style.background = '#333');
      // boxtitles.forEach(elem => elem.style.color = '#dfdfdf');
      // boxdescriptions.forEach(elem => elem.style.color = '#bababa');
      // projectDescriptions.forEach(elem => elem.style.background = '#333');
      // projectDescriptionTitles.forEach(elem => elem.style.color = '#ffffff');
      // projectDescriptionbodies.forEach(elem => elem.style.color = '#ffffff');
      // projectDescriptioninstructions.forEach(elem => elem.style.color = '#ffffff');
      // projectDescriptioninputs.forEach(elem => elem.style.background = '#dfdfdf');
      // projectDescriptioncopyText.forEach(elem => elem.style.background = '#dfdfdf');
      // projectDescriptioninputsText.forEach(elem => elem.style.color = '#333');

      
      // hotTopicsContainer.forEach(elem=> elem.style.background = 'linear-gradient(rgb(255, 85, 0), rgb(47, 99, 255)');
      // hotTopicsTitle.forEach(elem => elem.style.color = 'white');
      // hotTopicsbody.forEach(elem => elem.style.color = 'white');
      // hotTopicsbutton.forEach(elem => elem.style.color = '#ffbf9d');
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
