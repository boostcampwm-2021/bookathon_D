import React from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import {
  startTimerAction,
  pauseTimerAction,
  stopTimerAction
} from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const MainPage = ({
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
  timeState }) => {
  const startTimer = () => {
    startTimerAction();
  };

  const pauseTimer = () => {
    pauseTimerAction();
  }

  const stopTimer = () => {
    stopTimerAction();
  }

  return (
    <MainDiv>
      <TopBar></TopBar>
      <p>타이머: {timeState.elapsedTime}</p>
      <label>안녕</label>
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
  startTimerAction,
  pauseTimerAction,
  stopTimerAction
})(MainPage);
