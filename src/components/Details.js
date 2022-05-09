import React from 'react';
import { Link } from 'react-router-dom';
import "./Details.css";



export const Details = () => {
  return (
    <>

<div className='container'>
  <div className='tips'>
    <h4><i className="fa-regular fa-lightbulb"></i>TIPS</h4>
    <p className='tip'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus. Fusce tincidunt sapien porta rutrum dictum.  </p>
      <Link to="/">
         <button type="button" className='btn btn-secondary btn-lg'>Test Again</button>
      </Link>
  </div>
</div>
<div className="container-details">
  <div className="wrapper">
    <div className="box a">
      <div className='date'>{new Date().toDateString()}</div>
      <div className='nTeam'>8 Members<i className="fa-solid fa-people-group"></i></div>
    </div>
    <div className="box b">
      <div className="box-b-1">
        <h3>ACTIONS<i className="fa-solid fa-handshake-angle"></i></h3>
      </div>
      <div className="box-b-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vestibulum maximus</p>
      </div>
      </div>
    <div className="box c">
      <div className="container-c">
        <div className="row-c">
          <div className="col">
            <p>Analisys of your team result<i className="fa-solid fa-person-chalkboard"></i></p>
          </div>
        </div>
        <div className="row-c">
          <div className="col-icon">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <div className="col-text">
            Motivational driver:
          </div>
          <div className="col">
            <p>+ 5%</p>
          </div>
        </div>
        <div className="row-c">
          <div className="col-icon">
            <i className="fa-solid fa-arrow-trend-down"></i>
          </div>
        <div className="col-text">
          Psycological Safety:
        </div>
        <div className="col">
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
