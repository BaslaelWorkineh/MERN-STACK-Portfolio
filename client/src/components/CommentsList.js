import React, { useContext, useState, useEffect } from 'react';
import './CommentsList.css'
import profilePic from '../pages/Gifs/profilePicture.jpg'
import { ThemeContext } from '../components/ThemeContext';

const CommentsList = ({ commnets }) => {
const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className='commentListContainer'>
        <h3 className='CommentsHeader' style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>Comments: </h3>


        {commnets.map((comment, index) => (
          <div className='username-and-text-holder'>
            <div className='commentContent'>
              <img className='commentPic' src={profilePic} />
              <h4 style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>{comment.username}</h4>
              <p style={{ color: theme === 'Light' ? '#666' : '#bababa' }}>{comment.text}</p>

              <div>
                <a href='#'>Like </a>
                <a href='#'>share</a>


              </div>
            </div>

            <div style={{ color: theme === 'Light' ? '#666' : '#bababa' }}>5 minutes ago</div>
          </div>

        ))}



      </div>

    </>

  )
}

export default CommentsList