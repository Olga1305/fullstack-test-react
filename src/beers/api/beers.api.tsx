import axios from 'axios';

export const fetchBeers = (): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers`)
		.then(res => res.data);
};
