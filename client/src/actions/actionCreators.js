import {
  SET_TASK,
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
  const taskData = await fetch();
  dispatch({ type: INITIALIZE_TASKS, payload: {} });
};

export const addANewTaskAction = (newTaskName) => async (dispatch) => {
  await fetch();
  dispatch({ type: ADD_A_NEW_TASK });
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
