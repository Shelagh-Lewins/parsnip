import React, { Component } from 'react';
import ListsPage from './components/ListsPage';
import './App.css';
import './App.scss';

const mockLists = [
	{
		id: 1,
		title: 'Books',
		description: 'My favourite books'
	},
	{
		id: 2,
		title: 'People',
		description: 'My favourite people'
	}
];

class App extends Component {
	render() {
		return (
			<div className="main-content">
				<ListsPage lists={mockLists} />
			</div>
		);
	}
}

export default App;
