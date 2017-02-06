import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MainLayout from './components/main_layout';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={MainLayout}>
					<IndexRoute component={BuildConfigContainer}/>
				</Route>
			</Router>
		);
	}
}

export default App;
