import {combineReducers} from 'redux';
import capacityEstimate from './capacityEstimateReducer';

const rootReducer = combineReducers({
    capacityEstimate
});

export default rootReducer;