import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Pokemon.webp';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Logo de pokeapi" />
          <span className="ms-2 text-primary">Pokedex</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Pokedex</Link>
            </li>
            <li className="nav-item">
              <Link to="/Trainers" className="nav-link">Trainers</Link>
            </li>
            <li className="nav-item">
              <Link to="/PokemonTeam" className="nav-link">Pokemon Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
