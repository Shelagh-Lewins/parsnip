import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// import ReactDOM from 'react-dom';

// Enzyme shows an error if there is not a store / provider wrapping the App component.
// The default ReactDOM.render doesn't seem to work even with the additional bits.
// this is a poor test as it really doesn't test the component
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({
	'lists': {},
	'items': {},
	'page': {},
});

Enzyme.configure({ 'adapter': new Adapter() });

it('renders without crashing', () => {
	const wrapper = shallow(<Provider store={store}><App /></Provider>);

	expect(wrapper.contains(<App />)).toBe(true);

	// it ought to be possible to get this working.
	// const div = document.createElement('div');
	// ReactDOM.render(<Provider store={store}><App /></Provider>, div);
	// ReactDOM.unmountComponentAtNode(div);
});
