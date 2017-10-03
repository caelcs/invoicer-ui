import React from 'react';
import SideBar from './side-bar';
import MainNavBar from './main-nav-bar';
import MainContent from './main-content';
import MainFooter from './main-footer';

class Layout extends React.Component {
    render() {
        return (
          <div className="container-fluid" id="wrapper">
        		<div className="row">
        			<SideBar />
              <MainContent>
                {this.props.children}
              </MainContent>
        		</div>
        	</div>
        );
    }
}

export default Layout;
