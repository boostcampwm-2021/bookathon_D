import {
  SET_TASK,
  SAVE_TASK_TIME,
  START_TIMER,
  PAUSE_TIMER,
  STOP_TIMER,
  INCREMENT_TIMER,
  INITIALIZE_TASKS,
  ADD_A_NEW_TASK,
  SIGN_UP,
  LOGIN_STATE,
  LOGIN,
  LOGOUT
} from './actionTypes';
import axios from 'axios';

export const setTaskAction = (newTask) => (dispatch) => {
  dispatch({ type: SET_TASK, payload: newTask });
};

export const saveTaskTimeAction = (timeInSec) => async (dispatch) => {
  const reqBody = JSON.stringify(timeInSec);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    widthCredentials: true
  };
  try {
    await axios.post('/timers', reqBody, config);
    dispatch({ type: SAVE_TASK_TIME })
  } catch (error) {

  }
}

export const startTimerAction = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch({ type: INCREMENT_TIMER });
  }, 1000);

  dispatch({ type: START_TIMER, payload: intervalId });
};

export const pauseTimerAction = () => (dispatch) => {
  dispatch({ type: PAUSE_TIMER });
};

export const stopTimerAction = () => (dispatch) => {
  dispatch({ type: STOP_TIMER });
};

export const initializeTasksAction = () => async (dispatch) => {
  const config = { widthCredentials: true };
  try {
    const res = await axios.get('/tasks', config);
    dispatch({ type: INITIALIZE_TASKS, payload: res.data.tasklist });
    return 0;
  } catch (error) {
    return -1;
  }
};

export const addANewTaskAction = (newTask) => async (dispatch) => {
  const reqBody = JSON.stringify(newTask);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    widthCredentials: true
  };

  try {
    const res = await axios.post('/tasks', reqBody, config);

    dispatch({ type: ADD_A_NEW_TASK, payload: res.data.tasklist });
    return 0;
  } catch (error) {
    return -1;
  }
};

export const setLoginState = () => (dispatch) => {
  dispatch({ type: LOGIN_STATE });
};

export const signUpAction = (signUpData) => async (dispatch) => {
  const reqBody = JSON.stringify(signUpData);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    await axios.post('/users/register', reqBody, config);

    dispatch({ type: SIGN_UP });
    return 0;
  } catch (error) {
    return -1;
  }
}

export const loginAction = (loginData) => async (dispatch) => {
  const reqBody = JSON.stringify(loginData);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    await axios.post('/users/login', reqBody, config);
    dispatch({ type: LOGIN });
    dispatch(initializeTasksAction());
    return 0;
  } catch (error) {
    return -1;
  }
}

export const logoutAction = () => async (dispatch) => {
  const config = {
    widthCredentials: true
  };
  try {
    await axios.post('/users/logout', config);

    dispatch({ type: LOGOUT });
  } catch (error) {

  }
}
