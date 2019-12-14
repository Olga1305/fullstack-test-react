import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: any[],
	showGravity: boolean,
	searched: any[],
	currentPage: number,
	hasMore: boolean,
	query: string,	
}


const initialState: IBeersStateType = {
	beers: [],
	showGravity: false,
	searched: [],
	currentPage: 1,
	hasMore: true,
	query: '',
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
		case BeersActionsTypes.GET_GRAVITY_DIFFERENCE:
			let { showGravity } = state;
			showGravity = !showGravity;
			return {...state, showGravity};
		case BeersActionsTypes.SET_SEARCH_QUERY:					
			return {...state, query: action.payload};	
		case BeersActionsTypes.SEARCH_BEERS_RESPONSE:					
			return {...state, searched: action.payload};	
		default:
			return state;
	}
};

export default beersReducer;