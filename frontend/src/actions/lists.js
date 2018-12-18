import { CALL_API } from '../middleware/api';

export const FETCH_LISTS_STARTED = 'FETCH_LISTS_STARTED';
export const FETCH_LISTS_SUCCEEDED = 'FETCH_LISTS_SUCCEEDED';
export const FETCH_LISTS_FAILED = 'FETCH_LISTS_FAILED';

export function fetchLists() {
	return {
		[CALL_API]: {
			'types': [FETCH_LISTS_STARTED, FETCH_LISTS_SUCCEEDED, FETCH_LISTS_FAILED],
			'endpoint': 'lists/',
		}
	};
}

export const CREATE_LIST_STARTED = 'CREATE_LIST_STARTED';
export const CREATE_LIST_SUCCEEDED = 'CREATE_LIST_SUCCEEDED';
export const CREATE_LIST_FAILED = 'CREATE_LIST_FAILED';

export function createList(list) {
	let body = JSON.stringify(list);

	return {
		[CALL_API]: {
			'types': [CREATE_LIST_STARTED, CREATE_LIST_SUCCEEDED, CREATE_LIST_FAILED],
			'endpoint': 'lists/',
			'method': 'POST',
			body
		}
	};
}

// The meta data is no longer passed on to the analytics middleware
// it would be another exercise to implement that
/*
export function createListSucceeded(list) {
	return {
		'type': 'CREATE_LIST_SUCCEEDED',
		'payload': {
			list
		},
		'meta': {
			'analytics': {
				'event': 'create_list',
				'data': {
					'id': list.id,
				},
			},
		},
	};
} */

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
	return {
		'type': 'SET_LIST_IS_PUBLIC_SUCCEEDED',
		'payload': {
			'id': id,
			is_public
		}
	};
}
