import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <button
      className="navbar-toggler order-lg-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample07"
      aria-controls="navbarsExample07"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse order-lg-1" id="navbarsExample07">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item gap-2">
          <Link to="/" className="nav-link text-white">Inicio</Link>
        </li>
        <li className="nav-item gap-2">
          <Link to="/appointment-list" className="nav-link text-white">Listar Agendamentos</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link text-white">Novo Agendamento</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Navbar;
