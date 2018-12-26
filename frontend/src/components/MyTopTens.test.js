import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedMyTopTens, { MyTopTens } from './MyTopTens';
import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({
	'lists': {},
	'items': {},
	'page': {},
});

Enzyme.configure({ 'adapter': new Adapter() });

// It seems the book is in error. I found that in order to test even the unconnected component, it's necessary to provide a 'dispatch' method using 'spy'. The GitHub code uses this so I assume it's an ommission in the book.
describe('the MyTopTens component', () => {
	it('should render a FlashMessage component if there is an error', () => {
		const spy = jest.fn();
		const wrapper = shallow(<MyTopTens dispatch={spy} error="Boom!" />);
		// want to see what wrapper actually renders?
		// console.log('wrapper ', wrapper.debug());

		expect(wrapper.find('FlashMessage').exists()).toBe(true);
	});

	it('should dispatch fetchLists on mount', () => {
		const spy = jest.fn();
		const wrapper = shallow(<MyTopTens dispatch={spy} lists={[]} />);

		expect(spy).toHaveBeenCalled();
	});

	it('should fetch lists on mount', () => {
		const middlewares = [thunk];
		const initialState = ({
			'lists': {
				'things': {},
			},
			'items': {},
			'page': {},
			'error': null,
			'isLoading': false,
		});

		const mockStore = configureMockStore(middlewares)(initialState);
		const wrapper = mount(<Provider store={mockStore}><ConnectedMyTopTens /></Provider>);
		const expectedAction = { 'type': 'FETCH_LISTS_STARTED' };

		expect(mockStore.getActions()[0]).toEqual(expectedAction);
	});
});
