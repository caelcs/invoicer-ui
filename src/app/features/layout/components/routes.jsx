import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import SignIn from '../../login/sign-in';

const Home = () => {
	return (<div className="panel panel-headline">
		<div className="panel-heading">
			<h3 className="panel-title">Home</h3>
			<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
		</div>
		<div className="panel-body">
			<div className="row">
				<div className="col-md-3">
					<SignIn />
				</div>
			</div>
		</div>
	</div>)
};

const About = () => {
	return (<div className="panel panel-headline">
		<div className="panel-heading">
			<h3 className="panel-title">About</h3>
			<p className="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
		</div>
		<div className="panel-body">
			<div className="row">
				<div className="col-md-3">
					who are you? About?
				</div>
			</div>
		</div>
	</div>)
};

class Routes extends React.Component {
    render() {
        return (
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
              </Switch>
            </div>
          </Router>
        );
    }
}

export default Routes;
