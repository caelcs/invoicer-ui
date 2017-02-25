import React from 'react';
import SideBar from './side-bar';
import MainNavBar from './main-nav-bar';
import MainContent from './main-content';
import MainFooter from './main-footer';

class Layout extends React.Component {
    render() {
        return (
					<div id="wrapper">
						<SideBar />
						<div className="main">
							<MainNavBar />
							<MainContent>
                {this.props.children}
              </MainContent>
							<MainFooter />
						</div>
					</div>
        );
    }
}

export default Layout;
