import React from 'react';
import SideBar from './side-bar';
import MainContent from './main-content';

class Layout extends React.Component {
    render() {
        return (
          <div className="container-fluid" id="wrapper">
        		<div className="row">
        			<SideBar />
              <MainContent>
                hello
              </MainContent>
        		</div>
        	</div>
        );
    }
}

export default Layout;
