import React, { useState } from 'react';
import './Slider.css';

export const Slider = () => {
const [myRange, setMyRange] = useState(0)
 
const level = () => {
setMyRange(myRange + 1)
}

console.log(myRange)

  return (
    <>
    <div className='slider-container'>
        <div className='question-slider'>
        <label for="customRange2" className="form-label"></label>
        <input type="range" onPointerMove={level} className="form-range"  min="0" max="100" defaultValue={myRange} id="customRange2" />
        </div>
    </div>
    </>
  )
}
