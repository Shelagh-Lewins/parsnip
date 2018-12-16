import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsPage from './ListsPage';
import { createList, setListIsPublic } from '../actions';


class MyTopTens extends Component {
	onCreateList = ({ title, description }) => {
		this.props.dispatch(createList({ title, description }));
	}

	onIsPublicChange = ({ id, is_public }) => {
		this.props.dispatch(setListIsPublic({ id, is_public }));
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

export default connect(mapStateToProps)(MyTopTens);
