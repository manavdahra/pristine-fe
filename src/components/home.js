import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import Navigator from './navigator';

function Home() {
	console.log('inside home');
	return (
		<div className='container-fluid gray'>
			<div className='row'>
				<Navigator />
				<main className='col-12'>
					<div className='row'>
						<div className='col-12'>
							<Switch>
								<Route path="/home" component={Dashboard} />
					            <Route path="/home/dashboard" component={Dashboard} exact />
					            {/*<Route path="/aboutUs" component={Dashboard} exact />*/}
						    </Switch>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Home;