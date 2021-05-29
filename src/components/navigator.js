import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/auth';

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
    <nav className="col-12 navbar navbar-expand-md justify-content-between sidebar">
      <Link className='nav-brand text-decoration-none ' to="/">
        <div className='d-none d-md-block'>
          <img className="aside-logo" src="/pristine.svg" alt='logo' />
        </div>
        <div className='d-xs-block d-md-none aside-icon'>
          <img src="favicon.svg" alt='logo' />
        </div>
      </Link>
      <ul className='navbar-nav ml-30 mr-auto'>
        <li className='nav-item aside-item'>
          <Link className="nav-link golden" to="/home/dashboard">
            {/*<FontAwesomeIcon icon={faChartLine} className='aside-item-active' />&nbsp;*/}
            Dashboard
          </Link>
        </li>
      </ul>
      <div className='navbar-nav mr-md-3'>
        <Link className="nav-link golden" to='/#' onClick={logout}>
          {/*<FontAwesomeIcon icon={faChartLine} className='aside-item-active' />&nbsp;*/}
          Logout
        </Link>
      </div>
    </nav>
    );
}

  export default Navigator;