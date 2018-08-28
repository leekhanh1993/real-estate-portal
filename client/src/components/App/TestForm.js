import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, getUsers } from './../../actions/userActions'
import validator from 'validator'

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
        var newState = {
            ...this.state,
            [name]:{
                ...this.state[name],
                value
            }

        }
        this.setState(newState)
    }
    clearForm() {
        this.setState({
            userName: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        })
    }
    componentDidMount(){
        this.props.getUsers();
    }
    
    createUser(e) {
        e.preventDefault();
        var {userName, displayName, password, confirmPassword} = this.state;
        var {users} = this.props.users
        var availablUserName = false;
   
        //check User Name
        const checkUserName = (newUserName)=>{
            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                if(user.userName === newUserName){
                    availablUserName === true;
                }
            }
            if(validator.isEmpty){
                this.setState({
                    userName:{
                        ...userName,
                        isValid: false,
                        message: 'User can not be blanked!!!!'
                    }
                })
            }else if(availablUserName){
                this.setState({
                    userName:{
                        isValid: false,
                        message: 'You user name is avalable!!!!'
                    }
                }) 
            }else{
                return -1
            }
        }
        console.log(availablUserName)
        checkUserName(userName.value)

        // //check Display Name
        // const checkDisplayName = (newUserName)=>{
        //     var availablUserName = false;
        //     for (let index = 0; index < users.length; index++) {
        //         const user = users[index];
        //         if(user.userName === newUserName){
        //             availablUserName = true;
        //         }
        //     }
        //     if(validator.isEmpty){
        //         this.setState({
        //             userName:{
        //                 isValid: false,
        //                 message: 'User can not be blanked!!!!'
        //             }
        //         })
        //     }else if(availablUserName){
        //         this.setState({
        //             userName:{
        //                 isValid: false,
        //                 message: 'You user name is avalable!!!!'
        //             }
        //         }) 
        //     }else{
        //         return -1
        //     }
        // }
        // checkUserName(userName.value)

        

        
        // var { userName, displayName, password, confirmPassword } = this.state;
        // if (userName && displayName && password && confirmPassword && (password === confirmPassword)) {
        //     var newUser = {
        //         userName,
        //         displayName,
        //         password
        //     }
        //     this.props.addUser(newUser)
        //     alert('Add User Successful!!')
        //     this.clearForm();
        // }
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
                            <div className={this.state.userName.isValid ? "form-group" : "form-group has-error"}>
                                <label className="col-sm-5 control-label">User Name</label>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        name="userName"
                                        value={this.state.userName.value}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                {this.state.userName.message !== '' 
                                ? <div className="help-block"><span className="glyphicon glyphicon-remove"/> {this.state.userName.message}</div> 
                                : ''
                                }
                                
                            </div>
                            <div className={this.state.displayName.isValid ? "form-group" : "form-group has-error"}>
                                <label className="col-sm-5 control-label">Display Name</label>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Display Name"
                                        name="displayName"
                                        value={this.state.displayName.value}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <span className="help-block">{this.state.displayName.message}</span>
                            </div>
                            <div className={this.state.password.isValid ? "form-group" : "form-group has-error"}>
                                <label className="col-sm-5 control-label">Password</label>
                                <div className="col-sm-5">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password.value}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <span className="help-block">{this.state.password.message}</span>
                            </div>
                            <div className={this.state.confirmPassword.isValid ? "form-group" : "form-group has-error"}>
                                <label className="col-sm-5 control-label">Confirm Password</label>
                                <div className="col-sm-5">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword.value}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <span className="help-block">{this.state.confirmPassword.message}</span>
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
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser, getUsers })(TestForm);