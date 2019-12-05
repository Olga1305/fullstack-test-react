import { call, put, takeLatest } from 'redux-saga/effects'
import { getBeersResponse, BeersActionsTypes } from './beers.actions';
import { fetchBeers } from '../api/beers.api';

function* fetchBeersEffect() {
	try {
		const beers = yield call(fetchBeers);
		yield put(getBeersResponse(beers));
	} catch (e) {
		// TODO return some action.
	}
}

function* beersSagas() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchBeersEffect);
}

export default beersSagas;