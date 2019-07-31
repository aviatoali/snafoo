import { Action } from 'redux';
import * as Actions from './actionTypes';

// TODO: Move this to an inner directory like List if one is created and its needed
// so that it's at the level where it has the closest relation to the component

// TODO: Fill out all of these, and create type models for response data to assign to action
// data for each:

// get snacks
export interface GetSnacksAction extends Action {};

export interface GetSnacksSuccessAction extends Action {
    data: Snack[]
};

export interface GetSnacksFailureAction extends Action {
    error: any;
};

export const getSnacks = (): GetSnacksAction => ({
    type: Actions.GET_SNACKS
});

export const getSnacksSuccess = (data: Snack[]): GetSnacksSuccessAction => ({
    type: Actions.GET_SNACKS_SUCCESS,
    data
});

export const getSnacksFailure = (error: any): GetSnacksFailureAction => ({
    type: Actions.GET_SNACKS_FAILURE,
    error
});
