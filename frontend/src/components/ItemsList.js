import React from 'react';
import Item from './Item';

const ItemsList = props => {
	return (
		<div className="items-list">
			<div className="items-list-title">
				<strong>Items for list </strong>
			</div>
			{props.items.map(item => (
				<Item
					key={item.id}
					item={item}
					onDeleteItem={props.onDeleteItem}
					list={props.list}
				/>
			))}
		</div>
	);
};

export default ItemsList;
