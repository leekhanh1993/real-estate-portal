import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AddUser from '../Modal/AddUser';
import UserLogin from '../Modal/UserLogin';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ''
        }
    }

    setMainLogin(displayName, id, isLogIn) {
        this.props.setMainLogin(id, isLogIn);
        this.setState({
            displayName
        })
    }
    setLogOut() {
        window.location.reload();
    }
    render() {
        var controlUser;
        if (this.props.isLogIn) {
            controlUser = [<ul key="1" className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a
                        style={{ cursor: 'pointer' }}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <span className="glyphicon glyphicon-user" /> {this.state.displayName}</a>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}>Your Advertisements</NavLink></li>
                        <li><NavLink
                            onClick={this.setLogOut.bind(this)}
                            to="/product"
                            style={{ cursor: 'pointer' }}
                        ><span className="glyphicon glyphicon-log-out" /> Log out</NavLink>
                        </li>
                    </ul>
                </li>

            </ul>]
        } else {
            controlUser = [<ul key="1" className="nav navbar-nav navbar-right">
                <UserLogin setMainLogin={(displayName, id, isLogIn) => this.setMainLogin(displayName, id, isLogIn)} />
                <li>
                    <a
                        data-toggle="modal"
                        data-target='#userLogin'
                        id="openUserLogin"
                        style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-log-in" /> Login</a>
                </li>
            </ul>,
            <ul key="2" className="nav navbar-nav navbar-right">
                <AddUser />
                <li>
                    <a
                        id="openRegisterUser"
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
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;