import React, { Component } from 'react';

import { LIST_IS_PUBLIC_VALUES } from '../constants';
import { LIST_IS_PUBLIC_TEXTS } from '../constants';

class Header extends Component {
	render() {
		// console.log('props ', this.props);
		const listOptions = Object.keys(this.props.lists).map(is_public => {
			const listsByIsPublic = this.props.lists[is_public];
			const options = listsByIsPublic.map(list => {
				const index = LIST_IS_PUBLIC_VALUES.indexOf(is_public === 'true');
				return (
					<option key={list.id} value={list.id}>
						{list.title} ({LIST_IS_PUBLIC_TEXTS[index]})
					</option>
				);
			});

			return options;
		});

		// console.log('currentListId ', this.props.currentListId);

		let listTitle;
		let listIsPublic;

		Object.keys(this.props.lists).map(is_public => {
			const listsByIsPublic = this.props.lists[is_public];

			for (let i=0; i<listsByIsPublic.length; i++) {
				if (listsByIsPublic[i].id === this.props.currentListId) {
					listTitle = listsByIsPublic[i].title;
					listIsPublic = is_public;
					break;
				}
			}
		});

		// hacky code to set default value matching the addition of 'Public' or 'Private' to the option text. This is NOT how anything should be done in the real world.
		// TODO recheck default selection after refresh and make sure correct items are loaded.
		const index = LIST_IS_PUBLIC_VALUES.indexOf(listIsPublic === 'true');

		console.log('list name ', listTitle);

		const selected = `${listTitle} (${LIST_IS_PUBLIC_TEXTS[index]})`;
		console.log('selected ', selected);

		return (
			<div className="list-select">
				List:
				<select onChange={this.props.onCurrentListChange} className="list=menu" defaultValue={{ 'value': selected }}>
					{listOptions}
				</select>
			</div>
		);
	};
}

export default Header;
