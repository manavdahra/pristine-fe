import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Navigator() {
  return (
      <nav className='col-md-2 col-sm-12 d-flex flex-column sidebar'>
        <Link className='d-flex align-items-center text-decoration-none' to="/">
          <img className="aside-logo" src="pristine.svg" alt='logo' />
        </Link>
          
        <hr />
        <ul className="nav nav-pills flex-column flex-grow-1">
          <li className="nav-item aside-item">
            <Link className="nav-link golden" to="/dashboard">
              <FontAwesomeIcon icon={faChartLine} className='aside-item-active' />&nbsp;
              Dashboard
            </Link>
          </li>
          <li className="nav-item aside-item">
            <Link className="nav-link golden" to="/aboutUs">
              <FontAwesomeIcon icon={faAddressCard} className='aside-item-active' />&nbsp;
              About Us
            </Link>
          </li>
        </ul>
        
        <div className='flex-column mb-3' >
          <hr />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item aside-item">
              <Link className="nav-link golden" to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} className='aside-item-active' />&nbsp;
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

  export default Navigator;