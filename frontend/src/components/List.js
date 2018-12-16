// An individual list

import React from 'react';
// Note how the isPublic is updated without making this into a React Component with state.
// By using props to populate the UI, we enable time travel and a direct connection with the store.

const ISPUBLIC_VALUES = [
	'Private',
	'Public',
];

const List = props => {
	let id=`select-${props.list.id}`;
	let value = props.list.isPublic ? 'Public' : 'Private';

	return (
		<div className="list">
			<div className="list-header">
				<div>{props.list.title}</div>
			</div>
			<hr />
			<div className="list-body">{props.list.description}</div>
			<div className="list-status">
				<select value={value} onChange={onIsPublicChange} id={id}>
					{ISPUBLIC_VALUES.map(isPublic => (
						<option key={isPublic} value={isPublic}>{isPublic}</option>
					))}
				</select>
			</div>
		</div>
	);

	function onIsPublicChange(e) {
		// map from select options to true / false
		const value = e.target.value === 'Public' ? true : false;
		props.onIsPublicChange({ 'id': props.list.id, 'isPublic': value });
	}
};

export default List;
