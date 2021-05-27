import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Navigator() {
  return (
    <nav className="col-12 navbar navbar-expand-md justify-content-between sidebar">
      <Link className='nav-brand text-decoration-none ' to="/">
        <div className='d-none d-md-block'>
          <img className="aside-logo" src="pristine.svg" alt='logo' />
        </div>
        <div className='d-xs-block d-md-none aside-icon'>
          <img src="favicon.svg" alt='logo' />
        </div>
      </Link>
      <ul className='navbar-nav ml-30 mr-auto'>
        <li className='nav-item aside-item'>
          <Link className="nav-link golden" to="/dashboard">
            {/*<FontAwesomeIcon icon={faChartLine} className='aside-item-active' />&nbsp;*/}
            Dashboard
          </Link>
        </li>
      </ul>
      <div className='navbar-nav mr-md-3'>
        <Link className="nav-link golden" to="/logout">
          {/*<FontAwesomeIcon icon={faChartLine} className='aside-item-active' />&nbsp;*/}
          Logout
        </Link>
      </div>
    </nav>
    );
}

  export default Navigator;