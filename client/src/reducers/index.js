import {combineReducers} from 'redux'
import advertisementReducer from './advertisementReducer'

export default combineReducers({
    ads: advertisementReducer
})