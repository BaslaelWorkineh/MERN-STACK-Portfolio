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
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>High School Degree</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Bachelor's Degree</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="resume-box" style={{ background: theme === 'Light' ? '#c6ffbb' : '#282727' }}>
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Master Degree</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
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
                            <h4>2018 - 2022</h4>
                            <h3 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>Frontend Developer</h3>
                            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ResumeLike;
