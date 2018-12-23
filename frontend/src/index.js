import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { lists, items, page } from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootReducer = (state = {}, action) => {
	return {
		'lists': lists.lists(state.lists, action),
		'items': items.items(state.items, action),
		'page': page.page(state.page, action),
	};
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
			<Provider store={store}><NextApp /></Provider>,
			document.getElementById('root')
		);
	});

	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers').default;
		store.replaceReducer(nextRootReducer);
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// basic recommended for React apps. Don't know if it should be enabled.
/*
if (module.hot) {
	module.hot.accept();
} */
