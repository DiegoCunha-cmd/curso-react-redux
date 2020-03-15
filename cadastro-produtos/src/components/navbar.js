import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" to="#">Produtos</a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                wfd-id="621"
            >
                <span className="navbar-toggler-icon" wfd-id="445"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01" wfd-id="444">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro-produtos">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/consulta-produtos">Consulta</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar