import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import MiddleBar from '@organisms/MiddleBar';
import { testAction } from '../actions/actionCreators';
import {
  setTaskAction,
  startTimerAction,
  pauseTimerAction,
  stopTimerAction
} from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({
  setTaskAction,
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
  timeState }) => {
  const [taskName, setTaskName] = useState('');

  const startTimer = () => {
    startTimerAction();
  };

  const pauseTimer = () => {
    pauseTimerAction();
  };

  const stopTimer = () => {
    stopTimerAction();
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  }

  const setTask = () => {
    setTaskAction(taskName);
  }

  return (
    <MainDiv>
      <TopBar />
      <MiddleBar />
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button onClick={setTask}>현재 작업이름 설정</button>

      <button onClick={startTimer}>타이머 시작</button>
      <button onClick={pauseTimer}>타이머 일시정지</button>
      <button onClick={stopTimer}>타이머 종료</button>
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  setTaskAction,
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
})(MainPage);
