import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getADs, getAD } from './../../actions/adActions'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            imageUrl: '',
            area: '',
            numbedrooms: '',
            numfloors: '',
            direction: '',
            contactInfo: '',
            address: '',
            postDate: '',
            expiredDate: '',
            idUser: '',
            idProject: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        var editAD = nextProps.ad;
        this.setState({
            title: editAD.title,
            price: editAD.price,
            imageUrl: editAD.imageUrl,
            area: editAD.area,
            numbedrooms: editAD.numbedrooms,
            numfloors: editAD.numfloors,
            direction: editAD.direction,
            contactInfo: editAD.contactInfo,
            address: editAD.address,
            postDate: editAD.postDate,
            expiredDate: editAD.expiredDate,
            idUser: editAD.idUser,
            idProject: editAD.idProject
        })
    }
    componentWillMount() {
        this.props.getAD(this.props.match.params._id)
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    updateAD() {
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Edit Advertisement</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Price"
                                            name="price"
                                            value={this.state.price || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image url"
                                            name="imageUrl"
                                            value={this.state.imageUrl || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Area"
                                        name="area"
                                        value={this.state.area || ''}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Number of bedrooms</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Number of bedrooms"
                                            name="numbedrooms"
                                            value={this.state.numbedrooms || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Number of floors</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Number of floors"
                                        name="numfloors"
                                        value={this.state.numfloors || ''}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Direction</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Direction"
                                            name="direction"
                                            value={this.state.direction || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Contact Information</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Contact Information"
                                        name="contactInfo"
                                        value={this.state.contactInfo || ''}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                            name="address"
                                            value={this.state.address || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Post Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Post Date"
                                        name="postDate"
                                        value={this.state.postDate || ''}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Expire Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Expire Date"
                                            name="expiredDate"
                                            value={this.state.expiredDate || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>ID User</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="ID User"
                                        name="idUser"
                                        value={this.state.idUser || ''}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>ID Project</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="ID Project"
                                            name="idProject"
                                            value={this.state.idProject || ''}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <button
                                            style={{ marginRight: 10 }}
                                            type="button"
                                            onClick={this.updateAD.bind(this)}
                                            className="btn btn-success"
                                        >Update</button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                        >Cancel</button>
                                    </div>
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
        ad: state.ad
    }
}
export default connect(mapStateToProps, { getADs, getAD })(EditProduct);