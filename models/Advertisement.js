const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const AdvertisementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    numbedrooms: {
        type: Number,
        required: true
    },
    numfloors: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    expiredDate: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    idProject: {
        type: String,
        required: true
    }
})

module.exports = Advertisement = mongoose.model('advertisement', AdvertisementSchema)