import React from 'react';
import { getAllGenders } from '../selectors/results/resultsSelectors';
import '../styles/app.css';
import ChangeColor from './ChangeColor';
import People from './People';
import PeopleRandomizer from './PeopleRandomizer';
import { connect } from 'react-redux';

const App = ({ genders }) => {
    console.log('App - render');

    return (
        <React.Fragment>
            <PeopleRandomizer />
            <ChangeColor />
            {genders.map(gender => (
                <People key={gender} type={gender} />
            ))}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    console.log('App - mapStateToProps');

    return {
        genders: getAllGenders(state)
    };
};

export default connect(mapStateToProps)(App);
