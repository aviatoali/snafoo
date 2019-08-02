import { Reducer } from 'redux';
import { POST_VOTE_SUCCESS, POST_VOTE_FAILURE, GET_VOTES } from './actionTypes'
import { PostVoteSuccessAction, PostVoteFailureAction } from './actions';
import { GET_SNACKS_SUCCESS } from '../Stock/actionTypes';
import { GetSnacksSuccessAction } from '../Stock/actions';
import { LOCAL_STORAGE_KEY } from '../../../common/constants';

export interface VotesState {
    shouldUpdate: boolean;
    availableItems: Snack[];
    votes: SnackVote[]
};

const initialState = {
    shouldUpdate: false,
    availableItems: [],
    votes: []
};
// TODO: Go back through here and all reducers and eliminate extraneous states and imports and cases and shit.

const votesReducer: Reducer<VotesState> = (state: VotesState = initialState, action) => {
    switch (action.type) {
        case GET_VOTES:
            const votes: SnackVote[] = getVotesFromLocalStorage();
            return { ...state, votes};
        case POST_VOTE_SUCCESS:
            const actionPostVotesSuccess = action as PostVoteSuccessAction;
            const updatedSnack: Snack = actionPostVotesSuccess.data;
            const itemsList = state.availableItems;
            if (itemsList.length > 0) {
                const snackIndex = itemsList.findIndex((sn: Snack) => sn.id === updatedSnack.id);
                if (snackIndex !== -1) {
                    itemsList[snackIndex] = updatedSnack;
                }
            }
            const updatedVotes = updateLocalStorage(updatedSnack.id);
            return { ...state, availableItems: itemsList, votes: updatedVotes };
        case POST_VOTE_FAILURE:
            const actionPostVotesFailure = action as PostVoteFailureAction;
            const postVoteError = actionPostVotesFailure.error;
            return state;
        case GET_SNACKS_SUCCESS:
            const actionGetSnacksSuccess = action as GetSnacksSuccessAction;
            const unsortedList = actionGetSnacksSuccess.data;
            const availableItems = unsortedList.sort((a, b) => { 
                return a.brand.localeCompare(b.brand);
            });
            return { ...state, availableItems };
        default: 
            return state;
    }
};

const updateLocalStorage = (snackId: string): SnackVote[] => {
    const snackVotesRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (snackVotesRaw != null) {
        const snackVotes: SnackVote[] = JSON.parse(snackVotesRaw);
        if (snackVotes.length > 0) {
            const snackIndex = snackVotes.findIndex((sn: SnackVote) => sn.id === snackId);
            if (snackIndex !== -1) {
                return snackVotes;
            }
            snackVotes.push({ id: snackId, timestamp: new Date().getTime() });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snackVotes));
        }
        return snackVotes;
    } else {
        const newSnackVote: SnackVote = { id: snackId, timestamp: new Date().getTime() };
        const snackVotes: SnackVote[] = [newSnackVote];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snackVotes));
        return snackVotes;
    }
};

const getVotesFromLocalStorage = (): SnackVote[] => {
    const snackVotesRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (snackVotesRaw == null) {
        return [];
    }
    const snackVotesParsed: SnackVote[] = JSON.parse(snackVotesRaw);
    let now = new Date();
    const snackVotes: SnackVote[] = [];
    for (let i  = 0; i < snackVotesParsed.length; i++) {
        const voteDate = new Date(snackVotesParsed[i].timestamp);
        if (voteDate.getMonth === now.getMonth) {
            snackVotes.push(snackVotesParsed[i]);
        }
    }
    if (snackVotes.length !== snackVotesParsed.length) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snackVotes));
    }
    return snackVotes;
};

export default votesReducer;
