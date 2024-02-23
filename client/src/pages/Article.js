import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content'
import AddCommentForm from '../components/AddCommentForm';
//pages
import NotFound from './NotFound';

//components
import Articles from '../components/Articles';
import CommentsList from '../components/CommentsList';
import './Article.css';
import Footer from '../components/Footer';
import { ThemeContext } from '../components/ThemeContext';

const Article = (articles) => {
  const { theme } = useContext(ThemeContext);

  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articlesInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();

  }, [name]);

  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter((article) => article.name !== name);

 
  return (
    <>
    <body style={{ background: theme === 'Light' ? 'linear-gradient(to bottom,  #ffffff, #ffc2c2)' : '#282727' }}>
      <div className='blog-Contents'>
        <div className='All-the-Neccessary'>
          <h1 className='blogTitle' style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>
            {article.title}
          </h1>
          {article.content.map((paragraph, index) => (<p className='blogParagraph' style={{ color: theme === 'Light' ? '#666' : '#bababa' }}> {paragraph}
          </p>
          ))}
        </div>

        <div className='underTheMain'>
          <div className='allAboutComment'>
            <div className='commentLists'>
              <CommentsList commnets={articlesInfo.comments} />
            </div>

           
          </div>
          <div className='OtherArticles'>
            <h1 style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>Other Articles</h1>
            <div className='otherArticlesContainer'>
              <Articles articles={otherArticles} />
            </div>
          </div>
        </div>
        <div className='addCommentSection' >
          <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        </div>



      </div>

      <Footer/>
    </body>
      

    </>
  )
}

export default Article