import { createSelector } from 'reselect';
import { getResults } from '../rootSelectors';

export const getAllGenders = createSelector(
    [getResults],
    results => {
        console.log('Computing Derived Data without Props - resultsSelectors - getAllGenders');
        return Array.from(new Set(results.map(result => result.gender)));
    }
);

export const makeGetGenderResults = () =>
    createSelector(
        [getResults, (_, { gender }) => gender],
        (results, gender) => {
            console.log('Computing Derived Data with Props - resultsSelectors - makeGetGenderResults');
            return results.filter(result => result.gender === gender);
        }
    );
