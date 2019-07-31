import { call, put, takeLatest } from 'redux-saga/effects';
import network from '../../common/network';
import { getSnacksDefinition, postVoteDefinition } from './api';
import { GetSnacksAction, getSnacksSuccess, getSnacksFailure } from './Stock/actions';
import { PostVoteAction, postVoteSuccess, postVoteFailure } from './Voting/actions';
import { GET_SNACKS } from './Stock/actionTypes';
import { POST_VOTE } from './Voting/actionTypes';

function* getSnacks(action: GetSnacksAction) {
    try {
        const response: Snack[] = yield call(network, getSnacksDefinition(action));
        yield put(getSnacksSuccess(response));
    } catch (error) {
        yield put(getSnacksFailure(error));
    }
}

function* postVote(action: PostVoteAction) {
    try {
        const response: Snack = yield call(network, postVoteDefinition(action));
        yield put(postVoteSuccess(response));
    } catch (error) {
        yield put(postVoteFailure(error));
    }
}

export default function* rootSnacksSaga() {
    yield takeLatest(GET_SNACKS, getSnacks);
    yield takeLatest(POST_VOTE, postVote);
}