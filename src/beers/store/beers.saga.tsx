import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { getBeersResponse, beersError, BeersActionsTypes } from './beers.actions';
import { fetchBeers } from '../api/beers.api';

function* fetchBeersEffect() {
	try {
		const beers = yield call(fetchBeers);
		yield put(getBeersResponse(beers));
	} catch (error) {
		yield put(beersError({
            error: 'An error occurred when trying to get the beers'
        }));
	}
}

function* watchFetchBeers() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchBeersEffect);
}


const beersSagas = [
	fork(watchFetchBeers),
	
];

export default beersSagas;

