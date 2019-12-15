import axios from 'axios';

export const fetchBeers = (currentPage: number): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers?per_page=20&page=${currentPage}`)
		.then(res => res.data);
};