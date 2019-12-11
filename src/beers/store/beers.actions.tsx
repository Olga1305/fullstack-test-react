import { IAction } from '../../store/action.type';


export enum BeersActionsTypes {
	GET_BEERS_REQUEST = '[Beers] get beers request',
	GET_BEERS_RESPONSE = '[Beers] get beers response',
	GET_GRAVITY_DIFFERENCE = '[Single] get the difference between original final gravities',
	BEERS_ERROR = '[Error] catch error'
}


export const getBeersRequest = (): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_REQUEST};
};

export const getBeersResponse = (beers: any): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_RESPONSE, payload: { beers }};
};

export const getGravityDifference = (): IAction => {
	return {type: BeersActionsTypes.GET_GRAVITY_DIFFERENCE};
};

export const beersError = (error: any): IAction => {
	return {type: BeersActionsTypes.BEERS_ERROR, payload: error};
};


