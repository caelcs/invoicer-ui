import React from 'react';
import MainContentHeader from './main-content-header';

class MainContent extends React.Component {
    render() {
        return (
          <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
    				<MainContentHeader />

    				<section className="row">
    					<div className="col-sm-12">
    		          {this.props.children}
    					</div>
    				</section>
    			</main>
        );
    }
}

export default MainContent;
