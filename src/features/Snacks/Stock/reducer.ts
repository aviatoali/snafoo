import { Reducer } from 'redux';
import { GET_SNACKS_SUCCESS, GET_SNACKS_FAILURE } from './actionTypes'
import { GetSnacksSuccessAction, GetSnacksFailureAction } from './actions';

export interface StockListState {
    list: Snack[];
};

const initialState = {
    list: []
};

const stockListReducer: Reducer<StockListState> = (state: StockListState = initialState, action) => {
    switch (action.type) {
        case GET_SNACKS_SUCCESS: 
            const actionGetSnacksSuccess = action as GetSnacksSuccessAction;
            const list = actionGetSnacksSuccess.data;
            return { ...state, list };
        case GET_SNACKS_FAILURE:
            // TODO: Add some error handling here, show that error pop-up
            const actionGetSnacksFailure = action as GetSnacksFailureAction;
            const error = actionGetSnacksFailure.error;
            return state;
        default: 
            return state;
    }
};

export default stockListReducer;
