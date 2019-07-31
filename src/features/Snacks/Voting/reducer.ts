import { Reducer } from 'redux';
import { GET_VOTES_SUCCESS, GET_VOTES_FAILURE, POST_VOTE_SUCCESS, POST_VOTE_FAILURE } from './actionTypes'
import { GetVotesSuccessAction, GetVotesFailureAction, PostVoteSuccessAction, PostVoteFailureAction } from './actions';

// TODO: I have no idea how this state is gonna look yet, I gotta fix this later
export interface VotesState {
    list: string[]
};

const initialState = {
    list: []
};
// TODO: Go back through here and all reducers and eliminate extraneous states and imports and cases and shit.

const votesReducer: Reducer<VotesState> = (state: VotesState = initialState, action) => {
    switch (action.type) {
        case GET_VOTES_SUCCESS: 
            const actionGetVotesSuccess = action as GetVotesSuccessAction;
            const list = actionGetVotesSuccess.data;
            return { ...state, list };
        case GET_VOTES_FAILURE:
            // TODO: Add some error handling here, show that error pop-up
            const actionGetVotesFailure = action as GetVotesFailureAction;
            const getVotesError = actionGetVotesFailure.error;
            return state;
        case POST_VOTE_SUCCESS:
            const actionPostVotesSuccess = action as PostVoteSuccessAction;
            const updatedSnack: Snack = actionPostVotesSuccess.data;
            return state;
        case POST_VOTE_FAILURE:
            const actionPostVotesFailure = action as PostVoteFailureAction;
            const postVoteError = actionPostVotesFailure.error;
            return state;
        default: 
            return state;
    }
};

export default votesReducer;
