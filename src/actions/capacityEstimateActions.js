import * as types from './actionTypes';

export function initialzeCapacityEstimate() {
    return {
        type: types.CAPACITY_CALCULATED,
		data: {}
    };
}
