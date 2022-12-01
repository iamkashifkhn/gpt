import React from 'react'
import { Feature } from '../../components'
import './gpt.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt3'>
        <div className='gpt__whatgpt-feature'>
            <Feature title='What is GPT' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
        </div>
        <div className='gpt__whatgpt-heading'>
            <h1 className='gradient__text'>
              The possibilities are beyond you imagination.
            </h1>
            <p className='gradient__text'> Explore the Library </p>
        </div>
        <div className='gpt__whatgpt-container'>
          <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
          <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
          <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        </div>
    </div>  
  )
}

export default WhatGPT3