import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListsList from './ListsList';
import toJson from 'enzyme-to-json';

Enzyme.configure({ 'adapter': new Adapter() });

describe('the ListsList component', () => {
	it('should render an is_public', () => {
		const wrapper = shallow(<ListsList lists={[]} />);

		expect(wrapper.find('strong').text()).toEqual('Private');
	});

	it('should render a List component for each list', () => {
		const lists = [
			{ 'id': 'abc', 'title': 'a list', 'description': 'some stuff', 'is_public': true },
			{ 'id': 'def', 'title': 'another list', 'description': 'some more stuff', 'is_public': true },
		];

		const wrapper = shallow(<ListsList is_public="false" lists={lists} />);

		expect(wrapper.find('List').length).toEqual(2);
	});
});

describe('it should match the last snapshot without lists', () => {
	const wrapper = shallow(<ListsList is_public="false" lists={[]} />);
	expect(toJson(wrapper)).toMatchSnapshot();

	it('should match the last snapshot with lists', () => {
		const lists = [
			{ 'id': 'abc', 'title': 'a list', 'description': 'some stuff' },
			{ 'id': 'def', 'title': 'another list', 'description': 'some more stuff' },
		];

		const wrapper = shallow(<ListsList is_public="false" lists={lists} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
