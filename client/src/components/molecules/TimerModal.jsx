import React, { useEffect } from 'react';
import PlayIcon from '../atoms/PlayIcon';
import PauseIcon from '../atoms/PauseIcon';
import StopIcon from '../atoms/StopIcon';
import styled from 'styled-components';
import {
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
  saveTaskTimeAction
} from '../../actions/actionCreators';
import { connect } from 'react-redux';

const TimerModalDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
`;

const TimerBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button + button {
    margin-left: 30px;
  }
`;

const TimerBtns = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TimerModalBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    color: #e5e5e5;
    cursor: not-allowed;
  }
`;

const TimerModal = ({
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
  saveTaskTimeAction,
  timeState
}) => {
  const startTimer = () => {
    startTimerAction();
  };

  const pauseTimer = () => {
    pauseTimerAction();
  };

  const stopTimer = () => {
    stopTimerAction();
    saveTaskTimeAction({
      time: timeState.elapsedTime,
      task: timeState.curTask
    });
  };

  return (
    <TimerModalDiv>
      <TimerBtnContainer>
        <TimerBtns>
          <TimerModalBtn
            onClick={startTimer}
            disabled={!timeState.curTask || timeState.curTimerState === 'running'}
          >
            <PlayIcon />
          </TimerModalBtn>
          <TimerModalBtn onClick={pauseTimer} disabled={timeState.curTimerState !== 'running'}>
            <PauseIcon />
          </TimerModalBtn>
          <TimerModalBtn onClick={stopTimer} disabled={timeState.curTimerState === 'stopped'}>
            <StopIcon />
          </TimerModalBtn>
        </TimerBtns>
        {!timeState.curTask && <small>작업을 선택해 주세요.</small>}
      </TimerBtnContainer>
    </TimerModalDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  startTimerAction,
  pauseTimerAction,
  stopTimerAction,
  saveTaskTimeAction
})(TimerModal);
