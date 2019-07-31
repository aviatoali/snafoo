import { combineReducers } from 'redux';
import stockListReducer, { StockListState } from './Stock/reducer';
import votesReducer, { VotesState } from './Voting/reducer';

export interface SnacksState {
    stock: StockListState,
    votes: VotesState
}

const snacksReducer = combineReducers<SnacksState>({
    stock: stockListReducer,
    votes: votesReducer
});

export default snacksReducer;