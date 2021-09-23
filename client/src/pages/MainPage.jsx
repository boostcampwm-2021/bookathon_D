import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '@organisms/TopBar';
import ScheduleTitleModal from '@molecules/ScheduleTitleModal';
import MiddleBar from '@organisms/MiddleBar';
import { testAction } from '../actions/actionCreators';
import { setTaskAction } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({ setTaskAction, timeState }) => {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const setTask = () => {
    setTaskAction(taskName);
  };

  return (
    <MainDiv>
      <TopBar />
      <MiddleBar />
      <ScheduleTitleModal />
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  setTaskAction,
})(MainPage);
