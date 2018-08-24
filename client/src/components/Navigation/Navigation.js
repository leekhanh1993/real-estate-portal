import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AddUser from '../Modal/AddUser';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false
        }
    }
    setLogin() {
        this.setState({
            isLogIn: !this.state.isLogIn
        })
    }
    render() {
        var controlUser;
        if (this.state.isLogIn) {
            controlUser = [<ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a
                        style={{ cursor: 'pointer' }}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <span className="glyphicon glyphicon-user" /> Vo Tan Nhut Khanh</a>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}>Your Advertisements</NavLink></li>
                        <li><a
                            onClick={this.setLogin.bind(this)}
                            style={{ cursor: 'pointer' }}
                        ><span className="glyphicon glyphicon-log-out" /> Log out</a>
                        </li>
                    </ul>
                </li>

            </ul>]
        } else {
            controlUser = [<ul key="1" className="nav navbar-nav navbar-right">
                <li>
                    <a
                        onClick={this.setLogin.bind(this)}
                        style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-log-in" /> Login</a>
                </li>
            </ul>,
            <ul key="2" className="nav navbar-nav navbar-right">
            <AddUser/>
                <li>
                    <a 
                    data-toggle="modal" 
                    data-target="#addUser" 
                    style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-plus" /> Register</a>
                    </li>
            </ul>]
        }
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
                            <NavLink to="/" className="navbar-brand">LK Company</NavLink>
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
                            {controlUser}
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}><span className="glyphicon glyphicon-user" /> User Control</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}><span className="glyphicon glyphicon-log-in" /> Login</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}><span className="glyphicon glyphicon-plus" /> Register</NavLink></li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;