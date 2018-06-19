import { combineReducers } from 'redux';
import { dataReducer, selectedItems } from './dataReducer';

const rootReducer = combineReducers({
dataReducer,
selectedItems
});

export default rootReducer;