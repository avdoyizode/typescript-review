import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Eduate
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                Add Employees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/view">
                View
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
