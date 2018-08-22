import axios from 'axios'
import { GET_ADS, DELETE_AD, ADD_AD, ADS_LOADING } from './types'

export const getADs = () => dispacth => {
    dispacth(setAdsLoading());
    axios
    .get('/api/advertisements')
    .then(res => dispacth({
        type: GET_ADS,
        payload: res.data
    }))
}
export const deleteAD = id => dispacth => {
    axios.delete(`/api/advertisements/${id}`)
    .then(res => dispacth({
        type: DELETE_AD,
        payload: id
    }))
   
}
export const addAD = ad => dispacth => {
    axios
    .post('/api/advertisements', ad)
    .then(res => dispacth({
        type: ADD_AD,
        payload: res.data
    }))
}
export const setAdsLoading = () => {
    return{
        type: ADS_LOADING
    }
}