import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: [],
	showGravity: boolean,
	searched: [],	
}


const initialState: IBeersStateType = {
	beers: [],
	showGravity: false,
	searched: [],
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
		case BeersActionsTypes.SEARCH_BEERS:
			const { searched } = action.payload;			
			return {...state, searched};	
		default:
			return state;
	}
};

export default beersReducer;