import React, { Component } from 'react';

class ManageProject extends Component {
    render() {
        return (
            <div className='manageproject'>
                <div className="container">
                    <h1 className='text-center'>Manage Project</h1>
                    <div className="row" style={{ paddingBottom: 10 }}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-default"> <span className='glyphicon glyphicon-plus' /> Add New</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Owner</th>
                                        <th>Type</th>
                                        <th>Total Area</th>
                                        <th>Start Year</th>
                                        <th>End Year</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>safa2421</td>
                                        <td>District 7 Land</td>
                                        <td>Khanh</td>
                                        <td>House</td>
                                        <td>7km</td>
                                        <td>1/1/2010</td>
                                        <td>1/1/2019</td>
                                        <td>
                                            <button type="button" className="btn btn-default">Edit</button>
                                            <button type="button" className="btn btn-default">Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>safa2421</td>
                                        <td>District 7 Land</td>
                                        <td>Khanh</td>
                                        <td>House</td>
                                        <td>7km</td>
                                        <td>1/1/2010</td>
                                        <td>1/1/2019</td>
                                        <td>
                                            <button type="button" className="btn btn-default">Edit</button>
                                            <button type="button" className="btn btn-default">Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ManageProject;