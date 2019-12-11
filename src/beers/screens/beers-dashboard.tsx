import React, { useEffect } from 'react';
import styles from './beers-dashboard.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBeersRequest } from '../store/beers.actions';
import Beer from '../components/beer.component';




const BeersDashboard = () => {
	const dispatch = useDispatch();
	const beers = useSelector((state: any) => state.beersReducer.beers);

	useEffect(() => {
		if (!beers.length) {
			dispatch(getBeersRequest());
		}
	});

	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.beers}>
				{beers.map((el: any, index: number) =>
				<Link to={`/${el.id}`} key={index}>
				   <Beer beer={el}/>
				</Link>					
				)}
			</div>
		</div>
	)
};


export default BeersDashboard;