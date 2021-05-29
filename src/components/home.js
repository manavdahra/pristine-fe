import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import Navigator from './navigator';

function Home() {
	console.log('inside home');
	return (
		<div>
			<div className='container-fluid gray' >
				<div className='row sidebar'>
					<Navigator />
				</div>
				<div className='row main'>
					<main className='col-12'>
						<Switch>
							<Route path="/home" component={Dashboard} />
				            <Route path="/home/dashboard" component={Dashboard} exact />
				            {/*<Route path="/aboutUs" component={Dashboard} exact />*/}
					    </Switch>
					</main>
				</div>
			</div>
			<footer className='footer'>
				<div className='container-fluid'>
					<div className='row text-muted m-2 d-flex justify-content-around'>
						<div className='col-6 text-right'>
							About Us
						</div>
						<div className='col-6 text-left'>
							&copy;Copyright 2021, Pristine
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;