import axios from 'axios';


export const fetchBeers = (): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/api`)
		.then(res => res.data);
};

export const getBeersByQuery = (query: string): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/api/${query}`)
		.then(res => res.data);
};
