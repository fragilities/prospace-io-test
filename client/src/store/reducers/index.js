import { combineReducers } from 'redux';
import CompanyReducer from './CompanyReducers.js';
import OfficeReducer from './OfficeReducers.js';
import ConfigReducer from './ConfigReducers.js';

export default combineReducers({
    CompanyReducer,
    OfficeReducer,
    ConfigReducer
});
