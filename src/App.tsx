import React from 'react';
import {
	Route,
	Redirect, Switch, BrowserRouter as Router
} from 'react-router-dom';
import BeersDashboard from './beers/screens/beers-dashboard';
import SingleBeer from './beers/screens/single-beer';
import store from './store/store';
import { Provider } from 'react-redux';


export enum Routes {
	ROUTE = '/',
	BEERS = '/dashboard',
	SINGLE = '/:id'
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={Routes.ROUTE} render={() => (<Redirect to={Routes.BEERS}/>)}/>
					<Route exact path={Routes.BEERS} render={() => <BeersDashboard/>}/>
					<Route exact path={Routes.SINGLE} render={() => <SingleBeer/>}/>					
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
