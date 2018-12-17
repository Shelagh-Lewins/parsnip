let _id = 1;
export function uniqueId() {
	console.log('id before ', _id);
	return _id++;
}

export const fetchLists = () => {
	return dispatch => {
		let headers = { 'Content-Type': 'application/json' };
		return fetch('/api/lists/', { headers, })
			.then(res => res.json())
			.then(lists => {
				dispatch(fetchListsSucceeded(lists));
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
// export function createList({ title, description }) {
	return dispatch => {
		let headers = { 'Content-Type': 'application/json' };
		list.id = uniqueId();
		list.is_public = false;
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

/* export function createList({ title, description }) {
	return {
		'type': 'CREATE_LIST',
		'payload': {
			'id': uniqueId(),
			title,
			description
		}
	};
} */

export function setListIsPublic({ id, is_public }) {
	return {
		'type': 'SET_LIST_IS_PUBLIC',
		'payload': {
			'id': id,
			is_public
		}
	};
}
