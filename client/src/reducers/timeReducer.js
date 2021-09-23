import {
    TEST_ACTION
} from '../actions/actionTypes';

const initialState = {
    curTask: ''
};

export default function timeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TEST_ACTION:
            return {
                ...state,
                curTask: payload
            };
        default:
            return state;
    }
}