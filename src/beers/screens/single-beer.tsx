import React, { useEffect } from 'react';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { setSingleId, getSingleRequest } from '../store/beers.actions'; 
import BeerDetails from '../components/beer.details';


type MyProps = RouteComponentProps<{ id?: string }>


const SingleBeer: React.FC<MyProps> = ({ match }) => {

	const beerId = Number(match.params.id);

	const dispatch = useDispatch();
	const beer = useSelector((state: any) => state.beersReducer.beer);
	
	useEffect(() => {
		if (!beer.length || beer[0].id !== beerId) {
			dispatch(setSingleId(beerId));
			dispatch(getSingleRequest());						
		} 			
	});


	return (
		<>
		{beer.length && (
			<div className={`container ${styles.container}`}>			
				<div className={styles.beers}>				
					<BeerDetails  beer={beer[0]}/>				
				</div>
			</div>
		)}
		</>
	)
};


export default withRouter(SingleBeer);