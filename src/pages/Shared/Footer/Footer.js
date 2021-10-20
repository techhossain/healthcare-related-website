import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2021 GYM Zone</p>

        <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
          <a href="https://facebook.com"><i className="fab fa-facebook fa-2x px-2"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter fa-2x px-2"></i></a>
          <a href="https://pinterest.com"><i className="fab fa-pinterest fa-2x px-2"></i></a>
        </div>


        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/packages">Packages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;