import { createSelector } from 'reselect';
import { LIST_IS_PUBLIC_VALUES } from '../constants';

var updeep = require('updeep');

// this is initial state of lists and the list loading states
const initialState = {
	'isLoading': false,
	'error': null,
	'things': [],
};

// 'state' here is global state
const getLists = state => {
	return state.lists.things;
};
const getSearchTerm = state => {
	return state.page.searchTerm;
};

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

// state here is the substate state.lists
// the book uses 'items' for the list of things i.e. lists. items
// as 'items' for us is a specific thing, we need another name for the set of entities to be displayed i.e. the lists themselves
// so those are globalState.lists.things
// i.e. state.things here
export function lists(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_LISTS_STARTED': {
			return updeep({ 'isLoading': true }, state);
		}

		case 'FETCH_LISTS_FAILED': {
			return updeep({ 'isLoading': false, 'error': action.payload }, state);
		}

		case 'FETCH_LISTS_SUCCEEDED': {
			function addLists() {
				return [].concat(action.payload.lists);
			}

			return updeep({ 'things': addLists, 'isLoading': false }, state); // updeep calls  addList with the lists object as argument. This appends action.payload to an empty array, replacing any previous lists
		}

		case 'CREATE_LIST_SUCCEEDED': {
			function addList(things) {
				return [].concat(things, action.payload.list);
			}

			return updeep({ 'things': addList }, state); // updeep calls  addList with the things object as argument. So this appends action.payload to state.things.
		}

		case 'DELETE_LIST_SUCCEEDED': {
			const index = state.things.findIndex((list) => list.id === action.payload.id);
			if (index !== -1) {
				function deleteList(things) {
					let newArray = [...things];
					newArray.splice(index, 1);
					return newArray;
				}
				
				return updeep({ 'things': deleteList }, state);
			}

			return state; // in case list was not found
		}

		case 'SET_LIST_IS_PUBLIC_SUCCEEDED': {
			const index = state.things.findIndex((list) => list.id === action.payload.id);

			if (index !== -1) {
				return updeep.updateIn(`things.${index}.is_public`, action.payload.is_public, state);
			}

			return state; // in case list was not found
		}

		case 'TIMER_INCREMENT': {
			for (let i=0; i<state.things.length; i++) {
				if (state.things[i].id === action.payload.id) {
					return updeep.updateIn(`things.${i}.timer`, state.things[i].timer + 1, state);
				}
			}
			return state; // in case list was not found
		}

		case 'CREATE_ITEM_SUCCEEDED': {
			const { title, description, list, order, id } = action.payload.item;

			const index = state.things.findIndex((list) => list.id === action.payload.item.list);

			const newArray = [].concat(state.things[index].items, { title, description, list, order, id });

			return updeep.updateIn( `things.${index}.items`, newArray, state);
		}

		case 'DELETE_ITEM_SUCCEEDED': {
			console.log('payload ', action.payload);
			const listIndex = state.things.findIndex((list) => list.id === action.payload.listId);

			const itemIndex = state.things[listIndex].items.findIndex((item) => item.id === action.payload.itemId);

			let items = [].concat(state.things[listIndex].items);
			console.log('items before ', items);
			items.splice(itemIndex, 1);

			return updeep.updateIn( `things.${listIndex}.items`, items, state);
		}

		default:
			return state;
	}
}

export const getItemsByListId = state => {
	if (!state.page.currentListId) {
		return [];
	}

	const currentList = state.lists.things.find(
		list => list.id === state.page.currentListId,
	);
	return currentList.items;
};
