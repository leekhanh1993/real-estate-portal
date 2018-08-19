import React, { Component } from 'react';
import AddAdvertisement from '../Modal/AddAdvertisement';
import uuid from 'uuid'
import {connect} from 'react-redux'
import {getADs, deleteAD, addAD} from './../../actions/adActions'


class ManageProduct extends Component {
    
    componentDidMount(){
        this.props.getADs()
    }
    addNewAd(ad) {
        console.log(ad)
        this.props.addAD(ad)
        // this.setState((state = this.state) => ({
        //     ads: [...state.ads, {
        //         id: uuid(),
        //         title: ad.title,
        //         price: ad.price,
        //         imageUrl: ad.imageUrl,
        //         area: ad.area,
        //         numbedrooms: ad.numbedrooms,
        //         numfloors: ad.numfloors,
        //         direction: ad.direction,
        //         contactInfo: ad.contactInfo,
        //         address: ad.address,
        //         postDate: ad.postDate,
        //         expiredDate: ad.expiredDate,
        //         idUser: ad.idUser,
        //         idProject: ad.idProject
        //     }]
        // }))
    }
    onDelete = (id)=>{
        this.props.deleteAD(id);
    }
    render() {
        var { ads } = this.props.ad;
        var listAds = ads.map((ad, index) => {
            return <div key={index}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img src={ad.imageUrl === '' ? "https://via.placeholder.com/350x350" : ad.imageUrl} />
                        <div className="caption">
                            <h3>{ad.title}</h3>
                            <p>Area: {ad.area}</p>
                            <p>Number of bedrooms: {ad.numbedrooms}</p>
                            <p>Number of floors: {ad.numfloors}</p>
                            <p>Price: {ad.price} $</p>
                            <p>
                                <a className="btn btn-primary">Detail</a>
                                <a 
                                onClick={this.onDelete.bind(this, ad.id)}
                                className="btn btn-danger">Delete</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        })
        return (
            <div className="container-fluid">
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a
                            className="btn btn-primary"
                            data-toggle="modal" data-target="#addAdvertisement"
                        ><span className="glyphicon glyphicon-plus"></span> New Advertisement</a>
                    </div>
                    <AddAdvertisement addNewAd={(data) => this.addNewAd(data)} />
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
                    {listAds}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ad: state.ads
    }
}

export default connect(mapStateToProps,{getADs, deleteAD, addAD})(ManageProduct);