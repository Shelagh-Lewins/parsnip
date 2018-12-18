import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import listsReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = (state = {}, action) => {
	return {
		'lists': listsReducer(state.lists, action)
	};
};

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
	// applyMiddleware(...middleware),
	// other store enhancers if any
));

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
