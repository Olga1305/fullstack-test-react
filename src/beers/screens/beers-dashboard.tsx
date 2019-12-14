import React, { useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './beers-dashboard.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBeersRequest, setSearchQuery, searchBeersRequest, setItemsCurrentPage, checkIfHasMore } from '../store/beers.actions';
import SearchBar from '../components/searchbar.component';
import Beer from '../components/beer.component';



const BeersDashboard = () => {
	const dispatch = useDispatch();
	const beers = useSelector((state: any) => state.beersReducer.beers);
	const hasMore = useSelector((state: any) => state.beersReducer.hasMore);	
	let searched = useSelector((state: any) => state.beersReducer.searched);

	useEffect(() => {
		if (!beers.length) {
			dispatch(getBeersRequest());
		}
		dispatch(checkIfHasMore());		
	});
	

	const findBeer = (searchQuery: any) => {		
		if (searchQuery !== '') {	
		dispatch(setSearchQuery(searchQuery)); 
		dispatch(searchBeersRequest()); 
		}
	};

	return (
		<div className={`container ${styles.container}`}>

			<SearchBar onSearch={findBeer}></SearchBar>

			{searched && 
				<div className={styles.beers}>
				{searched.map((el: any, index: number) =>
				<Link to={`/${el.id}`} key={index}>
				   <Beer beer={el}/>
				</Link>					
				)}
			</div>}
			
			{!searched.length && 
				<InfiniteScroll
					dataLength={beers.length} 
					next={() => dispatch(setItemsCurrentPage())}
					hasMore={hasMore}					
					loader={<h4>Loading...</h4>}
				>
					<div className={styles.beers}>
						{beers.map((el: any, index: number) =>
						<Link to={`/${el.id}`} key={index}>
							<Beer beer={el}/>
						</Link>					
						)}
					</div>
			</InfiniteScroll>}
			
		</div>
	)
};


export default BeersDashboard;


