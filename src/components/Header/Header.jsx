// Imports
import React from "react";
import "./Header.css";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

// Code
const Header = () => {
  const { loguedIn } = useAuth();

  return (
    <header className="header">
      <h1>MAB Estética</h1>

      {loguedIn && (
        <div className="container justify-content-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                      Inicio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/fichas" className="nav-link">
                      Fichas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/turnos"
                      className="nav-link disabled"
                      aria-disabled="true"
                    >
                      Turnos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/catalogo"
                      className="nav-link disabled"
                      aria-disabled="true"
                    >
                      Catálogo
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

// Export
export default Header;
