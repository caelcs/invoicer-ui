import React from 'react';
import SideBar from './sidebar';
import MainNavBar from './mainNavBar';
import MainContent from './mainContent';
import MainFooter from './mainFooter';

class Layout extends React.Component {
    render() {
        return (
					<div id="wrapper">
						<SideBar />
						<div className="main">
							<MainNavBar />
							<MainContent children={this.props.children} />
							<MainFooter />
						</div>
					</div>
        );
    }
}

export default Layout;
