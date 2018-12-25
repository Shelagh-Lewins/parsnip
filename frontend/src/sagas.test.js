import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { handlePublicTimer } from './sagas';

describe('sagas', () => {
	it('handles the handlePublicTimer happy path', () => {
		const iterator = handlePublicTimer({
			'type': 'TIMER_START',
			'payload': { 'id': 12 },
		});

		const expectedAction = {
			'type': 'TIMER_INCREMENT',
			'payload': { 'id': 12 },
		};

		expect(iterator.next().value).toEqual(call(delay, 1000));
		expect(iterator.next().value).toEqual(put(expectedAction));
		expect(iterator.next().value).toEqual(call(delay, 1000));
		expect(iterator.next().value).toEqual(put(expectedAction));
		expect(iterator.next().done).toBe(false);
	});

	it('handles the handlePublicTimer sad path', () => {
		const iterator = handlePublicTimer({
			'type': 'TIMER_STOP',
		});

		expect(iterator.next().done).toBe(true);
	});
});
