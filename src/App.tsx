import React from 'react';
import {
	Route,
	Redirect, Switch, BrowserRouter as Router
} from 'react-router-dom';
import BeersDashboard from './beers/screens/beers-dashboard';
import store from './store/store';
import { Provider } from 'react-redux';


export enum Routes {
	ROUTE = '/',
	BEERS = '/dashboard'
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={Routes.ROUTE} render={() => (<Redirect to={Routes.BEERS}/>)}/>
					<Route exact path={Routes.BEERS} render={() => <BeersDashboard/>}/>
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
