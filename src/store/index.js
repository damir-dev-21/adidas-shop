import {createStore,combineReducers} from 'redux'
import { shopReducer } from './reducers/shop'

const reducers = combineReducers({
    shop:shopReducer
})

export default createStore(reducers)