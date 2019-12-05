import { IAction } from '../../store/action.type';


export enum BeersActionsTypes {
	GET_BEERS_REQUEST = '[Beers] get beers request',
	GET_BEERS_RESPONSE = '[Beers] get beers response'
}


export const getBeersRequest = (): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_REQUEST};
};

export const getBeersResponse = (beers: any): IAction => {
	return {type: BeersActionsTypes.GET_BEERS_RESPONSE, payload: beers};
};