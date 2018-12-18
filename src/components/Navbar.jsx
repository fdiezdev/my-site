import React, { Component } from 'react';
import Logo from '../routes/img/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src={Logo} width="40" height="40" class="d-inline-block align-top" alt="" />
            &nbsp;Francisco Diez
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item active">
                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicios">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar;