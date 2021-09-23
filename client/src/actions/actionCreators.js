import {
    SET_TASK,
    START_TIMER,
    PAUSE_TIMER,
    STOP_TIMER,
    INCREMENT_TIMER,
} from './actionTypes';

export const setTaskAction = (newTask) => (dispatch) => {
    dispatch({ type: SET_TASK, payload: newTask });
}

export const startTimerAction = () => (dispatch) => {
    const intervalId = setInterval(() => {
        dispatch({ type: INCREMENT_TIMER });
    }, 1000);

    dispatch({ type: START_TIMER, payload: intervalId });
}

export const pauseTimerAction = () => (dispatch) => {
    dispatch({ type: PAUSE_TIMER });
}

export const stopTimerAction = () => (dispatch) => {
    dispatch({ type: STOP_TIMER });
}