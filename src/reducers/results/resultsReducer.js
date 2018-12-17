import { SET_RESULTS } from '../../actions/actions';
const defaultState = [];

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case SET_RESULTS:
            return action.results;

        default:
            return state;
    }
};
