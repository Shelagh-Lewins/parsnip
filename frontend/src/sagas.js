import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
	yield takeLatest('FETCH_LISTS_STARTED', fetchLists);
	yield takeEvery('TIMER_STARTED', handlePublicTimer);
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

function* handlePublicTimer({ payload }) {
	while (true) {
		yield call(delay, 1000);
		yield put({
			'type': 'TIMER_INCREMENT',
			'payload': { 'id': payload.id },
		});
	}
}

