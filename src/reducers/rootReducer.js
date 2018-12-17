import { combineReducers } from 'redux';
import uiReducer from './ui/uiReducer'
import resultsReducer from './results/resultsReducer'

export default combineReducers({
    ui: uiReducer,
    results: resultsReducer
});
