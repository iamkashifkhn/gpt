import React from 'react'
import { Feature } from '../../components'
import './gpt.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt3'>
        <div className='gpt__whatgpt-feature'>
            <Feature/>
        </div>
        <div className='gpt__whatgpt-heading'>
            <h1 className='gradient__text'>
              The possibilities are beyong you imagination.
            </h1>
            <p className='gradient__text'> Explore the Library </p>
        </div>
        <div className='gpt__features-container__feature'>
          <Feature/>
          <Feature/>
          <Feature/>
        </div>
    </div>  
  )
}

export default WhatGPT3