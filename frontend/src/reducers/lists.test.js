import { lists, getLists, getSearchTerm, getFilteredLists } from './index.js/';
import cloneDeep from 'lodash/cloneDeep';

describe('the lists reducer', () => {
	const initialState = {
		'things': {},
		'isLoading': false,
		'error': null,
	};

	it('should return the initialState', () => {
		expect(lists.lists(undefined, {})).toEqual(initialState);
	});

	it('should handle the FETCH_LISTS_STARTED ACTION', () => {
		const action = { 'type': 'FETCH_LISTS_STARTED' };
		const expectedState = { ...initialState, 'isLoading': true };

		expect (lists.lists(initialState, action)).toEqual(expectedState);
	});

	it('should handle the RECEIVE_ENTITIES action', () => {
		const listsList = {
			'lists': { 'id': 'abc', 'title': 'test the reducer', 'description': 'very meta' },
		};

		const action = {
			'type': 'RECEIVE_ENTITIES',
			'payload': { 'entities': listsList },
		};
		const expectedState = { ...initialState, 'things': listsList.lists };

		expect(lists.lists(initialState, action)).toEqual(expectedState);
	});
});

describe('lists selectors', () => {
	const state = {
		'lists': {
			'things': [
				{ 'id': 'abc', 'title': 'test the reducer', 'description': 'very meta' },
				{ 'id': 'abc', 'title': 'another list', 'description': 'even more meta' }
			],
			'isLoading': false,
			'error': null,
		},
		'page': {
			'searchTerm': 'red',
		}
	};

	afterEach(() => {
		lists.getFilteredLists.resetRecomputations();
	});

	it('should retrieve lists from the getLists selector', () => {
		expect(lists.getLists(state)).toEqual(state.lists.things);
	});

	it('should retrieve the searchTerm from the getSearchTerm selector', () => {
		expect(lists.getSearchTerm(state)).toEqual(state.page.searchTerm);
	});

	it('should return lists from teh getFilteredLists selector', () => {
		const expectedLists = [
			{ 'id': 'abc', 'title': 'test the reducer', 'description': 'very meta' }
		];

		expect(lists.getFilteredLists(state)).toEqual(expectedLists);
	});

	it('should minimally recompute the state when getFilteredLists is called', () => {
		const similarSearch = cloneDeep(state);
		similarSearch.lists.searchTerm = 'redu';

		const uniqueSearch = cloneDeep(state);
		uniqueSearch.lists.searchTerm = 'selec';

		expect(lists.getFilteredLists.recomputations()).toEqual(0);
		lists.getFilteredLists(state);
		lists.getFilteredLists(similarSearch);
		expect(lists.getFilteredLists.recomputations()).toEqual(1);
		lists.getFilteredLists(uniqueSearch);
		expect(lists.getFilteredLists.recomputations()).toEqual(2);
	});
});
