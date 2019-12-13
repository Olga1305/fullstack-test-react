import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import { getBeersResponse, beersError, BeersActionsTypes } from './beers.actions';
import { fetchBeers } from '../api/beers.api';


function* fetchBeersEffect() {
	try {
		const currentPage = yield select((state: any) => state.beersReducer.currentPage)
		const beers = yield call(fetchBeers, currentPage);
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

function* watchCurrentPage() {
	yield takeLatest(BeersActionsTypes.SET_ITEMS_CURRENT_PAGE, fetchBeersEffect);
}


const beersSagas = [
	fork(watchFetchBeers),	
	fork(watchCurrentPage),
];

export default beersSagas;

