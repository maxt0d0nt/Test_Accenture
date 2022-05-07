import React, { useState } from 'react';
import './Slider.css';


export const Slider = () => {
const [myRange, setMyRange] = useState(50)
 
const level = (e) => {
setMyRange(e.target.value)
}

console.log(myRange)

  return (
    <>
    <div className='slider-container'>
        <div className='question-slider'>
        <label for="customRange2" className="form-label"></label>
        <input type="range" onChange={level} value={myRange.value} className="form-range"  min={0} max={100}  id="customRange2" />
        <div className='value'>Value:{myRange}</div>
        </div>
    </div>
    </>
  )
  
}

