// List of all lists

import React from 'react';
import List from './List';

const ListsList = props => {
	return (
		<div className="lists-list">
			<div className="lists-list-title">
				<strong>My lists</strong>
			</div>
			{props.lists.map(list => (
				<List
					key={list.id}
					list={list}
					onIsPublicChange={props.onIsPublicChange}
				/>
			))}
		</div>
	);
};

export default ListsList;
