// Page to display list of lists

import React, { Component } from 'react';
import ListsList from './ListsList';

class ListsPage extends Component {
	renderListsList() {
		const { lists } = this.props;
		return <ListsList lists={lists} />;
	}

	render() {
		return (
			<div className="lists">
				{this.renderListsList()}
			</div>
		);
	}
}

export default ListsPage;
