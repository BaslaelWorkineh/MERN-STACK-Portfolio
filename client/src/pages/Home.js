import React, { useEffect, useState } from 'react';
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
import projectOne from './Gifs/Wild Life simulation.png';
import projectTwo from './Gifs/CheapDelala.png';
import projectThree from './Gifs/SlashDash.png';

import cheapdelalaGif from './Gifs/cheapdelala.gif';
import cheapdelalahomepage from './Gifs/cheapdelalahomepage.png'


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

function openProject(projectName, projectDescription, projectImages, githubLink) {
    const popUp = document.querySelector('.project-Description');
    const overlay = document.querySelector('#overlay');

    // Update project details in the description box
    const titleElement = popUp.querySelector('.title');
    const descriptionElement = popUp.querySelector('.project-Description-body p');
    const imagesContainer = popUp.querySelector('.project-Description-Media');
    const gitLink = document.querySelector('.project-Description').querySelector('.project-Description-body').querySelector('.copy-text').querySelector('.text');

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
            <section className=''>
                <div className='LandingPage'>
                    <div className='LandingPageValues'>
                        <h1 className='IntroHone'>Hello, I'm</h1>
                        <h1 className=''>{currentText}</h1>
                        <p>I'm a passionate programmer who thrives on collaborative teamwork, with a love for coding <br />that drives my commitment to quality and continuous learning.</p>
                        <div className='LandingBtns'>
                            <button className='hiremeBtn'>Hire Me</button>
                            <button className='cvBtn'>Download CV</button>
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
                <h1 className='heading'>Recent Projects I've Been working on.</h1>

                <div className='box-container'>

                    <div className='box'>
                        <img src={projectOne} alt="Wild Life Simulation" />
                        <h1>This Is project one</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Wild Life Simulation', ' In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                            [projectOne, profilepic, profilepic], 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY')}>Read More</button>
                    </div>
                    <div className='box'>
                        <img src={projectTwo} alt="Cheap Delala" />
                        <h1>Cheap Delala</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Cheap Delala(House Rental system)', ' The House Rental and Sale System developed in Java is a comprehensive platform designed to provide a user-friendly experience for individuals seeking to rent or purchase houses. With its intuitive user interface, users can easily navigate through the system\'s features. The system incorporates a chat system, allowing seamless communication between buyers and sellers to discuss property details, negotiate terms, and address any inquiries. Additionally, a secure payment system is integrated, enabling buyers to make payments conveniently and securely. The system also includes an advertising system, allowing users to post their houses for rent or sale, reaching a wider audience. As a broker, the system facilitates the agreement process, ensuring a smooth transaction. The broker earns a 5% commission from the agreement, ensuring a fair and profitable business model. Overall, this Java-based House Rental and Sale System offers a comprehensive solution for individuals looking to rent or purchase properties, streamlining the process and providing a user-friendly experience.',
                            [projectTwo, cheapdelalaGif, cheapdelalahomepage], 'git clone https://github.com/BaslaelWorkineh/Cheap-Delala-V2.git')}>Read More</button>
                    </div>
                    
                    <div className='box'>
                        <img src={projectThree} alt="Slash Dash" />
                        <h1>This Is project one</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Wild Life sdsdsdsmulation', ' In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                            [projectThree, profilepic, profilepic], 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY')}>Read More</button>
                    </div>
                </div>
                
                <div className='box-container'>

                    <div className='box'>
                        <img src={projectOne} alt="Wild Life Simulation" />
                        <h1>This Is project one</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Wild Life Simulation', ' In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                            [projectOne, profilepic, profilepic], 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY')}>Read More</button>
                    </div>
                </div>

                <div className='box-container'>

                    <div className='box'>
                        <img src={projectOne} alt="Wild Life Simulation" />
                        <h1>This Is project one</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Wild Life Simulation', ' In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                            [projectOne, profilepic, profilepic], 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY')}>Read More</button>
                    </div>

                    <div className='box'>
                        <img src={projectOne} alt="Wild Life Simulation" />
                        <h1>This Is project one</h1>
                        <p>Veniam eiusmod enim ad adipisicing et tempor. Elit sint velit incididunt laboris. Ullamco tempor sunt laboris mollit culpa eiusmod nostrud ipsum eiusmod in. Lorem officia ullamco veniam non aliquip consectetur consectetur velit</p>
                        <button onClick={() => openProject('Wild Life Simulation', ' In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
                            [projectOne, profilepic, profilepic], 'git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY')}>Read More</button>
                    </div>
                </div>
            </section>

            <div className='project-Description' id='project-Description'>
                <div className='project-Description-Header'>
                    <div className='title'>Example Model</div>
                    <button className='close-button' onClick={closeProject}>&times;</button>
                </div>
                <div className='project-Description-Media'>

                </div>
                <div className='project-Description-body'>

                    <p></p>

                    <h1 className='instructions'><br/>(1) Open Git Bash.<br/>
                       (2) Change the current working directory to the location where you want the cloned directory.<br/>
                       (3) Type git clone, and then paste the URL you copied earlier.</h1>
                    <div className='copy-text'>
                        <input type='text' className='text'  />
                        <button className='copyButton' onClick={copyText}>copy</button>
                    </div>
                    
                    <h1 className='instructions'>If you don't have Git Bash <br/>
                    Install git first</h1>

                    <button className='close-button closeBtn' onClick={closeProject}>Close</button>
                </div>
            </div>
            <div id='overlay' onClick={closeProject}></div>




        </>

    );
};

export default Home;
