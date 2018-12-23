import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsPage from './ListsPage';
import ItemsPage from './ItemsPage';
import Header from './Header';
import { lists, items } from '../actions/index.js';
import FlashMessage from './FlashMessage';
import { lists as listsReducer } from '../reducers';


class MyTopTens extends Component {
	componentDidMount() {
		this.props.dispatch(lists.fetchLists());
	}

	onCurrentListChange = e => {
		this.props.dispatch(lists.setCurrentListId(e.target.value));
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

	onCreateItem = (item) => {
		this.props.dispatch(items.createItem(item));
	}

	onDeleteItem = (item) => {
		this.props.dispatch(items.deleteItem(item));
	}

	render() {
		return (
			<div className="container">
				{this.props.error &&
					<FlashMessage message={this.props.error} />}
				<div className="main-content">
					<Header
						lists={this.props.lists}
						onCurrentListChange={this.onCurrentListChange}
					/>
					<ListsPage
						lists={this.props.lists}
						onSearch={this.onSearch}
						onCreateList={this.onCreateList}
						onIsPublicChange={this.onIsPublicChange}
						onDeleteList={this.onDeleteList}
						isLoading={this.props.isLoading}
					/>
					<ItemsPage
						items={this.props.items}
						onCreateItem={this.onCreateItem}
						currentListId={this.props.currentListId}
						onDeleteItem={this.onDeleteItem}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { isLoading, error } = state.lists;
	const { currentListId } = state.page;

	return {
		'lists': listsReducer.getGroupedAndFilteredLists(state),
		'items': listsReducer.getItemsByListId(state),
		'currentListId': currentListId,
		isLoading,
		error,
	};
}

export default connect(mapStateToProps)(MyTopTens);
