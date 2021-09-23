import {
    SET_TASK,
    START_TIMER,
    INCREMENT_TIMER
} from '../actions/actionTypes';

const initialState = {
    curTask: null,
    curTimerState: 'stopped', // running, paused, stopped
    elapsedTime: 0 // 초 단위
};

let setIntervalId = null;

export default function timeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_TASK:
            return {
                ...state,
                curTask: payload
            };
        case START_TIMER:
            setIntervalId = payload;
            return {
                ...state,
                curTimerState: 'running'
            };
        case INCREMENT_TIMER:
            return {
                ...state,
                elapsedTime: state.elapsedTime + 1
            };
        default:
            return state;
    }
}