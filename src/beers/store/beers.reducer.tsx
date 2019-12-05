import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: []
}


const initialState: IBeersStateType = {
	beers: []
};

const beersReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case BeersActionsTypes.GET_BEERS_RESPONSE:
			return {...state, beers: action.payload};
		default:
			return state;
	}
};

export default beersReducer;