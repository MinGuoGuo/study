import { SUB, ADD } from '../actions/AppActions.js';

const number = (state = 0, action) => {
    switch (action.type) {
        case SUB:
            return state - 1;
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

export default number;