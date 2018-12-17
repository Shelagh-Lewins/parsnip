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
		return (
			<div className="main-content">
				<ListsPage
					lists={this.props.lists}
					onCreateList={this.onCreateList}
					onIsPublicChange={this.onIsPublicChange}
					onDeleteList={this.onDeleteList}
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

export default connect(mapStateToProps)(MyTopTens);
