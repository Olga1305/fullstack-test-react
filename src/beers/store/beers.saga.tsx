import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import { getBeersResponse, getSingleResponse, beersError, BeersActionsTypes } from './beers.actions';
import { fetchBeers, fetchSingle } from '../api/beers.api';


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

function* fetchSingleEffect() {
	try {
		const id = yield select((state: any) => state.beersReducer.id)
		const beer = yield call(fetchSingle, id);
		yield put(getSingleResponse(beer));
	} catch (error) {
		yield put(beersError({
            error: 'An error occurred when trying to get the single beer'
        }));
	}
}


function* watchFetchBeers() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchBeersEffect);
}

function* watchCurrentPage() {
	yield takeLatest(BeersActionsTypes.SET_ITEMS_CURRENT_PAGE, fetchBeersEffect);
}

function* watchFetchSingle() {
	yield takeLatest(BeersActionsTypes.GET_SINGLE_REQUEST, fetchSingleEffect);
}


const beersSagas = [
	fork(watchFetchBeers),	
	fork(watchCurrentPage),
	fork(watchFetchSingle),
];

export default beersSagas;

