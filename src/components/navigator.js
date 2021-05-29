import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Navigator() {
  let [ redirect, setRedirect ] = useState(null); 
  let auth = useAuth();

  const logout = function() {
    auth.signout(auth.user.email)
      .then(() => {
        setRedirect(true);
      });
  }

  if (redirect) {
    return <Redirect to='/login' exact />
  }

  return (
    <nav className="col-12 navbar navbar-expand-md justify-content-between">
      <Link className='nav-brand text-decoration-none ' to="/">
        <div className='d-none d-md-block'>
          <img className="aside-logo" src="/pristine.svg" alt='logo' />
        </div>
        <div className='d-xs-block d-md-none aside-icon'>
          <img src="favicon.svg" alt='logo' />
        </div>
      </Link>
      <ul className='navbar-nav mr-auto aside-items'>
        <li className='nav-item aside-item'>
          <Link className="nav-link golden" to="/home/dashboard">
            {/*<FontAwesomeIcon icon={faChartLine} />&nbsp;*/}
            Dashboard
          </Link>
        </li>
      </ul>
      <div className='navbar-nav'>
        <button className="d-none d-md-block button sign-in-button" onClick={logout}>
          <span>Logout</span>
        </button>
        <Link className="nav-link golden d-xs-block d-md-none" to='/#' onClick={logout}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Link>
      </div>
    </nav>
    );
}

  export default Navigator;