// An individual list

import React from 'react';
// Note how the isPublic is updated without making this into a React Component with state.
// By using props to populate the UI, we enable time travel and a direct connection with the store.

const ISPUBLIC_VALUES = [
	'Public',
	'Private'
];

const List = props => {
	let id=`select-${props.list.id}`;
	return (
		<div className="list">
			<div className="list-header">
				<div>{props.list.title}</div>
			</div>
			<hr />
			<div className="list-body">{props.list.description}</div>
			<div className="list-status">
				<select value={props.list.isPublic} onChange={onIsPublicChange} id={id}>
					{ISPUBLIC_VALUES.map(isPublic => (
						<option key={isPublic} value={isPublic}>{isPublic}</option>
					))}
				</select>
			</div>
			Status: {props.list.isPublic}
		</div>
	);

	function onIsPublicChange(e) {
		props.onIsPublicChange({ 'id': props.list.id, 'isPublic': e.target.value });
	}
};

export default List;
