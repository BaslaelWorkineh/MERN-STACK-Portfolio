import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer'
import './Homestyle.css';
import skill1 from './SkillImages/blender.svg';
import skill2 from './SkillImages/cplusplus.svg';
import skill3 from './SkillImages/csharp.svg';
import skill4 from './SkillImages/css3.svg';
import skill5 from './SkillImages/docker.svg';
import skill6 from './SkillImages/express.svg';
import skill7 from './SkillImages/git.svg';
import skill8 from './SkillImages/github.svg';
import skill9 from './SkillImages/html5.svg';
import skill10 from './SkillImages/java.svg';
import skill11 from './SkillImages/javascript.svg';
import skill12 from './SkillImages/nodejs.svg';
import skill13 from './SkillImages/mongodb.svg';
import skill14 from './SkillImages/unity.svg';
import skill15 from './SkillImages/photonengine.svg';
import skill16 from './SkillImages/photoshop.svg';
import skill17 from './SkillImages/postgresql.svg';
import skill18 from './SkillImages/python.svg';
import skill19 from './SkillImages/react.svg';

import profilepic from './Gifs/profilePicture.jpg';
import wildlifesimulation from './Gifs/Wild Life simulation.png';
import wildlifegoat from './Gifs/wildlifegoat.jpg';
import wildlife from './Gifs/wildlife.jpg';


import SlashDash from './Gifs/SlashDash.png';
import enemySlash from './Gifs/enemySlashdash.png';
import slashdashexplosion from './Gifs/slashdashexplosion.png';

import cheapdelala from './Gifs/CheapDelala.png';
import cheapdelalaGif from './Gifs/cheapdelala.gif';
import cheapdelalahomepage from './Gifs/cheapdelalahomepage.png';

import multiplayerpng from './Gifs/multiplayer.png';
import multiplayer from './Gifs/Multiplayer.gif';
import multiplayercode from './Gifs/multiplayercode.png';

import Motorbike from './Gifs/Motorbike.png';
import motorbikeview from './Gifs/motorbikeview.png';
import motor from './Gifs/motor.gif';

import blogcode from './Gifs/blogcode.png';
import blogcodeone from './Gifs/blogcodefour.png';
import blogcodetwo from './Gifs/blogcodetwo.png';

import chatbotButton from './Gifs/chat.svg';

import mentor from './Gifs/mentor.svg';
import game from './Gifs/game.svg';
import debug from './Gifs/debug.svg';
import web from './Gifs/web.svg';
import phone from './Gifs/phone.svg';

import YouTube from 'react-youtube';

import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

import { ThemeContext } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import ResumeLike from '../components/ResumeLike';
import HomePageLatestArticles from '../components/HomePageLatestArticles';

const opts = {
    height: '390vw',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};

