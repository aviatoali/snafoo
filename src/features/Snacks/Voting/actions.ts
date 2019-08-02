import { Action } from 'redux';
import * as Actions from './actionTypes';

export interface GetVotesAction extends Action {};

export const getVotes = (): GetVotesAction => ({
    type: Actions.GET_VOTES
});

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
