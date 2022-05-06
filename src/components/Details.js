import React from 'react';
import { Link } from 'react-router-dom';
import "./Details.css"

export const Details = () => {
  return (
    <>

<div className='container'>
  <div className='tips'>
  <p className='tip'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus. Fusce tincidunt sapien porta rutrum dictum.  </p>
  <Link to="/">
    <button type="button" class="btn btn-dark btn-lg">Test Again</button>
  </Link>
  </div>
</div>
  <div className="container-details">
    <div className="wrapper">
      <div className="box a">
        <div className='date'>{Date()}</div>
        <div className='nTeam'>8</div>
        <div className='change'></div>
      </div>
      <div className="box b">
        <div className="box-b-1">
          <h3>ACTIONS</h3>
        </div>
        <div className="box-b-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus</p>
        </div>
      </div>
      <div class="box c">A</div>
    </div>
  </div>





    </>
  )
}
