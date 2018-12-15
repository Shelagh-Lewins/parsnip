let _id = 1;
export function uniqueId() {
	return _id++;
}

export function createList({ title, description }) {
	return {
		'type': 'CREATE_LIST',
		'payload': {
			'id': uniqueId(),
			title,
			description
		}
	};
}

export function setListIsPublic({ id, isPublic }) {
	return {
		'type': 'SET_LIST_IS_PUBLIC',
		'payload': {
			'id': id,
			isPublic
		}
	};
}
