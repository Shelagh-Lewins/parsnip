const API_BASE_URL = '/api/';

export const CALL_API = 'CALL_API';

// the error handling feels hacky but works. The book uses Axios so I had to adapt this for Django Rest Framework and the simple fetch.
function makeCall(endpoint, method = 'GET', body) {
	const url = `${API_BASE_URL}${endpoint}`;

	let headers = { 'Content-Type': 'application/json' };
	return fetch(url, { headers, method, body })
		.then(res => {
			console.log('res ', res);
			return res.json();
		})
		.then(resp => {
			return { 'payload': resp };
		})
		.catch(err => {
			return { 'error': err };
		});
}

const apiMiddleware = store => next => action => {
	const callApi = action[CALL_API];
	if (typeof callApi === 'undefined') {
		return next(action);
	}

	const [requestStartedType, successType, failureType] = callApi.types;
	next({ 'type': requestStartedType });

	return makeCall(callApi.endpoint, callApi.method, callApi.body).then(
		response => {
			if (response.payload) {
				return next({
					'type': successType,
					'payload': response.payload,
				});
			} else if (response.error) {
				return next({
					'type': failureType,
					'error': response.error.message,
				});
			}
		}
	);
};

export default apiMiddleware;
