import React from 'react';

const Person = props => {
    const { name, gender } = props;
    return (
        <div className="person">
            <div>
                <strong>Name:</strong> {name}
            </div>
            <div>
                <strong>Gender:</strong> {gender}
            </div>
        </div>
    );
};

export default Person;
