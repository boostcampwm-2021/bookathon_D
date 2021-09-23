import {
    SET_TASK
} from '../actions/actionTypes';

const initialState = {
    curTask: null,
    curTimerState: 'stopped', // running, paused, stopped
    elapsedTime: 0 // 초 단위
};

const setIntervalId = null;

export default function timeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_TASK:
            return {
                ...state,
                curTask: payload
            };
        default:
            return state;
    }
}