import React, { Component } from "react";

export default class Navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand offset-sm-1" href="/">
              Newz_Cafe
            </a>
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
            <div
              className="collapse navbar-collapse offset-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/">business</a></li>
                <li className="nav-item"><a className="nav-link" href="/">entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/">General</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Technology</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Contact Us </a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
