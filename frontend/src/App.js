import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MyTopTens from './components/MyTopTens';
import NotFound from './components/NotFound';
import './App.css';
import './App.scss';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MyTopTens} />
					<Route component={NotFound} />
				</Switch>
			 </BrowserRouter>
		);
	}
}

export default App;
