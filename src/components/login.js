import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../providers/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

function Login() {
	let history = useHistory();
	let location = useLocation();
	let auth = useAuth();

	let { from } = location.state || { from: { pathname: "/" } };
	let login = (googleResp) => {
		auth.signin(googleResp.tokenId)
			.then(() => {
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
      							onClick={renderProps.onClick} 
      							disabled={renderProps.disabled}>
      							<FontAwesomeIcon icon={faGoogle} />&nbsp;
								Sign In
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