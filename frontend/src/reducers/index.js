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

		case 'SET_LIST_IS_PUBLIC': {
			// could use map but why carry on after list is found?
			for (let i=0; i< state.lists.length; i++) {
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
