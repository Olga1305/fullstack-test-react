import React, { useEffect } from 'react';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { setSingleId, getSingleRequest, stopLoading } from '../store/beers.actions'; 
import BeerDetails from '../components/beer.details';


type MyProps = RouteComponentProps<{ id?: string }>


const SingleBeer: React.FC<MyProps> = ({ match }) => {

	const beerId = Number(match.params.id);	
	let validator;

	const dispatch = useDispatch();
	const beer = useSelector((state: any) => state.beersReducer.beer);
	const loading = useSelector((state: any) => state.beersReducer.loading);

	if (beer.id === beerId) {
		validator = true;
	} else {
		validator = false;
	}

	if (validator) {
		dispatch(stopLoading());
	}

	useEffect(() => {
		if (beer === {} || beer.id !== beerId) {
			dispatch(setSingleId(beerId));
			dispatch(getSingleRequest());									
		} 
	});


	return (
		<>
		{loading && <div>Loading...</div>}
		{beer && !loading && (
			<div className={`container ${styles.container}`}>			
				<div className={styles.beers}>				
					<BeerDetails  beer={beer}/>				
				</div>
			</div>
		)}
		</>
	)
};


export default withRouter(SingleBeer);