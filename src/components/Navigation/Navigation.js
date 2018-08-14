import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <NavLink
                            to="/"
                            ><a className="navbar-brand">LK Company</a></NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li ><NavLink
                                to='/product'
                                >Product</NavLink></li>
                                <li><NavLink
                                to='/manageproject'
                                >Manage Project</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a style={{cursor: 'pointer'}}><span className="glyphicon glyphicon-user" /> User Control</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;