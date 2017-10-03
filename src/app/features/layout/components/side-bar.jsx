import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
          <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
  				    <h1 className="site-title">
                <a href="index.html">
                  <em className="fa fa-rocket"></em> Brand.name
                </a>
              </h1>
  				    <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">
                <em className="fa fa-bars"></em>
              </a>
      				<ul className="nav nav-pills flex-column sidebar-nav">
      					<li className="nav-item">
                  <a className="nav-link active" href="index.html">
                    <em className="fa fa-dashboard"></em> Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
      					<li className="nav-item">
                  <a className="nav-link" href="widgets.html">
                    <em className="fa fa-calendar-o"></em> Widgets
                  </a>
                </li>
      					<li className="nav-item">
                  <a className="nav-link" href="charts.html">
                    <em className="fa fa-bar-chart"></em> Charts
                  </a>
                </li>
      					<li className="nav-item">
                  <a className="nav-link" href="elements.html">
                    <em className="fa fa-hand-o-up"></em> UI Elements
                  </a>
                </li>
      					<li className="nav-item">
                  <a className="nav-link" href="cards.html">
                    <em className="fa fa-clone"></em> Cards
                  </a>
                </li>
      				</ul>
  				    <a href="#" className="logout-button">
                <em className="fa fa-power-off"></em> Signout
              </a>
        </nav>
      );
    }
}

export default SideBar;
