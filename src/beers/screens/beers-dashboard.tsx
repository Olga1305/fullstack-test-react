import React, { useEffect } from 'react';
import styles from './beers-dashboard.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBeersRequest, searchBeers } from '../store/beers.actions';
import SearchBar from '../components/searchbar.component';
import Beer from '../components/beer.component';



const BeersDashboard = () => {
	const dispatch = useDispatch();
	const beers = useSelector((state: any) => state.beersReducer.beers);
	let searched = useSelector((state: any) => state.beersReducer.searched);

	useEffect(() => {
		if (!beers.length) {
			dispatch(getBeersRequest());
		}

	});

	const findBeer = (query: any) => {		
		if (query !== '') {
		    searched = beers.filter((item: any) => {
				return (item.name.toLowerCase().includes(query.toLowerCase())
			    );
		   });			   
	   } else {
		   searched = []
	   }	
	   dispatch(searchBeers(searched));  
	};

	return (
		<div className={`container ${styles.container}`}>

			<SearchBar onSearch={findBeer}></SearchBar>

			{searched && <div className={styles.beers}>
				{searched.map((el: any, index: number) =>
				<Link to={`/${el.id}`} key={index}>
				   <Beer beer={el}/>
				</Link>					
				)}
			</div>}
			
			{!searched.length && <div className={styles.beers}>
				{beers.map((el: any, index: number) =>
				<Link to={`/${el.id}`} key={index}>
				   <Beer beer={el}/>
				</Link>					
				)}
			</div>}
			
		</div>
	)
};


export default BeersDashboard;


