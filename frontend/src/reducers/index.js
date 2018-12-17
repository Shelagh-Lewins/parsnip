// import { uniqueId } from '../actions';

var updeep = require('updeep');
export default function lists(state = { 'lists': [] }, action) {
	switch (action.type) {
		case 'FETCH_LISTS_SUCCEEDED': {
			function addLists() {
				return [].concat(action.payload.lists);
			}

			return updeep({ 'lists': addLists }, state); // updeep calls  addList with the lists object as argument. This appends action.payload to an empty array, replacing any previous lists
		}

		case 'CREATE_LIST_SUCCEEDED': {
			function addList(lists) {
				return [].concat(lists, action.payload.list);
			}
			return updeep({ 'lists': addList }, state); // updeep calls  addList with the lists object as argument. So this appends action.payload to state.lists.
		}

		case 'DELETE_LIST_SUCCEEDED': {
			for (let i=0; i< state.lists.length; i++) {
				if (state.lists[i].id === action.payload.id) {
					// we need to use a function to act on the array
					// you cannot splice from the lists array directly because it is sealed
					// the function needs to know i
					function deleteList(lists) {
						let newArray = [...lists];
						newArray.splice(i, 1);
						return newArray;
					}
					
					return updeep({ 'lists': deleteList }, state);
				}
			}
			return state; // if deleted list is not found, there is nothing to do
		}

		case 'SET_LIST_IS_PUBLIC': {
			// map would carry on after the index is found
			// and as we need index, the for loop is simper
			for (let i=0; i<state.lists.length; i++) {
				if (state.lists[i].id === action.payload.id) {
					return updeep.updateIn(`lists.${i}.is_public`, action.payload.is_public, state);
				}
			}
			return state; // in case list was not found
		}

		default:
			return state;
	}
}
