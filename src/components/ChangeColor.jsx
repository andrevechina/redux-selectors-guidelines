import React from 'react';
import { connect } from 'react-redux';
import { getColor, getBackgroundColor } from '../reducers/ui/uiSelectors';
import { changeColor } from '../actions/uiActions';

const colors = ['red', 'black', 'blue', 'purple', 'green', 'tomato', 'peru'];

const ChangeColor = ({ color, backgroundColor, changeColor }) => {
    console.log('ChangeColor - render');

    return (
        <div>
            <strong>Current color:</strong> <span style={{ color, backgroundColor }}>{color}</span>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

// This default prop is redundant with Selector default value
ChangeColor.defaultProps = {
    backgroundColor: 'aquamarine'
};

const mapStateToProps = state => {
    console.log('ChangeColor - mapStateToProps');

    return {
        color: getColor(state),
        backgroundColor: getBackgroundColor(state)
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
