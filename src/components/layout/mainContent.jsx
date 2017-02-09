import React from 'react';

class MainContent extends React.Component {
    render() {
        return (
					<div className="main-content">
						<div className="container-fluid">
							{this.props.children}
						</div>
					</div>
        );
    }
}

export default MainContent;
