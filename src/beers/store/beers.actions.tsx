import { IAction } from '../../store/action.type';


export enum BeersActionsTypes {
	GET_BEERS_REQUEST = '[Beers] get beers request',
	GET_BEERS_RESPONSE = '[Beers] get beers response',
	SET_ITEMS_CURRENT_PAGE = '[Scroll] set current page',
	CHECK_IF_HAS_MORE = '[HasMore] check if has more beers',
	SET_SINGLE_ID = '[Single] set single beer id',
	GET_SINGLE_REQUEST = '[Single] get single beer request',
	GET_SINGLE_RESPONSE = '[Single] get single beer response',
	GET_GRAVITY_DIFFERENCE = '[Single] get the difference between original final gravities',
	SEARCH_BEERS = '[Search] search beers by name',
	BEERS_ERROR = '[Error] catch error'
}


export const getBeersRequest = (): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_REQUEST};
};

export const getBeersResponse = (beers: any): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_RESPONSE, payload: beers };
};

export const setItemsCurrentPage = (): IAction => {
	return {type: BeersActionsTypes.SET_ITEMS_CURRENT_PAGE};
};

export const checkIfHasMore = (): IAction => {
	return {type: BeersActionsTypes.CHECK_IF_HAS_MORE};
};

export const setSingleId = (id: any): IAction => {
	return {type: BeersActionsTypes.SET_SINGLE_ID, payload: id };
};

export const getSingleRequest = (): IAction => {
	return {type: BeersActionsTypes.GET_SINGLE_REQUEST};
};

export const getSingleResponse = (beer: any): IAction => {
	return {type: BeersActionsTypes.GET_SINGLE_RESPONSE, payload: beer };
};

export const getGravityDifference = (): IAction => {
	return {type: BeersActionsTypes.GET_GRAVITY_DIFFERENCE};
};

export const searchBeers = (searched: any): IAction => {
	return {type: BeersActionsTypes.SEARCH_BEERS, payload: searched };
};

export const beersError = (error: any): IAction => {
	return {type: BeersActionsTypes.BEERS_ERROR, payload: error };
};


