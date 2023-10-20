import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/link" className="nav-link">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="#" className="dropdown-item">Action</Link></li>
                <li><Link to="#" className="dropdown-item">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="#" className="dropdown-item">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link to="#" className="dropdown-item">Country</Link></li>
                <li><Link to="#" className="dropdown-item">Education</Link></li>
                <li><Link to="#" className="dropdown-item">Entertainment</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
