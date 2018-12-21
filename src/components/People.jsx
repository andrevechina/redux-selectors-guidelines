import React from 'react';
import { connect } from 'react-redux';
import { upperFirst } from 'lodash';
import { makeGetGenderResults } from '../reducers/results/resultsSelectors';
import { getColor } from '../reducers/ui/uiSelectors';
import Person from './Person';

const People = props => {
    console.log('People - render -', props.type);
    return (
        <div>
            <h1>{upperFirst(props.type)}</h1>
            <ul style={{ color: props.color }}>
                {props.results.map(({ id, name, gender }) => (
                    <Person key={id} name={name} gender={gender} />
                ))}
            </ul>
        </div>
    );
};

const makeMapStateToProps = () => {
    const getGenderResults = makeGetGenderResults();

    return (state, ownProps) => {
        console.log('People - mapStateToProps');

        return {
            results: getGenderResults(state, { gender: ownProps.type }),
            color: getColor(state)
        };
    };
};

export default connect(makeMapStateToProps)(People);
