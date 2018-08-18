import React, { Component } from 'react';
import AddAdvertisement from '../Modal/AddAdvertisement';

class ManageProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <a 
                    className="btn btn-primary"
                    data-toggle="modal" data-target="#addAdvertisement"
                    ><span className="glyphicon glyphicon-plus"></span> New Advertisement</a>
                    </div>
                    <AddAdvertisement/>
                </div>
                <div className="row" style={{ paddingBottom: 10 }}>
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
        );
    }
}

export default ManageProduct;