const steps = [
    {
        id: 'Greet',
        message: 'Hello, Welcome to my website',
        trigger: 'Ask Name'
    },
    {
        id: 'Ask Name',
        message: 'Please tell me your name',
        trigger: 'waiting1'
    },
    {
        id: 'waiting1',
        user: true,
        trigger: 'Name'
    },
    {
        id: 'Name',
        message: 'Hi {previousValue}, In what field do you want to hire me?',
        trigger: 'fields'
    },
    {
        id: 'fields',
        options: [
            { value: 'MERN Stack', label: 'MERN Stack', trigger: 'MERN Stack' },
            { value: 'Static Website', label: 'Static Website', trigger: 'Static Website' },
            { value: 'AI', label: 'AI', trigger: 'AI' },
            { value: 'Chatbot', label: 'Chatbot', trigger: 'Chatbot' },
            { value: 'Game Development', label: 'Game Development', trigger: 'Game Development' },
            { value: 'Photon Networking', label: 'Photon Networking', trigger: 'Photon Networking' },
            { value: 'System Development', label: 'System Development', trigger: 'System Development' },
            { value: 'Mobile App Development', label: 'Mobile App Development', trigger: 'Mobile App Development' },
            { value: 'OpenAI GPT-3', label: 'OpenAI GPT-3', trigger: 'OpenAI GPT-3' }
        ]
    },
    {
        id: 'MERN Stack',
        message: 'Please send me your email address.',
        trigger: 'waiting2'
    },
    {
        id: 'waiting2',
        user: true,
        trigger: 'emailAddressMERN'
    },
    {
        id: 'emailAddressMERN',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'Static Website',
        message: 'Please send me your email address.',
        trigger: 'waiting2'
    },
    {
        id: 'waiting2',
        user: true,
        trigger: 'emailAddressStaticWebsite'
    },
    {
        id: 'emailAddressStaticWebsite',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'AI',
        message: 'Please send me your email address.',
        trigger: 'waiting3'
    },
    {
        id: 'waiting3',
        user: true,
        trigger: 'emailAddressAI'
    },
    {
        id: 'emailAddressAI',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'Chatbot',
        message: 'Please send me your email address.',
        trigger: 'waiting4'
    },
    {
        id: 'waiting4',
        user: true,
        trigger: 'emailAddressChatbot'
    },
    {
        id: 'emailAddressChatbot',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'Game Development',
        message: 'Please send me your email address.',
        trigger: 'waiting5'
    },
    {
        id: 'waiting5',
        user: true,
        trigger: 'emailAddressGameDevelopment'
    },
    {
        id: 'emailAddressGameDevelopment',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'Photon Networking',
        message: 'Please send me your email address.',
        trigger: 'waiting6'
    },
    {
        id: 'waiting6',
        user: true,
        trigger: 'emailAddressPhotonNetworking'
    },
    {
        id: 'emailAddressPhotonNetworking',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'System Development',
        message: 'Please send me your email address.',
        trigger: 'waiting7'
    },
    {
        id: 'waiting7',
        user: true,
        trigger: 'emailAddressSystemDevelopment'
    },
    {
        id: 'emailAddressSystemDevelopment',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'Mobile App Development',
        message: 'Please send me your email address.',
        trigger: 'waiting8'
    },
    {
        id: 'waiting8',
        user: true,
        trigger: 'emailAddressMobileAppDevelopment'
    },
    {
        id: 'emailAddressMobileAppDevelopment',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    },
    {
        id: 'OpenAI GPT-3',
        message: 'Please send me your email address.',
        trigger: 'waiting9'
    },
    {
        id: 'waiting9',
        user: true,
        trigger: 'emailAddressOpenAIGPT3'
    },
    {
        id: 'emailAddressOpenAIGPT3',
        message: 'Thank you for reaching out. I will get back to you.',
        end: true
    }
];

function copyText() {
    const copyText = document.querySelector('.copy-text');
    copyText.querySelector(".copyButton").addEventListener("click", function () {
        let input = copyText.querySelector("input.text");
        input.select();
        navigator.clipboard.writeText(input.value)
            .then(() => {
                console.log('Text copied to clipboard');
                copyText.classList.add("active");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
        window.getSelection().removeAllRanges();
        setTimeout(function () {
            copyText.classList.remove("active")
        }, 2500)
    });
}
var flag = true;
function chatbotbuttonclicked() {
    const chatbutton = document.querySelector('.chatbot');
    if (flag) {
        chatbutton.style.display = 'flex';
        flag = false;
    }
    else {
        chatbutton.style.display = 'none';
        flag = true;
    }

}
var vd = null;
function openProject(projectName, projectDescription, projectImages, githubLink, videoIdPassed) {
    const popUp = document.querySelector('.project-Description');
    const overlay = document.querySelector('#overlay');

    // Update project details in the description box
    const titleElement = popUp.querySelector('.title');
    const descriptionElement = popUp.querySelector('.project-Description-body p');
    const imagesContainer = popUp.querySelector('.project-Description-Media');
    const gitLink = popUp.querySelector('.project-Description-body').querySelector('.copy-text').querySelector('.text');
    const videoIdk = popUp.querySelector('.project-Description-body').querySelector('.YTVideo');

    vd = videoIdPassed;
    titleElement.textContent = projectName;
    descriptionElement.textContent = projectDescription;
    imagesContainer.innerHTML = ''; // Clear previous images
    gitLink.value = githubLink;
    // Add images to the container
    projectImages.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imagesContainer.appendChild(imgElement);
    });

    // Display the description box and overlay
    overlay.style.display = 'inline-block';
    popUp.style.display = 'inline-block';
}
function closeProject() {
    const popUp = document.querySelector('.project-Description');
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    popUp.style.display = 'none';
}

