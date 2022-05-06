import React from 'react';
import { Slider } from './Slider';
import './Question.css';

export function Question(props) {
  return (
    <>
    
    <div className="question-item">
              <h3>{props.question}</h3>
              < Slider />
              
              </div>
    </>
  )
}


