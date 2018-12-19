// function fetchListsStarted() {
export function fetchLists() {
	return {
		'type': 'FETCH_LISTS_STARTED'
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

				if (res.is_public) {
					dispatch(publicTimerStart(res.id));
				} else {
					dispatch(publicTimerStop(res.id));
				}
			});
	};
};

export function setListIsPublicSucceeded({ id, is_public }) {
	return {
		'type': 'SET_LIST_IS_PUBLIC_SUCCEEDED',
		'payload': {
			'id': id,
			is_public
		}
	};
}

function publicTimerStart(id) {
	return {
		'type': 'TIMER_START',
		'payload': { id },
	};
}

function publicTimerStop(id) {
	return {
		'type': 'TIMER_STOP',
		'payload': { id },
	};
}
