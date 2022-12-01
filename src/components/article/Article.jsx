import React from 'react'
import './article.css'

const Article = ({imgURL, date,text }) => {
  return (
    <div className='gpt__blog-container_article'>
        <div className='gpt__blog-container_article-image'>
            <img src={imgURL} alt='blog 1'/>
        </div>
        <div className='gpt__blog-container_article-content'>
            <div>
               <p>{date}</p>
               <h3>{text}</h3>
            </div>
            <p>Read full Article</p>
        </div>
    </div>
  )
}

export default Article