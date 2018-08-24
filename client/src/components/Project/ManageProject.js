import React, { Component } from 'react';
import AddProject from '../Modal/AddProject';
import { connect } from 'react-redux'
import { addPRO, getPROs } from './../../actions/proActions'

class ManageProject extends Component {
    componentDidMount() {
        this.props.getPROs();
    }
    addNewPro(newPRO) {
        this.props.addPRO(newPRO)
    }
    render() {
        var projects = this.props.projects.pros;
        console.log(this.props.projects.pros)
        var listAllPros = projects.map((pro, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{pro.name}</td>
                <td>{pro.owner}</td>
                <td>{pro.typePro}</td>
                <td>{pro.totalArea}</td>
                <td>{pro.startYear}</td>
                <td>{pro.endYear}</td>
                <td>
                    <button type="button" className="btn btn-default">Edit</button>
                    <button type="button" className="btn btn-default">Remove</button>
                </td>
            </tr>
        })
        return (
            <div className='manageproject'>
                <div className="container">
                    <h1 className='text-center'>Manage Project</h1>
                    <div className="row" style={{ paddingBottom: 10 }}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button
                            data-toggle="modal" 
                            data-target="#addProject" 
                            type="button" 
                            className="btn btn-default"
                            ><span className='glyphicon glyphicon-plus' /> Add New Project</button>
                            <AddProject addNewPro={(newPRO) => this.addNewPro(newPRO)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
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
                                    {listAllPros}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.pros
    }
}
export default connect(mapStateToProps, { getPROs, addPRO })(ManageProject);