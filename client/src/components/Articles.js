import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Articles.css'
import { ThemeContext } from '../components/ThemeContext';

const Articles = ({articles, style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
        {articles.map((article, index) => (
              <div key={index} className='articlesContainer' style={style}>
                <div className='articlesbox'>
                  <Link to={`/article/${article.name}`}>
                    <img className='' src={article.thumbnail}
                    alt='blog'/>
                  </Link>
                  <div className='articlecontent'>
                    <Link key={index} to={`/article/${article.name}`}>
                      <h3 style={{ color: theme === 'Light' ? 'black' : '#dfdfdf' }}>{article.title}</h3>
                    </Link>
                    <p style={{ color: theme === 'Light' ? 'black' : '#dfdfdf' }}>
                      {article.content[0].substring(0,115)}...
                    </p>
                    <div className='articleLearnMoreBtn'>
                      <Link to={`/article/${article.name}`} style={{ color: theme === 'Light' ? 'blue' : 'white' }}>Learn more</Link>
                    </div>
                  </div>
                </div>
              </div>

            ))}
    </>
  )
}

export default Articles