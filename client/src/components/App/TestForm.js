import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from './../../actions/userActions'

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: {
                value: '',
                isValid: true,
                message: ''
            },
            displayName: {
                value: '',
                isValid: true,
                message: ''
            },
            password: {
                value: '',
                isValid: true,
                message: ''
            },
            confirmPassword: {
                value: '',
                isValid: true,
                message: ''
            }
        }
    }

    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            ...this.state,
        })
    }
    clearForm() {
        this.setState({
            userName: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        })
    }
    createUser() {
        var { userName, displayName, password, confirmPassword } = this.state;
        if (userName && displayName && password && confirmPassword && (password === confirmPassword)) {
            var newUser = {
                userName,
                displayName,
                password
            }
            this.props.addUser(newUser)
            alert('Add User Successful!!')
            this.clearForm();
        }
    }
    closeRegUser() {
        this.clearForm();
    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Test Form</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.createUser.bind(this)} className="form-horizontal">
                            <div className="form-group has-error">
                                <label className="col-sm-5 control-label">User Name</label>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <span className="help-block">Wrong Name</span>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-5 control-label">Display Name</label>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Display Name"
                                        name="displayName"
                                        value={this.state.displayName}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-5 control-label">Password</label>
                                <div className="col-sm-5">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-5 control-label">Confirm Password</label>
                                <div className="col-sm-5">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-5 col-sm-offset-5">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        style={{ marginRight: 10 }}
                                    >Create</button>
                                    <button
                                        type="button"
                                        onClick={this.closeRegUser.bind(this)}
                                        className="btn btn-danger"
                                    >Close</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addUser })(TestForm);