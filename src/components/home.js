import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import Navigator from './navigator';

function Home() {
	return (
		<div className='container-fluid gray d-flex flex-column vh-100' >
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
			<footer className='row footer'>
				<div className='col-12'>
					<div className='row text-muted m-2 d-flex justify-content-around'>
						<div>
							About Us
						</div>
						<div>
							&copy;Copyright 2021, Pristine
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;