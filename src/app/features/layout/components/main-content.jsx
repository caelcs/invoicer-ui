import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import MainContentHeader from './main-content-header';
import Routes from './routes';

class MainContent extends React.Component {
    render() {
        return (
          <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
    				<MainContentHeader />
    				<section className="row">
    					<div className="col-sm-12">
                <Routes />
    					</div>
    				</section>
    			</main>
        );
    }
}

export default MainContent;
