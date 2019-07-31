import { Action } from 'redux';
import * as Actions from './actionTypes';

// TODO: Move this to an inner directory like List if one is created and its needed
// so that it's at the level where it has the closest relation to the component

// TODO: Fill out all of these, and create type models for response data to assign to action
// data for each:

// get votes (from local storage)
export interface GetVotesAction extends Action {};

// TODO: Does get votes need a failure case and success case? Prolly, right? In case extraction from
// local storage fails or something.
export interface GetVotesSuccessAction extends Action {
    data: any;
};

export interface GetVotesFailureAction extends Action {
    error: any;
};

export const getVotes = (): GetVotesAction => ({
    type: Actions.GET_VOTES
});
// TODO: Fix all instances of 'any'
export const getVotesSuccess = (data: any): GetVotesSuccessAction => ({
    type: Actions.GET_VOTES_SUCCESS,
    data
});

export const getVotesFailure = (error: any): GetVotesFailureAction => ({
    type: Actions.GET_VOTES_FAILURE,
    error
});

// post vote

export interface PostVoteAction extends Action {
    id: string;
};

export interface PostVoteSuccessAction extends Action {
    data: Snack;
};

export interface PostVoteFailureAction extends Action {
    error: any;
};

export const postVote = (id: string): PostVoteAction => ({
    type: Actions.POST_VOTE,
    id
});

export const postVoteSuccess = (data: Snack): PostVoteSuccessAction => ({
    type: Actions.POST_VOTE_SUCCESS,
    data
});

export const postVoteFailure = (error: any): PostVoteFailureAction => ({
    type: Actions.POST_VOTE_FAILURE,
    error
});
