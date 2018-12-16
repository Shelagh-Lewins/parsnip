// Page to display list of lists

import React, { Component } from 'react';
import ListsList from './ListsList';

class ListsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'showNewCardForm': false,
			'title': '',
			'description': ''
		};
	}

	onTitleChange = (e) => {
		this.setState({ 'title': e.target.value });
	}

	onDescriptionChange = (e) => {
		this.setState({ 'description': e.target.value });
	}

	resetForm() {
		this.setState({
			'showNewCardForm': false,
			'title': '',
			'description': ''
		});
	}

	onCreateList = (e) => {
		e.preventDefault();
		this.props.onCreateList({
			'title': this.state.title,
			'description': this.state.description
		});
		this.resetForm();
	}

	toggleForm = () => {
		this.setState({ 'showNewCardForm': !this.state.showNewCardForm });
	}

	renderListsList() {
		const { lists } = this.props;
		return <ListsList
			lists={lists}
			onIsPublicChange={this.props.onIsPublicChange}
		/>;
	}

	render() {
		return (
			<div className="lists-list">
				<div className="lists-list-header">
					<button
						className="button button-default"
						onClick={this.toggleForm}
					>
					+ New list</button>
				</div>
				{this.state.showNewCardForm && (
					<form className="lists-list-form" onSubmit={this.onCreateList}>
						<input
							className="full-width-input"
							onChange={this.onTitleChange}
							value={this.state.title}
							type="text"
							placeholder="title"
						/>
						<input
							className="full-width-input"
							onChange={this.onDescriptionChange}
							value={this.state.description}
							type="text"
							placeholder="description"
						/>
						<button
							className="button"
							type="submit"
						>
								Save
						</button>
					</form>
				)}
				<div className="lists">
					{this.renderListsList()}
				</div>
			</div>
		);
	}
}

export default ListsPage;
