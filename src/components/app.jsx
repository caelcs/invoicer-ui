import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Layout from './layout/layout';

const Home = () => {
	return (<div>Hello</div>)
};

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Home}/>
				</Route>
			</Router>
		);
	}
}

export default App;
