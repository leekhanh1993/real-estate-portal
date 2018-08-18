import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Product from '../Product/Product';
import ManageProject from '../Project/ManageProject';

class RouterUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Product} />
                <Route path="/product" component={Product} />
                <Route path="/manageproject" component={ManageProject} />
            </div>
        );
    }
}

export default RouterUrl;