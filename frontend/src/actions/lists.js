function fetchListsStarted() {
	return {
		'type': 'FETCH_LISTS_STARTED'
	};
}

function fetchListsFailed(error) {
	return {
		'type': 'FETCH_LISTS_FAILED',
		'payload': {
			error,
		},
	};
}

export const fetchLists = () => {
	return dispatch => {
		dispatch(fetchListsStarted());

		let headers = { 'Content-Type': 'application/json' };
		return fetch('/api/lists/', { headers, })
			.then(res => res.json())
			.then(lists => {
				dispatch(fetchListsSucceeded(lists));
			})
			.catch(err => {
				dispatch(fetchListsFailed('Unable to load lists. The server says: ' + err.message));
			});
	};
};

export function fetchListsSucceeded(lists) {
	return {
		'type': 'FETCH_LISTS_SUCCEEDED',
		'payload': {
			lists
		}
	};
}

export const createList = (list) => {
	return dispatch => {
		let headers = { 'Content-Type': 'application/json' };
		let body = JSON.stringify(list);
		return fetch('/api/lists/', { headers, 'method': 'POST', body })
			.then(res => res.json())
			.then(list => {
				dispatch(createListSucceeded(list));
			});
	};
};

export function createListSucceeded(list) {
	return {
		'type': 'CREATE_LIST_SUCCEEDED',
		'payload': {
			list
		}
	};
}

export const deleteList = (id) => {
	return (dispatch, getState) => {
		let headers = { 'Content-Type': 'application/json' };

		return fetch(`/api/lists/${id}/`, { headers, 'method': 'DELETE' })
			.then(res => {
				dispatch(deleteListSucceeded(id));
			});
	};
};

export function deleteListSucceeded(id) {
	return {
		'type': 'DELETE_LIST_SUCCEEDED',
		'payload': {
			id
		}
	};
}

export const setListIsPublic = ({ id, is_public }) => {
	return (dispatch, getState) => {
		let headers = { 'Content-Type': 'application/json' };
		let body = JSON.stringify({ is_public });

		return fetch(`/api/lists/${id}/`, { headers, 'method': 'PATCH', body })
			.then(res => res.json())
			.then(res => { // res is the entire updated list object
				dispatch(setListIsPublicSucceeded(res));
			});
	};
};

export function setListIsPublicSucceeded({ id, is_public }) {
	console.log('is_public ', is_public);
	return {
		'type': 'SET_LIST_IS_PUBLIC_SUCCEEDED',
		'payload': {
			'id': id,
			is_public
		}
	};
}
