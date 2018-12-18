import { put, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
	yield takeLatest('FETCH_LISTS_STARTED', fetchLists);
}

function* fetchLists() {
	let headers = { 'Content-Type': 'application/json' };
	try {
		const res = yield fetch('/api/lists/', { headers, })
			.then(res => res.json());

		yield put({
			'type': 'FETCH_LISTS_SUCCEEDED',
			'payload': { 'lists': res }
		});
	} catch (e) {
		yield put({
			'type': 'FETCH_LISTS_FAILED',
			'payload': { 'error': e.message }
		});
	}
}
