import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../providers/auth';

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
		<div className="App">
	      <GoogleLogin
	        clientId="214628435307-btgenci9bn7cc4qv7bt14gl5ul56te5d.apps.googleusercontent.com"
	        buttonText="Login"
	        onSuccess={login}
	        onFailure={login}
	        cookiePolicy={'single_host_origin'}
	      />
		</div>
	);
}

export default Login;