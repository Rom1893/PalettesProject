import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {


    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Cat App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" aria-current="page" to="/cats">Home</NavLink>
                            </li>
                            {this.props.cats.map((m, i) => (
                                <li key={i} className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to={`/cats/${m.name}`} >{m.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav >
        )
    }
}

export default NavBar;
