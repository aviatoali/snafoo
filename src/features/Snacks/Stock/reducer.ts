import { Reducer } from 'redux';
import { GET_SNACKS_SUCCESS, GET_SNACKS_FAILURE } from './actionTypes'
import { GetSnacksSuccessAction, GetSnacksFailureAction } from './actions';
import { POST_VOTE_SUCCESS } from '../Voting/actionTypes';
import { PostVoteSuccessAction } from '../Voting/actions';

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
            const unsortedList = actionGetSnacksSuccess.data;
            const list = unsortedList.sort((a, b) => { return b.votes - a.votes });
            return { ...state, list };
        case GET_SNACKS_FAILURE:
            // TODO: Add some error handling here, show that error pop-up
            const actionGetSnacksFailure = action as GetSnacksFailureAction;
            const error = actionGetSnacksFailure.error;
            return state;
        case POST_VOTE_SUCCESS:
            const actionPostVotesSuccess = action as PostVoteSuccessAction;
            const updatedSnack: Snack = actionPostVotesSuccess.data;
            const itemsList = state.list;
            if (itemsList.length > 0) {
                const snackIndex = itemsList.findIndex((sn: Snack) => sn.id === updatedSnack.id);
                if (snackIndex !== -1) {
                    itemsList[snackIndex] = updatedSnack;
                }
            }
            return { ...state, list: itemsList };
        default:
            return state;
    }
};

export default stockListReducer;
