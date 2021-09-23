import React from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import { startTimerAction } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const MainPage = ({ startTimerAction, timeState }) => {
  const startTimer = () => {
    startTimerAction();
  };
  return (
    <MainDiv>
      <TopBar></TopBar>
      <p>{timeState.curTask}</p>
      <label>안녕</label>
      <button onClick={startTimer}>타이머 시작</button>
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  startTimerAction,
})(MainPage);
