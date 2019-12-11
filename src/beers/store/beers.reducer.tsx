import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: [],
	showGravity: boolean,	
}


const initialState: IBeersStateType = {
	beers: [],
	showGravity: false,
};

const beersReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case BeersActionsTypes.GET_BEERS_RESPONSE:
			const { beers } = action.payload;
			return {...state, beers};
		case BeersActionsTypes.GET_GRAVITY_DIFFERENCE:
			let { showGravity } = state;
			showGravity = !showGravity;
			return {...state, showGravity};
		default:
			return state;
	}
};

export default beersReducer;