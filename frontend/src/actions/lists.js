
// return JSON if possible, otherwise throw error
function handleFetchErrors(res) {
	if (!res.ok) {
		throw Error (res.statusText);
	}
	return res.json();
}

export function fetchListsStarted(is_public) {
	return {
		'type': 'FETCH_LISTS_STARTED',
		'payload': { is_public }, // not sure what this is for yet, in book it is 'boards'
	};
}

function fetchListSucceeded(lists) {
	return {
		'type': 'FETCH_LISTS_SUCCEEDED',
		'payload': { lists },
	};
}


function fetchListsFailed(err) {
	return {
		'type': 'FETCH_LISTS_FAILED',
		'payload': err,
	};
}

export function fetchLists() {
	return (dispatch, getState) => {
		dispatch(fetchListsStarted());

		let headers = { 'Content-Type': 'application/json' };

		fetch('/api/lists/', { headers, })
			.then(handleFetchErrors)
			.then(res => dispatch(fetchListSucceeded(res)))
			.catch(err => dispatch(fetchListsFailed(err.message))); // book shows just function call, not dispatch, but that doesn't seem to work
	};
}

/////////////////////////////
/* export function fetchLists() {
	return {
		'type': 'FETCH_LISTS_STARTED'
	};
} */

export function filterLists(searchTerm) {
	return { 
		'type': 'FILTER_LISTS',
		'payload': { searchTerm },
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
