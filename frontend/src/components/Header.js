import React, { Component } from 'react';

import { LIST_IS_PUBLIC_VALUES } from '../constants';
import { LIST_IS_PUBLIC_TEXTS } from '../constants';

class Header extends Component {
	render() {
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

		// don't render select until default selection is available
		return (
			<div className="header">
				{this.props.currentListId && (
					<div className="list-select">
						List:
						<select onChange={this.props.onCurrentListChange} className="list=menu" value={this.props.currentListId}>
							{listOptions}
						</select>
					</div>
				)}
			</div>
		);
	};
}

export default Header;
