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
	let [loginErr, setLoginErr] = useState(null);

	let { from } = location.state || { from: { pathname: "/home" } };
	let handleError = (err) => {
		setAuthorizing(false);
		setLoginErr(err);
	}

	let login = (googleResp) => {
		auth.signin(googleResp.tokenId)
			.then(() => {
				setAuthorizing(false);
				history.replace(from);
			}).catch(handleError);
	};

	return (
		<div className="container-fluid login-page d-flex align-self-center justify-content-center ">
			<div className='mt-auto mb-auto'>
				<div className='row d-flex justify-content-center'>
					<div className='banner-image'></div>
				</div>
				<div className='row d-flex align-self-center justify-content-center'>
					<div className='col-12 text-center'>
						<GoogleLogin
					        clientId={process.env.REACT_APP_GAUTH_CLIENT_ID}
					        theme='dark'
					        disabled={authorizing}
					        onSuccess={login}
					        onFailure={handleError}
					        cookiePolicy={'single_host_origin'}
					        render={renderProps => {
					        	return (
		      						<button 
		      							type='button'
		      							className='btn button sign-in-button'
		      							onClick={(ev) => {
		      								setAuthorizing(true);
		      								setLoginErr(null);
		      								renderProps.onClick(ev);
		      							}} 
		      							disabled={renderProps.disabled}>
		      							<FontAwesomeIcon icon={faGoogle} />&nbsp;
										<span>Sign In&nbsp;
											<FontAwesomeIcon icon={faSun} className={'fa-spin' + (authorizing ? ' d-inline-block': ' d-none')} />
										</span>
		      						</button>
		    					);
	    					}}
				    	>
				    	</GoogleLogin>
					</div>
				</div>
				<div className={'row d-flex mt-3 justify-content-center' + (loginErr ? ' ': ' in') + 'visible'}>
					<div className='alert alert-danger text-center'>Could not login. {loginErr ? loginErr.error: ''} Please try again</div>
				</div>
			</div>
		</div>
	);
}

export default Login;