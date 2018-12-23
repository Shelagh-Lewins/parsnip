var updeep = require('updeep');

const initialState = {
	'things': [],
};
/*
export function items(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_ITEM_SUCCEEDED': {
			function addItem(things) {
				return [].concat(things, action.payload.item);
			}

			return updeep({ 'things': addItem }, state); // updeep calls  addItem with the things object as argument. So this appends action.payload to state.things.
		}

		default:
			return state;
	}
} */
