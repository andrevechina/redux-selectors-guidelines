import { get } from 'lodash';

export const getResults = state => {
    console.log('Access State - rootSelectors - getResults');
    return get(state, 'results');
};

export const getUi = state => {
    console.log('Access State - rootSelectors - getUi');
    return get(state, 'ui');
};
