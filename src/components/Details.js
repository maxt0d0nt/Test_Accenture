import React from 'react';
import { Link } from 'react-router-dom';
import "./Details.css";



export const Details = () => {
  return (
    <>

<div className='container'>
  <div className='tips'>
  <h4><i class="fa-regular fa-lightbulb"></i>TIPS</h4>
  <p className='tip'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus. Fusce tincidunt sapien porta rutrum dictum.  </p>
  <Link to="/">
    <button type="button" className='btn btn-danger btn-lg'>Test Again</button>
  </Link>
  </div>
</div>
  <div className="container-details">
    <div className="wrapper">
      <div className="box a">
        <div className='date'>{new Date().toDateString()}</div>
        <div className='nTeam'>8 Members<i class="fa-solid fa-people-group"></i></div>
      </div>
      <div className="box b">
        <div className="box-b-1">
          <h3>ACTIONS<i class="fa-solid fa-handshake-angle"></i></h3>
        </div>
        <div className="box-b-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus</p>
        </div>
      </div>
      <div class="box c">
      <div class="container-c">
  <div class="row-c">
    <div class="col">
      <p>Analisys of your team result<i class="fa-solid fa-person-chalkboard"></i></p>
    </div>
  </div>
  <div class="row-c">
    <div class="col-icon">
    <i class="fa-solid fa-arrow-trend-up"></i>
    </div>
    <div class="col-text">
      Motivational driver:
    </div>
    <div class="col">
      <p>+ 5%</p>
    </div>
  </div>
  <div class="row-c">
    <div class="col-icon">
    <i class="fa-solid fa-arrow-trend-down"></i>
    </div>
    <div class="col-text">
      Psycological Safety:
    </div>
    <div class="col">
      <p>+ 33%</p>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
    </>
  )
}
