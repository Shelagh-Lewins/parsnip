import { createSelector } from 'reselect';
import { LIST_IS_PUBLIC_VALUES } from '../constants';

var updeep = require('updeep');

const initialState = {
	'lists': [],
	'isloading': false,
	'error': null,
	'searchTerm': '',
};

const getLists = state => state.lists.lists;
const getSearchTerm = state => state.lists.searchTerm;

export const getFilteredLists = createSelector(
	[getLists, getSearchTerm],
	(lists, searchTerm) => {
		return lists.filter(list => {
			// if no search term, return every list
			if (searchTerm === '') {
				return list;
			}
			return list.title.match(new RegExp(searchTerm, 'i'));
		});
	}
);

export const getGroupedAndFilteredLists = createSelector(
	[getFilteredLists],
	lists => {
		const grouped = {};

		LIST_IS_PUBLIC_VALUES.forEach(is_public => {
			grouped[is_public] = lists.filter(list => list.is_public === is_public);
		});

		return grouped;
	}
);

export default function lists(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_LISTS_STARTED': {
			return updeep({ 'isLoading': true }, state);
		}

		case 'FETCH_LISTS_FAILED': {
			return updeep({ 'isLoading': false, 'error': action.payload.error }, state);
		}

		case 'FETCH_LISTS_SUCCEEDED': {
			function addLists() {
				return [].concat(action.payload.lists);
			}

			return updeep({ 'lists': addLists, 'isLoading': false }, state); // updeep calls  addList with the lists object as argument. This appends action.payload to an empty array, replacing any previous lists
		}

		case 'FILTER_LISTS': {
			return updeep({ 'searchTerm': action.payload.searchTerm }, state);
		}

		case 'CREATE_LIST_SUCCEEDED': {
			function addList(lists) {
				return [].concat(lists, action.payload.list);
			}

			return updeep({ 'lists': addList }, state); // updeep calls  addList with the lists object as argument. So this appends action.payload to state.lists.
		}

		case 'DELETE_LIST_SUCCEEDED': {
			const index = state.lists.findIndex((list) => list.id === action.payload.id);
			if (index !== -1) {
				function deleteList(lists) {
					let newArray = [...lists];
					newArray.splice(index, 1);
					return newArray;
				}
				
				return updeep({ 'lists': deleteList }, state);
			}

			return state; // in case list was not found
		}

		case 'SET_LIST_IS_PUBLIC_SUCCEEDED': {
			const index = state.lists.findIndex((list) => list.id === action.payload.id);

			if (index !== -1) {
				return updeep.updateIn(`lists.${index}.is_public`, action.payload.is_public, state);
			}

			return state; // in case list was not found
		}

		case 'TIMER_INCREMENT': {
			for (let i=0; i<state.lists.length; i++) {
				if (state.lists[i].id === action.payload.id) {
					return updeep.updateIn(`lists.${i}.timer`, state.lists[i].timer + 1, state);
				}
			}
			return state; // in case list was not found
		}

		default:
			return state;
	}
}
