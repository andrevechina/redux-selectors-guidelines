import { get } from 'lodash';
import { getUi } from '../rootSelectors';

export const getColor = state => {
    console.log('Access State - uiSelectors - getColor');
    return get(getUi(state), 'color');
};
