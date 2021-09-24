import {
    SET_TASK,
    SAVE_TASK_TIME,
    START_TIMER,
    PAUSE_TIMER,
    STOP_TIMER,
    INCREMENT_TIMER,
    INITIALIZE_TASKS,
    ADD_A_NEW_TASK,
    LOGOUT
} from '../actions/actionTypes';

const initialState = {
    curTask: null,
    curTimerState: 'stopped', // running, paused, stopped
    elapsedTime: 0, // 초 단위
    setIntervalId: null,
    tasks: []
};

export default function timeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_TASK:
            return {
                ...state,
                curTask: payload
            };
        case SAVE_TASK_TIME: {
            return {
                ...state
            };
        }
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
                curTask: null,
                setIntervalId: null,
                elapsedTime: 0,
                curTimerState: 'stopped'
            }
        case INITIALIZE_TASKS:
            return {
                ...state,
                tasks: payload
            };
        case ADD_A_NEW_TASK:
            return {
                ...state,
                tasks: payload
            };
        case LOGOUT:
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}