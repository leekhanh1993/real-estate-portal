import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RouterUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={product} />
                <Route path="/product" component={product} />
                <Route path="/topics" component={Topics} />
            </div>
        );
    }
}

export default RouterUrl;