import {combineReducers} from 'redux'
import advertisementReducer from './advertisementReducer'
import getADReducer from './getADReducer'

export default combineReducers({
    ads: advertisementReducer,
    ad: getADReducer
})