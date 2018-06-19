import * as types from '../actions/types';
import { myData } from '../../JSON/products';
import initialState from './initialState';

export function dataReducer(state=initialState,action) {

    switch(action.type) {
        case types.FETCH_JSON_DATA:
            return [...state,
                    Object.assign({},myData)];
        default:
            return state;
    }
}

export function selectedItems(state=initialState,action) {
    switch(action.type) {
        case types.ON_ITEM_SELECT:
            return [...state,
                    Object.assign({},action.payload)];
        default:
            return state;
    }
}