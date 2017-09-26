import * as actionTypes from '../actions/actionTypes';
import initialStates from './initialStates';

export default function capacityEstimate(state = initialStates.capacityEstimate, action) {
    switch(action.type) {
        case actionTypes.LOAD_CAPACITY_ESTIMATE:
            return initialStates.capacityEstimate;
        default:
            return state;
    }
}