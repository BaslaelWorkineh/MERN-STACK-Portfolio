import React, { useState, useEffect } from 'react';
import './HomePageLatestArticles.css';
import articleContent from '../pages/article-content'; // Import article content from articlecontent.js
 // Import article content from articlecontent.js

const HomePageLatestArticles = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const firstThreeArticles = articleContent.slice(0, 2); // Slice the array to get the first three articles

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Define the text to be displayed based on screen width
    const getDisplayText = (content) => {
        if (windowWidth <= 800) {
            // Return a truncated version of the content for smaller screens
            return content[0].substring(0, 200) + "...";
        } else {
            return content[0].substring(0, 500) + "...";
        }
    };

    return (
        <>
            <div className='latestNewsArticleContainer'>
                {firstThreeArticles.map((article, index) => (
                    <div className='latestNewsArticle' key={index}>
                        <h1>{article.title}</h1>
                        <h2>{getDisplayText(article.content)}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomePageLatestArticles;
