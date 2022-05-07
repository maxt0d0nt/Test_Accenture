import React from 'react';

import "./Header.css";

export const Header = () => {
  return (
  <>
  <div className='container'>
    <div className='up-nav'></div>
    <nav className='navbar'>
      <div className='title'>
        <h1 className='title-1'>Insight</h1><h1 className='title-2'>SCAN</h1>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
          Menu
        </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button className="dropdown-item" type="button">Login</button></li>
              <li><button className="dropdown-item" type="button">About us</button></li>
              <li><button className="dropdown-item" type="button">Docs</button></li>
            </ul>
        </div>
    </nav>
  </div>
  </>
  )
}

