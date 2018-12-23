// An individual item

import React from 'react';

const Item = props => {
	return (
		<div className="item">
			<div className="item-header">
				<div>{props.item.order}</div>
				<div>{props.item.title}</div>
				<div>{props.item.description}</div>
			</div>
			<hr />
			<button onClick={onDeleteItem}>delete</button>
		</div>
	);

	function onDeleteItem(e) {
		console.log('currentListId ', props.list);
		props.onDeleteItem({
			'itemId': props.item.id,
			'listId': props.list,
		});
	}
};

export default Item;
