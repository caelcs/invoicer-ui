import React from 'react';

const Home = () => {
	return (<div className="panel panel-headline">
		<div className="panel-heading">
			<h3 className="panel-title">Hello World</h3>
			<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
		</div>
		<div className="panel-body">
			<div className="row">
				<div className="col-md-3">
					who are you?
				</div>
			</div>
		</div>
	</div>)
};

class App extends React.Component {
	render() {
		return (<div></div>);
	}
}

export default App;
