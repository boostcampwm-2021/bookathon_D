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
`;

const MainPage = ({
  openAddTaskModal,
  openSelectTaskModal
}) => {
  return (
    <MainDiv>
      <MiddleBar
        openAddTaskModal={openAddTaskModal}
        openSelectTaskModal={openSelectTaskModal}
      />
    </MainDiv>
  );
};

const mapStateToProps = (state) => ({
  timeState: state.timeState,
});

export default connect(mapStateToProps, {
  setTaskAction,
})(MainPage);