const Home = () => {
    const { theme } = useContext(ThemeContext);

    const [currentText, setCurrentText] = useState('');
    const [texts, setTexts] = useState([
        "Baslael Workineh",
        "Web Developer",
        "Software Developer",
        "Game Developer",
        "Passionate Programmer"
    ]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentText.length < texts[index].length) {
                setCurrentText((prevText) => prevText + texts[index][prevText.length]);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentText('');
                    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }, 4000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [currentText, index, texts]);

    return (
        <>
            <body
                style={{ background: theme === 'Light' ? 'linear-gradient(to bottom,  #ffffff, #ffc2c2)' : '#282727' }}>
                <section className='' >
                    <div className='LandingPage'>
                        <div className='LandingPageValues'>
                            <h1 className='IntroHone'>Hello, I'm</h1>
                            <h1 className='changingText' style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>{currentText}</h1>
                            <p style={{ color: theme === 'Light' ? '#666' : '#bababa' }}>I'm a passionate programmer who thrives on collaborative teamwork, with a love for coding <br />that drives my commitment to quality and continuous learning.</p>
                            <div className='LandingBtns'>
                                <a href='https://www.linkedin.com/in/baslael-workineh-ayele-131b11248/' target='_blank'><button className='hiremeBtn'>Hire Me</button></a>
                                <a href='https://drive.usercontent.google.com/uc?export=download&id=1iNJQtjSPqGtYWQfP0GxdHr8YW8HOam67'><button className='cvBtn' >Download CV</button></a>
                            </div>
                        </div>

                        <div className='profilePic'>
                            <img src={profilepic} />
                        </div>
                    </div>


                    <div className='skillSection'>

                        <div className='slider'>
                            <ul className='brands'>
                                <li className='brand-logo'><img src={skill1} /></li>
                                <li className='brand-logo'><img src={skill2} /></li>
                                <li className='brand-logo'><img src={skill3} /></li>
                                <li className='brand-logo'><img src={skill4} /></li>
                                <li className='brand-logo'><img src={skill5} /></li>
                                <li className='brand-logo'><img src={skill6} /></li>
                                <li className='brand-logo'><img src={skill7} /></li>
                                <li className='brand-logo'><img src={skill8} /></li>
                                <li className='brand-logo'><img src={skill9} /></li>
                                <li className='brand-logo'><img src={skill10} /></li>
                                <li className='brand-logo'><img src={skill11} /></li>
                                <li className='brand-logo'><img src={skill12} /></li>
                                <li className='brand-logo'><img src={skill13} /></li>
                                <li className='brand-logo'><img src={skill14} /></li>
                                <li className='brand-logo'><img src={skill15} /></li>
                                <li className='brand-logo'><img src={skill16} /></li>
                                <li className='brand-logo'><img src={skill17} /></li>
                                <li className='brand-logo'><img src={skill18} /></li>
                                <li className='brand-logo'><img src={skill19} /></li>

                                <li className='brand-logo'><img src={skill1} /></li>
                                <li className='brand-logo'><img src={skill2} /></li>
                                <li className='brand-logo'><img src={skill3} /></li>
                                <li className='brand-logo'><img src={skill4} /></li>
                                <li className='brand-logo'><img src={skill5} /></li>
                                <li className='brand-logo'><img src={skill6} /></li>
                                <li className='brand-logo'><img src={skill7} /></li>
                                <li className='brand-logo'><img src={skill8} /></li>
                                <li className='brand-logo'><img src={skill9} /></li>
                                <li className='brand-logo'><img src={skill10} /></li>
                                <li className='brand-logo'><img src={skill11} /></li>
                                <li className='brand-logo'><img src={skill12} /></li>
                                <li className='brand-logo'><img src={skill13} /></li>
                                <li className='brand-logo'><img src={skill14} /></li>
                                <li className='brand-logo'><img src={skill15} /></li>
                                <li className='brand-logo'><img src={skill16} /></li>
                                <li className='brand-logo'><img src={skill17} /></li>
                                <li className='brand-logo'><img src={skill18} /></li>
                                <li className='brand-logo'><img src={skill19} /></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='test'>
                    <h1 className='heading' style={{ color: theme === 'Light' ? '#000000' : '#dfdfdf' }}>Recent Projects I've Been working on.</h1>

                    <div className='box-container'>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Cheap Delala(Java & Postgresql) also with MERN Stack</h1>
                            <img src={cheapdelala} alt="Cheap Delala" />
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>The House Rental and Sale System developed in Java and Postgresql (also with MERN STACK) is a comprehensive platform designed to provide a user-friendly experience for...</p>
                            <button onClick={() => openProject('Cheap Delala(House Rental system)', ' The House Rental and Sale System developed in Java and Postgresql (also with MERN STACK) is a comprehensive platform designed to provide a user-friendly experience for individuals seeking to rent or purchase houses. With its intuitive user interface, users can easily navigate through the system\'s features. The system incorporates a chat system, allowing seamless communication between buyers and sellers to discuss property details, negotiate terms, and address any inquiries. Additionally, a secure payment system is integrated, enabling buyers to make payments conveniently and securely. The system also includes an advertising system, allowing users to post their houses for rent or sale, reaching a wider audience. As a broker, the system facilitates the agreement process, ensuring a smooth transaction. The broker earns a 5% commission from the agreement, ensuring a fair and profitable business model. Overall, this Java-based House Rental and Sale System offers a comprehensive solution for individuals looking to rent or purchase properties, streamlining the process and providing a user-friendly experience.',
                                [cheapdelala, cheapdelalaGif, cheapdelalahomepage], 'git clone https://github.com/BaslaelWorkineh/Cheap-Delala-V2.git', 'FdykG87GDKg')}>Read More</button>
                        </div>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Mobile Multiplayer TPS Starter Asset<br />(Available on asset store for only <strong>23.99$</strong>)</h1>
                            <img src={multiplayerpng} alt="Mobile Multiplayer TPS Starter Asset" />

                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>This starter asset provides essential mechanics like shooting, running, and jumping, alongside aim features, procedural recoil, weapon reloading, bot enemies, and a kill leaderboard...</p>
                            <button onClick={() => openProject('Mobile Multiplayer TPS Starter Asset', 'This starter asset provides essential mechanics like shooting, running, and jumping, alongside aim features, procedural recoil, weapon reloading, bot enemies, and a kill leaderboard.  1. Synchronized Multiplayer. 2. Shooting Mechanics: Aim, Procedural Recoil, Reload(Ammo) system, Gun Switching, Bomb Throwing. 3. Different Abilities: Jumping, Running, Sprinting, Grabbing objects, Throwing Object, Climbing ladder. 4.InteractiveEnvironment: Spring, Player Vanisher, Portal 5. AI Enemy Bot. This content is customizable and adaptable, making it suitable for various game genres, particularly those centered around engaging multiplayer experiences. Available on Asset Store at "https://assetstore.unity.com/preview/276643/892792" for only 23.99$',
                                [multiplayerpng, multiplayer, multiplayercode], 'No Source code will be Available for this Project', 'ZVfKeEiKNo0')}>Read More</button>
                        </div>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Motorbike Physics Using c#</h1>
                            <img src={motorbikeview} alt="Motorbike Physics Using c#" />

                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>The motorbike controller, crafted using C# programming language and Blender, is a sophisticated device engineered to elevate the riding experience for motorcycle enthu...</p>
                            <button onClick={() => openProject('Motorbike Physics Using c#', 'The motorbike controller, crafted using C# programming language and Blender, is a sophisticated device engineered to elevate the riding experience for motorcycle enthusiasts. Through seamless integration of software and hardware, this controller empowers riders with intuitive control over critical motorcycle functionalities. Leveraging the power of C# programming, it delivers robust performance and precise responsiveness. Blender\'s advanced design capabilities ensure a sleek and ergonomic form factor, seamlessly blending aesthetics with functionality. With the motorbike controller, riders can effortlessly fine-tune throttle response, traction control, and suspension settings to achieve optimal performance and comfort. It represents the perfect fusion of cutting-edge technology and elegant design, enhancing the thrill of motorcycle riding for enthusiasts worldwide.',
                                [motorbikeview, motor, Motorbike], 'git clone https://github.com/BaslaelWorkineh/Unity-3d-Motorbike-Controller.git', 'sYftUpn_LZY')}>Read More</button>
                        </div>

                    </div>

                    <div className='box-container'>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Slash Dash(C# Unity and Photoshop) in One.5 day</h1>
                            <img src={SlashDash} alt="Slash Dash(C# Unity and Photoshop) in two day" />
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>The "2 Day Challenge" was an exhilarating game development endeavor that I embarked on independently. Within a tight timeframe, I successfully created a captivating 2D game using the Unity game engine and...</p>
                            <button onClick={() => openProject('Slash Dash(C# Unity and Photoshop) in One.5 day', 'The "2 Day Challenge" was an exhilarating game development endeavor that I embarked on independently. Within a tight timeframe, I successfully created a captivating 2D game using the Unity game engine and implemented it with the C# programming language. Taking inspiration from various sources, I meticulously designed my own unique character and environment, ensuring a visually appealing and immersive gameplay experience. While I incorporated one character from BLACKTHORNPROD, I dedicatedly built all the functionalities from scratch, showcasing my programming skills and problem-solving abilities. Despite the time constraints, I pushed myself to complete the project within just one and a half days, demonstrating my determination and commitment to delivering a polished and fully functional game. This 3 Day Challenge was an incredible opportunity for me to showcase my creativity, technical expertise, and passion for game development.',
                                [SlashDash, slashdashexplosion, enemySlash], 'git clone https://github.com/BaslaelWorkineh/Slash-Dash_source-code-MyGame.git', 'ImljRwyB-_M')}>Read More</button>
                        </div>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>MERN Stack Blog</h1>
                            <img src={blogcode} alt="Motorbike Physics Using c#" />

                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>The MERN Stack Blog Portfolio project combines the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with the versatility of a personal portfolio. This project ...</p>
                            <button onClick={() => openProject('MERN Stack Blog', 'The MERN Stack Blog Portfolio project combines the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with the versatility of a personal portfolio. This project serves as a dynamic platform for showcasing both technical prowess and personal achievements. Leveraging MongoDB as the database, it allows for seamless storage and retrieval of blog posts, ensuring efficient management of content. Express.js, functioning as the backend framework, facilitates smooth communication between the frontend and the database, ensuring data integrity and security. The frontend, built with React.js, provides an interactive and user-friendly interface for visitors to navigate through the portfolio and access blog content. Utilizing React components, the interface offers a seamless browsing experience, enhancing user engagement and satisfaction. Furthermore, Node.js powers the backend, enabling the efficient handling of server-side operations and facilitating real-time interactions between users and the application. By integrating a blog within a portfolio, this project offers a comprehensive platform for individuals to showcase their skills, projects, and insights in a single cohesive space. Whether it\'s sharing technical tutorials, project updates, or personal reflections, the MERN Stack Blog Portfolio project provides a versatile and customizable platform for individuals to express themselves and connect with their audience',
                                [blogcode, blogcodetwo, blogcodeone], 'git clone https://github.com/BaslaelWorkineh/MERN-STACK-Portfolio.git', 'N/A')}>Read More</button>
                        </div>

                        <div className='box' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                            <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Wild Life Simulation(Smart AI Animals)</h1>
                            <img src={wildlifesimulation} alt="Wild Life Simulation" />
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }} >In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With...</p>
                            <button onClick={() => openProject('Wild Life Simulation(Smart AI Animals)', 'The video was recorded when the project was in progress but unfortunatly I lost the project due to sudden problem in my comuputer. In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                                [wildlifesimulation, wildlifegoat, wildlife], 'No Link available at the moment', 'lFQmcj_tWio')}>Read More</button>
                        </div>

                    </div>
                    <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }} href='' className='heading'><a href='https://github.com/BaslaelWorkineh' target='_blank'>See More...</a></h1>

                </section>

                <div className='project-Description' id='project-Description' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#333' }}>
                    <div className='project-Description-Header'>
                        <div className='title' style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Example Model</div>
                        <button className='close-button' onClick={closeProject}>&times;</button>
                    </div>
                    <div className='project-Description-Media'>

                    </div>
                    <div className='project-Description-body' >

                        <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}></p>

                        <YouTube className='YTVideo' videoId={vd} opts={opts} />

                        <h1 className='instructions' style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}><br />(1) Open Git Bash.<br />
                            (2) Change the current working directory to the location where you want the cloned directory.<br />
                            (3) Type git clone, and then paste the URL you copied earlier.</h1>
                        <div className='copy-text' style={{ background: theme === 'Light' ? '#333' : '#f9f9f97b' }}>
                            <input type='text' className='text' style={{ background: theme === 'Light' ? '#f9f9f97b' : '#f9f9f97b', color: theme === 'Light' ? '#dfdfdf' : '#333' }} />
                            <button className='copyButton' onClick={copyText}>copy</button>
                        </div>

                        <h1 className='instructions' style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>If you don't have Git Bash <br />
                            Install git first</h1>

                        <button className='close-button closeBtn' onClick={closeProject}>Close</button>
                    </div>
                </div>
                <div id='overlay' onClick={closeProject}></div>
                <div className='chatbotcontainer'>


                    <div>
                        <Segment >
                            <ChatBot className='chatbot' steps={steps} />
                        </Segment>
                    </div>
                    <div className='chatbotButton'>
                        <img src={chatbotButton} onClick={chatbotbuttonclicked} />
                    </div>
                </div>

                <div className='ourServices'>
                    <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>My Services</h1>
                    <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>These are the major 6 services I give. But feel free to assign me on any project</p>
                    <div className='ourServicesBoxesContainer'>
                        <div className='ourServicesBox'>
                            <img src={web} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Web Development</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>I create custom digital solutions tailored to your business needs. From sleek designs to robust functionality, we leverage the latest technologies to ensure seamless user experiences across all platforms. Partner with me to elevate your online presence and stay ahead in the digital landscape.</p>
                        </div>

                        <div className='ourServicesBox'>
                            <img src={phone} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Mobile App Development</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>I provide innovative and user-friendly applications to help businesses thrive in the mobile market. We utilize cutting-edge technologies to deliver high-quality, customized solutions that meet your unique needs and exceed expectations. Partner with me to bring your app ideas to life and make a significant impact in the mobile industry.</p>
                        </div>

                        <div className='ourServicesBox'>
                            <img src={debug} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Debugging</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>In my Debugging service, I expertly identify and resolve software code issues to ensure seamless functionality. With a focus on efficiency and precision, I diagnos bugs of any complexity level, ensuring robust and error-free applications. Partner with me to elevate the quality and performance of your software products.</p>
                        </div>

                        <div className='ourServicesBox'>
                            <img src={mentor} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Mentorship</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}> Providing personalized guidance to help individuals navigate their professional and personal growth. Through tailored sessions and resources, as an experienced mentor I empower mentees to achieve their goals, overcome challenges, and unlock their full potential. Join me for a transformative mentorship journey tailored to your unique aspirations. </p>
                        </div>

                        <div className='ourServicesBox'>
                            <img src={game} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Game Development</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>As the sole developer, my Game Development service is dedicated to bringing your unique vision to life. From conceptualization to execution, I specialize in crafting captivating games across different platforms. Partner with me to transform your gaming ideas into reality and captivate audiences worldwide. </p>
                        </div>

                        <div className='ourServicesBox'>
                            <img src={skill1} />
                            <h2 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Low Poly 3d Design</h2>
                            <p style={{ color: theme === 'Light' ? '#333' : '#bababa' }}>In my Low Poly 3D Design service, I specialize in creating visually stunning designs with a minimalist aesthetic. Using optimized techniques, I craft captivating scenes ideal for games, animations, and virtual environments. Partner with me to bring your creative visions to life with charming low poly designs.</p>
                        </div>

                    </div>

                </div>
                <div className='some articles'>

                </div>

                <div>
                    <ResumeLike />
                </div>

                <div className='latestArticlesHolder'>
                    <h1 style={{ color: theme === 'Light' ? '#333' : '#dfdfdf' }}>Explore Latest Articles</h1>

                    <Link to="/articlesList" className='pl-6 pr-8'><HomePageLatestArticles /></Link>

                </div>

                <Footer />


            </body>
        </>

    );
};

export default Home;
