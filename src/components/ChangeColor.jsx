import React from 'react';
import { connect } from 'react-redux';
import { getColor } from '../selectors/ui/uiSelectors';
import { changeColor } from '../actions/uiActions';

const colors = ['red', 'black', 'blue', 'purple', 'green', 'tomato', 'peru'];

const ChangeColor = ({ currentColor, changeColor }) => {
    console.log('ChangeColor - render');

    return (
        <div>
            <strong>Current color:</strong> <span style={{ color: currentColor }}>{currentColor}</span> <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

const mapStateToProps = state => {
    console.log('ChangeColor - mapStateToProps');

    return {
        currentColor: getColor(state)
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        changeColor: () => {
            const random = Math.floor(Math.random() * colors.length);
            dispatch(changeColor(colors[random]));
        }
    })
)(ChangeColor);
