import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import ManageProject from '../Project/ManageProject';
import ManageProduct from '../Product/ManageProduct';
import EditProduct from '../Product/EditProduct';
import EditProject from '../Project/EditProject';

class RouterUrl extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Product} />
                    <Route path="/product" component={Product} />
                    <Route path="/manageproduct" component={ManageProduct} />
                    <Route path="/manageproject" component={ManageProject} />
                    <Route path="/edit/:_id" component={EditProduct} />
                    <Route path="/edit-project/:_id" component={EditProject} />
                    <Route component={Product} />
                </Switch>
            </div>
        );
    }
}

export default RouterUrl;