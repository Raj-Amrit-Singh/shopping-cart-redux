import * as types from './types';
import { createAction } from 'redux-actions';

export const getItemsList =createAction(types.FETCH_JSON_DATA);
export const onItemSelect = createAction(types.ON_ITEM_SELECT);