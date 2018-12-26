import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createItem, deleteItem } from './items/';
import { createItemSucceeded } from './items/';

jest.unmock('./items/');
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');

function mockFetch(data) {
	return jest.fn().mockImplementation(() =>
		Promise.resolve({
			'ok': true,
			'json': () => data,
		})
	);
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* eslint-disable no-unused-expressions */
describe('createItem', () => {
	it('works', () => {
		const bob = { 'foo': 'bar' };

		const expectedActions = [
			{ 'type': 'CREATE_ITEM_REQUESTED' },
			{ 'type': 'CREATE_ITEM_SUCCEEDED', 'payload': { 'item': bob } },
		];
		const store = mockStore({
			'items': {
				'things': [],
			}
		});

		window.fetch = mockFetch( bob );

		return store.dispatch(createItem({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
			expect(fetch).toHaveBeenCalled();
		});
	});
});

describe('deleteItem', () => {
	it('works', () => {
		const item = { 'itemId': 'abc', 'listId': 'def' };

		const expectedActions = [
			{ 'type': 'DELETE_ITEM_SUCCEEDED', 'payload': item },
		];
		const store = mockStore({
			'items': {
				'things': [],
			}
		});

		window.fetch = mockFetch( item );

		return store.dispatch(deleteItem(item)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
			expect(fetch).toHaveBeenCalled();
		});
	});
});
/* eslint-enable no-unused-expressions */

describe('action creators', () => {
	it('should handle successful item creation', () => {
		const item = { 'title': 'Pride and Prejudice', 'description': 'a good book', 'list': 'jkejlrkjl', 'order': 2 };
		const expectedAction = { 'type': 'CREATE_ITEM_SUCCEEDED', 'payload': { item } };
		expect(createItemSucceeded(item)).toEqual(expectedAction);
	});
});
