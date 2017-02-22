import React from 'react';
import user from '../../../../assets/img/user.png';

class MainNavBar extends React.Component {
    render() {
        return (
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<div className="navbar-btn">
								<button type="button" className="btn-toggle-fullwidth"><i className="fa fa-arrow-circle-o-left"></i></button>
							</div>
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu">
									<span className="sr-only">Toggle Navigation</span>
									<i className="fa fa-bars icon-nav"></i>
								</button>
							</div>
							<div id="navbar-menu" className="navbar-collapse collapse">
								<form className="navbar-form navbar-left hidden-xs">
									<div className="input-group">
										<input type="text" value="" className="form-control" placeholder="Search dashboard..."/>
											<span className="input-group-btn"><button type="button" className="btn btn-primary">Go</button></span>
									</div>
								</form>
								<ul className="nav navbar-nav navbar-right">
									<li className="dropdown">
										<a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
											<i className="fa fa-bell-o"></i>
											<span className="badge bg-danger">5</span>
										</a>
										<ul className="dropdown-menu notifications">
											<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</a></li>
											<li><a href="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
											<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</a></li>
											<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
											<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</a></li>
											<li><a href="#" className="more">See all notifications</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-question-circle-o"></i> <span>Help</span> <i className="icon-submenu fa fa-angle-down"></i></a>
										<ul className="dropdown-menu">
											<li><a href="#">Basic Use</a></li>
											<li><a href="#">Working With Data</a></li>
											<li><a href="#">Security</a></li>
											<li><a href="#">Troubleshooting</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src={user} className="img-circle" alt="Avatar"/> <span>Samuel</span> <i className="icon-submenu fa fa-angle-down"></i></a>
										<ul className="dropdown-menu">
											<li><a href="#"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
											<li><a href="#"><i className="lnr lnr-envelope"></i> <span>Message</span></a></li>
											<li><a href="#"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
											<li><a href="#"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</nav>
        );
    }
}

export default MainNavBar;
