import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import ManageProject from '../Project/ManageProject';
import ManageProduct from '../Product/ManageProduct';
import EditProduct from '../Product/EditProduct';
import EditProject from '../Project/EditProject';
import HomePage from '../Homepage/HomePage';
<<<<<<< HEAD
import DetailPages from '../DetailPages/DetailPages';
=======
import TestForm from '../App/TestForm';
>>>>>>> 9633f295fc5adcbde7ec60c8efcb963c47907358


class RouterUrl extends Component {
    render() {
        var {idCurrentUser} = this.props;
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/product" component={Product} />
                    <Route path="/manageproduct" component={()=> <ManageProduct idCurrentUser={idCurrentUser}/>}/>
                    <Route path="/manageproject" component={ManageProject} />
                    <Route path="/edit/:_id" component={EditProduct} />
                    <Route path="/edit-project/:_id" component={EditProject} />
                    <Route path="/testform" component={TestForm} />
                    <Route path="/home" component={HomePage}/>
                    <Route path="/detail" component={DetailPages}/>
                    <Route component={HomePage}/>   
                </Switch>
            </div>
        );
    }
}

export default RouterUrl;