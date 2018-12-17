import { CHANGE_COLOR } from '../../actions/actions';

const defaultState = {
    color: 'red'
};

const changeColor = (state, action) => ({ ...state, color: action.color });

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return changeColor(state, action);

        default:
            return state;
    }
};
