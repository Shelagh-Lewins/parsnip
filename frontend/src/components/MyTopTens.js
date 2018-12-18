import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsPage from './ListsPage';
import { lists } from '../actions/index.js';


class MyTopTens extends Component {
	componentDidMount() {
		this.props.dispatch(lists.fetchLists());
	}

	onCreateList = ({ title, description }) => {
		this.props.dispatch(lists.createList({ title, description }));
	}

	onIsPublicChange = ({ id, is_public }) => {
		this.props.dispatch(lists.setListIsPublic({ id, is_public }));
	}

	onDeleteList =  (id) => {
		this.props.dispatch(lists.deleteList(id));
	}

	render() {
		console.log('MyTopTens. props.isLoading ', this.props.isLoading);
		return (
			<div className="main-content">
				<ListsPage
					lists={this.props.lists}
					onCreateList={this.onCreateList}
					onIsPublicChange={this.onIsPublicChange}
					onDeleteList={this.onDeleteList}
					isLoading={this.props.isLoading}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// return state.lists; // this seems to work and is much simpler. I'm not sure why this isn't the recommended form?
	const { lists, isLoading } = state.lists;
	return {
		lists,
		isLoading
		// 'lists': state.lists.lists
	};
}

export default connect(mapStateToProps)(MyTopTens);
