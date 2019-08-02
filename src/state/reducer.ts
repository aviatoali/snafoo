import { combineReducers } from 'redux';
import { RootState } from "./types";
import snacksReducer from '../features/Snacks/reducer';

const rootReducer = combineReducers<RootState>({
    snacks: snacksReducer
});

export default rootReducer;