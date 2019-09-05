import { uniq } from 'lodash';
import { createSelector } from 'redux-starter-kit';
import { getResults } from '../rootSelectors';

export const getAllGenders = createSelector(
    [getResults],
    results => {
        console.log('Computing Derived Data without Props - resultsSelectors - getAllGenders');
        return uniq(results.map(result => result.gender));
    }
);

export const makeGetGenderResults = () =>
    createSelector(
        [getResults, { argIndex: 1, path: 'gender' }],
        (results, gender) => {
            console.log(`Computing Derived Data with Props - resultsSelectors - makeGetGenderResults - prop: ${gender}`);
            return results.filter(result => result.gender === gender);
        }
    );
