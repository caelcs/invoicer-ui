import React from 'react';

class MainContentHeader extends React.Component {

  render() {
    return (
      <header className="page-header row justify-center">
        <div className="col-md-6 col-lg-8" >
          <h1 className="float-left text-center text-md-left">Dashboard</h1>
        </div>

        <div className="dropdown user-dropdown col-md-6 col-lg-4 text-center text-md-right">
          <a className="btn btn-stripped dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            <i className="fa fa-user fa-4x circle float-left profile-photo" aria-hidden="true"></i>

            <div className="username mt-1">
              <h4 className="mb-1">Username</h4>

              <h6 className="text-muted">Super Admin</h6>
            </div>
          </a>

          <div className="dropdown-menu dropdown-menu-right dropdown-menu-margin" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#"><em className="fa fa-user-circle mr-1"></em> View Profile</a>
            <a className="dropdown-item" href="#"><em className="fa fa-sliders mr-1"></em> Preferences</a>
            <a className="dropdown-item" href="#"><em className="fa fa-power-off mr-1"></em> Logout</a>
          </div>
        </div>

        <div className="clear"></div>
      </header>
    )
  }
}

export default MainContentHeader;
