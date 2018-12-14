// An individual list

import React from 'react';

const List = props => {	
	return (
		<div className="list">
			<div className="list-header">
				<div>{props.list.title}</div>
			</div>
			<hr />
			<div className="list-body">{props.list.description}</div>
		</div>
	);
};

export default List;
