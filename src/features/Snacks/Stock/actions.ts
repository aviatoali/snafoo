import { Action } from 'redux';
import * as Actions from './actionTypes';

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
