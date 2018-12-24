// actions for items
export const createItem = item => dispatch => {
	dispatch(createItemRequested());

	let headers = { 'Content-Type': 'application/json' };
	let body = JSON.stringify(item);
	return fetch('/api/items/', { headers, 'method': 'POST', body })
		.then(res => res.json())
		.then((item) => dispatch(createItemSucceeded(item)));
};

export function createItemRequested() {
	return {
		'type': 'CREATE_ITEM_REQUESTED',
	};
}

export function createItemSucceeded(item) {
	return {
		'type': 'CREATE_ITEM_SUCCEEDED',
		'payload': {
			item
		}
	};
}

export const deleteItem = ({ itemId, listId }) => {
	return (dispatch, getState) => {
		let headers = { 'Content-Type': 'application/json' };

		return fetch(`/api/items/${itemId}/`, { headers, 'method': 'DELETE' })
			.then(res => {
				dispatch(deleteItemSucceeded({ itemId, listId }));
			});
	};
};

export function deleteItemSucceeded({ itemId, listId }) {
	return {
		'type': 'DELETE_ITEM_SUCCEEDED',
		'payload': {
			itemId,
			listId
		}
	};
}

