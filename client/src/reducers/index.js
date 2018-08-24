import {combineReducers} from 'redux'
import advertisementReducer from './advertisementReducer'
import projectReducer from './projectReducer'
import getADReducer from './getADReducer'

export default combineReducers({
    ads: advertisementReducer,
    ad: getADReducer,
    pros: projectReducer
})