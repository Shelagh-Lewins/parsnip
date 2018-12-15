// An individual list

import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'id': props.list.id,
			'title': props.list.title,
			'description': props.list.description,
			'isPublic': props.list.isPublic
		};
	}

	onIsPublicChange = (e) => {
		this.setState({ 'isPublic': e.target.value });
		console.log('id: ', this.state.id);
		this.props.onIsPublicChange({
			'id': this.state.id,
			'isPublic': e.target.value === 'public'
		});
	}

	render() {
		return (
			<div className="list">
				<div className="list-header">
					<div>{this.state.title}</div>
				</div>
				<hr />
				<div className="list-body">{this.state.description}</div>
				<div className="list-status">
					<select id="is-public" value={this.state.isPublic} onChange={this.onIsPublicChange}>
						<option value="private">Private</option>
						<option value="public">Public</option>
					</select>
				</div>
				Status: {this.state.isPublic}
			</div>
		);
	}
}

export default List;
