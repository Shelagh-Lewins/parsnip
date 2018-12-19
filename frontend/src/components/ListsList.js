// List of all lists

import React from 'react';
import List from './List';

import { LIST_IS_PUBLIC_VALUES } from '../constants';
import { LIST_IS_PUBLIC_TEXTS } from '../constants';

const ListsList = props => {
	const index = LIST_IS_PUBLIC_VALUES.indexOf(props.is_public === 'true');
	const headerText = LIST_IS_PUBLIC_TEXTS[index];

	return (
		<div className="lists-list">
			<div className="lists-list-title">
				<strong>{headerText}</strong>
			</div>
			{props.lists.map(list => (
				<List
					key={list.id}
					list={list}
					onIsPublicChange={props.onIsPublicChange}
					onDeleteList={props.onDeleteList}
				/>
			))}
		</div>
	);
};

export default ListsList;
