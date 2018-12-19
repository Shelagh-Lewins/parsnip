import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsPage from './ListsPage';
import { lists } from '../actions/index.js';
import FlashMessage from './FlashMessage';
import { getGroupedAndFilteredLists } from '../reducers';


class MyTopTens extends Component {
	componentDidMount() {
		this.props.dispatch(lists.fetchLists());
	}

	onSearch = searchTerm => {
		this.props.dispatch(lists.filterLists(searchTerm));
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
		return (
			<div className="container">
				{this.props.error &&
					<FlashMessage message={this.props.error} />}
				<div className="main-content">
					<ListsPage
						lists={this.props.lists}
						onSearch={this.onSearch}
						onCreateList={this.onCreateList}
						onIsPublicChange={this.onIsPublicChange}
						onDeleteList={this.onDeleteList}
						isLoading={this.props.isLoading}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { isLoading, error } = state.lists;

	return {
		'lists': getGroupedAndFilteredLists(state),
		isLoading,
		error,
	};
}

export default connect(mapStateToProps)(MyTopTens);
