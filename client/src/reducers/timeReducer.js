import {
    SET_TASK,
    START_TIMER,
    PAUSE_TIMER,
    STOP_TIMER,
    INCREMENT_TIMER
} from '../actions/actionTypes';

const initialState = {
    curTask: null,
    curTimerState: 'stopped', // running, paused, stopped
    elapsedTime: 0, // 초 단위
    setIntervalId: null
};

export default function timeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_TASK:
            return {
                ...state,
                curTask: payload
            };
        case START_TIMER:
            return {
                ...state,
                setIntervalId: payload,
                curTimerState: 'running'
            };
        case INCREMENT_TIMER:
            return {
                ...state,
                elapsedTime: state.elapsedTime + 1
            };
        case PAUSE_TIMER:
            window.clearInterval(state.setIntervalId);
            return {
                ...state,
                setIntervalId: null,
                curTimerState: 'paused'
            }
        case STOP_TIMER:
            window.clearInterval(state.setIntervalId);
            return {
                ...state,
                setIntervalId: null,
                elapsedTime: 0,
                curTimerState: 'stopped'
            }
        default:
            return state;
    }
}