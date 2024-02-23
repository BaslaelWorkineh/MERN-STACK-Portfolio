import React , {useContext} from 'react';
import '../components/ResumeLike.css' // Import the CSS file if needed
import { ThemeContext } from '../components/ThemeContext';

const ResumeLike = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="resume-container">
            <main className="resume-row">

                {/* Education Section */}
                <section className="resume-col">
                    <header className="resume-title">
                        <h2>EDUCATION</h2>
                    </header>
                    <div className="resume-contents">
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2018 - 2021</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>High School Degree</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>I completed my high school education at St. Joseph Catholic School in Adama with a high score in the EUEE, which earned me an award from the Oromia region.</p>
                        </div>
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2021 - Present</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Bachelor's Degree</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>I am currently enrolled in the School of Computational and Natural Sciences at Addis Ababa University.</p>
                        </div>
                       
                    </div>
                </section>

                {/* Experience Section */}
                <section className="resume-col">
                    <header className="resume-title" >
                        <h2>EXPERIENCE</h2>
                    </header>
                    <div className="resume-contents">
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>UI/UX Designer</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Full-Stack Developer</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2023 - Present</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Co-founder of Mela Tech</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Co-Founded Mela tech Solutions, providing IT-related services such as Web and Mobile Apps.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ResumeLike;
