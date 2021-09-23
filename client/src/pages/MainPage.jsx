import React from 'react';
import styled from 'styled-components';
import MiddleBar from '@organisms/MiddleBar';
import { setTaskAction } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainPage = ({ openAddTaskModal }) => {
  return (
    <MainDiv>
      <MiddleBar openAddTaskModal={openAddTaskModal} />
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  setTaskAction,
})(MainPage);
