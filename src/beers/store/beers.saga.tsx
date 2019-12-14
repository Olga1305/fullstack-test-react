import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import { getBeersResponse, searchBeersResponse, beersError, BeersActionsTypes } from './beers.actions';
import { fetchBeers, getBeersByQuery } from '../api/beers.api';


function* fetchBeersEffect() {
	try {
		// const currentPage = yield select((state: any) => state.beersReducer.currentPage)
		const beers = yield call(fetchBeers);
		yield put(getBeersResponse(beers));
		console.log(beers)
	} catch (error) {
		yield put(beersError({
            error: 'An error occurred when trying to get the beers'
        }));
	}
}

function* fetchSearchBeers() {
	try {
		const query = yield select((state: any) => state.beersReducer.query)
		const searched = yield call(getBeersByQuery, query);
		yield put(searchBeersResponse(searched));
		console.log(searched)
	} catch (error) {
		yield put(beersError({
            error: 'An error occurred when trying to search beers'
        }));
	}
}


function* watchFetchBeers() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchBeersEffect);
}

function* watchSearch() {
	yield takeLatest(BeersActionsTypes.SEARCH_BEERS_REQUEST, fetchSearchBeers);
}

function* watchCurrentPage() {
	yield takeLatest(BeersActionsTypes.SET_ITEMS_CURRENT_PAGE, fetchBeersEffect);
}


const beersSagas = [
	fork(watchFetchBeers),
	fork(watchSearch),	
	fork(watchCurrentPage),
];

export default beersSagas;

