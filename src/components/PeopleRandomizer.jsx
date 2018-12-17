import React from 'react';
import { connect } from 'react-redux';
import { setResults } from '../actions/resultsActions';

const EVERYONE = [
    { id: 1, name: 'André', gender: 'male' },
    { id: 2, name: 'Vânia', gender: 'female' },
    { id: 3, name: 'Jonas', gender: 'male' },
    { id: 4, name: 'Svillar', gender: 'male' },
    { id: 5, name: 'Bia', gender: 'female' },
    { id: 6, name: 'Vanessa', gender: 'fluid' },
    { id: 7, name: 'Pinho', gender: 'male' },
    { id: 8, name: 'Mariana', gender: 'female' },
    { id: 9, name: 'Mateus', gender: 'male' },
    { id: 10, name: 'Dª Fernanda', gender: 'female' },
    { id: 11, name: 'Vitó', gender: 'fluid' }
];

class PeopleRandomizer extends React.Component {
    static getRandomPeople = () =>
        EVERYONE.sort(() => 0.5 - Math.random()).slice(0, 1 + Math.floor(Math.random() * EVERYONE.length));

    componentDidMount() {
        this.props.changePeople(PeopleRandomizer.getRandomPeople());
    }

    onClick = () => {
        this.props.changePeople(PeopleRandomizer.getRandomPeople());
    };

    render() {
        return (
            <div>
                <strong>PeopleRandomizer:</strong> <button onClick={this.onClick}>Generate random people</button>
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        changePeople(people) {
            dispatch(setResults(people));
        }
    })
)(PeopleRandomizer);
