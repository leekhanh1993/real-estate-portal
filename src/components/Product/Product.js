import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Filter By</h3>
                        </div>
                        <div className="panel-body">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#area">Area</a>
                                        </h4>
                                    </div>
                                    <div id="area" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item"> <a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#bedroom">Bedrooms</a>
                                        </h4>
                                    </div>
                                    <div id="bedroom" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#floor">Floors</a>
                                        </h4>
                                    </div>
                                    <div id="floor" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#direction">Driection</a>
                                        </h4>
                                    </div>
                                    <div id="direction" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href="#price">Price</a>
                                        </h4>
                                    </div>
                                    <div id="price" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                            <li className="list-group-item"><a>One</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="row" style={{paddingBottom: 10}}>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default">Search</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="thumbnail">
                                <img src="https://via.placeholder.com/350x350" />
                                <div className="caption">
                                    <h3>Selling room in distrcit 7</h3>
                                    <p>Area: District 7</p>
                                    <p>Number of bedrooms: 2</p>
                                    <p>Number of floors: 2</p>
                                    <p>Price: 5000$</p>
                                    <p>
                                        <a className="btn btn-primary">Detail</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="thumbnail">
                                <img src="https://via.placeholder.com/350x350" />
                                <div className="caption">
                                    <h3>Selling room in distrcit 2</h3>
                                    <p>Area: District 7</p>
                                    <p>Number of bedrooms: 2</p>
                                    <p>Number of floors: 2</p>
                                    <p>Price: 5000$</p>
                                    <p>
                                        <a className="btn btn-primary">Detail</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="thumbnail">
                                <img src="https://via.placeholder.com/350x350" />
                                <div className="caption">
                                    <h3>Selling room in distrcit 4</h3>
                                    <p>Area: District 7</p>
                                    <p>Number of bedrooms: 2</p>
                                    <p>Number of floors: 2</p>
                                    <p>Price: 5000$</p>
                                    <p>
                                        <a className="btn btn-primary">Detail</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="thumbnail">
                                <img src="https://via.placeholder.com/350x350" />
                                <div className="caption">
                                    <h3>Selling room in distrcit 1</h3>
                                    <p>Area: District 7</p>
                                    <p>Number of bedrooms: 2</p>
                                    <p>Number of floors: 2</p>
                                    <p>Price: 5000$</p>
                                    <p>
                                        <a className="btn btn-primary">Detail</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;