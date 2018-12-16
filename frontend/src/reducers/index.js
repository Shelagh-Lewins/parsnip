import { uniqueId } from '../actions';

var updeep = require('updeep');

const mockLists = [
	{
		'id': uniqueId(),
		'title': 'Books',
		'description': 'My favourite books',
		'is_public': false
	},
	{
		'id': uniqueId(),
		'title': 'People',
		'description': 'My favourite people',
		'is_public': false
	}
];

export default function lists(state = { 'lists': mockLists }, action) {
	switch (action.type) {
		case 'CREATE_LIST': {
			function addList(lists) {
				return [].concat(lists, action.payload);
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
