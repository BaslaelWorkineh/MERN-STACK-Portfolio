import React, { useContext, useState, useEffect } from 'react';
import './AddCommentForm.css'
import { ThemeContext } from '../components/ThemeContext';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const { theme } = useContext(ThemeContext);

    const [username, setUsername] = useState('')
    const [commentText, setCommentText] = useState('')
    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`,{
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                "Content-Type": "application/json",
            },
            
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    };

  return (
    <div className='comment-box' style={{ background: theme === 'Light' ? '' : 'rgb(44, 44, 44)' }}>
        <h2 style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>Comment About The Article</h2>
        <form>       
                <label style={{ color: theme === 'Light' ? '#535353' : '#bababa' }}>Name</label>
                <input placeholder="eg. John MacArthur..." type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <textarea placeholder="Enter your comment here..."rows='4' cols='50' value={commentText} onChange={(e) => 
                setCommentText(e.target.value)}/>
                <button onClick={()=>addComments()}>Add Comment</button>
            </form>
    </div>
    
  )
}

export default AddCommentForm