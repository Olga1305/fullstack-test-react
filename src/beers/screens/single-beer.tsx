import React, { useEffect } from 'react';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getBeersRequest } from '../store/beers.actions'; 
import BeerDetails from '../components/beer.details';


type MyProps = RouteComponentProps<{ id?: string }>


const SingleBeer: React.FC<MyProps> = ({ match }) => {

	const beerId = Number(match.params.id);
	let beer;	

	const dispatch = useDispatch();
	const beers = useSelector((state: any) => state.beersReducer.beers);
	
	useEffect(() => {
		if (!beers.length) {
			dispatch(getBeersRequest());
		}
	});

	if (beers.length) {
		beer = beers.filter((item: any) => {      
			return item.id === beerId;
		  })[0];		
	}


	return (
		<>
		{beer && (
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