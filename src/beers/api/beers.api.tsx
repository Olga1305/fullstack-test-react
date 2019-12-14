import axios from 'axios';

export const fetchBeers = (currentPage: number): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/api/page/${currentPage}`)
		.then(res => res.data);
};

export const getBeersByQuery = (query: string): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/api/${query}`)
		.then(res => res.data);
};
