import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../providers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Login() {
	let history = useHistory();
	let location = useLocation();
	let auth = useAuth();
	let [authorizing, setAuthorizing] = useState(false);

	let { from } = location.state || { from: { pathname: "/home" } };
	let login = (googleResp) => {
		auth.signin(googleResp.tokenId)
			.then(() => {
				setAuthorizing(false);
				history.replace(from);
			});
	};

	return (
		<div className="login-page">
			<div className='centre-div'>
				<div className='banner-image'></div>
				<div className='center-horizontal'>
					<GoogleLogin
				        clientId="214628435307-btgenci9bn7cc4qv7bt14gl5ul56te5d.apps.googleusercontent.com"
				        theme='dark'
				        onSuccess={login}
				        onFailure={login}
				        cookiePolicy={'single_host_origin'}
				        render={renderProps => (
      						<button 
      							className='button sign-in-button'
      							onClick={(ev) => {
      								setAuthorizing(true);
      								renderProps.onClick(ev);
      							}} 
      							disabled={renderProps.disabled}>
      							<FontAwesomeIcon icon={faGoogle} />&nbsp;
								<span>Sign In&nbsp;
									<FontAwesomeIcon icon={faSun} className={'fa-spin' + (authorizing ? ' d-inline-block': ' d-none')} />
								</span>
      						</button>
    					)}
			    	>
			    	</GoogleLogin>
				</div>
			</div>
		</div>
	);
}

export default Login;