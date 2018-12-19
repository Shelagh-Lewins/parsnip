import { channel, delay } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
	yield takeLatest('FETCH_LISTS_STARTED', fetchLists);
	yield takeLatestById(['TIMER_START', 'TIMER_STOP'], handlePublicTimer);
}


function* takeLatestById(actionType, saga) {
	const channelsMap = {};

	while (true) {
		const action = yield take(actionType);
		const { id } = action.payload;

		if (!channelsMap[id]) {
			channelsMap[id] = channel();
			yield takeLatest(channelsMap[id], saga);
		}

		yield put(channelsMap[id], action);
	}
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

function* handlePublicTimer({ payload, type }) {
	if (type === 'TIMER_START') {
		while (true) {
			yield call(delay, 1000);
			yield put({
				'type': 'TIMER_INCREMENT',
				'payload': { 'id': payload.id },
			});
		}
	}
}

