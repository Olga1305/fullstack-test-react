import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: any[],
	id: number,
	beer: any[],
	showGravity: boolean,
	searched: any[],
	currentPage: number,
	hasMore: boolean,	
}


const initialState: IBeersStateType = {
	beers: [],
	id: 0,
	beer: [],
	showGravity: false,
	searched: [],
	currentPage: 1,
	hasMore: true,
};



const beersReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case BeersActionsTypes.GET_BEERS_RESPONSE:
			let { beers } = state;			
			beers = beers.concat(action.payload);
			return {...state, beers};													
		case BeersActionsTypes.SET_ITEMS_CURRENT_PAGE:
			let { currentPage } = state;
			++currentPage;
			return {...state, currentPage};
		case BeersActionsTypes.CHECK_IF_HAS_MORE:			
			let { hasMore } = state;
			if (state.beers.length > 310) {
				hasMore = false;
			} else {
				hasMore = true;
			}			
			return {...state, hasMore};
		case BeersActionsTypes.SET_SINGLE_ID:			
			return {...state, id: action.payload};
		case BeersActionsTypes.GET_SINGLE_RESPONSE:			
			return {...state, beer: action.payload};	
		case BeersActionsTypes.GET_GRAVITY_DIFFERENCE:
			let { showGravity } = state;
			showGravity = !showGravity;
			return {...state, showGravity};
		case BeersActionsTypes.SEARCH_BEERS:					
			return {...state, searched: action.payload};	
		default:
			return state;
	}
};

export default beersReducer;