import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsPage from './components/ListsPage';
import './App.css';
import './App.scss';
import { createList, setListIsPublic } from './actions';

class App extends Component {
	onCreateList = ({ title, description }) => {
		this.props.dispatch(createList({ title, description }));
	}

	onIsPublicChange = ({ id, isPublic }) => {
		this.props.dispatch(setListIsPublic({ id, isPublic }));
	}

	render() {
		return (
			<div className="main-content">
				<ListsPage
					lists={this.props.lists}
					onCreateList={this.onCreateList}
					onIsPublicChange={this.onIsPublicChange}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		'lists': state.lists
	};
}

export default connect(mapStateToProps)(App);
