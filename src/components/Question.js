import React, { useState } from 'react';
import './Slider.css';
import './Question.css';
import { RadialBar } from '../components/Radialbar';

export function Question(props) {

  const [myRange, setMyRange] = useState(50)

const level = (e) => {
   setMyRange(e.target.value)
}

console.log(myRange)
  return (
    <>
   
    </>
  )
}


