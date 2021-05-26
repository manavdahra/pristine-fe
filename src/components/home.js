import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import Navigator from './navigator';

function Home() {
	let history = useHistory();
	let location = useLocation();
	
	return (
		<div className='container-fluid p-0 gray vh-100'>
			<div className='row h-100'>
				<Navigator />
				<main className='col-md-9 col-sm-12 ml-sm-auto col-lg-10 pt-3 px-4 main'>
					<Switch>
			            <Route path="/dashboard" exact component={Dashboard} />
			            {/*<Route path="/aboutUs" component={Dashboard} exact />*/}
				    </Switch>
				</main>
			</div>
		</div>
	);
}

export default Home;