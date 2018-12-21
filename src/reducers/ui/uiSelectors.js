import { get } from 'lodash';
import { getUi } from '../rootSelectors';

export const getColor = state => {
    console.log('Access State - uiSelectors - getColor');
    return get(getUi(state), 'color');
};

export const getBackgroundColor = state => {
    console.log('Access State - uiSelectors - getBackgroundColor');
    // We should definitely define a default value for property backgroundColor on the reducer
    return get(getUi(state), 'backgroundColor');
}
