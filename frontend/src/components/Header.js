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

		return (
			<div className="list-select">
				List:
				<select onChange={this.props.onCurrentListChange} className="list=menu">
					{listOptions}
				</select>
			</div>
		);
	};
}

export default Header;
