import React from 'react';

import "./Header.css";

export const Header = () => {
  return (
    <>
  <div className='container'>
    <div className='up-nav'></div>
    <nav className='navbar'>
          INSIGTH
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
    Menu
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
    </nav>
  </div>
  

    </>
  )
}

