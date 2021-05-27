import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import Navigator from './navigator';

function Home() {
	let history = useHistory();
	let location = useLocation();
	
	return (
		<div className='container-fluid gray'>
			<div className='row'>
				<Navigator />
				<main className='col-12'>
					<div className='row'>
						<div className='col-12'>
							<Switch>
					            <Route path="/dashboard" exact component={Dashboard} />
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